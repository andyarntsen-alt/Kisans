export type { Guide, GuideSection } from './types';

import type { Guide } from './types';
import { chatgpt } from './chatgpt';
import { claudeCode } from './claude-code';
import { codex } from './codex';
import { gemini } from './gemini';
import { perplexity } from './perplexity';
import { githubCopilot } from './github-copilot';
import { cursor } from './cursor';
import { notebooklm } from './notebooklm';
import { v0OgBolt } from './v0-og-bolt';
import { bildegenerering } from './bildegenerering';
import { prompting } from './prompting';
import { aiVerktoy2026 } from './ai-verktoy-2026';
import { aiJobb } from './ai-jobb';
import { aiJobbsoking } from './ai-jobbsoking';
import { aiAutomasjon } from './ai-automasjon';
import { aiSkole } from './ai-skole';
import { aiAgenter } from './ai-agenter';
import { ragForklart } from './rag-forklart';
import { lokalAi } from './lokal-ai';
import { aiSikkerhet } from './ai-sikkerhet';
import { aiTrender } from './ai-trender';
import { kimi } from './kimi';
import { deepseek } from './deepseek';
import { grok } from './grok';
import { byggAiChatbot } from './bygg-ai-chatbot';
import { aiLyd } from './ai-lyd';
import { openaiApi } from './openai-api';
import { anthropicApi } from './anthropic-api';
import { aiVideo } from './ai-video';
import { mistral } from './mistral';
import { windsurf } from './windsurf';
import { replit } from './replit';
import { supabaseAi } from './supabase-ai';
import { claudeSkole } from './claude-skole';
import { byggAiAgent } from './bygg-ai-agent';
import { aiSkriving } from './ai-skriving';
import { googleAiApi } from './google-ai-api';
import { vercelAiSdk } from './vercel-ai-sdk';
import { stripeAi } from './stripe-ai';

export const GUIDES: Guide[] = [
    chatgpt,
    claudeCode,
    codex,
    gemini,
    perplexity,
    githubCopilot,
    cursor,
    notebooklm,
    v0OgBolt,
    bildegenerering,
    prompting,
    aiVerktoy2026,
    aiJobb,
    aiJobbsoking,
    aiAutomasjon,
    aiSkole,
    aiAgenter,
    ragForklart,
    lokalAi,
    aiSikkerhet,
    aiTrender,
    kimi,
    deepseek,
    grok,
    byggAiChatbot,
    aiLyd,
    openaiApi,
    anthropicApi,
    aiVideo,
    mistral,
    windsurf,
    replit,
    supabaseAi,
    claudeSkole,
    byggAiAgent,
    aiSkriving,
    googleAiApi,
    vercelAiSdk,
    stripeAi,
];

export function getGuideBySlug(slug: string): Guide | undefined {
    return GUIDES.find(g => g.slug === slug);
}

export function getAllSlugs(): string[] {
    return GUIDES.map(g => g.slug);
}

export function getGuidesByCategory(category: string): Guide[] {
    return GUIDES.filter(g => g.category === category);
}

export function getGuidesByCategories(categories: string[]): Guide[] {
    return GUIDES.filter(g => categories.includes(g.category));
}

export const GUIDES_SEARCH_DATA = GUIDES.map(g => ({
    slug: g.slug,
    title: g.title,
    description: g.description,
    keywords: g.keywords,
    tag: g.tag,
    category: g.category,
}));
