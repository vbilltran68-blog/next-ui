"use client"

import Icon from "@components/Icon"
import { IconPath, IconType } from "@interfaces/icon"
import classNames from "classnames"
import { useRouter } from "next/navigation"

import styles from './styled.module.scss'

type BackProps = { className?: string }

const Back = ({ className }: BackProps) => {
  const router = useRouter()

  return (
    <div className={classNames(styles.layoutWrapper, className)} onClick={() => router.replace('/')}>
      <Icon src={IconPath[IconType.Back]} size={20} className={styles.icon}  />
      <span className={styles.title}>back</span>
    </div>
  )
}

export default Back
