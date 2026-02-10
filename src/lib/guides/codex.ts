import type { Guide } from './types';

export const codex: Guide = {
    slug: 'codex',
    tag: 'GUIDE \u00B7 CODEX',
    title: 'OpenAI Codex: Fra idé til kode',
    description: 'Alt du trenger å vite om OpenAI Codex. Lær hvordan du installerer og bruker kodingsagenten som skriver, feilsøker og lager pull requests for deg.',
    keywords: ['openai codex', 'codex ai', 'chatgpt koding', 'ai kodingsagent', 'gpt codex norsk', 'codex installasjon'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['claude-code', 'chatgpt', 'ai-verktoy-2026'],
    category: 'koding',
    sections: [
        {
            heading: 'Hva er Codex?',
            content: 'Codex er OpenAIs kodingsagent. Du finner den inne i ChatGPT, som et eget kommandolinjeverktøy, og som en VS Code-utvidelse. Når du gir Codex en oppgave, spinner den opp et eget skybasert miljø der den jobber med koden din helt isolert. Den kan skrive nye funksjoner, fikse feil, svare på spørsmål om kodebasen din, og lage pull requests som du ser gjennom før de merges.\n\nDen nyeste versjonen bruker GPT-5.3-Codex-modellen, som er 25 prosent raskere enn forgjengeren. Den er bygget for å støtte hele livssyklusen til programvareutvikling, fra planlegging og koding til testing og utrulling.'
        },
        {
            heading: 'Hva trenger du før du starter?',
            content: 'For å bruke Codex i ChatGPT trenger du et betalt abonnement. Plus, Pro, Business, Edu og Enterprise-planene gir alle tilgang. Gratisversjonen av ChatGPT har begrenset Codex-tilgang.\n\nVil du bruke Codex som kommandolinjeverktøy trenger du Node.js versjon 18 eller nyere installert. På macOS kan du alternativt installere via Homebrew. Uansett trenger du en ChatGPT-konto å logge inn med.'
        },
        {
            heading: 'Kom i gang med Codex',
            content: 'Det finnes tre måter å bruke Codex på, og du kan velge den som passer deg best.\n\nI ChatGPT-appen velger du bare Codex fra modellmenyen, kobler til et GitHub-repo, og gir den en oppgave. Det er den enkleste måten å komme i gang på.\n\nFor kommandolinjen installerer du med «npm install -g @openai/codex». På macOS med Homebrew kan du også kjøre «brew install --cask codex». Start verktøyet med «codex» i terminalen og logg inn med ChatGPT-kontoen din. Derfra kan du navigere til et prosjekt og begynne å gi oppgaver.\n\nDen tredje metoden er VS Code-utvidelsen, som bringer Codex rett inn i editoren din. Installer den fra markedsplassen og du har agenten tilgjengelig uten å bytte til terminalen.'
        },
        {
            heading: 'Hva kan Codex gjøre?',
            content: 'Codex kan skrive funksjoner fra beskrivelser, fikse feil basert på feilmeldinger, svare på spørsmål om hvordan kodebasen din henger sammen, lage pull requests, og kjøre tester. Den jobber i et eget sandkassemiljø i skyen, slik at den ikke kan ødelegge noe på maskinen din direkte.\n\nFor å tilpasse Codex til ditt prosjekt kan du legge inn en AGENTS.md-fil med instruksjoner om kodestil, viktige filer, og ting den bør vite. Codex støtter også MCP, som lar deg koble til tredjepartsverktøy og tjenester.'
        },
        {
            heading: 'Skills og Automations',
            content: 'To funksjoner som gjør Codex spesielt nyttig er Skills og Automations. Skills lar Codex gjøre mer enn å skrive kode. Den kan analysere og forstå hele kodebasen din, lage prototyper raskt, og skrive dokumentasjon som faktisk matcher koden.\n\nAutomations tar det enda lenger. Der jobber Codex på egen hånd uten at du trenger å be om det. Du kan sette opp automatiseringer for å sortere issues, overvåke alarmer, håndtere CI/CD-oppgaver, eller holde dokumentasjonen oppdatert. Du kan også koordinere flere Codex-agenter samtidig, der en forsker, en koder og en tester jobber i parallell.'
        },
        {
            heading: 'Priser og tilgang',
            content: 'Codex er inkludert med ChatGPT Plus (20 dollar i måneden), Pro (200 dollar i måneden), og alle bedriftsplanene. Gratisversjonen av ChatGPT gir begrenset tilgang til Codex. Tyngre bruk trekker på en pool med beregningskreditter som følger med abonnementet ditt.\n\nFor de fleste utviklere dekker Plus-planen mer enn nok. Jobber du med store prosjekter eller trenger mye kapasitet, er Pro-planen verdt å vurdere.'
        }
    ]
};
