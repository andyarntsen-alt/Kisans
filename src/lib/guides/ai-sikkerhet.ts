import type { Guide } from './types';

export const aiSikkerhet: Guide = {
    slug: 'ai-sikkerhet',
    tag: 'BLOGG \u00B7 SIKKERHET',
    title: 'AI-sikkerhet: Deepfakes, personvern og EU AI Act',
    description: 'Forstå de viktigste sikkerhetsutfordringene med AI i 2026. Deepfakes, personvernbekymringer, og hva EU AI Act betyr for deg.',
    keywords: ['ai sikkerhet', 'deepfakes', 'eu ai act', 'ai personvern', 'ai etikk', 'ai regulering norge', 'ai sikkerhet 2026'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['ai-trender', 'lokal-ai', 'ai-agenter'],
    category: 'trender',
    sections: [
        {
            heading: 'Hvorfor AI-sikkerhet angår deg',
            content: 'AI-verktøy er fantastiske, men de kommer med reelle risikoer som alle bør kjenne til. Du trenger ikke å være teknolog for å bli påvirket av deepfakes, personvernproblemer eller AI-generert feilinformasjon. Det handler om å forstå landskapet slik at du kan beskytte deg selv og bruke verktøyene trygt.\n\nI 2026 er AI-sikkerhet ikke lenger et nisjetema for teknologer. EU regulerer AI strengt, deepfakes dukker opp i hverdagen, og spørsmål om hva som er ekte og hva som er AI-generert har blitt helt vanlige.'
        },
        {
            heading: 'Deepfakes: Når du ikke kan stole på øynene',
            content: 'Deepfakes er AI-genererte videoer, bilder eller lydklipp som ser ekte ut men er fabrikkert. Teknologien har blitt så god at folk feilidentifiserer AI-generert tekst som menneskeskapt 77 prosent av tiden, og AI-genererte stemmer forveksles med ekte stemmer 80 prosent av tiden.\n\n96 prosent av deepfake-videoer på nett er pornografiske, og kvinner er nesten alltid ofrene. Men deepfakes brukes også til svindel, desinformasjon og manipulering av offentlig debatt. AI-genererte stemmekloner brukes til telefonsvindel der noen utgir seg for å være en kollega eller et familiemedlem.\n\nHvordan beskytter du deg? Vær skeptisk til oppsiktsvekkende videoer og lydklipp, spesielt på sosiale medier. Sjekk kilden. Bruk omvendt bildesøk. Og vær klar over at selv det som ser helt ekte ut, kan være generert.'
        },
        {
            heading: 'Personvern: Hva skjer med dataene dine?',
            content: 'Når du bruker AI-verktøy i skyen, sender du data til en server eid av et annet selskap. De fleste seriøse AI-selskaper har personvernregler som sier at de ikke bruker enkeltbrukeres data til trening, men det finnes unntak og gråsoner.\n\nMeta AI (innebygd i Facebook og Instagram) har vist at prompts kan bli synlige for andre i en «Discover»-feed. Det betyr at spørsmål du stiller AI-en potensielt kan kobles til profilen din. Personlige eller forretningsmessig sensitive spørsmål risikerer å bli offentlig tilgjengelige.\n\nFor å beskytte deg: les personvernerklæringen til verktøyet du bruker. Unngå å dele sensitive data som personnummer, passord eller konfidensiell forretningsinformasjon med AI-chatboter. For sensitiv informasjon, vurder lokale AI-verktøy som Ollama eller LM Studio der ingenting forlater maskinen din.'
        },
        {
            heading: 'EU AI Act: Ny regulering fra august 2026',
            content: 'EU AI Act er verdens første omfattende AI-lovgivning og trer i kraft stegvis. I august 2026 begynner de fleste reglene å gjelde, inkludert krav til høyrisiko AI-systemer, transparensregler og innovasjonsstøtte.\n\nDe viktigste punktene for vanlige brukere: AI-generert innhold skal merkes tydelig, med unntak for kunst og journalistikk. AI-systemer som vurderer jobbsøkere, kredittverdighet eller lignende anses som høyrisiko og må oppfylle strenge krav til transparens og nøyaktighet. AI-systemer som manipulerer mennesker eller utnytter sårbare grupper er forbudt.\n\nNorge implementerer EU AI Act gjennom EØS-avtalen. Digitaliseringsdepartementet publiserte utkast til en norsk AI-lov i juni 2025, med planlagt ikrafttredelse august 2026. Det betyr at de samme reglene gjelder i Norge som i resten av EU.'
        },
        {
            heading: 'Hvordan du bruker AI trygt',
            content: 'Ikke del personlig eller sensitiv informasjon med AI-chatboter med mindre du er sikker på personvernpolicyen. Bruk aldri AI-verktøy til å behandle andres personopplysninger uten grunnlag.\n\nVær kritisk til informasjon du får fra AI. Modellene kan hallusinere, altså presentere feil informasjon som fakta. Sjekk alltid viktige påstander mot andre kilder, spesielt for helse, juss og økonomi.\n\nBruk sterke passord og tofaktorautentisering på AI-kontoene dine. Kontoene inneholder samtalehistorikk som kan være sensitiv.\n\nHold deg oppdatert på regelverket. EU AI Act og norsk AI-lov vil påvirke hvordan verktøyene fungerer og hva du kan bruke dem til. De fleste endringene er positive for brukere, men det er lurt å vite hva som gjelder.\n\nOg til slutt: bruk sunn fornuft. De samme prinsippene som gjelder på internett generelt, gjelder for AI. Vær skeptisk, beskytt informasjonen din, og tenk deg om før du deler.'
        }
    ]
};
