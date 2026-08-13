import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eraco vs Claude Code — Eraco AI',
  description: 'Compare Eraco with Claude Code. Discover how Eraco offers a more comprehensive background execution engine.',
  openGraph: {
    title: 'Eraco vs Claude Code — Eraco AI',
    description: 'Compare Eraco with Claude Code. Discover how Eraco offers a more comprehensive background execution engine.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eraco vs Claude Code — Eraco AI',
    description: 'Compare Eraco with Claude Code. Discover how Eraco offers a more comprehensive background execution engine.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
