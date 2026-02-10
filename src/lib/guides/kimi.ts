import type { Guide } from './types';

export const kimi: Guide = {
    slug: 'kimi',
    tag: 'GUIDE \u00B7 KIMI',
    title: 'Kimi: AI-assistenten for research',
    description: 'Lær om Kimi fra Moonshot AI. En komplett guide til AI-assistenten med lang kontekst som er perfekt for research, oppsummering og dokumentanalyse.',
    keywords: ['kimi ai', 'moonshot ai', 'lang kontekst ai', 'kimi research', 'kimi norsk guide', 'kimi k2.5'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['perplexity', 'gemini', 'rag-forklart'],
    category: 'chatboter',
    sections: [
        {
            heading: 'Hva er Kimi?',
            content: 'Kimi er en AI-assistent laget av det kinesiske selskapet Moonshot AI. Tenk på det som en forskningsassistent som kan lese hele bøker på en gang. Mens mange AI-modeller sliter med lange dokumenter og mister tråden halvveis, ble Kimi designet fra starten for å håndtere store mengder tekst.\n\nDu kan bruke Kimi gratis på kimi.com. Det finnes også apper for iPhone og Android. For de fleste er nettsiden det enkleste stedet å starte.'
        },
        {
            heading: 'Tre måter å bruke Kimi på',
            content: 'Kimi har tre moduser som passer til ulike situasjoner. Instant-modus gir deg raske svar på enkle spørsmål, omtrent som en vanlig chatbot. Thinking-modus tar seg bedre tid og resonerer steg for steg, noe som gir bedre svar på komplekse spørsmål. Det ligner på å be noen tenke seg om før de svarer.\n\nDen mest spennende modusen er Agentic. Der bruker Kimi verktøy, søker på nettet, og kan koordinere det Moonshot kaller en «Agent Swarm». Det betyr at opptil hundre spesialiserte AI-agenter kan jobbe sammen på oppgaven din samtidig, noe som gjør den ekstremt rask på store prosjekter.'
        },
        {
            heading: 'K2.5: Den nyeste versjonen',
            content: 'I januar 2026 kom K2.5, som er en stor oppgradering. Modellen har rundt en billion parametere totalt, men bruker en teknikk som heter Mixture of Experts der bare 32 milliarder parametere er aktive per forespørsel. Det gjør den både kraftig og effektiv.\n\nK2.5 har fått støtte for bilder gjennom MoonViT, en visjonsmodul som lar den analysere skjermbilder, diagrammer, dokumenter og bilder. Agent Swarm-teknologien lar den koordinere opptil hundre agenter samtidig, noe som kan kutte behandlingstiden med opptil 4,5 ganger.\n\nModellen er dessuten åpen kildekode, noe som betyr at forskere og utviklere kan laste den ned og kjøre den selv.'
        },
        {
            heading: 'Hva er Kimi best på?',
            content: 'Kimi er perfekt for deg som jobber med mye tekst. Research der du trenger å gå gjennom mange artikler, oppsummering av lange rapporter, eller analyse av dokumenter du har liggende. Den bruker en teknikk kalt Delta Attention som reduserer minnebruken og gjør den raskere på lange tekster enn de fleste konkurrentene.\n\nFor studenter og forskere er Kimi et godt supplement til Perplexity. Mens Perplexity er best på å finne nye kilder, er Kimi best på å forstå og analysere dokumenter du allerede har. Kombiner de to, og du har et veldig sterkt oppsett for akademisk arbeid.'
        },
        {
            heading: 'Slik kommer du i gang',
            content: 'Den raskeste veien er å gå til kimi.com og lage en konto. Du kan begynne å chatte med en gang, og gratisnivået gir deg en god del bruk. Kimi finnes også som app på iOS og Android.\n\nFor utviklere er API-et tilgjengelig via platform.moonshot.ai. Prisene er konkurransedyktige: 0,60 dollar per million input-tokens og 2,50 dollar per million output-tokens. Det gjør Kimi til et rimelig alternativ for prosjekter som trenger lang kontekst.'
        },
        {
            heading: 'Tips og begrensninger',
            content: 'Kimi fungerer best på engelsk og kinesisk. Norsk fungerer, men du får bedre resultater hvis du skriver promptene dine på engelsk og ber om svar på norsk. Det er en liten omvei, men kvalitetsforskjellen er merkbar.\n\nBruk Kimi sammen med andre verktøy, ikke som erstatning. Styrken er lang kontekst og dokumentanalyse. For generell skriving eller koding er ChatGPT og Claude bedre valg. Men for det Kimi er god på, er det vanskelig å slå.'
        }
    ]
};
