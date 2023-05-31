"use client"

import UnicodeIcon from "@components/UnicodeIcon"
import classNames from "classnames"
import { useRouter } from "next/navigation"

import styles from './styled.module.scss'

type BackProps = { className?: string }

const Back = ({ className }: BackProps) => {
  const router = useRouter()

  return (
    <div className={classNames(styles.wrapper, className)} onClick={() => router.replace('/')}>
      <UnicodeIcon content="➜" rotateDeg={180} fontSize="16px" />
      <span className={styles.title}>back</span>
    </div>
  )
}

export default Back
