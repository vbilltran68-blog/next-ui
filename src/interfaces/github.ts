export interface GithubUser {
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface GithubRepo {
  name: string;
  full_name: string;
  description: string;
  homepage: string;
  stargazers_count: number;
  watchers_count: number;
}
