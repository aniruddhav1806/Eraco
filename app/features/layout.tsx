import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — Eraco AI',
  description: 'Discover Eraco capabilities, including background AI automation, file management, intelligent code debugging, and media generation.',
  openGraph: {
    title: 'Features — Eraco AI',
    description: 'Discover Eraco capabilities, including background AI automation, file management, intelligent code debugging, and media generation.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features — Eraco AI',
    description: 'Discover Eraco capabilities, including background AI automation, file management, intelligent code debugging, and media generation.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
