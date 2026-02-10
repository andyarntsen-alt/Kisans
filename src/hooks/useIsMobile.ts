import { useState, useEffect } from 'react';

export function useIsMobile() {
    // Default to true (mobile-first) so SSR/static HTML never includes heavy desktop assets
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 767px)');
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    return isMobile;
}
