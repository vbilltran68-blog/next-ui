"use client"

import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { FacebookIcon, FacebookShareButton } from 'react-share'

import styles from './styles.module.scss'

type Props = {
  href?: string;
  tags?: string[];
  className?: string;
}

export default function Share({ href, tags, className }: Props) {
  const path = usePathname()

  return (
    <div className={classNames(styles.wrapper, className)}>
      <FacebookShareButton
        url={href ?? `${process.env.APP_URL}/${path}`}
        hashtag={tags?.map((tag) => `#${tag}`).join(';')}
      >
        <FacebookIcon size={24} />
      </FacebookShareButton>
    </div>
  )
}
