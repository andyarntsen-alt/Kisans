import Link from 'next/link';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { AI_TOOLS } from '@/lib/comparisons';

export const metadata: Metadata = {
    title: 'Sammenlign AI-verktøy | Kisans',
    description: 'ChatGPT vs Claude vs Gemini vs Perplexity. Sammenlign priser, styrker og funksjoner for de mest populære AI-verktøyene i 2026.',
    keywords: ['chatgpt vs claude', 'ai sammenligning', 'beste ai verktøy', 'chatgpt vs gemini', 'ai verktøy pris'],
    alternates: { canonical: 'https://kisans.no/verktoy/sammenligning' },
};

export default function SammenligningPage() {
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

            <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-16 max-w-3xl">
                    <p className="font-mono text-xs text-primary tracking-widest mb-6">
                        SAMMENLIGNING
                    </p>
                    <h1
                        className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6"
                        style={{ fontFamily: 'var(--font-serif), serif' }}
                    >
                        Hvilket AI-verktøy passer for deg?
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        En oversikt over de mest populære AI-verktøyene i 2026. Priser, styrker og hva de er best til.
                    </p>
                </header>

                {/* Desktop: Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="py-4 pr-6 font-mono text-xs text-muted-foreground tracking-widest">VERKTØY</th>
                                <th className="py-4 pr-6 font-mono text-xs text-muted-foreground tracking-widest">GRATIS</th>
                                <th className="py-4 pr-6 font-mono text-xs text-muted-foreground tracking-widest">BETALT</th>
                                <th className="py-4 pr-6 font-mono text-xs text-muted-foreground tracking-widest">BEST FOR</th>
                                <th className="py-4 pr-6 font-mono text-xs text-muted-foreground tracking-widest">KONTEKST</th>
                                <th className="py-4 font-mono text-xs text-muted-foreground tracking-widest">GUIDE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AI_TOOLS.map((tool) => (
                                <tr key={tool.name} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                                    <td className="py-5 pr-6">
                                        <div className="font-bold text-foreground">{tool.name}</div>
                                        <a href={`https://${tool.url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                                            {tool.url}
                                        </a>
                                    </td>
                                    <td className="py-5 pr-6 text-sm text-muted-foreground">{tool.free}</td>
                                    <td className="py-5 pr-6 text-sm text-muted-foreground">{tool.paid}</td>
                                    <td className="py-5 pr-6 text-sm text-muted-foreground">{tool.bestFor}</td>
                                    <td className="py-5 pr-6 text-sm font-mono text-muted-foreground">{tool.context}</td>
                                    <td className="py-5">
                                        <Link href={`/guide/${tool.guideSlug}`} className="text-sm text-primary hover:underline font-mono">
                                            Les &rarr;
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile: Cards */}
                <div className="md:hidden space-y-6">
                    {AI_TOOLS.map((tool) => (
                        <div key={tool.name} className="border border-border p-6 space-y-4">
                            <div>
                                <h2 className="text-xl font-bold text-foreground">{tool.name}</h2>
                                <a href={`https://${tool.url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                                    {tool.url}
                                </a>
                            </div>
                            <p className="text-sm text-muted-foreground">{tool.bestFor}</p>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest block mb-1">GRATIS</span>
                                    <span className="text-muted-foreground">{tool.free}</span>
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest block mb-1">BETALT</span>
                                    <span className="text-muted-foreground">{tool.paid}</span>
                                </div>
                                <div>
                                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest block mb-1">KONTEKST</span>
                                    <span className="font-mono text-muted-foreground">{tool.context}</span>
                                </div>
                                <div>
                                    <Link href={`/guide/${tool.guideSlug}`} className="text-sm text-primary hover:underline font-mono">
                                        Les guide &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 border border-border/50 bg-card/30">
                    <h2 className="text-lg font-bold text-foreground mb-3">Usikker på hvor du skal starte?</h2>
                    <p className="text-muted-foreground mb-4">
                        For de fleste er ChatGPT det beste stedet å begynne. Det er gratis, allsidig, og har den største brukerbasen.
                        Vil du ha mer hjelp med å komme i gang?
                    </p>
                    <Link href="/start-her" className="inline-block font-mono text-sm text-primary hover:underline tracking-wide">
                        Gå til Start her &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
