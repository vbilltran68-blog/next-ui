import PostList from '@components/PostList'
import { useApp } from '@hooks/app'
import { Post } from '@interfaces/post'
import { getAllPosts, getOgImageUrl } from '@lib/api'
import { NextSeo } from 'next-seo'

const Page = ({ posts }: { posts: Post[] }) => {
  const { title, description, themeColor, appURL } = useApp()

  return (
  <>
    <NextSeo
      title={title}
      description={description}
      themeColor={themeColor}
      openGraph={{
        url: appURL,
        title: title,
        description: description,
        images: [
          {
            url: getOgImageUrl({ data: { title: 'Trang chủ', description: 'Nơi ghi chép, chém gió và tâm sự hết nỗi buồn thầm kín bên ngoài' } } as any),
            alt: `${title}`
          }
        ]
      }}
    />
    <PostList posts={posts} />
  </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    }
  }
}

export default Page
