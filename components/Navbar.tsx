'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const activeClass = "bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent";

  // Scroll detection
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Hybrid logo behavior
  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const isDark = theme === 'dark';

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-2rem)] md:max-w-5xl">
      <div
        className={`flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3
        rounded-full transition-all duration-300 backdrop-blur-xl
        ${scrolled ? 'bg-white/20 dark:bg-black/40' : 'bg-white/15 dark:bg-black/30'}
        border border-white/20 dark:border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        ${isDark ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : ''}`}
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
        >
          <img src="/assets/eraco-logo.png" className="w-6 h-6 md:w-7 md:h-7" />
          <span className={`font-medium text-sm md:text-base ${isDark ? 'text-white' : 'text-black'}`}>
            Eraco
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex gap-8 text-sm ${
            isDark ? 'text-white/90' : 'text-black/70'
          }`}
        >
          <a href="/features" className={`hover:opacity-100 opacity-80 transition ${isActive('/features') ? activeClass : ''}`}>
            Features
          </a>
          <a href="/pricing" className={`hover:opacity-100 opacity-80 transition ${isActive('/pricing') ? activeClass : ''}`}>
            Pricing
          </a>
          <a href="/#engine" className={`hover:opacity-100 opacity-80 transition ${pathname === '/' ? activeClass : ''}`}>
            Technology
          </a>
          <a href="/about" className={`hover:opacity-100 opacity-80 transition ${isActive('/about') ? activeClass : ''}`}>
            About
          </a>
          <a href="/faq" className={`hover:opacity-100 opacity-80 transition ${isActive('/faq') ? activeClass : ''}`}>
            FAQ
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors flex-shrink-0 ${
              isDark
                ? 'bg-white/20 hover:bg-white/30'
                : 'bg-black/10 hover:bg-black/20'
            }`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg
                className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-white' : 'text-black'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646
                  9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-white' : 'text-black'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3
                  m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707
                  m12.728 0l-.707.707M6.343 17.657l-.707.707
                  M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* CTA */}
          <a
            href="/#waitlist"
            className="inline-flex md:hidden bg-white text-black px-3 py-1.5 rounded-full text-xs font-medium hover:scale-105 transition hover:bg-white/90 border border-black/10 items-center justify-center flex-shrink-0"
          >
            Join
          </a>
          <a
            href="/#waitlist"
            className="hidden md:inline-flex bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition hover:bg-white/90 border border-black/10 items-center justify-center"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
