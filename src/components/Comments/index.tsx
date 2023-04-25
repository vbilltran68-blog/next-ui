import { useApp } from '@hooks/app';
import { Theme } from '@interfaces/app';
import { MutableRefObject, useEffect, useRef, useState } from 'react'

import { CommentWrapper } from './styled';

type CommentProps = {
  title: string;
  className?: string;
}

const getCommentTheme = (theme: Theme | undefined): string => {
  switch (theme) {
    case Theme.DARK:
      return 'github-dark';
    default:
      return 'github-light'
  }
}

const Comments = ({ title, className }: CommentProps) => {
  const { githubRepo, theme } = useApp()

  const [commentScript, setCommentScript] = useState<HTMLScriptElement>();
  const commentRef: MutableRefObject<any> = useRef(null)


  useEffect(() => {
    // https://utteranc.es/
    const script = document.createElement('script')

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: githubRepo,
      'issue-term': 'title',
      theme: getCommentTheme(theme),
      crossOrigin: 'anonymous',
      defer: true,
    }

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value as string);
    })

    setCommentScript(script);
  }, [title, githubRepo, theme])

  useEffect(() => {
    if (commentScript) {
      commentRef.current.replaceChildren(commentScript);
    }
  }, [commentScript])

  return <CommentWrapper className={className} ref={commentRef} />
}

export default Comments
