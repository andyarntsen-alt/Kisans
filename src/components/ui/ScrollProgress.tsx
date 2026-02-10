"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
    { id: "hero", label: "01" },
    { id: "kategorier", label: "02" },
    { id: "guider", label: "03" },
];

export function ScrollProgress() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const update = () => {
            const vh = window.innerHeight;

            // Use getBoundingClientRect for accurate position with GSAP pinning
            let current = 0;
            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const el = document.getElementById(SECTIONS[i].id);
                if (el && el.getBoundingClientRect().top <= vh * 0.5) {
                    current = i;
                    break;
                }
            }
            setActive(current);
        };

        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4" aria-label="Seksjon-navigasjon">
            {SECTIONS.map((section, i) => (
                <button
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="group flex items-center gap-3 p-1"
                    aria-label={`Gå til seksjon ${section.label}`}
                >
                    <span className={`text-[10px] font-mono tracking-widest transition-all duration-300 ${
                        i === active ? "text-primary opacity-100" : "text-muted-foreground/0 group-hover:text-muted-foreground/60 opacity-0 group-hover:opacity-100"
                    }`}>
                        {section.label}
                    </span>
                    <span className={`block rounded-full transition-all duration-300 ${
                        i === active
                            ? "w-2.5 h-2.5 bg-primary"
                            : "w-1.5 h-1.5 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                    }`} />
                </button>
            ))}
            <div className="w-px h-6 bg-muted-foreground/20 my-1" />
            <span className="text-[9px] font-mono text-muted-foreground/30 tracking-widest [writing-mode:vertical-lr]">
                SCROLL
            </span>
        </nav>
    );
}
