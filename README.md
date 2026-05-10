# Eraco Landing Page

A modern, premium landing page for an AI product built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Apple-inspired minimal design
- 🎬 Smooth scroll-based animations
- 💻 3D laptop opening animation with floating cards
- 📱 Fully responsive
- ⚡ Optimized for performance
- 🚀 Ready for GitHub deployment

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **TypeScript**

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
eraco/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Button.tsx       # Reusable button
│   ├── Hero.tsx         # Hero with laptop animation
│   ├── FeatureBlock.tsx # Black feature section
│   ├── AdaptiveEngine.tsx # Technology section
│   ├── Waitlist.tsx     # Email signup
│   └── Footer.tsx       # Footer
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color palette:

```ts
colors: {
  'eraco-black': '#0a0a0a',
  'eraco-orange': '#ff6b35',
  // ...
}
```

### Content
All text content is in the component files. Edit directly to customize.

### Images
The laptop and cards use CSS/SVG. Replace with images in `public/` if needed.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy

### Other platforms

```bash
npm run build
# Serve the .next folder
```

## License

MIT
