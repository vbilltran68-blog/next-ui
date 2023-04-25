import UnicodeIcon from "@components/StringIcon";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react"

import { HeaderWrapper, LayoutWrapper, MainWrapper } from "./styled";

type PostLayoutProps = PropsWithChildren<{ className?: string }>;

const PostLayout = ({ children, className }: PostLayoutProps) => {
  const router = useRouter()

  const backToPreviousPage = () => {
    router.back();
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
    </LayoutWrapper>
  )
}

export default PostLayout

