"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { GUIDES_SEARCH_DATA } from '@/lib/guides';

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const results = query.length >= 2
        ? GUIDES_SEARCH_DATA.filter(g => {
            const q = query.toLowerCase();
            return (
                g.title.toLowerCase().includes(q) ||
                g.description.toLowerCase().includes(q) ||
                g.keywords.some(k => k.toLowerCase().includes(q)) ||
                g.tag.toLowerCase().includes(q)
            );
        })
        : [];

    useEffect(() => {
        if (open) {
            setQuery('');
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [open]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (open) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        }
    }, [open, handleKeyDown]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] md:pt-[15vh]" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
                className="relative w-full max-w-xl mx-4 bg-card border border-border overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center border-b border-border px-4">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground shrink-0">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Søk i guider..."
                        className="w-full px-3 py-4 bg-transparent text-sm font-mono text-foreground placeholder:text-muted-foreground/50 outline-none"
                    />
                    <kbd className="hidden md:inline-block text-[10px] font-mono text-muted-foreground/40 border border-border/50 px-1.5 py-0.5 rounded">ESC</kbd>
                </div>

                {query.length >= 2 && (
                    <div className="max-h-[40vh] overflow-y-auto">
                        {results.length > 0 ? (
                            results.map(guide => (
                                <Link
                                    key={guide.slug}
                                    href={`/guide/${guide.slug}`}
                                    onClick={onClose}
                                    className="flex flex-col gap-1 px-4 py-3 hover:bg-accent/50 transition-colors border-b border-border/30 last:border-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-mono text-primary/70 tracking-widest">{guide.tag}</span>
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{guide.title}</span>
                                    <span className="text-xs text-muted-foreground line-clamp-1">{guide.description}</span>
                                </Link>
                            ))
                        ) : (
                            <div className="px-4 py-8 text-center text-sm text-muted-foreground/50 font-mono">
                                Ingen treff for «{query}»
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
