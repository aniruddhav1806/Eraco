import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eraco vs Antigravity — Eraco AI',
  description: 'See how Eraco compares to Antigravity. Learn why Eraco is the superior background AI automation tool.',
  openGraph: {
    title: 'Eraco vs Antigravity — Eraco AI',
    description: 'See how Eraco compares to Antigravity. Learn why Eraco is the superior background AI automation tool.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eraco vs Antigravity — Eraco AI',
    description: 'See how Eraco compares to Antigravity. Learn why Eraco is the superior background AI automation tool.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
