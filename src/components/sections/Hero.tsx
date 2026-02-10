"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SearchDialog } from '@/components/ui/SearchDialog';
import gsap from 'gsap';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [titleDone, setTitleDone] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
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
        <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    <source src="/hero/Make_cool_loop_202602101025.mp4" type="video/mp4" />
                </video>
                {/* Subtle gradient for text readability only at bottom/top */}
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
                    <Link href="/nyhetsbrev" className="hidden md:inline font-mono text-sm tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                        Nyhetsbrev
                    </Link>
                    <ThemeToggle className="!text-white/70 hover:!text-white" />
                </div>
            </nav>

            <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mix-blend-difference hero-fade-in uppercase" style={{ fontFamily: 'var(--font-serif), serif' }}>
                    <ScrambleText text="Kisans" duration={1800} speed={0.4} className="block" onComplete={handleTitleComplete} />
                </h1>

                <div className="text-base md:text-xl font-mono text-white/80 uppercase tracking-[0.2em] hero-fade-in flex flex-col gap-2">
                    <ScrambleText text="Der menneske møter" duration={1500} speed={0.3} trigger={titleDone} className="font-mono" />
                    <ScrambleText text="kunstig intelligens" duration={1800} speed={0.3} trigger={titleDone} className="font-mono" />
                </div>

                <a href="#guider" className="hero-fade-in mt-4 px-8 py-3 border border-white/30 hover:bg-white/10 text-sm font-mono tracking-widest text-white/90 hover:text-white transition-all">
                    SE GUIDER
                </a>

                <div className="absolute bottom-12 left-0 right-0 hero-fade-in">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-xs font-mono text-white/40 tracking-widest">SCROLL FOR Å UTFORSKE</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 animate-bounce" aria-hidden="true">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 right-6 md:right-12 flex items-center gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white/30 hover:text-white/70 transition-colors" aria-label="Facebook">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white/30 hover:text-white/70 transition-colors" aria-label="X">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
        </section>
    );
}
