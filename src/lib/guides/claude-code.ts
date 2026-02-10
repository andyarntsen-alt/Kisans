import type { Guide } from './types';

export const claudeCode: Guide = {
    slug: 'claude-code',
    tag: 'GUIDE \u00B7 CLAUDE CODE',
    title: 'Kom i gang med Claude Code',
    description: 'Lær hvordan du installerer og bruker Claude Code til å skrive, feilsøke og forbedre kode rett fra terminalen eller VS Code. En komplett guide fra null til produktiv.',
    keywords: ['claude code', 'ai koding', 'anthropic', 'kodeverktøy', 'terminal ai', 'claude code guide norsk', 'claude code installasjon', 'claude code vs code'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['codex', 'github-copilot', 'prompting'],
    category: 'koding',
    sections: [
        {
            heading: 'Hva er Claude Code?',
            content: 'Claude Code er et kodeverktøy fra Anthropic som kjører direkte i terminalen din. Det er ikke en vanlig chatbot der du kopierer og limer kode frem og tilbake. Du gir det en oppgave, og så finner det ut selv hvilke filer som må leses, hva som skal endres, og kjører testene etterpå for å sjekke at alt fungerer. Verktøyet ble lansert i februar 2025 og er nå et av de mest brukte AI-kodeverktøyene blant utviklere.\n\nDet som gjør Claude Code spesielt er at det er agentisk. Du kan si noe som «legg til en innloggingsside med skjemavalidering», og så tar verktøyet seg av resten. Det leser kodebasen din, planlegger endringene, skriver koden, og kan til og med committe og lage pull requests for deg.'
        },
        {
            heading: 'Hva trenger du før du starter?',
            content: 'Du trenger en datamaskin med macOS, Linux eller Windows. Du trenger en internettforbindelse. Og du trenger en Anthropic-konto, som er gratis å opprette på anthropic.com.\n\nDen gode nyheten er at du ikke trenger å installere Node.js eller noe annet på forhånd. Claude Code har nå en egen installerer som ordner alt for deg. Hvis du har brukt terminalen før er det en fordel, men det er ikke et krav. Vi går gjennom alt steg for steg.'
        },
        {
            heading: 'Installasjon steg for steg',
            content: 'Den anbefalte måten å installere Claude Code på er med den offisielle installereren. Gå til claude.com/download og last ned versjonen for ditt operativsystem. På macOS og Linux kjører du installscriptet direkte i terminalen. På Windows bruker du PowerShell eller ledeteksten.\n\nHvis du bruker macOS og har Homebrew installert, kan du også kjøre «brew install claude-code» i terminalen. Det er like enkelt.\n\nDen gamle metoden med npm (npm install -g @anthropic-ai/claude-code) fungerer fortsatt, men er ikke lenger anbefalt. Den krever Node.js versjon 18 eller nyere, og Anthropic har gått bort fra denne metoden til fordel for den native installereren.\n\nNår installasjonen er ferdig, skriv «claude --version» i terminalen for å bekrefte at alt er på plass.'
        },
        {
            heading: 'Innlogging og autentisering',
            content: 'Det finnes to måter å logge inn på, og den du velger avhenger av hva som passer deg best.\n\nDen enkleste metoden er å bruke et Claude-abonnement. Hvis du har Claude Pro (20 dollar i måneden), Max (100 eller 200 dollar i måneden), eller Team (30 dollar per bruker), er Claude Code inkludert. Kjør «claude login» i terminalen og logg inn med kontoen din. Da bruker du Claude Code uten å tenke på API-kostnader.\n\nDen andre metoden er å bruke en API-nøkkel. Gå til console.anthropic.com, opprett en nøkkel under «API Keys», og kopier den med en gang. Du ser den bare én gang. Sett den som en miljøvariabel i terminalen din, og Claude Code finner den automatisk. Med denne metoden betaler du per bruk, og en vanlig kodeøkt koster typisk mellom 5 og 50 kroner.'
        },
        {
            heading: 'Ditt første prosjekt med Claude Code',
            content: 'Åpne terminalen og naviger til en mappe der du vil jobbe. Skriv «claude» og trykk Enter. Første gang du starter vil verktøyet be deg godkjenne tilkoblingen.\n\nPrøv noe enkelt: skriv «Lag en enkel nettside med en knapp som teller klikk». Claude Code vil lage filene for deg, skrive HTML, CSS og JavaScript, og fortelle deg hva den har gjort. Du kan åpne filen i nettleseren og se resultatet med en gang.\n\nEn viktig ting å forstå er tillatelsessystemet. Claude Code spør deg før den gjør noe som endrer filer eller kjører kommandoer. Du ser hva den planlegger å gjøre og kan godkjenne eller avvise. Det gir deg full kontroll over hva som faktisk skjer på maskinen din.'
        },
        {
            heading: 'Claude Code i VS Code',
            content: 'Hvis du foretrekker å jobbe i en editor fremfor ren terminal, har Claude Code en offisiell VS Code-utvidelse. Installer den ved å trykke Cmd+Shift+X (eller Ctrl+Shift+X på Windows), søk etter «Claude Code», og klikk installer.\n\nUtvidelsen gir deg noen fine fordeler. Du ser endringene Claude Code foreslår som inline diffs, altså rød og grønn markering der kode fjernes og legges til. Du kan se over alt før du godkjenner. Det finnes et checkpoint-system som lagrer tilstanden til koden din før hver endring, slik at du kan spole tilbake til et hvilket som helst punkt med «Esc Esc» eller /rewind-kommandoen.\n\nDu kan også åpne flere samtaler i separate faner hvis du jobber med forskjellige oppgaver samtidig.'
        },
        {
            heading: 'Kommandoer og moduser',
            content: 'Claude Code har en rekke nyttige kommandoer som starter med skråstrek. De viktigste er /help som viser alle tilgjengelige kommandoer, /clear som tømmer samtalehistorikken, /compact som komprimerer konteksten når samtalen blir lang, og /model som lar deg bytte mellom AI-modeller.\n\nDet finnes tre moduser som styrer hvor mye frihet Claude Code har. Normal modus er standarden, der verktøyet spør om tillatelse før hver handling. Plan-modus lar Claude Code beskrive hva den vil gjøre uten å faktisk gjøre det, slik at du kan se over planen først. Auto-accept-modus lar den kjøre fritt uten å spørre, noe som er nyttig når du stoler på at oppgaven er enkel og trygg.'
        },
        {
            heading: 'Tips for å få mest mulig ut av det',
            content: 'Lag en CLAUDE.md-fil i prosjektmappen din. Der kan du skrive instruksjoner som Claude Code leser automatisk, for eksempel hvilke konvensjoner prosjektet følger, hvilke mapper som er viktige, eller ting den bør unngå.\n\nBruk plan-modus (/plan) før du setter i gang med store endringer. Da kan du se over tilnærmingen og justere før noe kode faktisk endres. Commit arbeidet ditt regelmessig, spesielt før store refaktoreringer, slik at du enkelt kan angre hvis noe går galt.\n\nNår samtalen blir lang, bruk /compact for å spare på token-bruken. Og utforsk gjerne Skills og MCP-integrasjoner, som lar Claude Code koble seg til tredjepartsverktøy og utvide hva den kan gjøre.'
        }
    ]
};
