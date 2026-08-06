'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EracoVsChatGPTPage() {
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
            Eraco AI <span className="text-orange-500">vs</span> ChatGPT
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comparing Eraco's active execution engine against OpenAI's conversational interface.
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
                Interaction Paradigm
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>ChatGPT:</strong> Highly conversational and reactive. You must open a browser tab or app, type a prompt, wait for a response, and then manually act upon the information or code provided.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Proactive and actionable. Eraco operates in the background, capable of understanding tasks and executing them directly in your environment without needing constant back-and-forth chatting.
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
                Context & Environment
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>ChatGPT:</strong> Confined to its chat interface. It only knows what you explicitly paste into it, requiring you to constantly provide context about your files, code, or current tasks.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Deeply integrated with your system. Eraco has access to your local files, directories, and tasks (when permitted), allowing it to contextually assist you without needing manual copy-pasting.
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
                Actionable Capabilities
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>ChatGPT:</strong> Excellent at generating text, brainstorming, and writing code snippets, but it cannot run commands in your terminal or organize your local folders automatically.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> A full-spectrum assistant. From editing files and managing media to debugging code directly in your IDE, Eraco is built to autonomously execute multi-step workflows.
              </p>
            </motion.div>

            <motion.div 
              className={`rounded-2xl p-8 mb-8 border-2 border-orange-500 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                The Verdict
              </h2>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                ChatGPT is the ultimate chatbot for generating ideas and content. However, if you want an AI that moves beyond chatting to become a seamless, executing partner in your daily digital workflow, Eraco AI is the clear choice.
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
