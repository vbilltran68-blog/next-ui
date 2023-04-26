import ScrollToTop from "@components/ScrollToTop"
import ToggleTheme from "@components/ToggleTheme"
import UnicodeIcon from "@components/UnicodeIcon"
import { useApp } from "@hooks/app"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"

import { HeaderWrapper, LayoutWrapper, MainWrapper } from "./styled"

type PostLayoutProps = PropsWithChildren<{ className?: string }>;

const PostLayout = ({ children, className }: PostLayoutProps) => {
  const router = useRouter()
  const { theme, toggleTheme } = useApp()

  const backToPreviousPage = () => {
    router.replace('/');
  }

  return (
    <LayoutWrapper>
      <HeaderWrapper id="top">
        <div className="wrapper">
          <div className="back-action"  onClick={() => backToPreviousPage()}>
            <UnicodeIcon content="➜" rotateDeg={180} fontSize="16px" />
            back
          </div>
        </div>
      </HeaderWrapper>
      <MainWrapper className={className}>{children}</MainWrapper>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
    </LayoutWrapper>
  )
}

export default PostLayout

