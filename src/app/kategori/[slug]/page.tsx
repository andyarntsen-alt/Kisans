import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getGuidesByCategory, getGuidesByCategories } from '@/lib/guides';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface PageProps {
    params: Promise<{ slug: string }>;
}

const CATEGORIES: Record<string, { title: string; description: string }> = {
    koding: {
        title: 'AI for koding',
        description: 'Guider og verktøy for å bruke AI til koding og utvikling.',
    },
    jobb: {
        title: 'AI for jobb',
        description: 'Guider og tips for å bruke AI på arbeidsplassen og i jobbsøking.',
    },
    skole: {
        title: 'AI for skole',
        description: 'Guider for studenter som vil bruke AI smart og etisk i studiene.',
    },
    verktoy: {
        title: 'AI-verktøy',
        description: 'Utforsk de beste AI-verktøyene. ChatGPT, Gemini, Perplexity, Midjourney og flere.',
    },
    chatboter: {
        title: 'ChatGPT, Claude & co',
        description: 'Guider til de mest populære AI-assistentene.',
    },
    kreativitet: {
        title: 'Bilder & Kreativitet',
        description: 'Bildegenerering, prompting og kreativ bruk av AI.',
    },
    'forsta-ai': {
        title: 'Forstå AI',
        description: 'AI-agenter, RAG, lokal AI og hvordan teknologien fungerer.',
    },
    trender: {
        title: 'Trender & Nyheter',
        description: 'AI-trender, sikkerhet og verktøyoversikter.',
    },
    'bygg-med-ai': {
        title: 'Bygg med AI',
        description: 'Praktiske guider for å bygge AI-drevne apper og produkter.',
    },
};

const VERKTOY_SUBCATEGORIES = ['chatboter', 'kreativitet', 'forsta-ai', 'trender'];

export function generateStaticParams() {
    return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const cat = CATEGORIES[slug];
    if (!cat) return {};

    return {
        title: `${cat.title} | Kisans`,
        description: cat.description,
        alternates: { canonical: `https://kisans.no/kategori/${slug}` },
        openGraph: {
            title: cat.title,
            description: cat.description,
            url: `https://kisans.no/kategori/${slug}`,
            type: 'website',
            locale: 'nb_NO',
            siteName: 'Kisans',
        },
    };
}

export default async function KategoriPage({ params }: PageProps) {
    const { slug } = await params;
    const cat = CATEGORIES[slug];
    if (!cat) notFound();

    const guides = slug === 'verktoy'
        ? getGuidesByCategories(VERKTOY_SUBCATEGORIES)
        : getGuidesByCategory(slug);

    return (
        <div className="min-h-screen bg-background">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm p-6 md:p-8 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                >
                    &larr; TILBAKE
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-foreground/80 tracking-wide" style={{ fontFamily: 'var(--font-serif), serif' }}>
                        Kisans
                    </span>
                    <ThemeToggle />
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-16">
                    <h1
                        className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-4"
                        style={{ fontFamily: 'var(--font-serif), serif' }}
                    >
                        {cat.title}
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {cat.description}
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => (
                        <Link
                            key={guide.slug}
                            href={`/guide/${guide.slug}`}
                            className="group p-8 border border-border hover:bg-accent/50 transition-all duration-300 hover:border-primary/30"
                        >
                            <p className="font-mono text-xs text-primary tracking-widest mb-3">
                                {guide.tag}
                            </p>
                            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                                {guide.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                {guide.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
