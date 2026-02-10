"use client";

import { useEffect } from 'react';
import { useScrambleText } from '@/hooks/useScrambleText';
import { cn } from '@/lib/utils';

interface ScrambleTextProps {
    text: string;
    className?: string;
    duration?: number;
    speed?: number;
    trigger?: boolean;
    onComplete?: () => void;
}

export function ScrambleText({
    text,
    className,
    duration = 1500,
    speed = 0.5,
    trigger = true,
    onComplete
}: ScrambleTextProps) {
    const { displayText, isComplete } = useScrambleText({
        text,
        duration,
        speed,
        trigger
    });

    useEffect(() => {
        if (isComplete && onComplete) {
            onComplete();
        }
    }, [isComplete, onComplete]);

    return (
        <span className={cn(className)}>
            {displayText}
        </span>
    );
}
