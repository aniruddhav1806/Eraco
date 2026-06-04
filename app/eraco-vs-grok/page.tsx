'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EracoVsGrokPage() {
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
            Eraco AI <span className="text-orange-500">vs</span> Grok
          </h1>
          <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comparing Eraco's deep system integration against xAI's real-time, socially-connected assistant.
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
                Core Focus
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Grok:</strong> Focused on real-time information retrieval, witty conversations, and processing live data from X (formerly Twitter). It excels at answering questions about current events.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Focused on getting work done. Eraco is a utility-driven, background operator designed to execute tasks, organize files, and manage your digital workflow directly on your machine.
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
                Information vs. Execution
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Grok:</strong> An advanced search and synthesis engine. You ask what is happening right now, and Grok summarizes the feed.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> An execution engine. You ask Eraco to rename a batch of 100 media files based on their content, and it completes the action locally without requiring manual intervention.
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
                Workflow Presence
              </h2>
              <p className={`text-base md:text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Grok:</strong> Resides in a web interface or app. You must actively navigate to Grok to utilize it.
              </p>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Eraco AI:</strong> Functions silently in the background of your operating system. It observes when needed, integrates into your IDE, and acts without breaking your state of flow.
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
                If you want up-to-the-second news synthesis with a rebellious personality, Grok is perfect. But if you want a reliable, quiet assistant that can actually handle your files, write your code, and organize your system, Eraco AI is the tool you need.
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
