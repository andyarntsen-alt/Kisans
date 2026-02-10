"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                setPercent(Math.round((scrollTop / docHeight) * 100));
            }
        };

        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

    if (percent <= 0) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none">
            <div
                className="h-full bg-primary/70 transition-[width] duration-150 ease-out"
                style={{ width: `${percent}%` }}
            />
        </div>
    );
}
