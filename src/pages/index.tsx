import PostList from '@components/PostList'
import { Post } from '@interfaces/post'
import { getAllPosts } from '@lib/api'

const Page = ({ posts }: { posts: Post[] }) => {
  return <PostList posts={posts} />
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
