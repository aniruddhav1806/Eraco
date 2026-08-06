'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

export default function CareersPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Careers
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We're small. We're intentional. And we're just getting started.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className={`py-12 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <p className={`text-base md:text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Eraco AI is currently a lean founding team lead by <span className="text-orange-500">Aniruddha (Founder & CEO)</span> — but we're building something that won't stay small for long. We don't hire to fill seats. When we grow, we grow with people who care deeply about privacy, intelligent design, and making AI that genuinely helps people.
            </p>
          </div>

          <div className={`rounded-2xl p-8 mb-8 border-2 border-orange-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              No Open Roles
            </h2>
            <p className={`text-base md:text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              No open roles right now — but if you feel like you belong here, we'd still love to hear from you.
            </p>
            <div className={`p-6 rounded-xl ${isDark ? 'bg-orange-500/10' : 'bg-orange-50'}`}>
              <p className={`text-lg font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                Reach out at:{' '}
                <a href="mailto:careers@eraco.ai" className="underline hover:text-orange-500">
                  eraco.ai.co@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
