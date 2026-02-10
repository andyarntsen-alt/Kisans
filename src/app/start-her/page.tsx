import Link from 'next/link';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
    title: 'Start her | Kisans',
    description: 'Ny til AI? Start her. En steg-for-steg guide til å komme i gang med kunstig intelligens.',
    alternates: { canonical: 'https://kisans.no/start-her' },
};

const STEPS = [
    {
        number: '01',
        title: 'Prøv en AI-assistent',
        description: 'Det enkleste steget er å bare prøve. ChatGPT er det mest populære valget og fungerer gratis. Still et spørsmål, be om hjelp med en tekst, eller la den forklare noe du lurer på.',
        link: '/guide/chatgpt',
        linkText: 'Les ChatGPT-guiden',
    },
    {
        number: '02',
        title: 'Lær å spørre riktig',
        description: 'Kvaliteten på svarene du får avhenger av hvordan du spør. Prompting handler om å gi AI-en tydelig kontekst og instruksjoner. Små endringer i hvordan du formulerer deg kan gi mye bedre resultater.',
        link: '/guide/prompting',
        linkText: 'Les prompting-guiden',
    },
    {
        number: '03',
        title: 'Finn riktig verktøy',
        description: 'ChatGPT er ikke det eneste alternativet. Claude er sterk på skriving og koding, Gemini integrerer med Google, og Perplexity er best for research. Finn verktøyet som passer det du trenger.',
        link: '/verktoy/sammenligning',
        linkText: 'Sammenlign AI-verktøy',
    },
    {
        number: '04',
        title: 'Bruk AI i hverdagen',
        description: 'Nå som du har grunnlaget, kan du utforske hvordan AI hjelper med det du faktisk driver med — enten det er koding, jobb, skole eller kreativt arbeid.',
        link: '/#kategorier',
        linkText: 'Utforsk kategorier',
    },
];

export default function StartHerPage() {
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

            <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
                <header className="mb-16">
                    <p className="font-mono text-xs text-primary tracking-widest mb-6">
                        NY TIL AI?
                    </p>
                    <h1
                        className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6"
                        style={{ fontFamily: 'var(--font-serif), serif' }}
                    >
                        Start her
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Fire steg for å komme i gang med kunstig intelligens. Ingen forkunnskaper kreves.
                    </p>
                </header>

                <div className="space-y-12">
                    {STEPS.map((step) => (
                        <section key={step.number} className="group">
                            <div className="flex gap-6 md:gap-8">
                                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-border text-sm font-mono text-primary">
                                    {step.number}
                                </div>
                                <div className="space-y-3 pt-1">
                                    <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                                        {step.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                    <Link
                                        href={step.link}
                                        className="inline-block font-mono text-sm text-primary hover:underline tracking-wide"
                                    >
                                        {step.linkText} &rarr;
                                    </Link>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                        Har du spørsmål eller forslag?{' '}
                        <a href="mailto:kontakt@kisans.no" className="text-primary hover:underline">
                            kontakt@kisans.no
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
