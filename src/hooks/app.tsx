import { App, Theme } from "@interfaces/app";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

import { useTheme } from "./useTheme";

export const AppContext = createContext<App>({
  name: '',
  avatar: '',
  year: 0,
  title: ``,
  description: '',
  theme: Theme.DEFAULT,
  toggleTheme: Function,
  appURL: "",
  locale: "",
})

type AppProviderProps = PropsWithChildren<{ value: App }>

export const AppProvider = ({ value, children }: AppProviderProps) => {
  const [theme, toggleTheme] = useTheme()
  const [locale] = useState('vi_VN');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ?? Theme.NONE)
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('locale', locale)
  }, [locale]);

  return (
    <AppContext.Provider value={{
      ...value,
      locale,
      theme,
      themeColor: theme === Theme.DARK ? '#1D2226' : '#FFFFFF',
      toggleTheme,
    }}>{children}</AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
