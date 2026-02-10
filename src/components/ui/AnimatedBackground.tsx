"use client";

import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const starCount = isMobile ? 50 : 150;
        const stars = Array.from({ length: starCount }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.2 + 0.05,
            opacity: Math.random(),
        }));

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile]);

    return (
        <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #0a1f44 0%, #000 60%)',
                }}
            />

            <canvas ref={canvasRef} className="absolute inset-0 opacity-40 mix-blend-screen" role="presentation" aria-hidden="true" />

            {!isMobile && (
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-slow-spin opacity-30">
                    <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-blue-900/20 blur-[100px]" />
                    <div className="absolute bottom-[30%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/20 blur-[120px]" />
                </div>
            )}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
