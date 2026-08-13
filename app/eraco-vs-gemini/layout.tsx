import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eraco vs Gemini — Eraco AI',
  description: 'See how Eraco compares to Google Gemini. Learn why Eraco is better optimized for complex, multi-step tasks in your workflow.',
  openGraph: {
    title: 'Eraco vs Gemini — Eraco AI',
    description: 'See how Eraco compares to Google Gemini. Learn why Eraco is better optimized for complex, multi-step tasks in your workflow.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eraco vs Gemini — Eraco AI',
    description: 'See how Eraco compares to Google Gemini. Learn why Eraco is better optimized for complex, multi-step tasks in your workflow.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
