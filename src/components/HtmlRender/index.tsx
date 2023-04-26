import { HtmlRenderWrapper } from "./styled"

type MarkdownProps = { content: string; className?: string; }

const HtmlRender = ({ content, className }: MarkdownProps) => {
  return <HtmlRenderWrapper className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}

export default HtmlRender
