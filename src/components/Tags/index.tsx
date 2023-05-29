"use client"

import { concatString } from "@utils/string"
import classNames from "classnames"

import styles from "./styles.module.scss"

type LayoutProps = { data: string[], onSelectTag?: (tag: string) => void, className?: string };

const Tags = ({ data, className, onSelectTag }: LayoutProps) => {
  return (
    <div className={classNames(styles.layoutWrapper, className)}>
      {data?.map((tag, index) => <div key={concatString(tag, index)} className={styles.tag} onClick={() => onSelectTag && onSelectTag(tag)}>{tag.replace(/\s/g, '-')}</div>)}
    </div>
  )
}

export default Tags
