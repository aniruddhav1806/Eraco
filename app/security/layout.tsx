import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security — Eraco AI',
  description: 'Learn how Eraco protects your data with TLS encryption, secure server-offloaded compute, and local execution.',
  openGraph: {
    title: 'Security — Eraco AI',
    description: 'Learn how Eraco protects your data with TLS encryption, secure server-offloaded compute, and local execution.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security — Eraco AI',
    description: 'Learn how Eraco protects your data with TLS encryption, secure server-offloaded compute, and local execution.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
