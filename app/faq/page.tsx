'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General
  {
    question: "What is Eraco AI?",
    answer: "Eraco is a personal AI assistant that works silently in the background — managing your files, writing and debugging code, generating media, and handling complex tasks, all without interrupting what you're doing.",
    category: "General"
  },
  {
    question: "How is Eraco different from other AI assistants?",
    answer: "Most AI assistants require you to stop, open an app, and type a prompt. Eraco is built to run in the background, act on your behalf, and complete multi-step tasks autonomously — without hijacking your screen or workflow. It's less of a chatbot and more of a capable background operator.",
    category: "General"
  },
  {
    question: "Who is Eraco built for?",
    answer: "Eraco is built for creators, developers, businesses, students, researchers, and power users who want AI to actively help them work faster — not just answer questions.",
    category: "General"
  },
  {
    question: "Does Eraco work locally or in the cloud?",
    answer: "Eraco uses a hybrid approach. Heavy compute is offloaded to secure servers to keep your device fast and cool, while your data stays encrypted throughout. Only resource usage is ever visible — your files and activity are never exposed.",
    category: "General"
  },
  // Comparisons
  {
    question: "Eraco VS Claude Code: What's the difference?",
    answer: "While Claude Code is a powerful terminal-based coding tool, Eraco is a full-spectrum personal assistant that handles your entire digital life. Check out our Eraco VS Claude Code page for a detailed breakdown.",
    category: "Comparisons"
  },
  {
    question: "Eraco VS Anti Gravity: Which is better?",
    answer: "Anti Gravity is a specialized, planning-focused coding agent, whereas Eraco is a holistic AI presence with a beautiful interface. Check out our Eraco VS Anti Gravity page for a detailed breakdown.",
    category: "Comparisons"
  },
  {
    question: "Eraco VS Standard LLMs (ChatGPT, Gemini, etc.)",
    answer: "Standard LLMs wait for you to prompt them and generate text. Eraco operates in the background, autonomously taking action directly in your environment. Check out our Eraco VS Standard LLMs page for a general breakdown, or see specific comparisons for ChatGPT, Gemini, and Grok.",
    category: "Comparisons"
  },
  {
    question: "Eraco VS ChatGPT: How do they compare?",
    answer: "ChatGPT is a powerful conversational AI that waits for your prompts. Eraco operates in the background, autonomously taking action directly in your environment. Check out our Eraco VS ChatGPT page for a detailed breakdown.",
    category: "Comparisons"
  },
  {
    question: "Eraco VS Gemini: What's the difference?",
    answer: "Gemini is Google's capable generative model, primarily interacting through chat and workspace apps. Eraco is a local, deep-system assistant that executes complex tasks silently on your machine. Check out our Eraco VS Gemini page for a detailed breakdown.",
    category: "Comparisons"
  },
  {
    question: "Eraco VS Grok: Which is better?",
    answer: "Grok provides real-time information and conversational engagement. Eraco is designed for actual task completion and holistic digital management. Check out our Eraco VS Grok page for a detailed breakdown.",
    category: "Comparisons"
  },
  // Privacy & Security
  {
    question: "Is my data safe with Eraco?",
    answer: "Yes. All data processed by Eraco is TLS-encrypted. Nothing is stored or accessed without your knowledge, and your files are never used to train any model.",
    category: "Privacy & Security"
  },
  {
    question: "What data does Eraco collect?",
    answer: "Eraco only tracks how much server-side resource was used to complete your online tasks — things like compute load on our end. It does not collect the contents of your files, messages, or personal activity.",
    category: "Privacy & Security"
  },
  {
    question: "Can Eraco see my files or activity?",
    answer: "Eraco interacts with files only when you explicitly give it a task. It doesn't scan your system passively or log what you do. You stay in control of what it touches. Check out our Security page for more details.",
    category: "Privacy & Security"
  },
  // Features
  {
    question: "What can Eraco do with my files?",
    answer: "Eraco can organize, rename, sort, move, edit, and manage your files automatically based on rules you define or tasks you assign. It understands context — so it can sort project folders, clean up downloads, or structure entire directories without manual effort.",
    category: "Features"
  },
  {
    question: "Can Eraco help me write or debug code?",
    answer: "Yes. Eraco can write, review, and debug code directly in your terminal. It understands context across files and can fix errors, suggest improvements, and run commands — all without switching between tools.",
    category: "Features"
  },
  {
    question: "Does Eraco support media generation?",
    answer: "Yes. Eraco includes built-in media generation capabilities, allowing you to create images and other media assets as part of your workflow, without needing a separate tool or service.",
    category: "Features"
  },
  {
    question: "What is the Adaptive Execution Engine?",
    answer: "The Adaptive Execution Engine is what makes Eraco capable of handling tasks it has never been explicitly trained for. It breaks down novel instructions into logical steps, figures out the best path forward, and executes — adapting in real time if something changes mid-task.",
    category: "Features"
  },
  {
    question: "Can Eraco help me edit videos?",
    answer: "Yes. Eraco can assist you with video editing inside tools like Adobe Premiere or DaVinci Resolve — helping you make cuts, apply changes, and work through edits faster without leaving your editor.",
    category: "Features"
  },
  {
    question: "How does Eraco handle tasks it has never seen before?",
    answer: "Through the Adaptive Execution Engine, Eraco decomposes unfamiliar tasks into steps it can reason through. Instead of failing when something is new, it adapts — making it far more capable than assistants that only work within predefined commands.",
    category: "Features"
  },
  // Pricing & Plans
  {
    question: "Is Eraco free to use?",
    answer: "Pricing details are now available. Check out our Pricing page for the full breakdown of plans and what's included.",
    category: "Pricing & Plans"
  },
  {
    question: "What's included in each plan?",
    answer: "Plans are structured around usage, features, and compute access. Head over to our Pricing page to see exactly what each plan offers.",
    category: "Pricing & Plans"
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes. You'll be able to upgrade, downgrade, or cancel your plan at any time — no lock-ins.",
    category: "Pricing & Plans"
  },
  // Performance
  {
    question: "Is Eraco lightweight?",
    answer: "Yes. By offloading heavy compute to secure servers, Eraco keeps its local footprint minimal. You get powerful AI capabilities without draining your RAM or CPU.",
    category: "Performance"
  },
  {
    question: "Will Eraco work on low-end PCs?",
    answer: "That's a core design goal. Because processing happens server-side, even modest hardware should be able to run Eraco smoothly. Specific minimum specs will be published before launch.",
    category: "Performance"
  },
  // Roadmap
  {
    question: "Is Eraco still in development?",
    answer: "Yes, Eraco is currently in active development with a working prototype. We're refining features, optimizing performance, and preparing for a broader release.",
    category: "Roadmap"
  },
  {
    question: "Will there be a public beta?",
    answer: "Yes. A public beta is planned. Sign up for the waitlist to be among the first to get access.",
    category: "Roadmap"
  },
  {
    question: "How can I stay updated?",
    answer: "Follow us on our official channels or join the waitlist on this site. We share development updates, feature previews, and launch timelines there first.",
    category: "Roadmap"
  },
  // Trust & Philosophy
  {
    question: "Why should I trust Eraco with automation?",
    answer: "Eraco is built on a simple principle: you're always in control. It only acts on tasks you assign, never accesses data you haven't shared with it, and operates transparently. The architecture is designed so that trust is earned through visibility, not assumed.",
    category: "Trust & Philosophy"
  },
  {
    question: "Will Eraco replace human work?",
    answer: "No — and that's intentional. Eraco is built to handle the tedious, repetitive, and time-consuming parts of your workflow so you can focus on the work that actually needs a human. It's a tool that amplifies what you do, not a replacement for it.",
    category: "Trust & Philosophy"
  },
];

const categories = ["General", "Comparisons", "Privacy & Security", "Features", "Pricing & Plans", "Performance", "Roadmap", "Trust & Philosophy"];

export default function FAQPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredFAQs = selectedCategory
    ? faqData.filter(faq => faq.category === selectedCategory)
    : faqData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div ref={ref} className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Everything you need to know about Eraco.
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <section className={`py-8 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-orange-500 text-white'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </motion.button>
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className={`py-12 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredFAQs.map((faq, index) => {
            const globalIndex = faqData.indexOf(faq);
            const isOpen = openIndex === globalIndex;

            return (
              <motion.div
                key={globalIndex}
                variants={itemVariants}
                className={`rounded-2xl overflow-hidden ${
                  isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  <span className={`font-medium text-lg pr-4 ${isOpen ? 'text-orange-500' : ''}`}>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="overflow-hidden"
                >
                  <div className={`px-6 pb-4 pt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {/* Process answer to add hyperlinks */}
                    <AnswerWithLinks answer={faq.answer} isDark={isDark} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section className={`py-16 px-4 md:px-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Still have questions?
          </h2>
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Can't find the answer you're looking for? Get in touch.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all btn-glow"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function AnswerWithLinks({ answer, isDark }: { answer: string; isDark: boolean }) {
  const links: Record<string, string> = {
    "Security page": "/security",
    "Pricing page": "/pricing",
    "Pricing": "/pricing",
    "features": "/features",
    "waitlist": "/#waitlist",
    "changelog": "/changelog",
    "Eraco VS Claude Code": "/eraco-vs-claude-code",
    "Eraco VS Anti Gravity": "/eraco-vs-antigravity",
    "Eraco VS Standard LLMs": "/eraco-vs-llm",
    "Eraco VS ChatGPT": "/eraco-vs-chatgpt",
    "Eraco VS Gemini": "/eraco-vs-gemini",
    "Eraco VS Grok": "/eraco-vs-grok",
  };

  const sortedKeys = Object.keys(links).sort((a, b) => b.length - a.length);
  let elements: any[] = [answer];

  sortedKeys.forEach((keyword) => {
    const url = links[keyword];
    const newElements: any[] = [];
    
    elements.forEach((el, index) => {
      if (typeof el === 'string') {
        const regex = new RegExp(`(${keyword})`, 'i');
        const parts = el.split(regex);
        
        parts.forEach((part, i) => {
          if (part.toLowerCase() === keyword.toLowerCase()) {
            newElements.push(
              <a key={`${keyword}-${index}-${i}`} href={url} className="text-orange-500 hover:underline font-medium">
                {part}
              </a>
            );
          } else if (part) {
            newElements.push(part);
          }
        });
      } else {
        newElements.push(el);
      }
    });
    elements = newElements;
  });

  return (
    <div className="leading-relaxed">
      {elements.map((el, i) => <span key={i}>{el}</span>)}
    </div>
  );
}