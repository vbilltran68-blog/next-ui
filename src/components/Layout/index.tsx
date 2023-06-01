"use client"

import Avatar from "@components/Avatar"
import Navigation from "@components/Navigation"
import ToggleTheme from "@components/ToggleTheme"
import { NAVIGATION_ITEMS } from "@constants/navigation.const"
import { useApp } from "@hooks/useApp"
import classNames from "classnames"
import { PropsWithChildren } from "react"

import styles from './styles.module.scss'

type LayoutProps = PropsWithChildren<{ noLayout?: boolean }>

export default function Layout({ children, noLayout }: LayoutProps) {
  const { name, description, icon, toggleTheme, githubOwner } = useApp()

  if (noLayout) return <div>{children}</div>

  return (
    <div className={classNames(styles.wrapper, 'no-interaction')}>
      <div className={styles.headerWrapper}>
        <div className={styles.profile}>
          <Avatar src={icon} size={64} className={styles.avatar} externalSource onClick={() => toggleTheme && toggleTheme()} />
          <div>
            <h1 className={styles.title}>{name}</h1>
            <p className={classNames(styles.role, 'flex flex-center text-code text-muted mt-2 text-align-center')}>{description}</p>
          </div>
        </div>
        <div className={styles.tools}>
          <ToggleTheme />
        </div>
        <Navigation items={NAVIGATION_ITEMS} className={styles.nav} />
        <div className={styles.footer}>
          <p>© {githubOwner}</p>
        </div>
      </div>
      <div className={styles.mainWrapper}>{children}</div>
    </div>
  )
}
