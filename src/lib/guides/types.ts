export interface GuideSection {
    heading: string;
    content: string;
}

export interface Guide {
    slug: string;
    tag: string;
    title: string;
    description: string;
    keywords: string[];
    publishedDate: string;
    sections: GuideSection[];
    relatedSlugs: string[];
    category: 'koding' | 'jobb' | 'skole' | 'chatboter' | 'kreativitet' | 'forsta-ai' | 'trender' | 'bygg-med-ai';
}
