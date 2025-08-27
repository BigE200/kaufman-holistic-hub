import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HealthCategoriesSection from '@/components/HealthCategoriesSection';
import TrustSection from '@/components/TrustSection';
import CredentialsSection from '@/components/CredentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        canonical="https://drerickkaufman.com/"
      />
      <Navigation />
      <main>
        <HeroSection />
        <HealthCategoriesSection />
        <TrustSection />
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <CredentialsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
