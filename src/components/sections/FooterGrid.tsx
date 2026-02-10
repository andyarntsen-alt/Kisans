import Link from "next/link";

const HOMEPAGE_CATEGORIES = [
    {
        id: '01',
        title: 'Chatboter & Assistenter',
        desc: 'ChatGPT, Gemini, Perplexity, Kimi og andre AI-assistenter.',
        href: '/kategori/chatboter',
        count: 4,
    },
    {
        id: '02',
        title: 'AI for Koding',
        desc: 'Verktøy for å skrive, feilsøke og forbedre kode med AI.',
        href: '/kategori/koding',
        count: 6,
    },
    {
        id: '03',
        title: 'AI for Jobb',
        desc: 'Effektiviser arbeidshverdagen, jobbsøking og automasjon.',
        href: '/kategori/jobb',
        count: 3,
    },
    {
        id: '04',
        title: 'AI for Skole',
        desc: 'Bruk AI smart og etisk i studiene.',
        href: '/kategori/skole',
        count: 2,
    },
    {
        id: '05',
        title: 'Bilder & Kreativitet',
        desc: 'Bildegenerering, prompting og kreativ bruk av AI.',
        href: '/kategori/kreativitet',
        count: 2,
    },
    {
        id: '06',
        title: 'Forstå AI',
        desc: 'AI-agenter, RAG, lokal AI og hvordan teknologien fungerer.',
        href: '/kategori/forsta-ai',
        count: 3,
    },
    {
        id: '07',
        title: 'Trender & Nyheter',
        desc: 'AI-trender, sikkerhet og verktøyoversikter.',
        href: '/kategori/trender',
        count: 3,
    },
];

export function FooterGrid() {
    return (
        <section id="guider" className="border-t border-border">
            {/* Mobile: compact list. Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4">
                {HOMEPAGE_CATEGORIES.map((cat) => (
                    <Link
                        key={cat.id}
                        href={cat.href}
                        className="aspect-[4/3] border-b border-r border-border p-8 flex flex-col justify-between hover:bg-accent/50 transition-colors group"
                    >
                        <div className="font-mono text-xs text-muted-foreground">
                            {cat.id} · {cat.count} GUIDER
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {cat.title}
                            </h3>
                            <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {cat.desc}
                            </p>
                        </div>
                        <div className="w-full h-[1px] bg-border scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                ))}
            </div>

            {/* Mobile layout: 2-column grid */}
            <div className="md:hidden grid grid-cols-2">
                {HOMEPAGE_CATEGORIES.map((cat) => (
                    <Link
                        key={cat.id}
                        href={cat.href}
                        className="aspect-square border-b border-r border-border p-5 flex flex-col justify-between active:bg-accent/50 transition-colors"
                    >
                        <div className="font-mono text-[10px] text-muted-foreground">
                            {cat.id} · {cat.count} GUIDER
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-foreground leading-tight">
                                {cat.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {cat.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="col-span-full border-t border-border p-6 md:p-12 flex justify-end">
                <div className="text-right space-y-2 font-mono text-xs text-muted-foreground">
                    <div className="flex gap-4 mb-4">
                        <Link href="/personvern" className="hover:text-foreground transition-colors">PERSONVERN</Link>
                        <Link href="/om-oss" className="hover:text-foreground transition-colors">OM OSS</Link>
                    </div>
                    <p>&copy; 2026 KISANS</p>
                    <p>MENNESKE MØTER KUNSTIG INTELLIGENS</p>
                </div>
            </div>
        </section>
    );
}
