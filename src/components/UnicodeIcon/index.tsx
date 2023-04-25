import { Wrapper } from './styled'

type IconProps = {
  content: string;
  fontSize: string;
  classNames?: string;
  rotateDeg?: number
}

const UnicodeIcon = (props: IconProps) => {
  const { content, fontSize, classNames, rotateDeg } = props || {};
  return (
    <Wrapper className={classNames}>
      <div style={{ fontSize, transform: `rotate(${rotateDeg ?? 0}deg)` }}>{content}</div>
    </Wrapper>
  )
}

export default UnicodeIcon
