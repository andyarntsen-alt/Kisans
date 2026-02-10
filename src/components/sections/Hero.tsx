"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SearchDialog } from '@/components/ui/SearchDialog';
import { useIsMobile } from '@/hooks/useIsMobile';
import gsap from 'gsap';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [titleDone, setTitleDone] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const isMobile = useIsMobile();
    const handleTitleComplete = useCallback(() => setTitleDone(true), []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-fade-in',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.5, ease: "power2.out" }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={containerRef} className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
            {/* Background: optimized image on mobile (36KB), video on desktop (2MB) */}
            <div className="absolute inset-0 z-0">
                {isMobile ? (
                    <img
                        src="/hero/hero-mobile.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-label="Bakgrunnsvideo med AI-visualisering"
                        className="w-full h-full object-cover"
                    >
                        <source src="/hero/Make_cool_loop_202602101025.mp4" type="video/mp4" />
                    </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
            </div>

            <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-end px-6 py-6 md:px-12 md:py-8 hero-fade-in">
                <div className="flex items-center gap-4 md:gap-8">
                    <button
                        onClick={() => setSearchOpen(true)}
                        className="p-2 text-white/70 hover:text-white transition-colors"
                        aria-label="Søk"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                    <Link href="/start-her" className="hidden md:inline font-mono text-sm tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        Start her
                    </Link>
                    <Link href="/nyhetsbrev" className="hidden md:inline font-mono text-sm tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        Nyhetsbrev
                    </Link>
                    <ThemeToggle className="!text-white/70 hover:!text-white" />
                </div>
            </nav>

            <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mix-blend-difference hero-fade-in uppercase" style={{ fontFamily: 'var(--font-serif), serif' }}>
                    <ScrambleText text="KI SANS" duration={1800} speed={0.4} className="block" onComplete={handleTitleComplete} />
                </h1>

                <div className="text-base md:text-xl font-mono text-white/80 uppercase tracking-[0.2em] hero-fade-in flex flex-col gap-2">
                    <ScrambleText text="menneske møter" duration={1500} speed={0.3} trigger={titleDone} className="font-mono" />
                    <ScrambleText text="kunstig intelligens" duration={1800} speed={0.3} trigger={titleDone} className="font-mono" />
                </div>

                <Link href="#guider" className="hero-fade-in mt-4 px-8 py-3 border border-white/30 hover:bg-white/10 text-sm font-mono tracking-widest text-white/90 hover:text-white transition-all">
                    SE GUIDER
                </Link>

                <div className="absolute bottom-12 left-0 right-0 hero-fade-in">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-xs font-mono text-white/40 tracking-widest">SCROLL FOR Å UTFORSKE</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 animate-bounce" aria-hidden="true">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>
            </div>
            <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
        </section>
    );
}
