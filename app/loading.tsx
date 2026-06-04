// loading.tsx — Eraco skeleton loading screen
// Matches: cream bg, dark bold headings, orange accent, gradient logo mark

export default function Loading() {
  return (
    <div className="eraco-skeleton">
      <style>{`
        .eraco-skeleton {
          min-height: 100vh;
          background-color: #FAF5EF;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
        }

        /* ── Shimmer keyframe ── */
        @keyframes shimmer {
          0%   { background-position: -800px 0; }
          100% { background-position:  800px 0; }
        }

        .sk {
          background: linear-gradient(
            90deg,
            #EDE5DA 25%,
            #E2D8CC 50%,
            #EDE5DA 75%
          );
          background-size: 800px 100%;
          animation: shimmer 1.8s infinite ease-in-out;
          border-radius: 6px;
        }

        .sk-pill  { border-radius: 999px; }
        .sk-round { border-radius: 12px; }
        .sk-circle { border-radius: 50%; }

        /* stagger helpers */
        .d1 { animation-delay: 0s; }
        .d2 { animation-delay: 0.12s; }
        .d3 { animation-delay: 0.24s; }
        .d4 { animation-delay: 0.36s; }
        .d5 { animation-delay: 0.48s; }

        /* ── NAV ── */
        .skel-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 32px;
          background: rgba(250,245,239,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .skel-nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skel-nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .skel-nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* ── HERO ── */
        .skel-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 72px 32px 40px;
          text-align: center;
          gap: 0;
        }

        .skel-hero-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .skel-hero-sub {
          margin-bottom: 0;
        }

        /* ── LAPTOP MOCKUP ── */
        .skel-laptop-wrap {
          margin-top: 52px;
          display: flex;
          justify-content: center;
          padding: 0 32px;
        }

        .skel-laptop-screen {
          width: 100%;
          max-width: 620px;
          aspect-ratio: 16 / 10;
          border-radius: 12px 12px 0 0;
          border: 2px solid #D4C9BC;
          overflow: hidden;
        }

        .skel-laptop-base {
          width: 100%;
          max-width: 680px;
          height: 22px;
          border-radius: 0 0 10px 10px;
          background: #DDD5C8;
          margin: 0 auto;
        }

        .skel-laptop-notch {
          width: 60px;
          height: 8px;
          background: #C8C0B6;
          border-radius: 0 0 8px 8px;
          margin: 0 auto;
        }

        /* ── DARK MODE ── */
        .dark .eraco-skeleton {
          background-color: #0a0a0a;
        }
        .dark .sk {
          background: linear-gradient(
            90deg,
            #171717 25%,
            #262626 50%,
            #171717 75%
          );
        }
        .dark .skel-nav {
          background: rgba(10,10,10,0.85);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .dark .skel-laptop-screen {
          border: 2px solid #262626;
        }
        .dark .skel-laptop-base {
          background: #1f1f1f;
        }
        .dark .skel-laptop-notch {
          background: #333333;
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="skel-nav">
        {/* Logo */}
        <div className="skel-nav-logo">
          <div className="sk sk-circle d1" style={{ width: 32, height: 32 }} />
          <div className="sk d1" style={{ width: 58, height: 14 }} />
        </div>

        {/* Links */}
        <div className="skel-nav-links">
          <div className="sk d1" style={{ width: 60, height: 13 }} />
          <div className="sk d2" style={{ width: 48, height: 13 }} />
          <div className="sk d3" style={{ width: 80, height: 13 }} />
          <div className="sk d4" style={{ width: 44, height: 13 }} />
        </div>

        {/* CTA */}
        <div className="skel-nav-right">
          {/* dark/light toggle */}
          <div className="sk sk-circle d2" style={{ width: 40, height: 40 }} />
          {/* Join Waitlist button */}
          <div className="sk sk-pill d3" style={{ width: 120, height: 40 }} />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="skel-hero">
        {/* Big headline — two lines like "Reimagine How You Interact With Computers" */}
        <div className="skel-hero-title">
          <div className="sk d1" style={{ width: '62%', height: 56, borderRadius: 10 }} />
          <div className="sk d2" style={{ width: '44%', height: 56, borderRadius: 10 }} />
        </div>

        {/* Subtitle */}
        <div className="sk sk-pill skel-hero-sub d3" style={{ width: 280, height: 18 }} />
      </section>

      {/* ── LAPTOP ILLUSTRATION ── */}
      <div className="skel-laptop-wrap">
        <div style={{ width: '100%', maxWidth: 680 }}>
          {/* Notch */}
          <div className="skel-laptop-notch" />

          {/* Screen */}
          <div
            className="skel sk d4"
            style={{
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: '12px 12px 0 0',
              border: '2px solid #D4C9BC',
              animationDelay: '0.4s',
            }}
          />

          {/* Base */}
          <div className="skel-laptop-base sk d5" />
        </div>
      </div>
    </div>
  );
}
