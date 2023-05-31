"use client"

import Icon from '@components/Icon'
import { IconPath, IconType } from '@interfaces/icon'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { memo, useCallback } from 'react'

import styles from './styles.module.scss'

type Props = {
  title: string;
  href?: string;
  className?: string;
}

const Share = ({ title, href, className }: Props) => {
  const path = usePathname()

  const handleClick = useCallback(async () => {
    navigator.share({
      title: 'Share',
      text: title,
      url: href ?? `${process.env.APP_URL}/${path}`
    })
    .then(() => console.log('Successful share! 🎉'))
    .catch(err => console.error(err));
  }, [title, href, path])

  return (
    <div className={classNames(styles.wrapper, className)} onClick={handleClick}>
      <Icon src={IconPath[IconType.Share]} size={20} />
    </div>
  )
}

export default memo(Share, (prev, next) => prev.title === next.title && prev.href === next.href)
