import { POST_DIR } from '@constants/directory.const'
import { Post } from '@interfaces/post'
import { calculateTimeToRead } from '@utils/timeToRead'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import datetime from './datetime.service'

export const getPostFileNames = async (): Promise<string[]> => {
  const filenames = await fs.promises.readdir(POST_DIR)
  const ignoreFiles = ['profile.md']
  const extensions = ['.md']
  return filenames.filter(
    filename =>
      extensions.some(ext => filename.indexOf(ext) !== -1) &&
      !ignoreFiles.includes(filename)
  )
}

export const getPostBySlug = async (
  slug: string,
  isProfile: boolean = false
): Promise<Post | null> => {
  if (!slug || (!isProfile && slug === 'profile')) return null

  try {
    const filePath = join(POST_DIR, `${slug}.md`)
    const fileData = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileData)

    const createdAt = datetime(data.createdAt).format('L LT')

    return {
      slug,
      createdAt: data.createdAt.toString(),
      data: {
        ...data,
        createdAt,
        tags: (data?.tags || []).map((tag: string) => tag.replace(/\s/g, '-'))
      },
      content,
      timeToRead: calculateTimeToRead(content)
    }
  } catch (e) {
    console.error('Get Post Error', e)
    return null
  }
}

export const getAllPosts = async (): Promise<Post[]> => {
  const postFilenames = await getPostFileNames()
  const allPosts = await Promise.all(
    postFilenames.map((filename: string) =>
      getPostBySlug(filename.replace('.md', ''))
    )
  )
  const validPosts = allPosts.sort((a, b) =>
    datetime(a?.createdAt).isAfter(b?.createdAt) ? -1 : 1
  )
  return validPosts as Post[]
}
