import hljs from 'highlight.js'
import * as marked from 'marked'

const markdownToHtml = async (markdown: string) => {
  // TODO:
  // 1. custom headings -> with link
  // 2. custom code block with component -> can copy to clipboard
  return marked.marked(markdown, {
    headerIds: true,
    headerPrefix: '#',
    breaks: true,
    highlight: (code, lang) => {
      if (!lang) return code;
      return hljs.highlightAuto(code).value;
    },
    langPrefix: 'hljs lang-'
  })
}

export default markdownToHtml
