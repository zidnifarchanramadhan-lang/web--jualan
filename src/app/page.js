import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import PricelistSection from '@/components/PricelistSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import ChannelPopup from '@/components/ChannelPopup';
import SecurityCheck from '@/components/SecurityCheck';

export default function Home() {
  return (
    <>
      <SecurityCheck />
      <ChannelPopup />
      <Navbar />
      <div className="page-wrapper">
        <div className="left-col">
          <HeroSection />
        </div>
        <div className="right-col">
          <WhySection />
          <PricelistSection />
        </div>
      </div>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
