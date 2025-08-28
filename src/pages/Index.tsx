import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HealthCategoriesSection from '@/components/HealthCategoriesSection';
import TrustSection from '@/components/TrustSection';
import CredentialsSection from '@/components/CredentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RecommendedPracticesSection from '@/components/RecommendedPracticesSection';
import NewsletterSection from '@/components/NewsletterSection';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import { PersonSchema, WebSiteSchema, MedicalServiceSchema, FAQSchema } from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        canonical="https://drerickkaufman.com/"
      />
      
      {/* Structured Data for SEO & AI Optimization */}
      <PersonSchema 
        name="Dr. Erick Kaufman, MD"
        jobTitle="Integrative Medicine Physician"
        description="Board certified physician specializing in integrative medicine, alternative therapies, and medical cannabis consultation."
        url="https://drerickkaufman.com"
        image="https://drerickkaufman.com/dr-kaufman-social.jpg"
        sameAs={[
          "https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26",
          "https://holisticallyrx.com",
          "https://docsofcannabis.com"
        ]}
      />
      <WebSiteSchema />
      <MedicalServiceSchema />
      <FAQSchema 
        questions={[
          {
            question: "What is integrative medicine?",
            answer: "Integrative medicine combines conventional medical practices with evidence-based alternative therapies to treat the whole person, focusing on root causes rather than just symptoms."
          },
          {
            question: "Do you offer telehealth consultations?",
            answer: "Yes, Dr. Erick Kaufman offers telehealth consultations for integrative medicine and medical cannabis guidance to patients nationwide."
          },
          {
            question: "What conditions do you treat with integrative medicine?",
            answer: "We address chronic conditions, autoimmune diseases, fatigue, pain management, and wellness optimization using personalized integrative approaches."
          },
          {
            question: "Is medical cannabis consultation available?",
            answer: "Yes, through our Docs of Cannabis platform, we provide professional medical cannabis consultation and education for therapeutic applications."
          }
        ]}
      />
      
      <Navigation />
      <main role="main">
        <HeroSection />
        <HealthCategoriesSection />
        <TrustSection />
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <CredentialsSection />
        <RecommendedPracticesSection />
        <NewsletterSection />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
