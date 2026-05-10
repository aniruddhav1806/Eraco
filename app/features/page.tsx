'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

const features = {
  videoEditor: {
    label: 'Video Editor',
    title: 'Eraco Editor',
    badge: 'User-activated',
    description: 'Lives inside your existing editor as a native plugin — no alt-tabbing, no roundtripping. Edits happen directly on your timeline.',
    editors: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro'],
    items: [
      { title: 'Timeline editing', badge: 'AI', desc: 'Cuts, trims, and rearrangements happen right in your existing timeline. No export loop.' },
      { title: 'Drag and drop assets', badge: 'AI', desc: 'Bring in footage, music, images, or generated media by dragging onto the timeline.' },
      { title: 'AI-assisted cuts and pacing', badge: 'AI', desc: 'Tell Eraco what you\'re going for — "tighter", "match the beat" — it suggests edits for you to approve.' },
      { title: 'Voice and text instructions', badge: 'AI', desc: 'Speak or type naturally. "Cut the silence at 2:14", "the intro feels slow" — Eraco understands context.' },
      { title: 'B-roll and asset suggestions', badge: 'AI', desc: 'Watches your cut and flags moments that could use b-roll, a music change, or a transition — with a reason.' },
      { title: 'Plugin integration', badge: 'AI', desc: 'Installs natively into Premiere, DaVinci, and Final Cut. Sits right inside your editor.' },
    ]
  },
  teachingMode: {
    label: 'Teaching Mode',
    unique: true,
    cards: [
      {
        title: 'Screen awareness',
        badge: 'You enable it',
        description: 'Eraco sees your screen when you share it — like a call with a mentor. She watches what you\'re doing and talks you through it live.',
        items: [
          { title: 'Live commentary', desc: 'As you edit, Eraco narrates what\'s happening — "you just added a J-cut, here\'s why that works."' },
          { title: 'Mistake spotting', desc: 'Catches jump cuts, audio pops, or pacing issues and explains them without taking over.' },
          { title: 'On-demand explanation', desc: 'Ask "why did you do that?" — she answers in the moment, in context.' },
        ]
      },
      {
        title: 'Pointer guidance',
        badge: 'You enable it',
        description: 'Eraco highlights and points at parts of your screen to show you exactly what she means — like a teacher circling something on a whiteboard.',
        items: [
          { title: 'Visual annotations', desc: 'Draws attention to specific buttons, clips, or settings with a highlight — no guessing what she\'s referring to.' },
          { title: 'Step-by-step walkthroughs', desc: 'Points through a sequence one step at a time — "click here, then drag this, now look at what changed."' },
          { title: 'Your hands, her guidance', desc: 'You stay in control of the mouse at all times. She points, you click — so you build the muscle memory yourself.' },
        ]
      },
      {
        title: 'Assisted control mode',
        badge: 'Explicit permission, per session',
        fullWidth: true,
        description: 'When you want her to just show you — not tell you — you can hand over control for a moment. She performs the action, narrates every step, then hands it back.',
        items: [
          { title: 'Narrated actions', desc: 'Every mouse move and click is explained out loud so you follow along, not just watch.' },
          { title: 'Instant stop', desc: 'One key or click and control returns to you immediately — no delay, no confirmation screen.' },
          { title: 'Session-scoped only', desc: 'Permission resets when you close the session. Eraco never carries access forward automatically.' },
        ]
      }
    ]
  },
  aiCreation: {
    label: 'AI-Powered Creation',
    badge: 'Uses server',
    cards: [
      {
        title: 'Image generation',
        badge: 'AI',
        items: [
          { title: 'Text-to-image', desc: 'Describe what you need — concept art, thumbnails, backgrounds — generated in seconds.' },
          { title: 'Style and reference input', desc: 'Drop in a reference images to match a visual style, color grade, or composition.' },
          { title: 'In-app edit and upscale', desc: 'Tweak, inpaint, or upscale generated images without leaving Eraco.' },
        ]
      },
      {
        title: 'Video generation',
        badge: 'AI',
        items: [
          { title: 'Text-to-video', desc: 'Generate short clips from a prompt — intros, transitions, or placeholder b-roll.' },
          { title: 'Image-to-video', desc: 'Animate a still image — pan, zoom, or bring elements to life with a single click.' },
          { title: 'Clip extension', desc: 'Extend the beginning or end of a clip when your footage runs a second short.' },
        ]
      },
      {
        title: 'Audio generation',
        badge: 'AI',
        items: [
          { title: 'AI music', desc: 'Generate background music from a mood, tempo, or genre prompt — royalty-free by default.' },
          { title: 'Voiceover synthesis', desc: 'Generate natural-sounding narration from a script. Choose voice, tone, and pace.' },
          { title: 'Sound effects', desc: 'Generate or match sound effects to moments in your timeline — footsteps, ambience, impacts.' },
        ]
      },
      {
        title: 'Code and debug',
        badge: 'AI',
        items: [
          { title: 'Terminal coding assistant', desc: 'Write, run, and iterate on code in the terminal — Eraco follows along without interrupting your flow.' },
          { title: 'Inline debugging', desc: 'Spots errors with context — not just where, but why it happened and how to fix it cleanly.' },
          { title: 'Multi-language support', desc: 'Works across Python, JavaScript, Rust, Go, and more — switches context automatically based on your file.' },
        ]
      }
    ]
  },
  offline: {
    label: 'Offline / On-Device',
    badge: 'No internet needed',
    cards: [
      {
        title: 'File system',
        badge: 'Offline',
        items: [
          { title: 'Smart organization', desc: 'Automatically sorts and renames files based on type, date, or rules you define.' },
          { title: 'Copy, paste, move, delete', desc: 'Automates repetitive file operations — bulk renaming, clearing temp files — on demand or on a schedule.' },
          { title: 'Local file sharing', desc: 'Sends files between your devices over local network — fast, private, no cloud middleman.' },
        ]
      },
      {
        title: 'System automation',
        badge: 'Offline',
        items: [
          { title: 'Music control', desc: 'Play, pause, skip, and queue tracks across apps without switching windows. Works with Spotify, Apple Music, and system audio.' },
          { title: 'Clipboard history', desc: 'Searchable history of everything you\'ve copied — text, images, links — so nothing is ever gone.' },
          { title: 'Notification control', desc: 'Silence, filter, or batch notifications by app, time, or focus mode — interrupted only when it matters.' },
          { title: 'App launching and switching', desc: 'Open, close, and switch between apps via voice, shortcut, or trigger — without touching the dock or taskbar.' },
          { title: 'Scheduled and triggered tasks', desc: 'Automations that fire on a schedule, when a file appears, or when you plug in — fully local, no cloud dependency.' },
        ]
      }
    ]
  },
  engine: {
    label: 'Core Engine',
    title: 'Adaptive Execution Engine',
    badge: 'Flagship',
    description: 'When asked to do something with no preset, the engine builds the execution path on the fly — then remembers it for next time. Automatically decides what runs locally and what goes to the AI server.',
    items: [
      { title: 'Unknown task handling', desc: 'Builds new execution paths at runtime for tasks it has never seen before.' },
      { title: 'Offline / server routing', desc: 'Decides what runs locally and what hits the AI server — always as fast and private as possible.' },
      { title: 'Silent background operation', desc: 'Handles tasks while you work — no focus stealing, no popups, no slowdown.' },
    ]
  }
};

function Badge({ children, variant }: { children: React.ReactNode; variant: 'ai' | 'offline' | 'unique' | 'opt-in' | 'flagship' }) {
  const variants = {
    ai: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    offline: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 border-teal-200 dark:border-teal-800',
    unique: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    'opt-in': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800',
    flagship: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase border rounded ${variants[variant]}`}>
      {children}
    </span>
  );
}

function FeatureCard({ title, badge, badgeVariant, description, items, className = '' }: {
  title: string;
  badge?: string;
  badgeVariant?: 'ai' | 'offline' | 'opt-in';
  description?: string;
  items: { title: string; desc: string }[];
  className?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border p-6 transition-colors ${
        isDark
          ? 'bg-gray-900 border-gray-700 hover:border-gray-600'
          : 'bg-white border-gray-200 hover:border-gray-300'
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <h3 className={`font-semibold text-base ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
        {badge && badgeVariant && <Badge variant={badgeVariant}>{badge}</Badge>}
      </div>
      {description && (
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`} />
            <div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item.title}</div>
              <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function FeaturesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Everything <span className="text-orange-500">Eraco</span> can do
            </h1>
            <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Adaptive AI assistant with server-offloaded compute. Encrypted end-to-end — only resource usage is ever visible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Note */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl border-l-4 border-orange-500 p-5 ${
              isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex gap-3">
              <span className="text-lg">🔒</span>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong className={isDark ? 'text-white' : 'text-black'}>Every feature here is opt-in.</strong> Eraco only does what you ask it to, when you ask it. Nothing runs on your screen, mouse, or files unless you click first — and permission resets the moment you close a session.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Editor */}
      <section className="px-4 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-xs font-semibold uppercase tracking-widest mb-6 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              {features.videoEditor.label}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl border p-6 md:p-8 ${
              isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-black'}`}>{features.videoEditor.title}</h3>
              <Badge variant="opt-in">{features.videoEditor.badge}</Badge>
            </div>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{features.videoEditor.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {features.videoEditor.editors.map((editor, i) => (
                <span key={i} className={`text-xs px-3 py-1.5 rounded-md font-medium ${
                  isDark ? 'bg-gray-800 text-gray-400 border border-gray-700' : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}>
                  {editor}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.videoEditor.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-3 items-start"
                >
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`} />
                  <div className="flex-1">
                    <div className={`text-sm font-medium flex items-center gap-2 flex-wrap ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      {item.title}
                      {item.badge === 'AI' && <Badge variant="ai">AI</Badge>}
                    </div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Mode */}
      <section className="px-4 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <h2 className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              {features.teachingMode.label}
            </h2>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${
              isDark ? 'bg-amber-900/30 text-amber-400 border-amber-800' : 'bg-amber-100 text-amber-700 border-amber-200'
            }`}>
              Unique to Eraco
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.teachingMode.cards.slice(0, 2).map((card, i) => (
              <FeatureCard
                key={i}
                title={card.title}
                badge={card.badge}
                badgeVariant="opt-in"
                description={card.description}
                items={card.items}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <FeatureCard
              title={features.teachingMode.cards[2].title}
              badge={features.teachingMode.cards[2].badge}
              badgeVariant="opt-in"
              description={features.teachingMode.cards[2].description}
              items={features.teachingMode.cards[2].items}
              className="md:col-span-2"
            />
          </motion.div>
        </div>
      </section>

      {/* AI Creation */}
      <section className="px-4 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <h2 className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              {features.aiCreation.label}
            </h2>
            <Badge variant="ai">{features.aiCreation.badge}</Badge>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.aiCreation.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <FeatureCard
                  title={card.title}
                  badge={card.badge}
                  badgeVariant="ai"
                  items={card.items}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline */}
      <section className="px-4 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <h2 className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              {features.offline.label}
            </h2>
            <Badge variant="offline">{features.offline.badge}</Badge>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.offline.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <FeatureCard
                  title={card.title}
                  badge={card.badge}
                  badgeVariant="offline"
                  items={card.items}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engine */}
      <section className="px-4 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-xs font-semibold uppercase tracking-widest mb-6 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              {features.engine.label}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl border-2 p-6 md:p-8 ${
              isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-black'}`}>{features.engine.title}</h3>
              <Badge variant="flagship">{features.engine.badge}</Badge>
            </div>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{features.engine.description}</p>

            <div className="grid md:grid-cols-3 gap-4">
              {features.engine.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isDark ? 'bg-orange-500/50' : 'bg-orange-400'}`} />
                  <div>
                    <div className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item.title}</div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className={`mt-8 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <p className="text-base">
            Check out{' '}
            <a href="/changelog" className="text-orange-500 hover:underline">
              changelog
            </a>{' '}
            to check out on the development.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
