"use client";

import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const stored = localStorage.getItem('kisans-theme') as Theme | null;
        if (stored === 'light') {
            setTheme('light');
            document.documentElement.classList.add('light');
        }
    }, []);

    const toggleTheme = useCallback(() => {
        document.documentElement.classList.add('theme-transition');

        setTheme((prev) => {
            const next = prev === 'dark' ? 'light' : 'dark';
            if (next === 'light') {
                document.documentElement.classList.add('light');
            } else {
                document.documentElement.classList.remove('light');
            }
            localStorage.setItem('kisans-theme', next);
            return next;
        });

        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 350);
    }, []);

    return { theme, toggleTheme };
}
