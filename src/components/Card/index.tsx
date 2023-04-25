import cs from 'classnames'
import { PropsWithChildren } from "react"

import { CardWrapper } from "./styled"

type LayoutProps = PropsWithChildren<{ onClick?: () => void, className: string}>

const Card = ({ children, className, onClick }: LayoutProps) => {
  return (
    <CardWrapper className={cs(className, 'flex p-3')} onClick={() => onClick && onClick()}>
      {children}
    </CardWrapper>
  )
}

export default Card

