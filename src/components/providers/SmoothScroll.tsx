"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { useIsMobile } from "@/hooks/useIsMobile";

export function SmoothScroll({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (isMobile) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            autoRaf: true,
        });

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [isMobile]);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return <>{children}</>;
}
