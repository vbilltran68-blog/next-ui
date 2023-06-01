import classNames from 'classnames';
import Image from 'next/image'
import { memo } from 'react';

import styles from './styles.module.scss'

type AvatarProps = {
  src: string;
  size: number;
  description?: string;
  className?: string;
  externalSource?: boolean;
}

const Avatar = (props: AvatarProps) => {
  const { src, description, size, className, externalSource } = props || {};

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Image
        src={src}
        alt={description ?? ''}
        width={size}
        height={size}
        unoptimized={externalSource ?? false}
      />
    </div>
  )
}

export default memo(Avatar, (prev, next) => prev.src === next.src && prev.size === next.size)
