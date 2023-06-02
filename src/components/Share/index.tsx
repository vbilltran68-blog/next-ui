"use client"

import Icon from '@components/Icon'
import { IconPath, IconType } from '@interfaces/icon'
import appConfig from '@root/app.config.json'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { memo, useCallback, useEffect, useState } from 'react'

import styles from './styles.module.scss'

type Props = {
  href?: string;
  className?: string;
}

const Share = ({ href, className }: Props) => {
  const path = usePathname()
  const [title, setTitle] = useState('-')

  useEffect(() => {
    setTitle(document.title)
  }, [])

  const handleClick = useCallback(async () => {
    const body = {
      title: appConfig.title,
      text: title,
      url: `${process.env.APP_URL}${path}`,
    }

    if (!navigator?.share) {
      console.log(body)
      return;
    }

    await navigator.share(body)
  }, [title, href, path])

  return (
    <div className={classNames(styles.wrapper, className)} onClick={handleClick}>
      <Icon src={IconPath[IconType.Share]} size={20} />
    </div>
  )
}

export default memo(Share, (prev, next) => prev.href === next.href)
