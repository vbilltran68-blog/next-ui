import Icon from "@components/Icon";
import Tags from "@components/Tags";
import { IconPath, IconType } from "@interfaces/icon";
import { Post } from "@interfaces/post"
import datetime from "@lib/datetime";
import { groupBy } from "@utils/groupBy";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { FeedWrapper, PostWrapper, Wrapper } from "./styled";

type PostProps = {
   post: Post;
   onClick: (post: Post) => void,
}

const PostItem = (props: PostProps) => {
  const { post, onClick } = props;
  const { title, createdAt, description, tags } = post.data

  return <PostWrapper className="no-interaction text-code" onClick={() => onClick(post)}>
    <div className="info">
      <div className="flex">
        <span className="text-primary">{datetime(createdAt).format('DD/MM/YYYY')}</span>
        <span className="pl-2 text-muted">({post.timeToRead})</span>
      </div>
      <div className="header text-truncate-2 flex-2">{title}</div>
      <div className="description flex-1 text-truncate">{description}</div>
      <Tags data={tags?.slice(0, 2) ?? []} />
    </div>
  </PostWrapper>
}

type PostListProps = {
  posts: Post[];
}

const PostList = (props: PostListProps) => {
  const { posts } = props;

  const router = useRouter()

  const onClickPost = (post: Post) => {
    router.push(`/notes/${post?.slug}`);
  }

  const groupedPosts = useMemo(() => groupBy<Post>(posts, (item: Post) => datetime(item.createdAt).format('MM-YYYY').toLowerCase()), [posts]);

  return <FeedWrapper>
    {Object.keys(groupedPosts).map((key) => {
      return <Wrapper key={key}>
        <div className="history">
          <Icon src={IconPath[IconType.History]} size={18} />
          {key} ({groupedPosts[key].length})
        </div>
        <div className="items">
          {groupedPosts[key].map((post) => <PostItem key={post.slug} post={post} onClick={onClickPost} />)}
        </div>
      </Wrapper>
    })}
  </FeedWrapper>
}

export default PostList
