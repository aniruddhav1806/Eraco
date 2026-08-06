'use client';

import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { motion } from 'framer-motion';

const comparisonList = [
  {
    title: 'Compare with ChatGPT',
    href: '/eraco-vs-chatgpt',
    badge: 'General AI & Chatbots',
    subtitle: 'Active Execution vs. Conversational Chat',
    description:
      'Discover why Eraco goes beyond OpenAI’s chat window by natively operating in your local environment, running code, and executing tasks autonomously without constant copy-pasting.',
    keyPoints: [
      'Executes directly on your local system vs. browser prompt response',
      'Local context of folders and codebase vs. manual pasting',
      'Autonomous multi-step workflows vs. passive chatting',
    ],
    accent: 'from-orange-500/20 to-amber-500/10',
  },
  {
    title: 'Compare with Claude Code',
    href: '/eraco-vs-claude-code',
    badge: 'Developer Tools',
    subtitle: 'Holistic Digital Presence vs. Terminal-Only Coding',
    description:
      'While Claude Code lives exclusively in the terminal, Eraco provides an all-in-one assistant handling code, file management, media generation, and full desktop workflows.',
    keyPoints: [
      'Full OS & digital presence vs. terminal-isolated CLI',
      'Adaptive Execution Engine builds new execution paths dynamically',
      'Background silent operator with privacy by default',
    ],
    accent: 'from-orange-500/20 to-rose-500/10',
  },
  {
    title: 'Compare with Gemini',
    href: '/eraco-vs-gemini',
    badge: 'Ecosystem AI',
    subtitle: 'Local OS Integration vs. Cloud Ecosystem',
    description:
      'Compare Eraco’s deep local computer integration against Google’s cloud-centric model. Eraco controls native desktop processes, files, and local build tools without cloud lock-in.',
    keyPoints: [
      'Native computer & local file operations vs. Google Workspace lock-in',
      'Autonomous pair programming pair with local pair agency',
      'Offline-capable local tools & private architecture',
    ],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    title: 'Compare with Grok',
    href: '/eraco-vs-grok',
    badge: 'Information & News',
    subtitle: 'Action & Utility vs. Real-Time Social Feeds',
    description:
      'Grok specializes in real-time information retrieval and witty dialogue on X. Eraco is engineered for deep productivity, batch automation, and local execution.',
    keyPoints: [
      'Autonomous task execution vs. real-time feed synthesis',
      'Silent background operation vs. conversational feed interface',
      'System-level file organization & multi-app pair workflows',
    ],
    accent: 'from-orange-500/20 to-yellow-500/10',
  },
  {
    title: 'Compare with Anti Gravity',
    href: '/eraco-vs-antigravity',
    badge: 'Agentic Coding Systems',
    subtitle: 'All-in-One Presence vs. Specialized Coding Agent',
    description:
      'Anti Gravity is a powerful pair programming agent. Eraco unites high-fidelity autonomous coding with complete personal assistant capabilities and a living aesthetic UI.',
    keyPoints: [
      'Dynamic Adaptive Engine vs. rigid predetermined toolsets',
      'Complete desktop presence (media, files, coding) vs. pure coding agent',
      'Living aesthetic UI designed for seamless daily flow',
    ],
    accent: 'from-orange-500/20 to-red-500/10',
  },
  {
    title: 'Compare with Standard LLMs',
    href: '/eraco-vs-llm',
    badge: 'Foundation Models',
    subtitle: 'True Autonomous Agency vs. Passive Prompt-Response',
    description:
      'Explore the architectural differences between traditional chat-based language models and Eraco’s proactive, self-healing Adaptive Execution Engine.',
    keyPoints: [
      'Proactive execution engine vs. passive text generation',
      'Direct environment interaction without browser tab confinement',
      'Multi-step autonomy that resolves unknown tasks dynamically',
    ],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
];

const featureMatrix = [
  { feature: 'Autonomous Local Execution', eraco: true, chatgpt: false, claudeCode: true, standardLLM: false },
  { feature: 'Full Desktop & File Management', eraco: true, chatgpt: false, claudeCode: false, standardLLM: false },
  { feature: 'Adaptive Dynamic Execution', eraco: true, chatgpt: false, claudeCode: false, standardLLM: false },
  { feature: 'Silent Background Presence', eraco: true, chatgpt: false, claudeCode: false, standardLLM: false },
  { feature: 'Terminal & Code Debugging', eraco: true, chatgpt: true, claudeCode: true, standardLLM: true },
  { feature: 'Media & Asset Generation', eraco: true, chatgpt: true, claudeCode: false, standardLLM: true },
  { feature: 'Privacy by Default Architecture', eraco: true, chatgpt: false, claudeCode: false, standardLLM: false },
];

export default function ComparePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-[#fafafa] text-black'}`}>
      {/* Hero Header */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 ambient-glow-hero pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-orange-500/10 border border-orange-500/20 text-orange-500"
          >
            Detailed Comparisons
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            How Eraco{' '}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Compares
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
          >
            Traditional AI models chat with you. Eraco AI gets work done. See how Eraco outpaces traditional chatbots, terminal utilities, and cloud-bound assistants.
          </motion.p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Explore Head-to-Head Comparisons
            </h2>
            <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Select any platform below for an in-depth breakdown of features, workflows, and architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {comparisonList.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative"
              >
                <Link
                  href={item.href}
                  className={`block h-full rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    isDark
                      ? 'bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-orange-500/50 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
                      : 'bg-white hover:bg-white border border-neutral-200 hover:border-orange-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
                  }`}
                >
                  {/* Subtle hover gradient corner */}
                  <div
                    className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.accent} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-500/10 text-orange-500 border border-orange-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-orange-500 mb-4">
                      {item.subtitle}
                    </p>

                    <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <svg
                            className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200/50 dark:border-neutral-800/80 flex items-center justify-between text-sm font-semibold text-orange-500 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Comparison</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Feature Matrix at a Glance
            </h2>
            <p className={`text-base md:text-lg ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              A quick comparison of capability coverage between Eraco AI and other AI paradigms.
            </p>
          </div>

          <div className={`overflow-x-auto rounded-2xl border ${isDark ? 'border-neutral-800 bg-neutral-900/60' : 'border-neutral-200 bg-white'} p-2 sm:p-4 shadow-xl`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200/60 dark:border-neutral-800">
                  <th className="py-4 px-4 text-sm md:text-base font-semibold">Capability</th>
                  <th className="py-4 px-3 sm:px-4 text-sm md:text-base font-bold text-orange-500 text-center">Eraco AI</th>
                  <th className="py-4 px-3 sm:px-4 text-xs md:text-sm font-semibold text-center text-neutral-500">ChatGPT</th>
                  <th className="py-4 px-3 sm:px-4 text-xs md:text-sm font-semibold text-center text-neutral-500">Claude Code</th>
                  <th className="py-4 px-3 sm:px-4 text-xs md:text-sm font-semibold text-center text-neutral-500">Standard LLMs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/40 dark:divide-neutral-800/60 text-xs sm:text-sm">
                {featureMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-orange-500/5 transition-colors">
                    <td className="py-3.5 px-4 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-500">
                        ✓
                      </span>
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.chatgpt ? (
                        <span className="text-neutral-400">✓</span>
                      ) : (
                        <span className="text-neutral-400/40">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.claudeCode ? (
                        <span className="text-neutral-400">✓</span>
                      ) : (
                        <span className="text-neutral-400/40">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.standardLLM ? (
                        <span className="text-neutral-400">✓</span>
                      ) : (
                        <span className="text-neutral-400/40">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`rounded-3xl p-8 md:p-12 border ${isDark ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white border-neutral-200'} shadow-2xl relative overflow-hidden`}>
            <div className="absolute inset-0 ambient-glow-hero pointer-events-none opacity-60" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Ready to Experience AI That{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Executes
                </span>
                ?
              </h2>
              <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Stop switching between chat tabs and terminal prompts. Join the early access waitlist for Eraco AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#waitlist"
                  className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/features"
                  className={`px-8 py-3.5 rounded-full font-semibold border transition-all ${
                    isDark
                      ? 'border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:bg-neutral-800'
                      : 'border-neutral-300 hover:border-neutral-400 text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  Explore All Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
