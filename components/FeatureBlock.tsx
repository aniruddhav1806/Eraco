'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FeatureBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="engine" className="py-16 md:py-32 px-4 md:px-6 bg-white dark:bg-eraco-black">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Product Introduction - What is Eraco */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 mb-12 md:mb-20"
        >
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* What is Eraco */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 md:mb-6">
                Meet <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Eraco</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Eraco is an <span className="font-semibold text-gray-900 dark:text-white">adaptive AI assistant</span> that works alongside you — understanding your intent, learning your workflows, and getting more capable with every interaction.
              </p>
            </motion.div>

            {/* Core Value Proposition */}
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Unlike traditional automation tools that follow rigid scripts, Eraco adapts to <span className="font-semibold text-gray-900 dark:text-white">how you work</span> — not the other way around. Whether you're editing video, writing code, or managing files, Eraco meets you where you are and helps you get things done faster.
              </p>
            </div>

            {/* Key Features Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12">
              {[
                {
                  title: 'Video Editing',
                  description: 'Native integration with Premiere, DaVinci, and Final Cut — edits happen directly on your timeline.',
                  highlight: 'Editor Integration',
                },
                {
                  title: 'Teaching Mode',
                  description: 'Eraco watches your screen, narrates what you\'re doing, and guides you step-by-step.',
                  highlight: 'Unique to Eraco',
                },
                {
                  title: 'AI Creation',
                  description: 'Generate images, video, music, and voiceovers — or write and debug code alongside you.',
                  highlight: 'Text-to-Media',
                },
                {
                  title: 'Offline Power',
                  description: 'File operations, music control, app switching — all work without internet, fully local.',
                  highlight: '100% Private',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-colors duration-300"
                >
                  <div className="text-[10px] font-medium uppercase tracking-wider text-orange-500 mb-2">{feature.highlight}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Links to Features and Changelog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
                Explore all capabilities or follow the development journey
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="/features"
                  className="inline-flex items-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg font-medium text-sm sm:text-base bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  View All Features
                </a>
                <a
                  href="/changelog"
                  className="inline-flex items-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg font-medium text-sm sm:text-base border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Changelog
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Block - Adaptive Execution Engine */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 mb-12 md:mb-20"
        >
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                Adaptive Execution Engine
              </h2>
            </motion.div>

            {/* Lead Statement */}
            <div className="text-center mb-8 md:mb-12">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white leading-snug max-w-4xl mx-auto">
                This isn&apos;t automation.
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  This is evolution.
                </span>
              </p>
            </div>

            {/* Paragraph 1 - AEE introduction */}
            <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                The <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold">Adaptive Execution Engine</span> is the intelligence layer that sits beneath everything Eraco does.
              </p>
            </div>

            {/* Paragraph 2 - How it differs */}
            <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Most AI systems operate within fixed pipelines — they recognize known tasks and follow hardcoded sequences. The <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold">AEE</span> is architecturally different. It understands intent, not just instructions, routing each task through the most efficient execution path available.
              </p>
            </div>

            {/* Paragraph 3 - Novel tasks */}
            <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                When the <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold">Adaptive Execution Engine</span> encounters something entirely new, it doesn&apos;t stall or fail. It synthesizes a path in real time, assembling the right capabilities on the fly — then stores that path permanently. Every novel task makes the system more capable for the next one.
              </p>
            </div>

            {/* Paragraph 4 - Background */}
            <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                All of this runs server-side, in the background, without ever interrupting what you&apos;re doing. The result reaches you quietly. The work happened — you just didn&apos;t have to watch it.
              </p>
            </div>

            {/* Paragraph 5 - Compounding */}
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                This is a system that compounds. What starts as a capable assistant becomes, over time, something that knows your workflows, anticipates your needs, and handles complexity that would have stopped it before.
              </p>
            </div>

            {/* Supporting Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8">
              {[
                {
                  title: 'Real-Time Learning',
                  description: 'Adapts to your workflow instantly, no training required.',
                  icon: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: 'Dynamic Execution',
                  description: 'Builds new pathways for tasks it has never seen before.',
                  icon: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Continuous Evolution',
                  description: 'Gets smarter with every interaction, forever improving.',
                  icon: (
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 transition-colors duration-300"
                >
                  <div className="mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Video Sections Block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
          className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
        >
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Product Video Section - SaaS Explainer */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Learn more about it
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
                  Understand what makes Eraco revolutionary.
                </p>
              </div>

              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900 aspect-video max-w-full">
                {/* Placeholder for product video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
                  <div className="text-center px-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    >
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">SaaS Explainer Video</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm mt-1">Cooking right now</p>
                  </div>
                </div>
                {/* Subtle glow border */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 pointer-events-none" />
              </div>
            </motion.div>

            {/* Demo Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-16"
            >
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  See it in action
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
                  Watch Eraco work in real-time.
                </p>
              </div>

              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900 aspect-video max-w-full">
                {/* Placeholder for demo video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
                  <div className="text-center px-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    >
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Demo Video</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm mt-1">Cooking right now</p>
                  </div>
                </div>
                {/* Subtle glow border */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
