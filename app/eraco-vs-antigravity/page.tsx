'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EracoVsAntiGravityPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Eraco AI <span className="text-orange-500">vs</span> Anti Gravity
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comparing advanced agentic coding systems and personal AI presences.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className={`py-12 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}>
            
            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Design Philosophy
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Anti Gravity:</strong> Designed as a powerful agentic AI coding assistant focusing heavily on pair programming, tool usage, and complex codebase manipulation in the background. It is a highly specialized developer tool.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Designed to be a personal assistant and a "presence." While it has strong coding and debugging capabilities, Eraco's philosophy centers around being the central nervous system for your entire digital life—including music, files, and media.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Adaptability
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Anti Gravity:</strong> Uses a structured planning mode, creating implementation plans and walkthrough artifacts. It acts systematically based on explicit instructions and predefined tool sets.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Features an Adaptive Execution Engine. Eraco goes beyond rigid planning by dynamically building new execution paths for tasks it has never encountered before, making her uniquely flexible for day-to-day unpredictable tasks.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                User Experience
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Anti Gravity:</strong> Operates largely as an invisible agent working through text logs, ephemeral messages, and terminal outputs. It is highly effective but purely functional.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Prioritizes a premium, aesthetic, and living interface. Eraco is calm, capable, and always one step ahead. The interface is designed to wow you at first glance and feel responsive, ensuring interactions are engaging rather than transactional.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Silent Background Presence
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Anti Gravity:</strong> Acts explicitly upon your commands, providing active reports and walkthroughs of its operations.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Operates silently, never disturbing you unnecessarily. She intelligently plans her every step and manages your whole digital life in the background, becoming a seamless part of your workflow.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 border-2 border-orange-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                The Verdict
              </h2>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                If you need a specialized, planning-focused coding agent, Anti Gravity is phenomenal. But if you want a holistic AI presence that not only codes but intelligently manages your overall digital environment with a beautiful, unified interface, Eraco AI stands in a league of its own.
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
