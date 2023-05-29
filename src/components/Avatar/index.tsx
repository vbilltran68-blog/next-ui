import Image from 'next/image'

import styles from './styles.module.scss'

type AvatarProps = {
  src: string;
  size: number;
  description?: string;
  onClick: () => {}
}

const Avatar = (props: AvatarProps) => {
  const { src, description, size, onClick } = props || {};

  return (
    <div className={styles.wrapper}  onClick={() => onClick && onClick()}>
      <Image
        src={src}
        alt={description ?? ''}
        width={size}
        height={size}
      />
    </div>
  )
}

export default Avatar
