import Comments from "@components/Comments"
import HtmlRender from "@components/HtmlRender"
import Tags from "@components/Tags"
import { Post } from "@interfaces/post"
import { getPostBySlug,getPostFileNames } from "@services/api.service"
import datetime from "@services/datetime.service"
import { markdownToHtml } from "@services/markdown.service"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import styles from './page.module.scss'

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
    <section>
      <div className="flex">
        <span className="text-primary">{datetime(createdAt).format('DD/MM/YYYY')}</span>
        <span className="pl-2 text-muted">({timeToRead})</span>
      </div>
      <h1 className="header pt-1 py-3">{title || '...'}</h1>
      <Tags data={tags} className="pb-3" />
      <HtmlRender className={styles.htmlRenderWrapper} content={content ?? ""} />
      <Comments title={title} className="pb-3" />
    </section>
  )
}
