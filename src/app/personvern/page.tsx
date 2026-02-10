import Link from 'next/link';
import type { Metadata } from 'next';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
    title: 'Personvernerklæring | Kisans',
    description: 'Personvernerklæring for Kisans. Les om hvordan vi samler inn og bruker data.',
    alternates: { canonical: 'https://kisans.no/personvern' },
};

export default function PersonvernPage() {
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
                    Personvernerklæring
                </h1>

                <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
                    <p className="text-sm text-muted-foreground/70">
                        Sist oppdatert: 10. februar 2026
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Hvem er ansvarlig?</h2>
                        <p>
                            Kisans (kisans.no) er ansvarlig for behandlingen av personopplysninger
                            som beskrevet i denne erklæringen. For spørsmål om personvern,
                            kontakt oss på{' '}
                            <a href="mailto:kontakt@kisans.no" className="text-primary hover:underline">
                                kontakt@kisans.no
                            </a>.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Hva samler vi inn?</h2>
                        <p>Vi samler inn følgende data gjennom analyseverktøy, kun etter ditt samtykke:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-foreground">Google Analytics:</strong> Anonymiserte sidevisninger,
                                enhetsinformasjon (nettleser, operativsystem, skjermstørrelse),
                                geografisk region (ikke nøyaktig posisjon), og navigasjonsmønstre.
                            </li>
                            <li>
                                <strong className="text-foreground">Vercel Analytics:</strong> Ytelsesdata
                                som sidelastetid og web vitals for å forbedre nettstedets hastighet.
                            </li>
                        </ul>
                        <p>
                            I tillegg lagrer vi din temapreferanse (lys/mørk modus) og samtykkevalg
                            lokalt i nettleseren din (localStorage). Denne informasjonen sendes ikke
                            til noen server.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Formål</h2>
                        <p>
                            Vi bruker analysedata utelukkende for å forstå hvordan nettstedet brukes,
                            slik at vi kan forbedre innhold og brukeropplevelse. Vi selger aldri data
                            til tredjeparter.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Juridisk grunnlag</h2>
                        <p>
                            Behandlingen av personopplysninger gjennom analyseverktøy er basert på
                            ditt samtykke (GDPR artikkel 6(1)(a)). Du kan når som helst trekke
                            tilbake samtykket ved å slette informasjonskapsler i nettleseren din.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Informasjonskapsler</h2>
                        <p>Følgende informasjonskapsler brukes på dette nettstedet:</p>
                        <div className="border border-border overflow-x-auto">
                            <table className="w-full text-sm min-w-[400px]">
                                <thead>
                                    <tr className="border-b border-border bg-accent/30">
                                        <th className="text-left p-3 text-foreground font-mono text-xs">Navn</th>
                                        <th className="text-left p-3 text-foreground font-mono text-xs">Formål</th>
                                        <th className="text-left p-3 text-foreground font-mono text-xs">Varighet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border/50">
                                        <td className="p-3 font-mono text-xs">_ga</td>
                                        <td className="p-3">Google Analytics, skiller brukere</td>
                                        <td className="p-3">2 år</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="p-3 font-mono text-xs">_ga_*</td>
                                        <td className="p-3">Google Analytics, opprettholder sesjon</td>
                                        <td className="p-3">2 år</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-mono text-xs">va</td>
                                        <td className="p-3">Vercel Analytics, anonym ytelsesdata</td>
                                        <td className="p-3">Sesjon</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Analysecookies settes kun etter at du har gitt ditt samtykke via
                            cookie-banneret.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Dine rettigheter</h2>
                        <p>Etter GDPR har du følgende rettigheter:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-foreground">Innsyn:</strong> Du kan be om å se hvilke data vi har om deg.</li>
                            <li><strong className="text-foreground">Retting:</strong> Du kan be om at uriktige opplysninger rettes.</li>
                            <li><strong className="text-foreground">Sletting:</strong> Du kan be om at dine data slettes.</li>
                            <li><strong className="text-foreground">Dataportabilitet:</strong> Du kan be om å få dine data utlevert.</li>
                            <li><strong className="text-foreground">Trekke tilbake samtykke:</strong> Du kan når som helst trekke tilbake ditt samtykke til informasjonskapsler.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Klagerett</h2>
                        <p>
                            Dersom du mener at vår behandling av personopplysninger bryter med
                            personvernregelverket, har du rett til å klage til Datatilsynet.
                            Du finner mer informasjon på{' '}
                            <a
                                href="https://www.datatilsynet.no"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                datatilsynet.no
                            </a>.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
                        <p>
                            Har du spørsmål om personvern? Ta kontakt på{' '}
                            <a href="mailto:kontakt@kisans.no" className="text-primary hover:underline">
                                kontakt@kisans.no
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
