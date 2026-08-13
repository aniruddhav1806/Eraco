import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers — Eraco AI',
  description: 'Join the Eraco team. We are building the future of autonomous background AI and looking for talented people to help us.',
  openGraph: {
    title: 'Careers — Eraco AI',
    description: 'Join the Eraco team. We are building the future of autonomous background AI and looking for talented people to help us.',
    siteName: 'Eraco',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers — Eraco AI',
    description: 'Join the Eraco team. We are building the future of autonomous background AI and looking for talented people to help us.',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
