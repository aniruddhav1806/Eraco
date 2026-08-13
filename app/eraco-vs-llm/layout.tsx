import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eraco vs Standard LLMs — Eraco AI',
  description: 'Why choose Eraco over standard LLMs? Eraco acts as a background AI system, not just a conversational model.',
  openGraph: {
    title: 'Eraco vs Standard LLMs — Eraco AI',
    description: 'Why choose Eraco over standard LLMs? Eraco acts as a background AI system, not just a conversational model.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eraco vs Standard LLMs — Eraco AI',
    description: 'Why choose Eraco over standard LLMs? Eraco acts as a background AI system, not just a conversational model.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
