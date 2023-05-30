"use client"

import Icon from '@components/Icon'
import { NavigationItem } from '@interfaces/navigation'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles.module.scss'

type NavItemProps = {
  data: NavigationItem;
  isActive: boolean;
}

const NavItem = (props: NavItemProps) => {
  const { data, isActive } = props;
  return (
    <div className={classNames(styles.navItemWrapper,  isActive ? styles.active : '')}>
      <Link href={data.href} className={styles.linkWrapper}>
          <Icon src={data.icon} size={30} className={styles.icon}  />
          <div className={styles.title}>{data.label}</div>
      </Link>
    </div>

  )
}

type NavigationProps = {
  items: NavigationItem[];
  className?: string | undefined;
}

const Navigation = (props: NavigationProps) => {
  const { items, className } = props
  const pathName = usePathname()

  return (
    <div className={classNames(styles.wrapper, className)}>
      {items.map((nav, index) => <NavItem key={`nav-${index}`} data={nav} isActive={pathName === nav.href} />)}
    </div>
  )
}

export default Navigation
