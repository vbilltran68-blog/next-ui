import highlight from 'highlight.js'
import { useEffect } from "react";

import { MarkdownWrapper } from "./styled"

type MarkdownProps = { content: string; className?: string; }

const Markdown = ({ content, className }: MarkdownProps) => {
  useEffect(() => {
    if (content.search('code')) {
      highlight.highlightAll()
    }
  }, [content])

  return <MarkdownWrapper className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}

export default Markdown

