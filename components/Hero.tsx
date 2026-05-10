'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

const wingImages = [
  '/assets/File management.png',
  '/assets/File management (1).png',
  '/assets/File management (2).png',
  '/assets/File management (3).png',
  '/assets/File management (4).png',
  '/assets/File management (5).png',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track max scroll progress reached - once opened, stays open
  const maxProgress = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      maxProgress.set(Math.max(maxProgress.get(), latest));
    });
    return unsubscribe;
  }, [smoothProgress, maxProgress]);

  // Use maxProgress so lid stays open once scrolled past
  const lidRotation = useTransform(maxProgress, [0, 0.2], [-90, 0]);
  const wingOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const wingScale = useTransform(smoothProgress, [0, 0.15], [0.8, 1]);

  const wingTransforms = wingImages.map((_, index) => {
    const offset = index < 3
      ? { x: -500 + (index * 90), y: -350 + (index * 60), rotate: -55 + (index * 14) }
      : { x: 500 - ((index - 3) * 90), y: -350 + ((index - 3) * 60), rotate: 55 - ((index - 3) * 14) };

    return {
      x: useTransform(smoothProgress, [0, 0.35], [0, offset.x]),
      y: useTransform(smoothProgress, [0, 0.35], [0, offset.y]),
      rotate: useTransform(smoothProgress, [0, 0.35], [0, offset.rotate]),
      opacity: useTransform(smoothProgress, [0, 0.12 + index * 0.05], [0, 1]),
    };
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden orange-glow-bg"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-orange-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* TEXT */}
      <div className="relative z-10 text-center px-4 mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-eraco-black dark:text-white mb-4 md:mb-6"
        >
          Reimagine How You{' '}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Interact
          </span>{' '}
          With Computers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto px-2"
        >
          AI That Actually Gets Work Done
        </motion.p>
      </div>

      {/* LAPTOP */}
      <div className="relative w-full px-4 mt-8 md:mt-10">

        {/* Mobile: Static laptop image with wings behind */}
        <div className="md:hidden relative mx-auto max-w-lg">
          {/* WINGS - Behind laptop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="grid grid-cols-3 gap-1">
              {wingImages.map((src) => (
                <img key={src} src={src} className="w-12 h-12 object-contain opacity-70" />
              ))}
            </div>
          </div>
          {/* Static laptop image */}
          <img src="/assets/whole laptop.png" alt="Eraco Laptop" className="w-full relative z-10" />
        </div>

        {/* Desktop: Animated laptop with wings */}
        <div className="hidden md:block relative max-w-5xl mx-auto" style={{ perspective: '2000px' }}>
          {/* WINGS */}
          <motion.div
            style={{ opacity: wingOpacity, scale: wingScale }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {wingImages.map((src, index) => {
              const t = wingTransforms[index];
              return (
                <motion.div
                  key={src}
                  style={{ x: t.x, y: t.y, rotate: t.rotate, opacity: t.opacity }}
                  className="absolute"
                >
                  <img src={src} className="w-48" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* CONTAINER */}
          <div
            className="relative mx-auto w-full max-w-3xl"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(-10deg)',
            }}
          >
            {/* SCREEN */}
            <motion.div
              style={{
                rotateX: lidRotation,
                transformOrigin: 'bottom center',
              }}
              className="relative z-10"
            >
              <img src="/assets/laptop lid layer.png" className="w-full" />
            </motion.div>

            {/* KEYBOARD */}
            <div className="relative -mt-52 -translate-y-[50px]">
              <img
                src="/assets/laptop keyboard layer.png"
                className="w-full"
              />
            </div>

            {/* SHADOW */}
            <motion.div
              animate={{
                scale: [1, 0.85, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
