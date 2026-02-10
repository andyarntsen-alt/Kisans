"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
    const [percent, setPercent] = useState(0);
    const rafRef = useRef(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                setPercent(Math.round((scrollTop / docHeight) * 100));
            }
            rafRef.current = requestAnimationFrame(update);
        };

        rafRef.current = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    if (percent <= 0) return null;

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 font-mono text-[11px] text-muted-foreground/50 tracking-widest select-none pointer-events-none">
            {percent}%
        </div>
    );
}
