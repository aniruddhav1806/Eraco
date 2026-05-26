'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EracoVsClaudeCodePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Eraco AI <span className="text-orange-500">vs</span> Claude Code
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Why Eraco is the better choice for an integrated, all-in-one personalized experience.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className={`py-12 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}>
            
            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Scope of Capabilities
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Claude Code:</strong> Focused purely on terminal-based AI coding. It lives in your CLI, helping you search codebases and write scripts, but it doesn't step outside of that domain.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> A full-spectrum personal assistant. Eraco handles your code and debugging, but also manages your music, files, media generation, and in-app editing. It's a presence that manages your entire digital life, not just your terminal.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Adaptive Execution Engine
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Claude Code:</strong> Follows standard agentic coding procedures and requires explicit instructions within its supported terminal environment.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Doesn't just follow instructions — she builds new execution paths for tasks she has never seen before. When faced with a new challenge, Eraco adapts dynamically, ensuring you're never left without an answer.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Privacy & Architecture
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Claude Code:</strong> Relies entirely on Anthropic's cloud infrastructure, sending your codebase context to remote servers to function.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Built with Privacy by Default. All data is TLS-encrypted. While compute is intelligently server-offloaded, Eraco incorporates an in-house mini server for testing and backup, remaining resilient and private.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Silent Background Presence
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Claude Code:</strong> Requires constant terminal interaction, interrupting your focus to respond to prompts and questions.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Operates silently, never disturbing you unnecessarily. She intelligently plans her every step and manages your whole digital life in the background, becoming a seamless part of your workflow.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 border-2 border-orange-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                The Verdict
              </h2>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                If you just want a tool that lives in your terminal to write code, Claude Code is a capable utility. But if you want a complete, adaptive AI presence that handles your development environment alongside the rest of your digital workflow—all with a premium, seamless interface—Eraco AI is the undisputed choice.
              </p>
            </motion.div>
            
            <div className="mt-12 text-center">
              <Link href="/" className={`inline-block px-8 py-3 rounded-full font-medium transition-all hover:bg-orange-500 hover:text-white ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
