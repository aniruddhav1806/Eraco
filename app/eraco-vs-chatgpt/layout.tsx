import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eraco vs ChatGPT — Eraco AI',
  description: 'See how Eraco compares to ChatGPT. Learn the difference between a chatbot and a true background AI automation system.',
  openGraph: {
    title: 'Eraco vs ChatGPT — Eraco AI',
    description: 'See how Eraco compares to ChatGPT. Learn the difference between a chatbot and a true background AI automation system.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eraco vs ChatGPT — Eraco AI',
    description: 'See how Eraco compares to ChatGPT. Learn the difference between a chatbot and a true background AI automation system.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
