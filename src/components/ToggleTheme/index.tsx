'use client'

import Icon from "@components/Icon"
import { useApp } from "@hooks/useApp"
import { AppTheme } from "@interfaces/app"
import { IconPath, IconType } from "@interfaces/icon"
import classNames from "classnames"

import styles from "./styles.module.scss"

type Props = {
  className?: string;
}

const ToggleTheme = ({ className }: Props) => {
  const { theme, toggleTheme } = useApp()

  return (
    <div className={classNames(styles.layoutWrapper, className)} onClick={() => toggleTheme && toggleTheme()}>
      <Icon src={IconPath[theme === AppTheme.Dark ? IconType.LightMode : IconType.DarkMode]} size={20} />
    </div>
  );
}

export default ToggleTheme
