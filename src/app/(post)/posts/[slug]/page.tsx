import { Post } from "@interfaces/post"
import { getPostBySlug,getPostFileNames } from "@services/api.service"
import datetime from "@services/datetime.service"
import { markdownToHtml } from "@services/markdown.service"
import classNames from "classnames"
import { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

import styles from './page.module.scss'

const FlexibleShare = dynamic(() => import('@components/Share'), {
  loading: () => <p>share loading...</p>,
})

const FlexibleTags = dynamic(() => import('@components/Tags'), {
  loading: () => <p>tags loading...</p>,
})

const FlexibleHtmlRender = dynamic(() => import('@components/HtmlRender'), {
  loading: () => <p>content loading...</p>,
})

const FlexibleComments = dynamic(() => import('@components/Comments'), {
  loading: () => <p>comment loading...</p>,
})

export async function generateMetadata(
  { params }: any,
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  const { title, description } = post?.data || {}

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const allPosts = await getPostFileNames()
  return allPosts.map((filename: string) => ({ slug: filename.replace('.md', '') }))
}

async function getPost(params: any): Promise<Post | null> {
  const post: Post | null = await getPostBySlug(params.slug as string)

  if (!post) return null

  const content = await markdownToHtml(post?.content || '')

  return {
    ...post,
    content,
  } as Post
}

export default async function Home({ params }: any) {
  const post = await getPost(params)

  const { content, createdAt, data, timeToRead } = post || {}
  const { title, tags } = data || {}

  if (!post) {
    notFound()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className="flex">
          <span className="text-primary">{datetime(createdAt).format('DD/MM/YYYY')}</span>
          <span className="pl-2 text-muted">({timeToRead})</span>
        </div>
        <h1>{title || '...'}</h1>
        <FlexibleTags data={tags} />
        <div className={classNames(styles.share)}>
          <FlexibleShare tags={tags} />
        </div>
      </div>
      <FlexibleHtmlRender className={styles.bottomDashed} content={content ?? ""} />
      <FlexibleComments title={title} className="pb-3" />
    </div>
  )
}
