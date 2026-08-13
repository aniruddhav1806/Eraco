import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Eraco AI',
  description: 'View pricing plans for Eraco. Choose the right plan for your background AI automation needs.',
  openGraph: {
    title: 'Pricing — Eraco AI',
    description: 'View pricing plans for Eraco. Choose the right plan for your background AI automation needs.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Eraco AI',
    description: 'View pricing plans for Eraco. Choose the right plan for your background AI automation needs.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
