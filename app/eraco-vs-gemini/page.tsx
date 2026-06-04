'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EracoVsGeminiPage() {
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
            Eraco AI <span className="text-orange-500">vs</span> Gemini
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comparing Eraco's localized execution against Google's multi-modal ecosystem model.
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Ecosystem Integration
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Gemini:</strong> Built to integrate smoothly with Google Workspace (Docs, Sheets, Gmail, etc.) but remains largely constrained within cloud applications and web interfaces.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Built to integrate with your actual computer. Eraco interfaces directly with your local system, terminal, and local applications—managing files and processes that exist outside the cloud.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Task Autonomy
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Gemini:</strong> Operates primarily on a prompt-and-response loop. You ask it to summarize a document, and it provides text you must review and apply.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Features an Adaptive Execution Engine. You assign a complex goal, and Eraco will independently plan, execute, and verify the multi-step process in your local environment.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Development & Coding
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Gemini:</strong> Offers strong coding assistance via chat, useful for generating scripts or explaining logic, but lacks direct access to your local build environment.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Functions as a pair programmer with agency. It can review your local repository, run tests, fix syntax errors, and refactor code natively in your workflow.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 border-2 border-orange-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                The Verdict
              </h2>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                If your entire workflow exists within Google Workspace, Gemini is highly effective. But if you are a developer, creator, or power user who works with local files, custom environments, and needs autonomous task execution, Eraco AI is vastly superior.
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
