import { useState, useEffect, useRef } from 'react';

const CHARS = 'XYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

interface UseScrambleTextProps {
  text: string;
  duration?: number;
  speed?: number;
  scrambleSpeed?: number;
  trigger?: boolean;
}

export function useScrambleText({
  text,
  duration = 1000,
  speed = 0.5, // 0-1, likelihood of revealing correct char
  scrambleSpeed = 50, // ms between updates
  trigger = true,
}: UseScrambleTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    if (!trigger) {
      setDisplayText('');
      setIsComplete(false);
      return;
    }

    let interval: NodeJS.Timeout;
    const startTime = Date.now();
    const length = text.length;
    
    // Initial fill with random chars
    setDisplayText(
      Array(length)
        .fill('')
        .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
        .join('')
    );

    interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const nextText = text
        .split('')
        .map((char, index) => {
          // If char is space, keep it
          if (char === ' ') return ' ';
          
          // Determine if we should show the real char
          // We want characters to lock in from left to right roughly, but with some randomness
          // or just based on overall progress
          
          // Simple progress based lock-in:
          if (progress >= 1) return char;
          
          // Higher progress = higher chance of locking in specific char, 
          // biased by index to create left-to-right wave effect
          // Lock chars left-to-right, but ensure all chars scramble visibly first
          const offset = (1 - speed) * 0.5;
          const bias = index / length;
          if (progress > offset + bias * (1 - offset)) return char;

          // Otherwise random char
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(nextText);

      if (progress >= 1) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, duration, speed, scrambleSpeed, trigger]);

  return { displayText, isComplete };
}
