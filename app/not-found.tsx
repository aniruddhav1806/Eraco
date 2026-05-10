'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen">
      <Navbar />

      <main
        className={`min-h-screen flex flex-col items-center justify-center px-4 text-center ${
          isDark ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="max-w-lg mx-auto">
          {/* 404 Text */}
          <h1
            className={`text-[120px] md:text-[180px] font-bold leading-none ${
              isDark ? 'text-white' : 'text-black'
            }`}
            style={{ WebkitTextStroke: '2px currentColor' }}
          >
            404
          </h1>

          <h2
            className={`text-2xl md:text-3xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Page Not Found
          </h2>

          <p
            className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 btn-glow ${
                isDark
                  ? 'bg-white text-black hover:bg-orange-500 hover:text-white'
                  : 'bg-black text-white hover:bg-orange-500 hover:text-white'
              }`}
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                isDark
                  ? 'border-gray-700 text-white hover:border-orange-500 hover:text-orange-500'
                  : 'border-gray-300 text-black hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}