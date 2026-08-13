import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Eraco — Eraco AI',
  description: 'Compare Eraco with other AI tools. See why our background execution engine is the best choice for getting work done.',
  openGraph: {
    title: 'Compare Eraco — Eraco AI',
    description: 'Compare Eraco with other AI tools. See why our background execution engine is the best choice for getting work done.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Eraco — Eraco AI',
    description: 'Compare Eraco with other AI tools. See why our background execution engine is the best choice for getting work done.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
