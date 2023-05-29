import classNames from 'classnames';

import styles from './styles.module.scss'

type IconProps = {
  content: string;
  fontSize: string;
  className?: string;
  rotateDeg?: number
}

const UnicodeIcon = (props: IconProps) => {
  const { content, fontSize, className, rotateDeg } = props || {};
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div style={{ fontSize, transform: `rotate(${rotateDeg ?? 0}deg)` }}>{content}</div>
    </div>
  )
}

export default UnicodeIcon
