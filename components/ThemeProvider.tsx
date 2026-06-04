'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);

    const button = document.querySelector('button[aria-label*="mode"]') as HTMLElement;
    const cx = button ? button.getBoundingClientRect().left + button.getBoundingClientRect().width / 2 : window.innerWidth / 2;
    const cy = button ? button.getBoundingClientRect().top + button.getBoundingClientRect().height / 2 : window.innerHeight / 2;

    const maxRadius = Math.hypot(Math.max(cx, window.innerWidth - cx), Math.max(cy, window.innerHeight - cy)) * 2;

    const isDarkToLight = theme === 'dark';
    const destinationTheme = isDarkToLight ? 'light' : 'dark';
    const rippleColor = isDarkToLight ? '#ffffff' : '#0a0a0a';

    const rippleLayer = document.querySelector('.ripple-layer') as HTMLElement;

    // Create overlay in destination color
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '9998';
    overlay.style.pointerEvents = 'none';
    overlay.style.backgroundColor = rippleColor;
    overlay.style.clipPath = `circle(0% at ${cx}px ${cy}px)`;

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Pronounced S-curve — very sluggish start, fast smooth glide, very gentle settle
        overlay.style.transition = 'clip-path 2500ms cubic-bezier(0.8, 0, 0.2, 1)';
        overlay.style.clipPath = `circle(${maxRadius * 2}px at ${cx}px ${cy}px)`;
      });
    });

    // Theme switches at the halfway point so content is hidden under the overlay
    setTimeout(() => {
      setTheme(destinationTheme);
      // Slow fade with matching S-curve
      overlay.style.transition = 'opacity 1200ms cubic-bezier(0.8, 0, 0.2, 1)';
      overlay.style.opacity = '0';
    }, 1400);

    setTimeout(() => {
      overlay.remove();
      setIsAnimating(false);
    }, 3700);
  }, [theme, isAnimating]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="ripple-layer" />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
