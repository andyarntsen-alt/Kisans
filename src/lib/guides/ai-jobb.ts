import type { Guide } from './types';

export const aiJobb: Guide = {
    slug: 'ai-jobb',
    tag: 'BLOGG \u00B7 JOBB',
    title: 'AI på arbeidsplassen: En praktisk guide',
    description: 'Slik bruker du AI-verktøy som Microsoft Copilot og Google Gemini i arbeidshverdagen. Praktiske tips for skriving, analyse og automatisering.',
    keywords: ['ai på jobb', 'ai arbeidsplassen', 'microsoft copilot jobb', 'google gemini jobb', 'ai verktøy arbeid norsk'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['ai-automasjon', 'ai-jobbsoking', 'ai-verktoy-2026'],
    category: 'jobb',
    sections: [
        {
            heading: 'Hvorfor AI på jobb?',
            content: 'Mange kjenner på usikkerheten rundt AI på arbeidsplassen. Noen er nysgjerrige men vet ikke hvor de skal begynne. Andre er bekymret for om verktøyene faktisk sparer tid, eller om de bare skaper nye problemer.\n\nSannheten er at AI-verktøyene i 2026 har blitt gode nok til å gi reell verdi i hverdagen. De skriver ikke perfekte rapporter på egenhånd, men de fjerner mye av tomgangsarbeidet. Førsteutkast, oppsummeringer, dataanalyse og møtereferater tar minutter i stedet for timer. Trikset er å vite hvilke verktøy som passer til hva, og det er det denne guiden handler om.'
        },
        {
            heading: 'Microsoft Copilot i praksis',
            content: 'Hvis bedriften din bruker Microsoft 365, er Copilot den enkleste veien inn. Det sitter rett inne i Word, Excel, PowerPoint, Outlook og Teams. Du kan be Copilot om å lage et førsteutkast av en rapport basert på stikkord, oppsummere en lang e-posttråd, generere en presentasjon fra et Word-dokument, eller analysere data i et regneark.\n\nDen kanskje mest nyttige funksjonen er møtereferater i Teams. Copilot følger med på møtet og lager automatisk et sammendrag med handlingspunkter etterpå. Det sparer enormt med tid for alle som sitter i mange møter.'
        },
        {
            heading: 'Google Gemini for Workspace',
            content: 'Jobber du i Google Workspace, er Gemini alternativet. Det fungerer i Gmail, Docs, Sheets og Slides. Gemini er spesielt sterk på analyse av store dokumenter takket være kontekstvinduen på opptil en million tokens. Du kan laste opp en hel årsrapport og stille spørsmål om innholdet.\n\nEn fordel med Gemini er at det er veldig transparent med kilder. Når det henter informasjon fra regneark eller dokumenter, lenker det tilbake til den spesifikke cellen eller avsnittet. Det gjør det enklere å stole på svarene.'
        },
        {
            heading: 'Praktiske arbeidsflyter',
            content: 'Start med de oppgavene som tar mest tid og gir minst verdi. E-postutkast er et godt sted å begynne. I stedet for å stirre på en tom skjerm, la AI-en lage et førsteutkast som du redigerer. Det samme gjelder møtereferater, statusrapporter og presentasjoner.\n\nFor dataanalyse kan du beskrive hva du leter etter i vanlig norsk, og la AI-en skrive formler eller lage visualiseringer for deg. Det er overraskende effektivt selv for folk uten teknisk bakgrunn.'
        },
        {
            heading: 'Velg riktig for din organisasjon',
            content: 'Stadig flere team bruker begge verktøyene. Gemini er sterk på research, kreativt arbeid og store filanalyser, mens Copilot er best på møter, e-post og strukturerte dokumenter. Valget handler først og fremst om hvilket økosystem organisasjonen din er bygget på. Bruker dere Microsoft 365, start med Copilot. Bruker dere Google Workspace, gå for Gemini.'
        }
    ]
};
