import appConfig from '@root/app.config.json'
import { GenerateImage } from '@services/opengraph-image';

export const runtime = 'edge'

export const alt = `About | ${appConfig.title}`
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png'

export default async function Image() {
  return GenerateImage({ title: 'Trang chủ', description: 'Bàn luận chém gió linh tinh' })
}
