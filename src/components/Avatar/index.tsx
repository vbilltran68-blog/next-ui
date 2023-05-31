import classNames from 'classnames';
import Image from 'next/image'
import { memo } from 'react';

import styles from './styles.module.scss'

type AvatarProps = {
  src: string;
  size: number;
  description?: string;
  onClick: () => {};
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { src, description, size, onClick, className } = props || {};

  return (
    <div className={classNames(styles.wrapper, className)}  onClick={() => onClick && onClick()}>
      <Image
        src={src}
        alt={description ?? ''}
        width={size}
        height={size}
      />
    </div>
  )
}

export default memo(Avatar, (prev, next) => prev.src === next.src && prev.size === next.size)
