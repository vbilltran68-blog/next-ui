import classNames from "classnames"

import styles from "./styles.module.scss"

type MarkdownProps = { content: string; className?: string; }

const HtmlRender = ({ content, className }: MarkdownProps) => {
  return <div className={classNames(styles.layoutWrapper, className)} dangerouslySetInnerHTML={{ __html: content }} />;
}

export default HtmlRender
