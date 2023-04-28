import Comments from "@components/Comments"
import HtmlRender from "@components/HtmlRender"
import PostLayout from "@components/PostLayout"
import Tags from "@components/Tags"
import { useApp } from "@hooks/app"
import { Post } from "@interfaces/post"
import { getAllPosts, getOgImageUrl, getPostByFilename } from "@lib/api"
import datetime from "@lib/datetime"
import markdownToHtml from "@lib/markdownToHtml"
import { NextSeo } from "next-seo"
import { ParsedUrlQueryInput } from "querystring"
import styled from "styled-components"

const HtmlRenderWrapper = styled(HtmlRender)`
  padding: 18px 0 20px 0;
  border-bottom: 1px dashed var(--color-muted);
`;

const PostPage = (post: Post) => {
  const { content, createdAt, data, slug, timeToRead } = post
  const { title, description, tags } = data || {}
  const { themeColor, appURL } = useApp()

  return (
    <>
    <NextSeo
      title={title}
      description={description}
      themeColor={themeColor}
      openGraph={{
        url: `${appURL}/notes/${slug}`,
        title,
        description: description,
        images: [
          {
            url: getOgImageUrl(post),
            alt: `${title}`
          }
        ]
      }}
    />
    <PostLayout>
      <div className="flex">
        <span className="text-primary">{datetime(createdAt).format('DD/MM/YYYY')}</span>
        <span className="pl-2 text-muted">({timeToRead})</span>
      </div>
      <h1 className="header pt-1 py-3">{title || '...'}</h1>
      <Tags data={tags} className="pb-3" />
      <HtmlRenderWrapper content={content} />
      <Comments title={title} className="pb-3" />
    </PostLayout>
    </>
  )
}

export default PostPage

type StaticProps = {
  params: ParsedUrlQueryInput,
}

export async function getStaticProps(props: StaticProps) {
  const { params } = props
  const slug = params.slug
  const post: Post | null = getPostByFilename(slug as string)
  const content = await markdownToHtml(post?.content || '')

  // get prev/next posts
  const allPosts = getAllPosts()
  const currentPostIndex = allPosts.findIndex(p => p.slug === slug)

  // related post
  const nextPost = allPosts[currentPostIndex - 1] ?? null
  const prevPost = allPosts[currentPostIndex + 1] ?? null

  return {
    props: {
      ...post,
      noLayout: true,
      content,
      nextPost,
      prevPost
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
