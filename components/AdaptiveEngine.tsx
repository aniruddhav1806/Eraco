'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AdaptiveEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="engine"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden
      bg-gradient-to-b from-gray-50 to-white
      dark:from-gray-900 dark:to-black"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading (can change with theme) */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-eraco-black dark:text-white tracking-tight">
            Adaptive Execution Engine
          </h2>
        </motion.div>

        {/* ✅ CONSTANT BLOCK */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-100 to-gray-50
          rounded-3xl p-12 md:p-16 shadow-soft
          border border-gray-200"
        >
          {/* Lead */}
          <div className="text-center mb-12">
            <p className="text-2xl md:text-4xl font-semibold text-gray-800 leading-snug max-w-4xl mx-auto">
              This isn&apos;t automation.
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                This is evolution.
              </span>
            </p>
          </div>

          {/* Paragraphs */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The Adaptive Execution Engine is the intelligence layer that sits beneath everything Eraco does.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Most AI systems operate within fixed pipelines — they recognize known tasks and follow hardcoded sequences. The AEE is architecturally different. It understands intent, not just instructions, routing each task through the most efficient execution path available.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              When the engine encounters something entirely new, it doesn't stall or fail. It synthesizes a path in real time, assembling the right capabilities on the fly — then stores that path permanently. Every novel task makes the system more capable for the next one.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              All of this runs server-side, in the background, without ever interrupting what you're doing. The result reaches you quietly. The work happened — you just didn't have to watch it.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              This is a system that compounds. What starts as a capable assistant becomes, over time, something that knows your workflows, anticipates your needs, and handles complexity that would have stopped it before.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {[
              {
                title: 'Real-Time Learning',
                description: 'Adapts to your workflow instantly, no training required.',
                icon: '🧠',
              },
              {
                title: 'Dynamic Execution',
                description: 'Builds new pathways for tasks it has never seen before.',
                icon: '⚡',
              },
              {
                title: 'Continuous Evolution',
                description: 'Gets smarter with every interaction, forever improving.',
                icon: '📈',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-2xl 
                bg-white/70 backdrop-blur-sm 
                border border-gray-100 
                shadow-soft hover:shadow-glow-sm transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}