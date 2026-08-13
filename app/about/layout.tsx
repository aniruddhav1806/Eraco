import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Eraco AI',
  description: 'Learn about Eraco, our mission, and the team building the background AI automation system that gets work done.',
  openGraph: {
    title: 'About — Eraco AI',
    description: 'Learn about Eraco, our mission, and the team building the background AI automation system that gets work done.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Eraco AI',
    description: 'Learn about Eraco, our mission, and the team building the background AI automation system that gets work done.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
