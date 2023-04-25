import { concatString } from "@utils/string";
import cs from 'classnames'

import { TagWrapper } from "./styled";

type LayoutProps = { data: string[], onSelectTag?: (tag: string) => void, className?: string };

const Tags = ({ data, className, onSelectTag }: LayoutProps) => {
  return (
    <TagWrapper className={className}>
      {data?.map((tag, index) => <div key={concatString(tag, index)} className="tag" onClick={() => onSelectTag && onSelectTag(tag)}>{tag}</div>)}
    </TagWrapper>
  )
}

export default Tags
