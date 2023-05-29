"use client"

import { useApp } from '@hooks/useApp';
import { AppTheme } from '@interfaces/app';
import classNames from 'classnames'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

type CommentProps = {
  title: string;
  className?: string;
}

const getCommentTheme = (theme: AppTheme | undefined): string => {
  switch (theme) {
    case AppTheme.Dark:
      return 'github-dark'
    default:
      return 'github-light'
  }
}

const Comments = ({ title, className }: CommentProps) => {
  const { theme, githubRepo } = useApp()
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
  }, [title, theme, githubRepo])

  useEffect(() => {
    if (commentScript) {
      commentRef.current.replaceChildren(commentScript);
    }
  }, [commentScript])

  return <div className={classNames(styles.layoutWrapper, className)} ref={commentRef} />
}

export default Comments
