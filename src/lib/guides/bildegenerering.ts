import type { Guide } from './types';

export const bildegenerering: Guide = {
    slug: 'bildegenerering',
    tag: 'GUIDE \u00B7 BILDEGENERERING',
    title: 'Lag bilder med AI: Midjourney og DALL-E',
    description: 'En nybegynnerguide til AI-bildegenerering. Lær å bruke Midjourney og DALL-E til å lage bilder fra tekst, med praktiske prompt-tips.',
    keywords: ['midjourney', 'dall-e', 'ai bildegenerering', 'ai bilder', 'midjourney norsk', 'bildegenerering ai', 'ai kunst', 'midjourney pris'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['chatgpt', 'prompting', 'ai-verktoy-2026'],
    category: 'kreativitet',
    sections: [
        {
            heading: 'AI som lager bilder fra tekst',
            content: 'Bildegenerering med AI har gått fra en kuriositet til et profesjonelt verktøy på kort tid. Du skriver en beskrivelse av bildet du vil ha, og AI-en genererer det i løpet av sekunder. Resultatet kan brukes til alt fra sosiale medier og presentasjoner til produktfoto og illustrasjoner.\n\nDe to mest populære verktøyene er Midjourney og DALL-E 3 (innebygd i ChatGPT). De har ulike styrker, og mange bruker begge avhengig av hva de trenger.'
        },
        {
            heading: 'Midjourney: For kunstnerisk kvalitet',
            content: 'Midjourney produserer bilder med en særegen estetisk kvalitet som mange foretrekker for kreativt arbeid. Versjon 7, den nyeste, har også fått støtte for videogenerering.\n\nDu bruker Midjourney primært gjennom Discord eller via nettsiden midjourney.com. På Discord skriver du kommandoen /imagine etterfulgt av beskrivelsen din. Nettsiden har fått et mer brukervennlig grensesnitt for de som ikke er kjent med Discord.\n\nPrisene starter på 10 dollar i måneden for Basic-planen, som gir deg rundt 200 bilder i Fast-modus. Standard til 30 dollar inkluderer Relax-modus der du kan generere ubegrenset (men tregere). Pro til 60 dollar og Mega til 120 dollar gir mer Fast-tid. Med årsabonnement sparer du 20 prosent.'
        },
        {
            heading: 'DALL-E 3: Enklest å komme i gang med',
            content: 'DALL-E 3 er OpenAIs bildegenerator og er innebygd i ChatGPT. Hvis du allerede har en ChatGPT-konto, kan du begynne å lage bilder med en gang. Bare be ChatGPT om å lage et bilde, og DALL-E 3 genererer det.\n\nFordelen med DALL-E 3 er at du kan bruke vanlig norsk for å beskrive bildet. Du trenger ikke lære spesielle kommandoer eller formater. ChatGPT tolker beskrivelsen din og oversetter den til et optimalt prompt for DALL-E.\n\nDALL-E 3 er spesielt god på tekst i bilder, noe Midjourney fortsatt sliter med. Hvis du trenger bilder med lesbar tekst, som plakater, logoer eller skilt, er DALL-E det bedre valget.\n\nDu får tilgang til DALL-E 3 gjennom ChatGPT Plus (20 dollar i måneden) eller gratis med begrensninger.'
        },
        {
            heading: 'Slik skriver du gode bilde-prompts',
            content: 'Et godt bilde-prompt har fire elementer: emne, stil, stemning og detaljer.\n\nEmne: Hva skal være i bildet? «En rød rev i en snødekt skog» er mye bedre enn bare «en rev».\n\nStil: Hvilket visuelt uttrykk vil du ha? Fotorealistisk, illustrasjon, akvarell, minimalistisk, retro. Spesifiser stilen for å styre resultatet.\n\nStemning: Hvilken følelse skal bildet gi? Varmt lys, dramatisk belysning, rolig atmosfære, energisk. Stemningsbeskrivelser påvirker resultatet overraskende mye.\n\nDetaljer: Kameravinkel, belysning, fargepalett, bakgrunn. Jo mer spesifikk du er, jo nærmere kommer resultatet det du ser for deg.\n\nEt eksempel: «Fotorealistisk bilde av en kafé i Oslo på en regnfull høstkveld, varmt lys fra vinduene, refleksjoner i våt asfalt, 35mm film-look» gir et helt annet resultat enn bare «kafé i Oslo».'
        },
        {
            heading: 'Midjourney vs. DALL-E: Når bruker du hva?',
            content: 'Midjourney er best for kunstneriske bilder, stemningsfulle illustrasjoner, konseptkunst og bilder der estetikk er viktigst. Hvis du jobber med kreativt innhold, markedsføring eller design, er Midjourney ofte det beste valget.\n\nDALL-E 3 er best for bilder med tekst, raske illustrasjoner i ChatGPT-samtaler, og situasjoner der du vil ha enkel og rask bildegenerering uten å lære nye verktøy. Det er også mer forutsigbart og følger instruksjoner mer nøyaktig.\n\nFor profesjonell bruk er det verdt å ha begge. Mange bruker Midjourney som hovedverktøy for visuelt innhold og DALL-E 3 for raske behov underveis i arbeidet.'
        },
        {
            heading: 'Rettigheter og etikk',
            content: 'Bilder generert med Midjourney og DALL-E kan brukes kommersielt med betalte planer. Med Midjourney eier du rettighetene til bildene du genererer på betalte planer. Med DALL-E 3 via ChatGPT gir OpenAI deg rettighetene til å bruke bildene kommersielt.\n\nVær oppmerksom på noen etiske hensyn. Ikke generer bilder av ekte personer uten samtykke. Vær forsiktig med bilder som kan villede eller brukes til desinformasjon. Og vær klar over at AI-genererte bilder bygger på treningsdata som inkluderer verk fra menneskelige kunstnere, noe som fortsatt er omdiskutert.\n\nFlere land og plattformer krever nå merking av AI-generert innhold. EU AI Act, som trer i kraft august 2026, har krav om transparens for AI-generert media.'
        }
    ]
};
