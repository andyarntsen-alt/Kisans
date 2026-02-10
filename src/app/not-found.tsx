import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function NotFound() {
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

            <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center">
                <p className="font-mono text-sm text-primary tracking-widest mb-6">404</p>
                <h1
                    className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
                    style={{ fontFamily: 'var(--font-serif), serif' }}
                >
                    Siden ble ikke funnet
                </h1>
                <p className="text-muted-foreground mb-8">
                    Beklager, vi fant ikke siden du leter etter.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 border border-border hover:bg-accent/50 text-sm font-mono tracking-widest transition-colors text-foreground"
                >
                    GÅ TIL FORSIDEN
                </Link>
            </div>
        </div>
    );
}
