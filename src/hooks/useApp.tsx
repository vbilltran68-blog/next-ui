"use client"

import { App, AppLocale, AppTheme } from "@interfaces/app"
import appConfig from '@root/app.config.json'
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"

import { useTheme } from "./useTheme"

export const AppContext = createContext<App>({
  theme: AppTheme.Light,
  toggleTheme: () => { },
  locale: AppLocale.English,
  themeColor: "",
  name: "",
  title: "",
  description: "",
  icon: "",
  keywords: [],
  appURL: "",
  githubRepo: ""
})

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [theme, toggleTheme] = useTheme()
  const [locale] = useState(AppLocale.Vietnamese)

  const themeColor = useMemo(() => theme === AppTheme.Dark ? '#1D2226' : '#FFFFFF', [theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme ?? AppTheme.Light)
  }, [theme])

  useEffect(() => {
    document.documentElement.querySelector('meta[name=theme-color]')?.setAttribute('content', themeColor)
  }, [themeColor])

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  return (
    <AppContext.Provider value={{
      ...appConfig,
      appURL: process.env.APP_URL ?? '',
      locale,
      theme: theme ?? AppTheme.Light,
      themeColor,
      toggleTheme,
    }}>{children}</AppContext.Provider>
    )
  }

export const useApp = () => useContext(AppContext)
