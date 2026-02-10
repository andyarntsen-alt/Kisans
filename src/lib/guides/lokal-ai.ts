import type { Guide } from './types';

export const lokalAi: Guide = {
    slug: 'lokal-ai',
    tag: 'BLOGG \u00B7 PERSONVERN',
    title: 'Kjør AI på din egen maskin',
    description: 'Lær hvordan du kjører AI-modeller lokalt med Ollama og LM Studio. Ingen abonnement, full personvern, og det fungerer uten internett.',
    keywords: ['lokal ai', 'ollama', 'lm studio', 'privat ai', 'kjør ai lokalt', 'ai uten internett', 'ai personvern', 'lokale ai modeller'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['ai-sikkerhet', 'ai-verktoy-2026', 'chatgpt'],
    category: 'forsta-ai',
    sections: [
        {
            heading: 'Hvorfor kjøre AI lokalt?',
            content: 'Når du bruker ChatGPT, Claude eller Gemini, sender du dataene dine til en server i skyen. For de fleste er det helt greit. Men noen ganger har du informasjon du ikke vil dele med noen: forretningshemmeligheter, personlig data, medisinske dokumenter, eller sensitive kodeprosjekter.\n\nLokal AI løser dette. Du laster ned en AI-modell og kjører den på din egen maskin. Ingenting forlater datamaskinen din. Ingen abonnementskostnader, ingen bruksbegrensninger, og det fungerer selv uten internett.\n\nDe lokale modellene er ikke like kraftige som Claude eller GPT-5, men for mange oppgaver er de mer enn gode nok. Og for situasjoner der personvern er avgjørende, er lokalt det eneste riktige valget.'
        },
        {
            heading: 'Ollama: For kommandolinjen',
            content: 'Ollama er det mest populære verktøyet for å kjøre AI-modeller lokalt. Det er gratis, åpen kildekode, og fungerer på macOS, Linux og Windows.\n\nInstallasjonen er enkel. På macOS laster du ned fra ollama.com eller kjører «brew install ollama» i terminalen. På Linux kjører du et installscript. På Windows laster du ned installereren.\n\nNår Ollama er installert, laster du ned en modell med «ollama pull llama3.2» i terminalen. Llama 3.2 fra Meta er en god startmodell som balanserer kvalitet og ytelse. Start en samtale med «ollama run llama3.2» og du er i gang.\n\nOllama støtter GPU-akselerasjon med NVIDIA (CUDA), Apple Silicon (Metal) og AMD (ROCm), noe som gir mye raskere svar enn ren CPU-kjøring.'
        },
        {
            heading: 'LM Studio: For deg som foretrekker GUI',
            content: 'Hvis du ikke er komfortabel med terminalen, er LM Studio det beste alternativet. Det er et desktop-program med et grafisk grensesnitt der du kan søke etter, laste ned og kjøre modeller uten å skrive en eneste kommando.\n\nLM Studio har en innebygd chat som ligner på ChatGPT. Du velger en modell fra biblioteket, laster den ned med et klikk, og begynner å chatte. Det finnes hundrevis av modeller tilgjengelig, og LM Studio hjelper deg å velge en som passer maskinvaren din.\n\nProgrammet er gratis for personlig bruk og tilgjengelig for macOS, Windows og Linux. Nedlasting fra lmstudio.ai.'
        },
        {
            heading: 'Hvilke modeller fungerer best lokalt?',
            content: 'Modellvalget avhenger av maskinvaren din. Hovedregelen er: jo mer RAM og jo bedre grafikkort, desto kraftigere modeller kan du kjøre.\n\nMed 8 GB RAM kan du kjøre små modeller som Llama 3.2 3B og Phi-3 Mini. De er raske og håndterer enkel chat, oppsummering og lettere koding.\n\nMed 16 GB RAM åpner det seg for mellomstore modeller som Llama 3.1 8B og Mistral 7B. Disse gir merkbart bedre kvalitet og håndterer de fleste daglige oppgaver godt.\n\nMed 32 GB RAM eller mer kan du kjøre større modeller som Llama 3.1 70B (kvantisert) og Mixtral. Disse nærmer seg kvaliteten til skybaserte tjenester for mange oppgaver.\n\nApple Silicon-maskiner (M1, M2, M3, M4) er spesielt godt egnet for lokal AI på grunn av den delte minnearkitekturen som gir GPU-en tilgang til all tilgjengelig RAM.'
        },
        {
            heading: 'Hva kan du bruke lokal AI til?',
            content: 'Dokumentanalyse er en av de sterkeste bruksområdene. Du kan analysere kontrakter, rapporter eller sensitive dokumenter uten at innholdet forlater maskinen din.\n\nKoding fungerer overraskende bra med lokale modeller. CodeLlama og DeepSeek Coder kan hjelpe med kodekomplettering, feilsøking og forklaringer direkte i utviklingsmiljøet ditt.\n\nSkriving og oversettelse er oppgaver der selv mindre modeller leverer godt. Førsteutkast, omformuleringer og korrekturlesing fungerer fint lokalt.\n\nOllama har et API som er kompatibelt med OpenAIs format, noe som betyr at verktøy som er laget for ChatGPT ofte fungerer med Ollama også. Det gir deg tilgang til et stort økosystem av tredjepartsverktøy.'
        },
        {
            heading: 'Begrensninger og tips',
            content: 'Lokale modeller er ikke like gode som de store skymodellene på kompleks resonnering, kreativ skriving og svært spesialiserte oppgaver. For de fleste hverdagsoppgaver er forskjellen liten, men for det mest krevende arbeidet vil du fortsatt ønske tilgang til Claude eller GPT-5.\n\nDen beste tilnærmingen for de fleste er hybrid: bruk skybaserte verktøy for generelt arbeid, og bytt til lokale modeller når du jobber med sensitive data.\n\nHold modellene oppdatert. Nye og forbedrede modeller lanseres jevnlig, og kvalitetsforbedringene er merkbare mellom versjoner. Både Ollama og LM Studio gjør det enkelt å laste ned nye modeller.'
        }
    ]
};
