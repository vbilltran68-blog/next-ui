export enum AppTheme {
  Light = 'light',
  Dark = 'dark',
}

export enum AppLocale {
  English = "en",
  Vietnamese = "vi"
}

export interface App {
  theme: AppTheme;
  toggleTheme: Function;
  locale: AppLocale;
  themeColor: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  keywords: string[];
  appURL: string;
  githubRepo: string;
}
