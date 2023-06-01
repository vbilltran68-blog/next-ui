import Card from '@components/Card'
import HtmlRender from '@components/HtmlRender'
import { Post } from '@interfaces/post'
import { getPostBySlug } from '@services/api.service'
import datetime from '@services/datetime.service'
import { markdownToHtml } from '@services/markdown.service'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL ?? ''),
  title: "Thông tin",
  description: "Chém gió, bàn luận linh tinh",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Thông tin",
    description: "Chém gió, bàn luận linh tinh",
  }
}

async function getProfile(): Promise<Post | null> {
  const post: Post | null = await getPostBySlug('profile', true)

  if (!post) return null

  const content = await markdownToHtml(post?.content || '')

  return {
    ...post,
    content,
  } as Post
}

export default async function About() {
  const { data, content } = await getProfile() || {}
  const { title } = data || {}

  if (!data) notFound()

  return (
    <div className="flex flex-center w-100">
      <Card className="flex-column page-a4">
        <HtmlRender content={content?.replace(
          '$year',
          datetime.now().year().toString()
        ) ?? ''} />
      </Card>
    </div>
  )
}
