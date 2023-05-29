---
title: 'Angular Authentication: Using Route Guards'
createdAt: 2023-04-26 10:21:33
description: Angular comes with a number of baked-in features which are tremendously helpful for handling authentication.
tags:
  - angular
  - frontend
  - authentication
  - angular route guards
---

Angular comes with a number of baked-in features which are tremendously helpful for handling authentication. I think my favorite is probably its [HttpInterceptor interface](https://ryanchenkie.com/angular-authentication-using-the-http-client-and-http-interceptors), but right next to it would be route guards. Let’s take a look at what Angular’s route guards are and how to use them to help with authentication in your Angular apps.

_Follow me on [Twitter](https://twitter.com/ryanchenkie) for more content like this_

## What are Route Guards?

Angular’s route guards are interfaces which can tell the router whether or not it should allow navigation to a requested route. They make this decision by looking for a true or false return value from a class which implements the given guard interface.

There are five different types of guards and each of them is called in a particular sequence. The router’s behavior is modified differently depending on which guard is used. The guards are:

- CanActivate

- CanActivateChild

- CanDeactivate

- CanLoad

- Resolve

We won’t get too much into the details of each guard here but you can see the [Angular docs](https://angular.io/guide/router#milestone-5-route-guards) for more.

![](https://cdn-images-1.medium.com/max/2000/1*iODnyf8CnkROyWTR819oQg.png)

> **\*Quick note: **I’ve just released a book called [\*\*Securing Angular Applications](https://ryanchenkie.com/securing-angular-applications/?utm_source=medium&utm_medium=banner&utm_campaign=angular-cli-heroku)**. It will teach you **everything \*_you need to know to properly add authentication and authorization to you Angular app. You’ll also learn how to mitigate common security threats. [Check it out](https://ryanchenkie.com/securing-angular-applications/?utm_source=medium&utm_medium=banner&utm_campaign=angular-cli-heroku) if you’re interested :)_

## Routing Decisions Based on Token Expiration

If you’re using [JSON Web Tokens](https://jwt.io/) (JWT) to secure your Angular app (and I recommend that you do), one way to make a decision about whether or not a route should be accessed is to check the token’s expiration time. It’s likely that you’re using the JWT to let your users access protected resources on your backend. If this is the case, the token won’t be useful if it is expired, so this is a good indication that the user should be considered “not authenticated”.

Create a method in your authentication service which checks whether or not the user is authenticated. Again, for the purposes of stateless authentication with JWT, that is simply a matter of whether the token is expired. The JwtHelperService class from **angular2-jwt** can be used for this.

```bash
npm install --save @auth0/angular-jwt
```

Use angular-jwt in your AuthService

```js
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}

  // ...
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}
```

> **\*Note: **This example assumes that you are storing the user’s JWT in local storage.\*

Create a new service which implements the route guard. You can call it whatever you like, but something like auth-guard.service is generally sufficient.

```js
// src/app/auth/auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
```

The service injects AuthService and Router and has a single method called canActivate. This method is necessary to properly implement the CanActivate interface.

The canActivate method returns a boolean indicating whether or not navigation to a route should be allowed. If the user isn’t authenticated, they are re-routed to some other place, in this case a route called /login.

Now the guard can be applied to any routes you wish to protect.

```js
// src/app/app.routes.ts

import { Routes, CanActivate } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
]
```

The /profile route has an extra config value now: canActivate. The AuthGuard that was created above is passed to an array for canActivate which means it will be run any time someone tries to access the /profile route. If the user is authenticated, they get to the route. If not, they are redirected to the /login route.

> **\*Note**: The canActivate guard still allows the component for a given route to be activated (but not navigated to). If we wanted to prevent activation altogether, we could use the canLoad guard.\*

## Checking for a User’s Role

The above example works well for scenarios that are fairly straight forward. If a user is authenticated, let them pass. There are many cases, however, where we’ll want to be a bit more fine-grained with our routing decisions.

For example, we may wish to only permit access to a route for users that have a certain role attached to their account. To handle these cases we can modify the guard to look for a certain role in the payload of the user’s JWT.

Install **jwt-decode** so we can read the JWT payload.

```bash
  npm install --save jwt-decode
```

Since there will be times that we want to use both the catch-all AuthGuard and a more fine-grained role-based guard, let’s create a new service so we can handle both cases.

Create a new guard service called RoleGuardService.

```js
// src/app/auth/role-guard.service.ts

import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('token');

    // decode the token to get its payload
    const tokenPayload = decode(token);

    if (
      !this.auth.isAuthenticated() ||
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
```

In this guard we’re using ActivatedRouteSnapshot to give us access to the data property for a given route. This data property is useful because we can pass an object with some custom properties to it from our route configuration. We can then pick up that custom data in the guard to help with making routing decisions.

In this case we’re looking for a role that we expect the user to have if they are to be allowed access to the route. Next we are decoding the token to grab its payload. If the user isn’t authenticated **or** if they don’t have the role we expect them to have in their token payload, we cancel navigation and have them log in. Otherwise, they are free to proceed.

We can now use this RoleGuardService for any of our routes. We might, for example, want to protect an /admin route.

```js
// src/app/app.routes.ts

import { Routes, CanActivate } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service'
import { RoleGuardService as RoleGuard } from './auth/role-guard.service'

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  { path: '**', redirectTo: '' }
]
```

For the /admin route, we’re still using canActivate to control navigation, but this time we’re passing an object on the data property which has that expectedRole key that we’ve already seen in the RoleGuardService.

> **\*Note: **This scenario assumes that you are using a custom role claim in your JWT.\*

## Isn’t this Easily Hackable?

If you’re like most developers, you’re probably looking at this and thinking that the user could very easily hack their way to a protected route. After all, any knowledgeable user could find their JWT in local storage, head over to [jwt.io](https://jwt.io/), plug the token in, and change its payload. For example, they could change the exp in an attempt to extend the token’s lifetime, or they could give themselves a different role.

This is all true–a user _could_ do this and then get past the guards. The key point to remember, however, is that any change the user makes to their token payload will invalidate the signature. JSON Web Token signatures are calculated by including the payload, so any modifications to it will throw the whole thing off. This is good news because it means the user won’t be able to access your protected resources with it.

Any sensitive data that you don’t want unauthorized access to should be kept behind your server. If the user _does_ manage to get to a route they’re not supposed to, it doesn’t matter a whole lot anyway because they won’t be able to see any data that the route normally provides.

## But I Want to Lock Routes Down Completely

In some cases, there’s still a strong desire to lock down client-side routes completely. While it’s not possible to have 100% protection of anything on the client side, Angular provides some interesting possibilities through async routing. We’ll have a look at how we can use async routing to our advantage is a future post.

## Wrapping Up

Hopefully you’ve been able to see the benefits of using Angular’s route guards to help protect access to client-side routes. Remember that nothing on the client can ever truly be protected. Any code, data, or other assets that are delivered to the user’s browser are accessible by them. Knowing this, be sure to always protect sensitive data on your backend.

If you enjoyed this post, [follow me on Twitter](https://twitter.com/ryanchenkie) and say hi there :)

I’m in the process of writing a book called _Securing Angular Applications_ which covers absolutely everything needed to properly lock down an Angular app. You can [check out the early details](https://ryanchenkie.com/securing-angular-applications/?utm_source=medium&utm_medium=banner&utm_campaign=authentication-guards) for the book and sign up to receive sample chapters and content as it becomes available.
