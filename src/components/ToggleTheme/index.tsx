'use client'

import Icon from "@components/Icon"
import { useApp } from "@hooks/useApp"
import { AppTheme } from "@interfaces/app"
import { IconPath, IconType } from "@interfaces/icon"

import styles from "./styles.module.scss"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useApp()

  return (
    <div className={styles.layoutWrapper} onClick={() => toggleTheme && toggleTheme()}>
      <Icon src={IconPath[theme === AppTheme.Dark ? IconType.LightMode : IconType.DarkMode]} size={30} />
    </div>
  );
}

export default ToggleTheme
