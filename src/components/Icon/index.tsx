"use client"

import { IconPath, IconType } from '@interfaces/icon'
import { ReactSVG } from 'react-svg'

import styles from './styles.module.scss'

type IconProps =
 {
  src?: string;
  type?: IconType;
  size: number;
  description?: string;
}

const Icon = (props: IconProps) => {
  const { src = '#', type, description, size } = props || {};

  return (
    <ReactSVG
      src={type ? IconPath[type] : src}
      desc={description ?? ''}
      width={`${size}px`}
      height={`${size}px`}
      fallback={() => <span>Error!</span>}
      evalScripts="always"
      className={styles.layoutWrapper}
    />
  )
}

export default Icon
