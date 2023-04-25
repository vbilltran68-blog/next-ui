export enum Theme {
  NONE = 'none',
  DEFAULT = 'default',
  DARK = 'dark',
}

export interface App {
  name: string;
  avatar: string;
  year: number;
  title: string;
  description: string;
  theme?: Theme;
  toggleTheme?: Function;
  githubRepo?: string;
  siteURL: string;
  locale?: string;
  themeColor?: string;
}
