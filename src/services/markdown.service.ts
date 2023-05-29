import hljs from 'highlight.js'
import { marked } from 'marked'
import { gfmHeadingId } from "marked-gfm-heading-id"
import { markedHighlight } from 'marked-highlight'

hljs.configure({ languages: ['bash', 'shell', 'js', 'ts'] })

marked.use(markedHighlight({
  highlight: (code, lang) => {
    if (!lang) return code;
    return hljs.highlightAuto(code).value;
  },
  langPrefix: 'hljs lang-',
}))

marked.use(gfmHeadingId({
  headerIds: true,
  headerPrefix: '#',
}));

export const markdownToHtml = async (markdown: string) => {
  // TODO:
  // 1. custom headings -> with link
  // 2. custom code block with component -> can copy to clipboard
  return marked.parse(markdown, {
    breaks: true,
    mangle: false,
  })
}
