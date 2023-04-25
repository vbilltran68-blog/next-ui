import { Theme } from "@interfaces/app"
import { useEffect } from "react";

import { useStorage } from "./useStorage"

const ThemeKey = 'app-theme';

export const useTheme = (): [Theme | undefined, () => void] => {
  const [theme, setTheme] = useStorage(ThemeKey, Theme.DEFAULT);

  const toggleTheme = () => {
    const nextValue = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT;
    setTheme(nextValue);
  };

  return [theme, toggleTheme];
}
