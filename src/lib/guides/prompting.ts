import type { Guide } from './types';

export const prompting: Guide = {
    slug: 'prompting',
    tag: 'GUIDE \u00B7 PROMPTING',
    title: 'Prompt engineering for nybegynnere',
    description: 'Lær kunsten å skrive gode prompts som gir deg presise og nyttige svar fra AI. En nybegynnerguide til prompt engineering med praktiske eksempler.',
    keywords: ['prompt engineering', 'skrive gode prompts', 'ai prompts norsk', 'prompt tips', 'prompt engineering nybegynner', 'prompt guide'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['chatgpt', 'claude-code', 'ai-verktoy-2026'],
    category: 'kreativitet',
    sections: [
        {
            heading: 'Hva er en prompt, egentlig?',
            content: 'Når du skriver noe til ChatGPT, Claude eller en annen AI, skriver du en prompt. Det er rett og slett instruksjonen eller spørsmålet du sender inn. Det kan virke banalt, men måten du formulerer deg på har enorm betydning for hva du får tilbake.\n\nTenk på det slik: hvis du ber noen «fortell meg om hunder», kan svaret bli hva som helst. Men hvis du sier «forklar meg forskjellen mellom labrador og golden retriever for noen som vurderer å skaffe familiehund», får du et mye mer nyttig svar. Samme prinsipp gjelder for AI. Kvalitet inn gir kvalitet ut.'
        },
        {
            heading: 'Ditt første gode prompt',
            content: 'Her er et konkret eksempel. Si at du trenger hjelp med en tekst.\n\nDårlig prompt: «Skriv om hunder.»\n\nBra prompt: «Skriv en kort tekst på 200 ord om hvorfor golden retrievere er populære familiehunder, skrevet for noen som vurderer å skaffe hund for første gang.»\n\nForskjellen er at det andre promptet er spesifikt. Det sier hva du vil ha (en kort tekst), hvor langt det skal være (200 ord), hva temaet er (golden retrievere som familiehunder), og hvem det er for (noen som vurderer å skaffe hund). Jo mer kontekst du gir, jo bedre blir resultatet.'
        },
        {
            heading: 'Fem teknikker som fungerer',
            content: 'Vær spesifikk. Si nøyaktig hva du vil ha, hvor langt det skal være, og hvilken tone du er ute etter.\n\nGi kontekst. Fortell AI-en hvem du skriver for, hva formålet er, og hvilke begrensninger som gjelder. «Skriv for en norsk leser uten teknisk bakgrunn» er mye bedre enn å bare be om en forklaring.\n\nDefiner formatet. Si om du vil ha avsnitt, en liste, kode, JSON eller en tabell. AI-en tilpasser seg det du ber om.\n\nGi eksempler. Hvis du vil at AI-en skal følge et bestemt mønster, vis det med ett eller to eksempler først. «Oversett disse fra norsk til engelsk: Hund = Dog. Katt = Cat. Bil = ?» Da skjønner den mønsteret.\n\nBe om steg-for-steg-tenking. For komplekse spørsmål, skriv «tenk gjennom dette steg for steg» eller «forklar resonnementet ditt». Det tvinger AI-en til å jobbe seg systematisk gjennom problemet, og svaret blir nesten alltid bedre.'
        },
        {
            heading: 'Rolle-prompting',
            content: 'En av de enkleste måtene å forbedre svarene på er å gi AI-en en rolle. «Du er en erfaren barnelege» gir helt andre svar enn «Du er en medisinsk forsker», selv om spørsmålet er det samme. Barnelegen forklarer enkelt, forskeren er mer teknisk.\n\nNoen eksempler som fungerer godt: «Skriv som en journalist i Aftenposten» for en nøytral, nyhetspreget tone. «Du er en tålmodig mattelærer for ungdomsskoleelever» for pedagogiske forklaringer. «Du er en seniorutvikler som gjør kodegjennomgang» for konstruktiv kodekritikk.\n\nRolle-prompting fungerer fordi det gir AI-en en ramme å svare innenfor. Det er som å gi noen en rollebeskrivelse før de begynner å jobbe.'
        },
        {
            heading: 'Tips for kodeprompts',
            content: 'Når du ber AI om hjelp med kode, oppgi alltid hvilket språk og rammeverk du bruker. «Skriv en React-komponent med TypeScript som viser en brukerliste» er mye bedre enn «Lag en komponent som viser brukere».\n\nInkluder feilmeldinger ordrett når du feilsøker. Beskriv hva du forventet skulle skje og hva som faktisk skjer. Og be gjerne AI-en om å forklare koden den skriver, slik at du lærer i tillegg til å få løsningen.'
        },
        {
            heading: 'Når svaret ikke er bra nok',
            content: 'Det viktigste å huske er at prompt engineering er en samtale, ikke en engangsforespørsel. Hvis det første svaret ikke treffer, juster og prøv igjen. «Gjør det kortere.» «Forklar det enklere.» «Gi meg tre alternative tilnærminger.» «Fjern den tekniske sjargongen.»\n\nDu kan også be AI-en om å evaluere sitt eget svar: «Hva er svakhetene i svaret du nettopp ga?» Det gir deg et nytt perspektiv og hjelper deg å stille bedre oppfølgingsspørsmål.\n\nDen beste prompten er sjelden den første du skriver. Se på det som en iterativ prosess der du gradvis finjusterer til du får det du trenger.'
        }
    ]
};
