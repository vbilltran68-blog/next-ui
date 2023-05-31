"use client"

import { IconPath, IconType } from '@interfaces/icon'
import classNames from 'classnames'
import { memo } from 'react'
import { ReactSVG } from 'react-svg'

import styles from './styles.module.scss'

type IconProps =
 {
  src?: string;
  type?: IconType;
  size: number;
  description?: string;
  className?: string;
}

const Icon = (props: IconProps) => {
  const { src = '#', size, type, description, className } = props || {};

  return (
    <ReactSVG
      src={type ? IconPath[type] : src}
      width={size}
      height={size}
      desc={description ?? ''}
      fallback={() => <span>Error!</span>}
      evalScripts="always"
      className={classNames(styles.layoutWrapper, className)}
    />
  )
}

export default memo(Icon, (prev, next) => prev.src === next.src && prev.size === next.size)
