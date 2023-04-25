import * as marked from 'marked';

const markdownToHtml = async (markdown: string) => {
  return marked.marked(markdown)
}

export default markdownToHtml
