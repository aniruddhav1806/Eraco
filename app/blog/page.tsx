'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

export default function BlogPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Blog
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Thoughts on AI, building in public, and what it takes to make technology feel human.
          </p>
          <p className={`text-base md:text-lg max-w-2xl mx-auto mt-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            We write about the ideas behind Eraco — the decisions, the dead ends, and the breakthroughs. If you're curious about where AI is heading and how we're building toward it, you're in the right place.
          </p>
        </div>
      </div>

      {/* Posts Section */}
      <section className={`py-12 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center py-20 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <svg className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-9-3h1m9 0h1m-9 0a2 2 0 00-2 2v8a2 2 0 002 2m9-2a2 2 0 00-2-2v-8a2 2 0 00-2 2" />
            </svg>
            <p className="text-lg">Coming soon</p>
            <p className="text-sm mt-2">We're working on our first posts. Check back soon.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
