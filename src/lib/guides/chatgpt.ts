import type { Guide } from './types';

export const chatgpt: Guide = {
    slug: 'chatgpt',
    tag: 'GUIDE \u00B7 CHATGPT',
    title: 'Kom i gang med ChatGPT',
    description: 'Alt du trenger å vite om ChatGPT i 2026. Fra gratis bruk til Plus og Pro, modellvalg, og praktiske tips for å få mest mulig ut av verktøyet.',
    keywords: ['chatgpt', 'chatgpt norsk', 'openai', 'chatgpt guide', 'chatgpt gratis', 'gpt-5', 'chatgpt plus', 'chatgpt tips'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['prompting', 'gemini', 'perplexity'],
    category: 'chatboter',
    sections: [
        {
            heading: 'Hva er ChatGPT?',
            content: 'ChatGPT er OpenAIs AI-assistent og det mest brukte AI-verktøyet i verden. Du skriver en melding, og ChatGPT svarer med tekst, kode, analyser eller kreativt innhold. Det fungerer i nettleseren på chatgpt.com, som app på mobil og nettbrett, og som desktop-app for Mac og Windows.\n\nSiden lanseringen i november 2022 har ChatGPT utviklet seg fra en enkel chatbot til en plattform med bildegenering, nettsøk, filanalyse, stemmesamtaler og en innebygd kodingsagent. I 2026 er det et genuint arbeidsverktøy for millioner av mennesker.'
        },
        {
            heading: 'Gratisversjonen vs. betalte planer',
            content: 'Gratisversjonen gir deg tilgang til den nyeste standardmodellen med daglige begrensninger. Du kan chatte, få hjelp med tekst, stille spørsmål og generere bilder med DALL-E. For mange er dette mer enn nok.\n\nPlus koster 20 dollar i måneden og gir deg tilgang til GPT-5.2, høyere bruksgrenser, prioritert tilgang når det er travelt, og avanserte funksjoner som dyp analyse og lengre samtaler. Det er den planen de fleste seriøse brukere velger.\n\nPro koster 200 dollar i måneden og er for folk som bruker ChatGPT hele dagen. Du får ubegrenset tilgang, de raskeste svartidene, og tilgang til de mest avanserte resonneringsmodellene som o3 og o4-mini. Pro er mest aktuelt for utviklere og profesjonelle som er avhengige av verktøyet i jobben.'
        },
        {
            heading: 'Modellene forklart',
            content: 'ChatGPT har flere modeller du kan velge mellom, og det kan være forvirrende i starten.\n\nGPT-5.2 er den nyeste generasjonen og er merkbart bedre på kompleks resonnering, koding og lange tekster. Den er tilgjengelig med Plus og Pro.\n\nSå har du resonneringsmodellene: o3 og o4-mini. Disse er bygget for å tenke grundig gjennom vanskelige problemer. De bruker mer tid på å analysere spørsmålet før de svarer, noe som gir bedre resultater på matte, logikk og vitenskapelige oppgaver. o4-mini er en rimeligere variant som gir mye av den samme kvaliteten.\n\nI praksis holder GPT-5.2 for de aller fleste. Bytt til o3 når du trenger ekstra grundig analyse.'
        },
        {
            heading: 'Praktisk bruk: Det du bør prøve først',
            content: 'Start med det du allerede gjør i hverdagen. Skriv e-poster raskere ved å gi ChatGPT noen stikkord og be om et utkast. Oppsummer lange artikler eller rapporter ved å lime inn teksten. Få hjelp med brainstorming ved å beskrive problemet ditt.\n\nFor studenter er ChatGPT en god sparringspartner. Be den forklare vanskelige konsepter, lag quizzer basert på pensum, eller få tilbakemelding på utkast. Husk bare å sjekke fakta, spesielt for akademiske oppgaver.\n\nFilopplasting er en av de mest undervurderte funksjonene. Du kan laste opp PDF-er, bilder, regneark og dokumenter, og ChatGPT analyserer innholdet. Det gjør den spesielt nyttig for dataanalyse uten å kunne programmere.'
        },
        {
            heading: 'Custom GPTs og minnefunksjonen',
            content: 'Custom GPTs lar deg lage skreddersydde versjoner av ChatGPT for spesifikke oppgaver. Du kan bygge en GPT som alltid svarer i en bestemt tone, har spesialkunnskap om et emne, eller følger bestemte regler. GPT Store har tusenvis av ferdige GPTs laget av andre brukere som du kan prøve gratis.\n\nMinnefunksjonen lar ChatGPT huske ting om deg mellom samtaler. Den kan huske at du skriver på norsk, at du jobber med React, eller at du foretrekker korte svar. Du styrer hva den husker og kan slette minner når som helst i innstillingene.'
        },
        {
            heading: 'Tips for bedre resultater',
            content: 'Vær spesifikk med hva du vil ha. «Skriv en profesjonell e-post til en kunde som klager på forsinkelse, maks 150 ord, vennlig men direkte tone» gir mye bedre resultater enn «Skriv en e-post».\n\nBruk oppfølgingsspørsmål. ChatGPT husker hele samtalen, så du kan bygge videre. «Gjør det kortere», «legg til et eksempel», «skriv det om for et norsk publikum» er alle gode justeringer.\n\nNår du jobber med kode, oppgi alltid språk og rammeverk. Når du jobber med tekst, oppgi målgruppe og formål. Kontekst er nøkkelen til gode svar fra AI.'
        }
    ]
};
