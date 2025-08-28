import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RecommendedPracticesSection from '@/components/RecommendedPracticesSection';
import SEOHead from '@/components/SEOHead';

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Trusted Resources & Independent Practices | Dr. Erick Kaufman"
        description="Discover trusted independent practices and resources to support your holistic health journey. Functional medicine practices focused on root-cause wellness and personalized care."
        canonical="https://drerickkaufman.com/resources"
      />
      <Navigation />
      <main className="pt-20">
        <RecommendedPracticesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;