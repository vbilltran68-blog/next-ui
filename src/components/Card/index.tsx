import cs from 'classnames'
import { PropsWithChildren } from "react"

import styles from './styles.module.scss'

type LayoutProps = PropsWithChildren<{ onClick?: () => void, className: string}>

const Card = ({ children, className, onClick }: LayoutProps) => {
  return (
    <div className={cs(styles.wrapper, className, 'flex p-3')} onClick={() => onClick && onClick()}>
      {children}
    </div>
  )
}

export default Card
