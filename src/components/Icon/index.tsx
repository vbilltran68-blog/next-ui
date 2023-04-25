import { IconPath, IconType } from '@interfaces/icon';

import { SvgWrapper } from './styled'

type IconProps = {
  src?: string;
  type?: IconType;
  size: number;
  description?: string;
}

const Icon = (props: IconProps) => {
  const { src = '#', type, description, size } = props || {};

  return (
    <SvgWrapper
      src={type ? IconPath[type] : src}
      desc={description ?? ''}
      width={`${size}px`}
      height={`${size}px`}
      fallback={() => <span>Error!</span>}
      evalScripts="always"
      loading={() => <span>Loading</span>}
    />
  )
}

export default Icon
