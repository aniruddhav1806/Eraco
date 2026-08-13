import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog — Eraco AI',
  description: 'See what is new and what has changed in Eraco. Track the latest updates, features, and improvements to our AI automation system.',
  openGraph: {
    title: 'Changelog — Eraco AI',
    description: 'See what is new and what has changed in Eraco. Track the latest updates, features, and improvements to our AI automation system.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog — Eraco AI',
    description: 'See what is new and what has changed in Eraco. Track the latest updates, features, and improvements to our AI automation system.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
