import Avatar from "@components/Avatar"
import Navigation from "@components/Navigation"
import { useApp } from "@hooks/app"
import { NAVIGATION_ITEMS } from "@lib/constants"
import { PropsWithChildren } from "react"

import { HeaderWrapper, LayoutWrapper, MainWrapper } from "./styled"

type LayoutProps = PropsWithChildren<{ noLayout?: boolean }>

const Layout = ({ children, noLayout }: LayoutProps) => {
  const { name, avatar, year, toggleTheme } = useApp()

  if (noLayout) return <div>{children}</div>

  return (
    <LayoutWrapper className="no-interaction">
      <HeaderWrapper>
        <div className="profile">
          <Avatar src={avatar} size={64} description="Software Engineer (NodeJS / ReactJS)" onClick={() => toggleTheme && toggleTheme()} />
          <h1 className="title">{name}</h1>
        </div>
        <Navigation items={NAVIGATION_ITEMS} className="nav" />
        <div className="footer">
          <p>© {year}</p>
        </div>
      </HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
  )
}

export default Layout

