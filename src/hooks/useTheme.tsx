"use client"

import { AppTheme } from "@interfaces/app"

import { useStorage } from "./useStorage"

const ThemeKey = 'app-theme'

export const useTheme = (): [AppTheme | undefined, () => void] => {
  const [theme, setTheme] = useStorage<AppTheme | undefined>(ThemeKey, undefined);

  const toggleTheme = () => {
    const nextValue = theme === AppTheme.Light ? AppTheme.Dark : AppTheme.Light;
    setTheme(nextValue);
  }

  return [theme, toggleTheme];
}
