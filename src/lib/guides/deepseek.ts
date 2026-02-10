import type { Guide } from './types';

export const deepseek: Guide = {
    slug: 'deepseek',
    tag: 'GUIDE \u00B7 DEEPSEEK',
    title: 'DeepSeek: Den kinesiske AI-utfordreren',
    description: 'Alt du trenger å vite om DeepSeek. Fra gratismodellen og R1-resonnering til åpen kildekode, personvern og hvordan den måler seg mot ChatGPT og Claude.',
    keywords: ['deepseek', 'deepseek norsk', 'deepseek vs chatgpt', 'deepseek r1', 'deepseek v3', 'deepseek gratis', 'kinesisk ai', 'deepseek åpen kildekode', 'deepseek personvern'],
    publishedDate: '2026-02-10',
    relatedSlugs: ['chatgpt', 'gemini', 'lokal-ai'],
    category: 'chatboter',
    sections: [
        {
            heading: 'Hva er DeepSeek?',
            content: 'DeepSeek er et kinesisk AI-selskap som på kort tid har blitt en av de mest omtalte aktørene i AI-verdenen. Selskapet ble grunnlagt i 2023 av Liang Wenfeng, som også leder det kinesiske hedgefondet High-Flyer. Med tilgang til enorme mengder beregningskraft bygde DeepSeek modeller som overrasket hele bransjen da de ble lansert.\n\nDet som gjør DeepSeek spesielt er kombinasjonen av ytelse og tilgjengelighet. Modellene deres konkurrerer med de beste fra OpenAI og Google, men er åpen kildekode og gratis å bruke via chat.deepseek.com. I januar 2025 sjokkerte DeepSeek-R1 markedene da den matchet OpenAIs o1 på resonnering, til en brøkdel av treningskostnaden. DeepSeek-appen gikk til topps på App Store i flere land, og selskapet ble over natten et symbol på at kinesisk AI hadde tatt igjen Vesten.'
        },
        {
            heading: 'Modellene: V3 og R1',
            content: 'DeepSeek har to hovedmodeller: DeepSeek-V3 og DeepSeek-R1. V3 er den generelle modellen, og R1 er resonneringsmodellen som tenker steg for steg gjennom vanskelige problemer.\n\nDeepSeek-V3 ble lansert i desember 2024 og bruker en arkitektur kalt Mixture of Experts (MoE). Modellen har totalt 671 milliarder parametere, men bare 37 milliarder er aktive per forespørsel. Det gjør den både kraftig og effektiv. V3 har et kontekstvindu på 128 000 tokens, som tilsvarer omtrent 96 000 ord. Den er sterk på koding, matte og generell tekstbehandling, og scorer på nivå med GPT-4o og Llama 3.1 405B på de fleste tester.\n\nDeepSeek-R1, lansert i januar 2025, er bygget for dyp resonnering. Den viser tankeprosessen sin steg for steg, noe som gjør det lettere å følge logikken. R1 matcher OpenAIs o1 på matematikk, koding og vitenskapelige oppgaver. Det mest oppsiktsvekkende er at DeepSeek hevdet å ha trent R1 for rundt 5,6 millioner dollar, en brøkdel av hva konkurrentene bruker. Det utløste en debatt om hvor mye beregningskraft man egentlig trenger for å lage avanserte AI-modeller.'
        },
        {
            heading: 'Slik bruker du DeepSeek',
            content: 'Den enkleste måten å bruke DeepSeek på er via chat.deepseek.com. Opprett en gratis konto, og du kan begynne å chatte med en gang. Du kan velge mellom V3 for raske, generelle svar og DeepThink (R1) for dypere resonnering. DeepSeek har også en app for iPhone og Android.\n\nGratisversjonen er overraskende generøs. Du får tilgang til både V3 og R1 uten å betale noe. Det finnes bruksbegrensninger i perioder med høy trafikk, men for vanlig bruk holder gratisversjonen lenge. For utviklere tilbyr DeepSeek et API med svært lave priser: rundt 0,27 dollar per million input-tokens og 1,10 dollar per million output-tokens for V3. Det er en brøkdel av hva OpenAI og Anthropic tar.\n\nNettsøk er innebygd i chat-grensesnittet, noe som betyr at DeepSeek kan hente fersk informasjon fra nettet. Du kan også laste opp filer for analyse. Grensesnittet er rent og oversiktlig, og ligner mye på ChatGPT.'
        },
        {
            heading: 'DeepSeek som lokal modell',
            content: 'En av DeepSeeks store styrker er at modellene er åpen kildekode under MIT-lisensen. Det betyr at hvem som helst kan laste ned, kjøre og til og med bygge videre på modellene uten begrensninger. Både V3 og R1 er tilgjengelige på Hugging Face, og mindre versjoner av R1 (kalt destillerte modeller) finnes i størrelser fra 1,5 til 70 milliarder parametere.\n\nFor å kjøre DeepSeek lokalt er Ollama det enkleste verktøyet. Skriv «ollama pull deepseek-r1» i terminalen, og du har en resonneringsmodell på din egen maskin. De destillerte versjonene (7B og 14B) fungerer godt på moderne bærbare med 16 GB RAM eller mer. Den fulle V3-modellen med 671 milliarder parametere krever profesjonell maskinvare, men de mindre variantene gir deg mye av den samme kvaliteten.\n\nDette er viktig av to grunner. For det første gir det deg full kontroll over dataene dine, noe som er spesielt relevant gitt personvernbekymringene rundt DeepSeeks skybaserte tjeneste. For det andre har DeepSeeks åpne modeller løftet hele det åpne AI-økosystemet. R1-modellene er blant de beste åpne resonneringsmodellene som finnes, og brukes som grunnlag i utallige prosjekter.'
        },
        {
            heading: 'Personvern og datalagring',
            content: 'Her kommer den store haken med DeepSeek. All data som sendes til chat.deepseek.com lagres på servere i Kina. DeepSeeks personvernpolicy sier eksplisitt at data behandles i henhold til kinesisk lovgivning, som gir myndighetene vidtrekkende rettigheter til innsyn.\n\nFlere land og organisasjoner har reagert på dette. Italia blokkerte DeepSeeks app i januar 2025 på grunn av manglende GDPR-overholdelse. Flere offentlige etater og selskaper i Europa, USA og Asia har advart ansatte mot å bruke tjenesten til sensitiv informasjon. Selv om DeepSeek sier de ikke selger brukerdata, er det juridiske rammeverket i Kina fundamentalt annerledes enn i Europa.\n\nFor norske brukere betyr dette: bruk gjerne DeepSeeks chatbot til generelle spørsmål, læring og utforskning, men unngå å dele personopplysninger, forretningshemmeligheter eller sensitiv informasjon. Jobber du med noe konfidensielt, er det tryggere å bruke en europeisk eller amerikansk tjeneste, eller å kjøre DeepSeeks åpne modeller lokalt via Ollama. Da forlater ingen data maskinen din.'
        },
        {
            heading: 'DeepSeek vs. ChatGPT og Claude',
            content: 'DeepSeek gjør seg overraskende godt i direkte sammenligninger. På matematikk, koding og formell logikk er R1 på nivå med OpenAIs o1 og o3-mini. V3 konkurrerer med GPT-4o på de fleste standardtester. Og alt dette er gratis, noe som gjør DeepSeek til det kanskje mest tilgjengelige avanserte AI-verktøyet som finnes.\n\nMen det er områder der ChatGPT og Claude fortsatt er bedre. ChatGPT har et rikere økosystem med Custom GPTs, DALL-E-bildegenerering, avansert filanalyse og en mer moden desktop-app. Claude fra Anthropic er ofte bedre på nyansert skriving, lange dokumenter og oppgaver som krever forsiktighet og presisjon. Både ChatGPT og Claude har også bedre støtte for norsk enn DeepSeek, som er sterkest på engelsk og kinesisk.\n\nFor de fleste norske brukere er den beste strategien å kombinere verktøy. Bruk ChatGPT eller Claude som hovedverktøy for daglig bruk, og prøv DeepSeek når du vil ha en gratis andremening, trenger hjelp med kode eller matte, eller vil utforske hva åpen kildekode-AI kan gjøre. DeepSeek har vist at toppkvalitets AI ikke trenger å koste en formue, og det presser hele bransjen til å bli bedre og billigere.'
        }
    ]
};
