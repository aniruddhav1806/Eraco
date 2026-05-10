import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Eraco - AI That Actually Gets Work Done',
  description: 'AI That Actually Gets Work Done. Reimagine how you interact with computers. Background AI automation for files, code, media, and complex tasks.',
  keywords: ['AI', 'automation', 'assistant', 'productivity', 'machine learning', 'background AI', 'autonomous AI', 'AI agent', 'adaptive execution', 'personal AI assistant'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',

  // Open Graph
  openGraph: {
    title: 'Eraco - AI That Actually Gets Work Done',
    description: 'AI That Actually Gets Work Done. Background AI automation for files, code, media, and complex tasks.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Eraco - AI That Actually Gets Work Done',
    description: 'AI That Actually Gets Work Done. Background AI automation for files, code, media, and complex tasks.',
  },

  // Additional
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data for Organization and Software Application
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Eraco',
      description: 'Eraco is a personal AI assistant that works silently in the background, managing files, writing code, generating media, and handling complex tasks without interrupting your workflow.',
      founder: {
        '@type': 'Person',
        name: 'Aniruddha V',
        jobTitle: 'Founder',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Eraco',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Cross-platform',
      description: 'AI That Actually Gets Work Done. A background AI automation tool that manages files, writes and debugs code, generates media, and handles complex multi-step tasks autonomously.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
      },
      featureList: [
        'Background AI automation',
        'File management and organization',
        'Code writing and debugging',
        'Media generation',
        'Adaptive Execution Engine for novel tasks',
        'Real-time learning and personalization',
        'Server-side processing with local lightweight footprint',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'Eraco',
      description: 'AI That Actually Gets Work Done - background automation for productivity',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
