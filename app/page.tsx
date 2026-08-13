import Hero from '@/components/Hero';
import FeatureBlock from '@/components/FeatureBlock';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Eraco',
      description: 'Eraco is a personal AI assistant that works silently in the background, managing files, writing code, generating media, and handling complex tasks without interrupting your workflow.',
      founder: {
        '@type': 'Person',
        name: 'Aniruddha V',
        jobTitle: 'Founder',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Eraco',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Cross-platform',
      description: 'AI That Actually Gets Work Done. A background AI automation tool that manages files, writes and debugs code, generates media, and handles complex multi-step tasks autonomously.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
      },
      featureList: [
        'Background AI automation',
        'File management and organization',
        'Code writing and debugging',
        'Media generation',
        'Adaptive Execution Engine for novel tasks',
        'Real-time learning and personalization',
        'Server-side processing with local lightweight footprint',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'Eraco',
      description: 'AI That Actually Gets Work Done - background automation for productivity',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen relative page-bg-gradient transition-colors duration-500">
      <Hero />
      <FeatureBlock />
      <Waitlist />
      <Footer />
    </main>
    </>
  );
}
