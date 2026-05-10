import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureBlock from '@/components/FeatureBlock';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureBlock />
      <Waitlist />
      <Footer />
    </main>
  );
}
