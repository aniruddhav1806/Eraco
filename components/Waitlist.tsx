'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Waitlist() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Waitlist submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      ref={ref}
      className="py-20 md:py-36 px-4 md:px-6 bg-transparent relative overflow-hidden"
    >
      {/* Seamless Ambient Radial Glow with no harsh edges or lines */}
      <div className="absolute inset-0 ambient-glow-waitlist pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-4 md:mb-6">
            Ready to experience the future?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 md:mb-12">
            Join the waitlist and be first in line when Eraco launches.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 sm:px-6 py-4 rounded-full border border-gray-200/80 dark:border-white/10 bg-white/90 dark:bg-white/[0.05] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all text-base backdrop-blur-md"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 sm:px-8 py-4 rounded-full bg-eraco-black dark:bg-white text-white dark:text-black font-medium hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 btn-glow whitespace-nowrap text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Joining...' : submitted ? 'You\'re on the list!' : 'Join Waitlist'}
            </button>
          </form>

          {error && (
            <p className="mt-4 text-sm text-red-500">{error}</p>
          )}

          <p className="mt-6 text-xs sm:text-sm text-gray-400">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
