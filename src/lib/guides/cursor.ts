import type { Guide } from './types';

export const cursor: Guide = {
    slug: 'cursor',
    tag: 'GUIDE \u00B7 CURSOR',
    title: 'Cursor: Den AI-drevne editoren',
    description: 'En komplett guide til Cursor IDE. Lær hvordan denne AI-native kodeditoren fungerer, hva den koster, og hvordan den skiller seg fra VS Code med Copilot.',
    keywords: ['cursor ide', 'cursor ai', 'cursor editor', 'cursor vs copilot', 'ai kodeeditor', 'cursor norsk', 'cursor pris'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['github-copilot', 'claude-code', 'v0-og-bolt'],
    category: 'koding',
    sections: [
        {
            heading: 'Hva er Cursor?',
            content: 'Cursor er en kodeeditor bygget fra grunnen av med AI i kjernen. Den er basert på VS Code, så alt du er vant til derfra fungerer her også. Utvidelser, tastatursnarveier, temaer. Men i tillegg har Cursor AI dypt integrert i hele opplevelsen, fra kodekomplettering til store refaktoreringer.\n\nDet som gjør Cursor annerledes enn å bare installere en AI-utvidelse i VS Code, er at editoren er designet rundt AI-arbeidsflyten. Den forstår hele prosjektet ditt, ikke bare filen du har åpen, og kan gjøre endringer på tvers av flere filer samtidig.'
        },
        {
            heading: 'Priser og planer',
            content: 'Hobby-planen er gratis og gir deg begrensede daglige kompletteringer og en to ukers prøveperiode med Pro-funksjoner. Det er nok til å teste om Cursor passer for deg.\n\nPro koster 20 dollar i måneden og er det de fleste velger. Du får ubegrenset Tab-komplettering, Agent-modus, Composer, og tilgang til flere AI-modeller. Det inkluderer 500 premium-forespørsler per måned.\n\nBusiness koster 40 dollar per bruker per måned og legger til teamfunksjoner som delt kodebase-indeksering og administrasjon.\n\nUltra til 200 dollar i måneden gir deg maksimal kapasitet for de som bruker Cursor hele dagen.'
        },
        {
            heading: 'Tab: Smart kodekomplettering',
            content: 'Tab er Cursors kodekomplettering, og den er merkbart bedre enn det du får med standard AI-utvidelser. I stedet for å bare fullføre den neste linjen, ser Tab på hele konteksten i prosjektet ditt.\n\nDen foreslår ikke bare kode du skal legge til. Den kan foreslå endringer i eksisterende kode, flytte kodeblokker, og tilpasse forslag basert på kodebasen din. Over tid lærer den mønstrene i prosjektet ditt og gir stadig mer relevante forslag.\n\nI praksis føles det som å pare med en utvikler som kjenner prosjektet ditt godt. Du begynner å skrive, og Tab fyller ut resten med kode som faktisk passer inn.'
        },
        {
            heading: 'Agent-modus og Composer',
            content: 'Agent-modus er der Cursor virkelig skiller seg ut. Du beskriver en oppgave, og Cursor jobber seg gjennom den autonomt. Den leser relevante filer, planlegger endringene, implementerer dem, og kan kjøre tester underveis. Alt mens du ser hva som skjer.\n\nComposer lar deg gjøre endringer på tvers av flere filer i en sammenhengende operasjon. I stedet for å redigere fil for fil, beskriver du hva du vil oppnå, og Composer finner og endrer alle filene som påvirkes. Det er spesielt nyttig for refaktoreringer og nye funksjoner som berører mange deler av kodebasen.\n\nVersjon 2.4 fra januar 2026 la til Subagents som lar Cursor delegere deloppgaver til spesialiserte agenter, og Skills som lar den lære tilbakevendende oppgaver.'
        },
        {
            heading: 'Multi-modell og MCP',
            content: 'Cursor lar deg bruke flere AI-modeller og til og med kjede dem sammen. Du kan bruke Claude for kodeskrivning, GPT for forklaringer, og Gemini for analyse, alt i samme prosjekt. Cursor velger automatisk den beste modellen for oppgaven, eller du kan velge manuelt.\n\nMCP-støtte (Model Context Protocol) lar deg koble Cursor til eksterne verktøy og tjenester. Det betyr at Cursor kan hente data fra databaser, API-er, filsystemer og andre kilder som en del av arbeidsflyten sin. MCP-administrasjon ble forbedret i januar 2026 med bedre oppsett og styring.'
        },
        {
            heading: 'Cursor vs. VS Code + Copilot',
            content: 'Det store spørsmålet mange stiller er om Cursor er verdt å bytte til fra VS Code med Copilot.\n\nCursor er bedre på store oppgaver. Agent-modus og Composer gir deg en erfaring som Copilot ikke matcher som utvidelse. Kodebase-forståelsen er dypere, og multi-fil-endringer er sømløse.\n\nCopilot er bedre som en diskret hjelper som ikke forstyrrer flyten din. Den er rimeligere (10 dollar vs. 20 dollar), og du slipper å bytte editor.\n\nMange utviklere bruker begge: Copilot for hverdagsarbeid i VS Code, og Cursor når de trenger tyngre AI-assistanse. Siden Cursor er basert på VS Code kan du enkelt veksle mellom dem.'
        }
    ]
};
