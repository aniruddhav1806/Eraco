'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const consumerPlans = [
  { name: 'Free', price: '$0/mo', ads: 'Full ads', credits: 'Low', mediaGen: false, videoEditing: false, compute: 'Standard', support: 'Community', computers: '1' },
  { name: 'Lite', price: '$5/mo', ads: 'Reduced', credits: '2x Free', mediaGen: 'Limited', videoEditing: false, compute: 'Standard', support: 'Email', computers: '1' },
  { name: 'Pro', price: '$20/mo', recommended: true, ads: 'Ad-free', credits: 'Generous', mediaGen: 'Full', videoEditing: true, compute: 'Priority', support: 'Email', computers: '1' },
  { name: 'Creator', price: '$30/mo', ads: 'Ad-free', credits: 'Maximum', mediaGen: 'Full', videoEditing: true, compute: 'Priority+', support: 'Dedicated', computers: '1' },
];

const businessPlans = [
  { name: 'Business/API', price: '$200/mo', subtitle: '', ads: 'Ad-free', credits: 'Limited (rollover)', mediaGen: 'Full', videoEditing: true, compute: 'Priority+ (Usage-based billing)', support: 'Dedicated + SLA', computers: '6', features: ['Encryption guarantees', 'API access', 'Usage-based compute billing'] },
  { name: 'Enterprise', price: 'Custom', subtitle: '+ $300 deposit', ads: 'Ad-free', credits: 'Unlimited', mediaGen: 'Full', videoEditing: true, compute: 'Priority++ (Dedicated infrastructure)', support: '24/7 Dedicated + SLA', computers: 'Unlimited', features: ['Postpaid monthly billing', 'Custom onboarding', 'Annual contracts (10-15% discount)'] },
];

const creditPacks = [
  { name: 'Starter', price: '$2', credits: '4 credits' },
  { name: 'Standard', price: '$5', credits: '10 credits' },
  { name: 'Power', price: '$25', credits: '50 credits' },
];

export default function PricingPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const heroRef = useRef<HTMLDivElement>(null);
  const consumerRef = useRef<HTMLDivElement>(null);
  const addonsRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const consumerInView = useInView(consumerRef, { once: true, margin: '-100px' });
  const addonsInView = useInView(addonsRef, { once: true, margin: '-100px' });
  const businessInView = useInView(businessRef, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div ref={heroRef} className={`pt-32 pb-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            All prices in USD. Subject to change before launch.
          </motion.p>
        </div>
      </div>

      {/* Consumer Plans */}
      <section ref={consumerRef} className={`py-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'orange-glow-bg'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={consumerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Consumer Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={consumerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Choose the plan that fits your needs
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consumerPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
                animate={consumerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  plan.recommended
                    ? 'border-2 border-orange-500 shadow-[0_0_40px_rgba(255,107,53,0.3)]'
                    : isDark
                    ? 'border border-gray-800 bg-gray-900'
                    : 'border border-gray-200 bg-white shadow-lg'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {plan.price}
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Ads</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.ads}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Credits</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.credits}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Media Gen</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.mediaGen === true ? '✓ Full' : plan.mediaGen === false ? '—' : plan.mediaGen}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Video Editing</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.videoEditing ? '✓' : '—'}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Compute</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.compute}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Support</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.support}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Computers</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.computers}
                    </span>
                  </li>
                </ul>

                <button
                  className={`w-full mt-6 py-3 px-4 rounded-full font-medium transition-all duration-300 btn-glow ${
                    plan.recommended
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : isDark
                      ? 'bg-white text-black hover:bg-orange-500 hover:text-white'
                      : 'bg-black text-white hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Credit Packs */}
      <section ref={addonsRef} className={`py-20 px-4 md:px-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Add-on Credit Packs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Available for all consumer tiers
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {creditPacks.map((pack, index) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'border border-gray-800 bg-gray-800'
                    : 'border border-gray-200 bg-gray-50'
                }`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {pack.name}
                </h3>
                <p className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  {pack.price}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {pack.credits}
                </p>
                <button
                  className={`w-full mt-4 py-2.5 px-4 rounded-full font-medium transition-all duration-300 ${
                    isDark
                      ? 'bg-white text-black hover:bg-orange-500 hover:text-white'
                      : 'bg-black text-white hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section ref={businessRef} className={`py-20 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={businessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isDark ? 'text-white' : 'text-black'}`}
          >
            Business & Enterprise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            animate={businessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            For teams and organizations
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {businessPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
                animate={businessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className={`relative rounded-2xl p-8 ${
                  isDark
                    ? 'border border-gray-800 bg-black'
                    : 'border border-gray-200 bg-white shadow-xl'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {plan.price}
                  </p>
                  {plan.subtitle && (
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.subtitle}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Ads</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.ads}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Credits</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.credits}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Media Gen</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.mediaGen}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Video Editing</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.videoEditing ? '✓' : '—'}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Compute</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.compute}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Support</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.support}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Computers</span>
                    <span className={`text-sm flex-1 text-right ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {plan.computers}
                    </span>
                  </li>
                </ul>

                <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-4 mb-6`}>
                  <p className={`text-xs font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    INCLUDES:
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg className={`w-4 h-4 ${isDark ? 'text-orange-500' : 'text-orange-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 px-4 rounded-full font-medium transition-all duration-300 btn-glow bg-orange-500 text-white hover:bg-orange-600">
                  Contact Sales
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}