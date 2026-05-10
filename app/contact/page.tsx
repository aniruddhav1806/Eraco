'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen ${isLight ? 'bg-white text-eraco-black' : 'bg-eraco-black text-white'}`}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl font-bold mb-8 ${isLight ? 'text-eraco-black' : 'text-white'}`}>Contact Us</h1>

          <div className={`prose prose-lg max-w-none ${isLight ? '' : 'prose-invert'}`}>
            <p className={`leading-relaxed text-lg ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              We&apos;d love to hear from you.
            </p>

            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Whether you have a feature idea, want to explore a partnership, or are interested in funding—we&apos;re all ears.
            </p>

            <div className={`mt-10 p-8 rounded-2xl border ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-gray-900 border-gray-800'}`}>
              <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-eraco-black' : 'text-white'}`}>Email</h2>
              <a
                href="mailto:eraco.ai.co@gmail.com"
                className="text-lg font-medium underline underline-offset-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                eraco.ai.co@gmail.com
              </a>
            </div>

            <h2 className={`text-2xl font-semibold mt-12 mb-4 ${isLight ? 'text-eraco-black' : 'text-white'}`}>Open For</h2>

            <ul className={`space-y-4 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span><strong className={isLight ? 'text-eraco-black' : 'text-white'}>Ideas</strong> — Have a feature in mind or a way we can improve? Send it our way.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span><strong className={isLight ? 'text-eraco-black' : 'text-white'}>Partnerships</strong> — Interested in collaborating? Let&apos;s explore what we can build together.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong className={isLight ? 'text-eraco-black' : 'text-white'}>Funding</strong> — Believe in what we&apos;re building? We&apos;d be excited to talk.</span>
              </li>
            </ul>

            <p className={`leading-relaxed mt-10 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Drop us a line. We read every message.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}