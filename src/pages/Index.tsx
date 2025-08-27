import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
