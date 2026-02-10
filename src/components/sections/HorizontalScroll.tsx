"use client";

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CARDS = [
    {
        id: '01',
        title: 'AI FOR KODING',
        desc: 'Lær å bruke AI-verktøy som Claude Code, Codex, GitHub Copilot og Cursor for å skrive, feilsøke og forbedre kode raskere enn noensinne.',
        href: '/kategori/koding'
    },
    {
        id: '02',
        title: 'AI FOR JOBB',
        desc: 'Effektiviser arbeidshverdagen med AI-drevne verktøy for skriving, analyse, jobbsøking og automatisering av repetitive oppgaver.',
        href: '/kategori/jobb'
    },
    {
        id: '03',
        title: 'AI FOR SKOLE',
        desc: 'Bruk AI smart og etisk i studiene. Lær teknikker for research, oppgaveskriving og faglig fordypning med NotebookLM, ChatGPT og Claude.',
        href: '/kategori/skole'
    },
    {
        id: '04',
        title: 'AI-VERKTØY',
        desc: 'Utforsk ChatGPT, Gemini, Perplexity, Midjourney og flere. Finn riktig verktøy for dine behov, fra bildegenerering til lokal AI.',
        href: '/kategori/verktoy'
    }
];

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 767px)');
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    return isMobile;
}

export function HorizontalScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: "-300vw",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=4000",
                        scrub: 0.6,
                        pin: true,
                        anticipatePin: 1
                    }
                }
            );
        }, triggerRef);

        return () => ctx.revert();
    }, [isMobile]);

    if (isMobile) {
        return (
            <section className="bg-background/50 backdrop-blur-sm border-t border-border/30">
                <div className="flex flex-col">
                    {CARDS.map((card) => (
                        <div key={card.id} className="border-b border-border/30 px-6 py-16">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-xs font-mono text-primary">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    KATEGORI {card.id}
                                </div>

                                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                    {card.title}
                                </h2>

                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {card.desc}
                                </p>

                                <Link href={card.href} className="inline-block px-6 py-3 border border-border hover:bg-accent/50 text-sm font-mono tracking-widest transition-all active:scale-95 text-foreground">
                                    UTFORSK
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section ref={triggerRef} className="relative overflow-hidden h-screen bg-background/50 backdrop-blur-sm">
            <div
                ref={sectionRef}
                className="h-full flex flex-row w-[400vw]"
            >
                {CARDS.map((card) => (
                    <div key={card.id} className="w-[100vw] h-full flex flex-col justify-center items-center px-4 md:px-20 border-r border-border/30 relative group">
                        <div className="absolute top-10 left-10 text-9xl font-bold text-foreground/5 font-mono select-none">
                            {card.id}
                        </div>

                        <div className="max-w-2xl space-y-8 z-10 glass-card p-6 md:p-12 rounded-xl bg-card/50 border border-border backdrop-blur-md">
                            <div className="flex items-center gap-4 text-xs font-mono text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                KATEGORI {card.id}
                            </div>

                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                                {card.title}
                            </h2>

                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {card.desc}
                            </p>

                            <Link href={card.href} className="inline-block px-6 py-3 border border-border hover:bg-accent/50 text-sm font-mono tracking-widest transition-all hover:scale-105 active:scale-95 text-foreground">
                                UTFORSK
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
