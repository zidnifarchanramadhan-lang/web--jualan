import BackgroundParticles from '@/components/BackgroundParticles';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import PricelistSection from '@/components/PricelistSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <HeroSection />
      <WhySection />
      <PricelistSection />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
