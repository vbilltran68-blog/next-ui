'use client'

import Icon from "@components/Icon"
import { useApp } from "@hooks/useApp"
import { AppTheme } from "@interfaces/app"
import { IconPath, IconType } from "@interfaces/icon"
import classNames from "classnames"

import styles from "./styles.module.scss"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useApp()

  return (
    <div className={classNames(styles.layoutWrapper, theme === AppTheme.Dark ? styles.night : '')} onClick={() => toggleTheme && toggleTheme()}>
      <Icon src={IconPath[theme === AppTheme.Dark ? IconType.DarkMode : IconType.LightMode]} size={30} />
    </div>
  );
}

export default ToggleTheme
