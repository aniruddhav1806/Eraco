import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Eraco AI',
  description: 'Read the Terms of Service for using Eraco background AI automation tool.',
  openGraph: {
    title: 'Terms of Service — Eraco AI',
    description: 'Read the Terms of Service for using Eraco background AI automation tool.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — Eraco AI',
    description: 'Read the Terms of Service for using Eraco background AI automation tool.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
