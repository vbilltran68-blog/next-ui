import appConfig from '@root/app.config.json'
import { getPostBySlug } from '@services/api.service'
import datetime from '@services/datetime.service'
import { GenerateImage } from '@services/opengraph-image'

export const runtime = 'nodejs'

export const revalidate = 'force-cache'

export const alt = `Post Image | ${appConfig.title}`
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png'

export default async function Image(props: any) {
  const post = await getPostBySlug(props.params.slug)
  const { title, description, tags } = post?.data || {}
  return GenerateImage({ title, description, tags, createdAt: datetime(post?.createdAt).format('DD/MM/YYYY'), timeToRead: post?.timeToRead })
}
