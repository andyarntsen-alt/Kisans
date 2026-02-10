import type { Guide } from './types';

export const gemini: Guide = {
    slug: 'gemini',
    tag: 'GUIDE \u00B7 GEMINI',
    title: 'Google Gemini: Alt du trenger å vite',
    description: 'En komplett guide til Google Gemini. Lær om gratisversjonen, abonnementer, multimodale funksjoner og hvordan Gemini integrerer med Google Workspace.',
    keywords: ['google gemini', 'gemini ai', 'gemini norsk', 'gemini gratis', 'gemini pro', 'google ai', 'gemini vs chatgpt'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['chatgpt', 'perplexity', 'notebooklm'],
    category: 'chatboter',
    sections: [
        {
            heading: 'Hva er Gemini?',
            content: 'Gemini er Googles AI-assistent, som erstattet det tidligere Bard i 2024. Det som gjør Gemini spesielt er at det er multimodalt fra grunnen av. Det betyr at det ikke bare forstår tekst, men også bilder, video, lyd og kode i samme samtale. Du kan ta bilde av en matoppskrift og be Gemini forklare den, laste opp et regneark for analyse, eller be det beskrive innholdet i en video.\n\nGemini er tilgjengelig på gemini.google.com, som app for Android og iOS, og innebygd i Google Workspace-verktøy som Gmail, Docs, Sheets og Slides.'
        },
        {
            heading: 'Priser og abonnementer',
            content: 'Google har bygget ut en trappetrinnsmodell i 2026. Gratisversjonen gir deg tilgang til grunnleggende AI-funksjoner med daglige begrensninger. Det er nok for enkle spørsmål og lett bruk.\n\nAI Plus koster rundt 5 dollar i måneden og ruller ut i stadig flere land. Det gir deg mer kapasitet og tilgang til bedre modeller enn gratisversjonen.\n\nAI Pro koster 20 dollar i måneden og er den mest populære planen. Du får et kontekstvindu på opptil en million tokens (omtrent 750 000 ord), Deep Research-funksjonen for grundig analyse, og full tilgang til de nyeste modellene.\n\nAI Ultra koster 250 dollar i måneden og er for profesjonelle som trenger maksimal kapasitet. Den gir tilgang til de mest avanserte modellene med utvidet kontekstbehandling og profesjonell video- og kodegenerering.'
        },
        {
            heading: 'Det enorme kontekstvinduet',
            content: 'Geminis største styrke er kontekstvinduet på en million tokens. I praksis betyr det at du kan laste opp en hel bok, et helt sett med forelesningsnotater, eller hundrevis av sider med dokumenter, og Gemini holder styr på alt sammen.\n\nDette gjør Gemini til det beste valget for oppgaver som krever analyse av store mengder informasjon. Du kan laste opp en årsrapport på 200 sider og stille detaljerte spørsmål om innholdet. Du kan sammenligne flere dokumenter og finne forskjeller. Eller du kan gi Gemini hele kodebasen din og be om en arkitekturgjennomgang.\n\nAndre modeller som ChatGPT og Claude har også store kontekstvinduer, men Gemini Pro var først ute med en million tokens og har optimalisert hele opplevelsen rundt det.'
        },
        {
            heading: 'Deep Research',
            content: 'Deep Research er en av funksjonene som gjør Gemini Pro verdt prisen. Når du aktiverer Deep Research, bruker Gemini mer tid på å søke gjennom flere kilder, sammenligne informasjon, og bygge et grundig svar med referanser.\n\nDet fungerer som å ha en forskningsassistent som gjør forarbeidet for deg. Si at du skal lage en rapport om AI-trender i helsesektoren. Deep Research vil gå gjennom relevante artikler, rapporter og data, og levere en strukturert oversikt med kilder du kan verifisere.\n\nDet er ikke det samme som vanlig nettsøk. Deep Research resonerer over funnene sine, identifiserer mønstre, og kan påpeke motstridende informasjon mellom kilder.'
        },
        {
            heading: 'Gemini i Google Workspace',
            content: 'Hvis du bruker Google-verktøy på jobb eller skole, er Gemini-integrasjonen en game-changer. I Gmail kan Gemini oppsummere lange e-posttråder, lage utkast til svar, og hjelpe deg med å formulere vanskelige meldinger. I Google Docs kan du be om skriveforslag, omformuleringer og oppsummeringer.\n\nI Sheets er Gemini overraskende nyttig. Du kan beskrive hva du vil analysere i vanlig norsk, og Gemini skriver formlene for deg. «Finn gjennomsnittlig salg per måned for produkter som kostet mer enn 500 kroner» blir til en ferdig formel.\n\nI Slides kan du generere presentasjoner fra stikkord eller et dokument. Kvaliteten er ikke perfekt, men som utgangspunkt sparer det mye tid.'
        },
        {
            heading: 'Tips og sammenligning med ChatGPT',
            content: 'Velg Gemini hvis du jobber mye i Google-økosystemet, trenger å analysere store dokumenter, eller vil ha den tetteste integrasjonen med tjenester du allerede bruker. Velg ChatGPT hvis du trenger størst mulig fleksibilitet, Custom GPTs, eller den beste kodingsagenten.\n\nEt godt tips er å bruke Gemini sammen med NotebookLM, som også er fra Google. NotebookLM er gratis og lar deg organisere forskningskilder i notatbøker. Gemini gir deg den brede AI-hjelpen, mens NotebookLM gir deg dybden på spesifikke temaer.\n\nUansett hvilken plan du velger, utforsk multimodaliteten. Last opp bilder, dokumenter og regneark. Det er der Gemini virkelig skinner sammenlignet med ren tekstbaserte AI-verktøy.'
        }
    ]
};
