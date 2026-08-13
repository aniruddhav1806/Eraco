import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Eraco AI',
  description: 'Read the latest news, insights, and updates from the Eraco team on AI automation and productivity.',
  openGraph: {
    title: 'Blog — Eraco AI',
    description: 'Read the latest news, insights, and updates from the Eraco team on AI automation and productivity.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Eraco AI',
    description: 'Read the latest news, insights, and updates from the Eraco team on AI automation and productivity.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
