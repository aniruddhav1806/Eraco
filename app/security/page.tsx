'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SecurityPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen ${isLight ? 'bg-white text-eraco-black' : 'bg-eraco-black text-white'}`}>
      <Navbar />

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl font-bold mb-8 ${isLight ? 'text-eraco-black' : 'text-white'}`}>Security & Privacy</h1>

          <div className={`prose prose-lg max-w-none ${isLight ? '' : 'prose-invert'}`}>
            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              We don&apos;t see your data.
            </p>

            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Eraco is designed so that your information never needs to pass through us.
            </p>

            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              If you perform an action—like sending a file—our systems do not process or inspect it.
              We only register that a task occurred and the computational resources required to complete it.
            </p>

            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Nothing more.
            </p>

            <h2 className={`text-2xl font-semibold mt-12 mb-4 ${isLight ? 'text-eraco-black' : 'text-white'}`}>What We Don&apos;t Know</h2>
            <ul className={`space-y-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              <li>We don&apos;t read your data</li>
              <li>We don&apos;t know what was sent</li>
              <li>We don&apos;t know who it was sent to</li>
              <li>We don&apos;t store or analyze metadata</li>
            </ul>

            <p className={`leading-relaxed mt-6 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Most operations run locally on your device, ensuring your data stays with you.
            </p>

            <h2 className={`text-2xl font-semibold mt-12 mb-4 ${isLight ? 'text-eraco-black' : 'text-white'}`}>Efficient by Design</h2>

            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Eraco is built to be lightweight from the ground up.
            </p>

            <ul className={`space-y-2 mt-4 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              <li>Minimal server interaction</li>
              <li>Near-zero unnecessary background processes</li>
              <li>Extremely low resource consumption</li>
            </ul>

            <p className={`leading-relaxed mt-6 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              You get fast performance without the typical system overhead.
            </p>

            <h2 className={`text-2xl font-semibold mt-12 mb-4 ${isLight ? 'text-eraco-black' : 'text-white'}`}>Zero-Knowledge Architecture</h2>

            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Our infrastructure is intentionally limited in what it can access.
            </p>

            <p className={`leading-relaxed mt-4 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              We only observe:
            </p>

            <ul className={`space-y-2 mt-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              <li>Resource usage required to complete tasks</li>
              <li>Basic system performance metrics</li>
            </ul>

            <p className={`leading-relaxed mt-6 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              We do not have access to content, identity, or context.
            </p>

            <h2 className={`text-2xl font-semibold mt-12 mb-4 ${isLight ? 'text-eraco-black' : 'text-white'}`}>A Different Approach</h2>

            <p className={`leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Most platforms rely on collecting and analyzing user data.
            </p>

            <p className={`leading-relaxed mt-4 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Eraco does not.
            </p>

            <p className={`leading-relaxed mt-4 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              Privacy is not an added feature—it is the foundation.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
