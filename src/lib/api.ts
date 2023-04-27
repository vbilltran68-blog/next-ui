import { Post } from '@interfaces/post'
import { Profile } from '@interfaces/profile'
import { concatString } from '@utils/string'
import { calculateTimeToRead } from '@utils/timeToRead'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { APP_URL, INFO_DIR, POST_DIR } from './constants'
import datetime from './datetime'

export const getPostByFilename = (filename: string): Post | null => {
  if (!filename) return null

  const slug = filename.replace(/\.md$/, '')
  const filePath = join(POST_DIR, `${slug}.md`)
  const fileData = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileData)

  const createdAt = datetime(data.createdAt).format('L LT')

  return {
    slug,
    createdAt: data.createdAt.toString(),
    data: { ...data, createdAt, tags: (data?.tags || []).map((tag: string) => tag.replace(/\s/g, '-')) },
    content,
    timeToRead: calculateTimeToRead(content)
  }
}

export const getAllPosts = (): Post[] => {
  const postFilenames = fs.readdirSync(POST_DIR)
  const posts = postFilenames
    .reduce((posts: Post[], filename: string) => {
      const post = getPostByFilename(filename)
      if (post) {
        posts.push(post)
      }
      return posts
    }, [])
    .sort((a: Post, b: Post): number =>
      datetime(a?.createdAt).isAfter(b?.createdAt) ? -1 : 1
    )

  return posts
}

export const getProfile = (): Profile => {
  const filePath = join(INFO_DIR, `profile.md`)
  const fileData = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileData)

  return {
    data,
    content,
  }
}

export const getOgImageUrl = (post: Post): string => {
  const url = new URL(`${APP_URL}/api/og`);
  const { data, createdAt, timeToRead } = post
  const { title, tags, description } = data || {}
  url.searchParams.set('title', title)
  tags?.length > 0 && url.searchParams.set('tags', (tags || []).slice(0, 3))
  createdAt && url.searchParams.set('createdDate', datetime(createdAt).format('DD/MM/YYYY'))
  timeToRead && url.searchParams.set('timeToRead', timeToRead)
  description && url.searchParams.set('description', description)
  return url.toString()
}
