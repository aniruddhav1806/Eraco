import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Eraco AI',
  description: 'Get in touch with the Eraco team. We are here to help you with our background AI automation tool.',
  openGraph: {
    title: 'Contact Us — Eraco AI',
    description: 'Get in touch with the Eraco team. We are here to help you with our background AI automation tool.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Eraco AI',
    description: 'Get in touch with the Eraco team. We are here to help you with our background AI automation tool.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
