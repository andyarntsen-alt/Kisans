import Link from 'next/link';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
    title: 'Nyhetsbrev | Kisans',
    description: 'Kisans nyhetsbrev kommer snart. Hold deg oppdatert på de nyeste AI-guidene og verktøyene.',
    alternates: { canonical: 'https://kisans.no/nyhetsbrev' },
};

export default function NyhetsbrevPage() {
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
                    Nyhetsbrev
                </h1>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                        Nyhetsbrevet vårt er under utvikling og kommer snart.
                    </p>
                    <p>
                        Her vil du kunne melde deg på for å få de nyeste AI-guidene,
                        verktøytips og nyheter rett i innboksen din.
                    </p>
                    <p>
                        I mellomtiden kan du utforske{' '}
                        <Link href="/#guider" className="text-primary hover:underline">
                            guidene våre
                        </Link>{' '}
                        eller ta kontakt på{' '}
                        <a href="mailto:kontakt@kisans.no" className="text-primary hover:underline">
                            kontakt@kisans.no
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
