import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = process.env.APP_URL ?? ''

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    }
  ];
}
