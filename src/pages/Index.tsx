import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import AIChat from '@/components/AIChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
