'use client'

import Card from '@components/Card'
import Icon from '@components/Icon'
import Tags from '@components/Tags'
import { IconPath, IconType } from '@interfaces/icon'
import { Post } from '@interfaces/post'
import datetime from '@services/datetime.service'
import { groupBy } from '@utils/groupBy'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import styles from './styles.module.scss'

type PostProps = {
  post: Post
  onClick: (post: Post) => void
}

const PostItem = (props: PostProps) => {
  const { post, onClick } = props
  const { title, createdAt, description, tags } = post.data

  return (
    <Card
      className={classNames(styles.postWrapper, 'no-interaction text-code')}
      onClick={() => onClick(post)}
    >
      <div className={styles.info}>
        <div className="flex">
          <span className="text-primary">
            {datetime(createdAt).format('DD/MM/YYYY')}
          </span>
          <span className="pl-2 text-muted">({post.timeToRead})</span>
        </div>
        <div className={classNames(styles.header, 'text-truncate-2 flex-2')}>
          {title}
        </div>
        <div className={classNames(styles.description, 'flex-1 text-truncate')}>
          {description}
        </div>
        <Tags data={tags?.slice(0, 2) ?? []} />
      </div>
    </Card>
  )
}

type PostListProps = {
  posts: Post[]
}

const PostList = (props: PostListProps) => {
  const { posts } = props

  const router = useRouter()

  const onClickPost = (post: Post) => {
    router.push(`/posts/${post?.slug}`)
  }

  const groupedPosts = useMemo(
    () =>
      groupBy<Post>(posts, (item: Post) =>
        datetime(item.createdAt).format('MM-YYYY').toLowerCase()
      ),
    [posts]
  )

  return (
    <div className={styles.feedWrapper}>
      {Object.keys(groupedPosts).map(key => {
        return (
          <section key={key} className={styles.wrapper}>
            <div className={styles.history}>
              <Icon src={IconPath[IconType.History]} size={18} />
              {key} ({groupedPosts[key].length})
            </div>
            <div className={styles.items}>
              {groupedPosts[key].map(post => (
                <PostItem key={post.slug} post={post} onClick={onClickPost} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default PostList
