import PostList from "@components/PostList";
import { getAllPosts } from "@services/api.service";

export default async function Home() {
  const posts = await getAllPosts()
  return <PostList posts={posts} />
}
