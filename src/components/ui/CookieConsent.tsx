"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'kisans-cookie-consent';

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(STORAGE_KEY);
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(STORAGE_KEY, 'accepted');
        setVisible(false);
        window.dispatchEvent(new Event('cookie-consent-change'));
    };

    const decline = () => {
        localStorage.setItem(STORAGE_KEY, 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
            <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md border border-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="flex-1 space-y-2">
                    <p className="text-sm text-foreground font-medium">
                        Vi bruker informasjonskapsler
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Vi bruker Google Analytics og Vercel Analytics for å forbedre nettstedet.
                        Ingen personopplysninger selges til tredjeparter.{' '}
                        <Link href="/personvern" className="text-primary hover:underline">
                            Les vår personvernerklæring
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3 shrink-0">
                    <button
                        onClick={decline}
                        className="px-4 py-2 min-h-[44px] text-xs font-mono tracking-widest text-muted-foreground hover:text-foreground border border-border hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                        AVSLÅ
                    </button>
                    <button
                        onClick={accept}
                        className="px-4 py-2 min-h-[44px] text-xs font-mono tracking-widest text-primary-foreground bg-primary hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                        GODTA
                    </button>
                </div>
            </div>
        </div>
    );
}
