import { MetadataRoute } from 'next'

const BASE = 'https://eraco.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                  priority: 1.0, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/pricing`,                     priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/features`,                    priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/about`,                       priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/security`,                    priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/contact`,                     priority: 0.7, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/faq`,                         priority: 0.7, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/blog`,                        priority: 0.6, changeFrequency: 'weekly',  lastModified: new Date() },
    { url: `${BASE}/changelog`,                   priority: 0.6, changeFrequency: 'weekly',  lastModified: new Date() },
    { url: `${BASE}/careers`,                     priority: 0.5, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/terms`,                       priority: 0.4, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/eraco-vs-claude-code`,        priority: 0.7, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/eraco-vs-llm`,                priority: 0.7, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/eraco-vs-antigravity`,        priority: 0.7, changeFrequency: 'monthly', lastModified: new Date() },
  ]
}
