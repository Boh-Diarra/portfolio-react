import type { MetadataRoute } from 'next';

const siteUrl = 'https://bohdiarra.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/competences`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
