import { Post } from '@interfaces/post'
import { Profile } from '@interfaces/profile'
import { calculateTimeToRead } from '@utils/timeToRead'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { INFO_DIR, POST_DIR } from './constants'
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
    data: { ...data, createdAt },
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
