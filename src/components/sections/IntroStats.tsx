"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function IntroStats() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.intro-fade',
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out",
                    scrollTrigger: { trigger: ref.current, start: "top 80%" }
                }
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <section id="intro" ref={ref} className="border-t border-border/30 py-24 md:py-32">
            <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
                <h2
                    className="intro-fade text-3xl md:text-5xl font-bold tracking-tight text-foreground"
                    style={{ fontFamily: 'var(--font-serif), serif' }}
                >
                    Alt du trenger for å mestre AI.
                </h2>
                <p className="intro-fade text-sm md:text-base font-mono text-muted-foreground tracking-wide">
                    Praktiske guider for koding, jobb, skole og kreativitet.
                </p>
            </div>
        </section>
    );
}
