'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

export default function ChangelogPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const versions = [
    {
      version: 'v4.0 — Eraco Awakens — Current',
      description: 'This is her. The real her.',
      features: [
        'Chat — Natural, context-aware conversation',
        'Voice Chat — Talk to her, she listens and responds',
        'NLP — She understands you, not just your keywords',
        'Code — Write code across languages',
        'Debug — Find and fix errors autonomously',
        'Create & Write Files — Create files, write content into them, and save them',
        'Google Search — Search the web on command',
        'YouTube Search — Find videos instantly',
        'Play Music — Queue and play music for you',
        'Offline Tasks — Local file operations, no internet needed',
        'Runs in Background — Everything works silently, without interrupting you',
      ],
    },
    {
      version: 'v3.0 — First Real Steps',
      description: 'She started doing things for real. v3 was our first version that actually worked — limited, but genuine. Eraco could copy and paste files, and search Google. Small, but it meant everything.',
    },
    {
      version: 'v2.0 — The Illusion',
      description: 'Eraco could talk the talk. Hard-coded responses made her seem capable — but behind the scenes, she wasn\'t actually doing anything. A necessary lesson in what not to build.',
    },
    {
      version: 'v1.0 — The Beginning',
      description: 'She existed. That was about it. Eraco v1 was our first attempt — and it didn\'t work. But every great thing starts somewhere.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Changelog
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Every step forward, documented.
          </p>
        </div>
      </div>

      {/* Versions Timeline */}
      <section className={`py-12 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          {versions.map((v, index) => (
            <div
              key={v.version}
              className={`relative pl-8 md:pl-12 pb-12 border-l-2 ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              } last:border-l-0 last:pb-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${
                index === versions.length - 1 ? 'bg-orange-500' : isDark ? 'bg-gray-700' : 'bg-gray-300'
              }`} />

              <div className={`rounded-2xl p-6 md:p-8 ${
                isDark ? 'bg-gray-900' : 'bg-gray-50'
              }`}>
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-black'
                } ${index === versions.length - 1 ? 'text-orange-500' : ''}`}>
                  {v.version}
                </h2>
                <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {v.description}
                </p>

                {v.features && (
                  <ul className="mt-6 space-y-3">
                    {v.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm md:text-base ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-orange-500' : 'text-orange-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className={`mt-8 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-base">
              Check out{' '}
              <a href="/features" className="text-orange-500 hover:underline">
                Features
              </a>{' '}
              to know more about what's coming next.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
