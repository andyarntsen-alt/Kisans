import type { Guide } from './types';

export const githubCopilot: Guide = {
    slug: 'github-copilot',
    tag: 'GUIDE \u00B7 GITHUB COPILOT',
    title: 'GitHub Copilot: AI-hjelp i editoren',
    description: 'En komplett guide til GitHub Copilot. Lær om gratisversjonen, kodekomplettering, Copilot Chat og hvordan du bruker det i VS Code.',
    keywords: ['github copilot', 'copilot ai', 'copilot gratis', 'copilot vs code', 'ai kodehjelp', 'github copilot norsk', 'copilot pris'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['claude-code', 'cursor', 'codex'],
    category: 'koding',
    sections: [
        {
            heading: 'Hva er GitHub Copilot?',
            content: 'GitHub Copilot er en AI-assistent som hjelper deg å skrive kode raskere, tilgjengelig på github.com/features/copilot. Den sitter inne i editoren din og foreslår kode mens du skriver, omtrent som autokorrektur for programmering. Du begynner å skrive en funksjon, og Copilot fullfører den basert på konteksten i filen og prosjektet ditt.\n\nCopilot støtter de fleste populære editorer: VS Code, Visual Studio, JetBrains-produkter som IntelliJ og PyCharm, Neovim, og Eclipse. De fleste bruker det i VS Code, der opplevelsen er best.'
        },
        {
            heading: 'Gratisplanen: Mer enn du tror',
            content: 'GitHub lanserte en gratisplan som gir deg 2000 kodekompletteringer og 50 premium-forespørsler per måned. For hobbyprosjekter og lettere bruk er dette ofte nok.\n\nKodekompletteringer er forslagene som dukker opp mens du skriver. 2000 høres kanskje ut som lite, men hver komplettering kan være alt fra en enkelt linje til en hel funksjon. For de fleste som ikke koder hele dagen rekker det langt.\n\nPremium-forespørsler er de mer avanserte tingene: Copilot Chat, kodeanmeldelser, og bruk av tyngre modeller. 50 i måneden er nok til å prøve ut funksjonene, men seriøse utviklere vil raskt merke at det ikke strekker til.\n\nStudenter, lærere og bidragsytere til åpen kildekode kan få Copilot gratis gjennom GitHub Education.'
        },
        {
            heading: 'Pro og Pro+',
            content: 'Pro koster 10 dollar i måneden og gir deg ubegrenset kodekomplettering og 300 premium-forespørsler. Det er planen de fleste profesjonelle utviklere bruker. Du får tilgang til Copilot Chat, kodeanmeldelser, og valg mellom flere AI-modeller.\n\nPro+ koster 39 dollar i måneden og øker premium-forespørslene til 1500. Du får også tilgang til de kraftigste modellene som Claude Opus 4.6 og OpenAI o3. Denne planen er for utviklere som bruker Copilot intensivt og vil ha de beste modellene tilgjengelig.\n\nFor team er det Business-planen til 19 dollar per bruker per måned, og Enterprise til 39 dollar som inkluderer egne modeller og kunnskapsbaser.'
        },
        {
            heading: 'Slik kommer du i gang i VS Code',
            content: 'Installer Copilot-utvidelsen i VS Code ved å trykke Cmd+Shift+X (eller Ctrl+Shift+X på Windows), søk etter «GitHub Copilot», og klikk installer. Logg inn med GitHub-kontoen din når du blir bedt om det.\n\nNå begynner magien. Åpne en kodefil og begynn å skrive. Du ser grå tekst som viser hva Copilot foreslår. Trykk Tab for å godta forslaget, eller fortsett å skrive for å ignorere det. Det er virkelig så enkelt.\n\nFor Copilot Chat, åpne sidepanelet og still spørsmål om koden din. «Forklar hva denne funksjonen gjør», «Skriv en test for denne komponenten», eller «Refaktorer dette til å bruke async/await» er alle gode startpunkter.'
        },
        {
            heading: 'Copilot Chat og kodeanmeldelse',
            content: 'Copilot Chat er mer enn bare en chatbot i editoren. Den forstår koden din og kan svare på spørsmål om prosjektet. Marker en kodeblokk, høyreklikk, og velg «Ask Copilot» for å få hjelp med akkurat den delen.\n\nKodeanmeldelse er en nyere funksjon der Copilot gjennomgår endringene dine og gir forslag til forbedringer. Den kan oppdage potensielle bugs, foreslå bedre navngiving, og påpeke sikkerhetsproblemer. Det erstatter ikke en menneskelig kodegjennomgang, men det fanger opp mye av det opplagte.\n\nCopilot har også fått en minnefunksjon som husker dine preferanser og kodestil mellom økter. Over tid blir forslagene mer tilpasset din måte å kode på.'
        },
        {
            heading: 'Copilot vs. Claude Code vs. Cursor',
            content: 'Copilot er best som en diskret hjelper som sitter i bakgrunnen og foreslår kode mens du skriver. Det er minst forstyrrende og passer best for utviklere som vil beholde full kontroll.\n\nClaude Code er en agentisk løsning der du gir større oppgaver og lar AI-en håndtere dem selvstendig. Det er kraftigere for store endringer, men du gir fra deg mer kontroll.\n\nCursor er en hel editor bygget rundt AI, med dypere integrasjon enn Copilot kan tilby som en utvidelse. Det er det mest AI-native alternativet.\n\nMange utviklere bruker Copilot for hverdagskoding og bytter til Claude Code eller Cursor for større oppgaver. Det trenger ikke å være et enten-eller-valg.'
        }
    ]
};
