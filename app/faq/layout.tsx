import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Eraco AI',
  description: 'Frequently asked questions about Eraco. Learn how our background AI automation works, pricing, and more.',
  openGraph: {
    title: 'FAQ — Eraco AI',
    description: 'Frequently asked questions about Eraco. Learn how our background AI automation works, pricing, and more.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Eraco AI',
    description: 'Frequently asked questions about Eraco. Learn how our background AI automation works, pricing, and more.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
