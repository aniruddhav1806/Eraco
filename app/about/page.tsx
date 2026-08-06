'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            About Eraco AI
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We're building the AI that actually works for you — not around you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className={`py-12 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}>
            <p className={`text-base md:text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Eraco is a personal AI assistant designed to handle the full spectrum of your digital life. Music, files, code, debugging, media generation, in-app editing — all in one place, all running privately.
            </p>

            <p className={`text-base md:text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Most AI tools make you adapt to them. Eraco adapts to you. Her Adaptive Execution Engine doesn't just follow instructions — she builds new execution paths for tasks she has never seen before, so you're never left without an answer.
            </p>

            <div className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Privacy by Default
              </h2>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                All your data is TLS-encrypted. Eraco only ever sees resource usage — nothing else.
              </p>
            </div>

            <div className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Built Lean, Built Smart
              </h2>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Her compute is server-offloaded so even modest hardware runs her smoothly. And with an in-house mini server for testing and backup, she stays resilient.
              </p>
            </div>

            <div className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                She's Not Just a Tool
              </h2>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                She's a presence. Calm, capable, and always one step ahead.
              </p>
            </div>

            <div className={`rounded-2xl p-8 mb-8 border-2 border-orange-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Our Vision
              </h2>
              <p className={`text-base md:text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                We're a small, focused team with a clear vision: an AI that is powerful, private, and genuinely useful — not just impressive on a demo.
              </p>
              <div className={`p-6 rounded-xl ${isDark ? 'bg-orange-500/10' : 'bg-orange-50'}`}>
                <p className={`text-lg font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                  Eraco is currently in development.
                </p>
                <p className={`text-lg font-semibold mt-2 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                  We're seeking $100K for 10% to bring her to the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
