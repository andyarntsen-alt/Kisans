import Link from 'next/link';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
    title: 'Om oss | Kisans',
    description: 'Lær mer om Kisans, din ressurs for å lære AI-verktøy på norsk.',
    alternates: { canonical: 'https://kisans.no/om-oss' },
};

export default function OmOssPage() {
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
                <h1
                    className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8"
                    style={{ fontFamily: 'var(--font-serif), serif' }}
                >
                    Om Kisans
                </h1>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-foreground">Hva er Kisans?</h2>
                        <p>
                            Kisans er en norsk læringsplattform for kunstig intelligens. Vi lager
                            guider, blogger og verktøyoversikter som hjelper deg å ta i bruk AI
                            i hverdagen, enten du koder, jobber eller studerer.
                        </p>
                        <p>
                            Målet vårt er å gjøre AI tilgjengelig og forståelig for alle, uavhengig
                            av teknisk bakgrunn. Vi forklarer verktøyene, viser hvordan de fungerer
                            i praksis, og gir deg det du trenger for å komme i gang.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-foreground">Hvem står bak?</h2>
                        <p>
                            Kisans er et selvstendig prosjekt drevet fra Norge. Jeg følger
                            AI-utviklingen tett og deler det jeg lærer gjennom praktiske
                            guider og artikler.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-foreground">Kontakt oss</h2>
                        <p>
                            Har du spørsmål, tilbakemeldinger eller forslag til nye guider?
                            Vi vil gjerne høre fra deg.
                        </p>
                        <p>
                            <a href="mailto:kontakt@kisans.no" className="text-primary hover:underline">
                                kontakt@kisans.no
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
