import type { MetadataRoute } from 'next';
import { GUIDES } from '@/lib/guides';

const BASE_URL = 'https://kisans.no';

const CATEGORY_SLUGS = ['koding', 'jobb', 'skole', 'verktoy'];

export default function sitemap(): MetadataRoute.Sitemap {
    const guideEntries = GUIDES.map((guide) => ({
        url: `${BASE_URL}/guide/${guide.slug}`,
        lastModified: new Date(guide.publishedDate),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const categoryEntries = CATEGORY_SLUGS.map((slug) => ({
        url: `${BASE_URL}/kategori/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...categoryEntries,
        ...guideEntries,
    ];
}
