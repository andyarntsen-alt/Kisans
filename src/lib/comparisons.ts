export interface Tool {
    name: string;
    url: string;
    free: string;
    paid: string;
    bestFor: string;
    context: string;
    guideSlug: string;
}

export const AI_TOOLS: Tool[] = [
    {
        name: 'ChatGPT',
        url: 'chatgpt.com',
        free: 'Ja, begrenset',
        paid: '$20/mnd (Plus)',
        bestFor: 'Allround — tekst, kode, analyse, bilder',
        context: '128K tokens',
        guideSlug: 'chatgpt',
    },
    {
        name: 'Claude',
        url: 'claude.ai',
        free: 'Ja, begrenset',
        paid: '$20/mnd (Pro)',
        bestFor: 'Lange tekster, koding, analyse',
        context: '200K–1M tokens',
        guideSlug: 'claude-code',
    },
    {
        name: 'Gemini',
        url: 'gemini.google.com',
        free: 'Ja',
        paid: '$20/mnd (Advanced)',
        bestFor: 'Google-integrasjon, research',
        context: '1M+ tokens',
        guideSlug: 'gemini',
    },
    {
        name: 'Perplexity',
        url: 'perplexity.ai',
        free: 'Ja',
        paid: '$20/mnd (Pro)',
        bestFor: 'Research med kilder',
        context: '—',
        guideSlug: 'perplexity',
    },
    {
        name: 'GitHub Copilot',
        url: 'github.com/features/copilot',
        free: 'Ja, 2000 kompl./mnd',
        paid: '$10/mnd (Pro)',
        bestFor: 'Kodehjelp i editoren',
        context: 'Hele prosjektet',
        guideSlug: 'github-copilot',
    },
    {
        name: 'Cursor',
        url: 'cursor.com',
        free: 'Ja, begrenset',
        paid: '$20/mnd (Pro)',
        bestFor: 'AI-native kodeeditor',
        context: 'Hele prosjektet',
        guideSlug: 'cursor',
    },
];
