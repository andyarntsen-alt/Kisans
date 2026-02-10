import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getGuideBySlug, getAllSlugs, GUIDES, type Guide } from '@/lib/guides';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) return {};

    const url = `https://kisans.no/guide/${guide.slug}`;

    return {
        title: `${guide.title} | Kisans`,
        description: guide.description,
        keywords: guide.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: guide.title,
            description: guide.description,
            url,
            type: 'article',
            locale: 'nb_NO',
            siteName: 'Kisans',
            publishedTime: guide.publishedDate,
        },
        twitter: {
            card: 'summary_large_image',
            title: guide.title,
            description: guide.description,
        },
    };
}

export default async function GuidePage({ params }: PageProps) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) notFound();

    const wordCount = guide.sections.reduce((sum, s) => sum + s.content.split(/\s+/).length, 0);
    const readingTime = Math.max(1, Math.round(wordCount / 200));

    const sameCategory = GUIDES.filter(g => g.category === guide.category);
    const currentIndex = sameCategory.findIndex(g => g.slug === guide.slug);
    const prevGuide = currentIndex > 0 ? sameCategory[currentIndex - 1] : null;
    const nextGuide = currentIndex < sameCategory.length - 1 ? sameCategory[currentIndex + 1] : null;

    const relatedGuides = guide.relatedSlugs
        .map(s => GUIDES.find(g => g.slug === s))
        .filter((g): g is Guide => g !== undefined);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: guide.title,
        description: guide.description,
        datePublished: guide.publishedDate,
        author: {
            '@type': 'Organization',
            name: 'Kisans',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Kisans',
        },
        inLanguage: 'nb-NO',
        url: `https://kisans.no/guide/${guide.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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

                <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
                    <header className="mb-16">
                        <p className="font-mono text-xs text-primary tracking-widest mb-6">
                            {guide.tag}
                        </p>
                        <h1
                            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6"
                            style={{ fontFamily: 'var(--font-serif), serif' }}
                        >
                            {guide.title}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {guide.description}
                        </p>
                        <div className="flex items-center gap-3 mt-4 font-mono text-xs text-muted-foreground">
                            <time>
                                {new Date(guide.publishedDate).toLocaleDateString('nb-NO', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                            <span>·</span>
                            <span>{readingTime} MIN LESING</span>
                        </div>
                    </header>

                    <div className="space-y-12">
                        {guide.sections.map((section, i) => (
                            <section key={i}>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                                    {section.heading}
                                </h2>
                                <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
                                    {section.content.split('\n\n').map((paragraph, j) => (
                                        <p key={j}>{paragraph}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {relatedGuides.length > 0 && (
                        <footer className="mt-24 pt-12 border-t border-border">
                            <h3 className="font-mono text-xs text-muted-foreground tracking-widest mb-6">
                                RELATERTE GUIDER
                            </h3>
                            <div className="grid gap-4">
                                {relatedGuides.map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={`/guide/${related.slug}`}
                                        className="group p-6 border border-border hover:bg-accent/50 transition-colors"
                                    >
                                        <p className="font-mono text-xs text-primary mb-2">{related.tag}</p>
                                        <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {related.title}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </footer>
                    )}
                    {(prevGuide || nextGuide) && (
                        <nav className="mt-16 pt-8 border-t border-border flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
                            {prevGuide ? (
                                <Link href={`/guide/${prevGuide.slug}`} className="group max-w-full md:max-w-[45%]">
                                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">FORRIGE</span>
                                    <span className="block text-foreground font-bold group-hover:text-primary transition-colors mt-1">
                                        {prevGuide.title}
                                    </span>
                                </Link>
                            ) : <div />}
                            {nextGuide ? (
                                <Link href={`/guide/${nextGuide.slug}`} className="group md:text-right max-w-full md:max-w-[45%]">
                                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">NESTE</span>
                                    <span className="block text-foreground font-bold group-hover:text-primary transition-colors mt-1">
                                        {nextGuide.title}
                                    </span>
                                </Link>
                            ) : <div />}
                        </nav>
                    )}
                </article>
            </div>
        </>
    );
}
