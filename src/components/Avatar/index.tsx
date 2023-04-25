import Image from 'next/image'

import { Wrapper } from './styled'

type AvatarProps = {
  src: string;
  size: number;
  description?: string;
  onClick: () => {}
}

const Avatar = (props: AvatarProps) => {
  const { src, description, size, onClick } = props || {};

  return (
    <Wrapper onClick={() => onClick && onClick()}>
      <Image
        src={src}
        alt={description ?? ''}
        width={size}
        height={size}
      />
    </Wrapper>
  )
}

export default Avatar
