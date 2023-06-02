import '@styles/global.scss'

import { AppProvider } from '@hooks/useApp'
import config from '@root/app.config.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL ?? ''),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  icons: {
    icon: '/assets/logo/144x144.png',
    apple: [
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        url: '/assets/logo/57x57.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        url: '/assets/logo/72x72.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        url: '/assets/logo/144x144.png',
      },
    ],
  },
  keywords: config.keywords,
  robots: { index: true, follow: true },
  themeColor: config.themeColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="none">
      <head>
        {/* <!-- Allow web app to be run in full-screen mode - iOS. --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* <!-- Allow web app to be run in full-screen mode - Android. --> */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* <!-- Set the viewport. --> */}
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimal-ui" />

        {/* <!-- Disable automatic phone number detection. --> */}
        <meta name="format-detection" content="telephone=no" />

        {/* <!-- Windows dock color --> */}
        <meta name="msapplication-TileColor" content={config.themeColor} />

        {/* <!-- Android dock color --> */}
        <meta name="theme-color" content={config.themeColor} />
      </head>
      <body suppressHydrationWarning={true}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
