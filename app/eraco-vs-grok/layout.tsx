import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eraco vs Grok — Eraco AI',
  description: 'Compare Eraco with Grok. Find out how our autonomous AI assistant handles your daily work.',
  openGraph: {
    title: 'Eraco vs Grok — Eraco AI',
    description: 'Compare Eraco with Grok. Find out how our autonomous AI assistant handles your daily work.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eraco vs Grok — Eraco AI',
    description: 'Compare Eraco with Grok. Find out how our autonomous AI assistant handles your daily work.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
