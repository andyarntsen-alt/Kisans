"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        const check = () => {
            setConsent(localStorage.getItem('kisans-cookie-consent') === 'accepted');
        };

        check();
        window.addEventListener('cookie-consent-change', check);
        return () => window.removeEventListener('cookie-consent-change', check);
    }, []);

    if (!consent) return null;

    return (
        <>
            <VercelAnalytics />
            {GA_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_ID}');
                        `}
                    </Script>
                </>
            )}
        </>
    );
}
