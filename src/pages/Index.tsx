import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import CredentialsSection from '@/components/CredentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EcosystemSection from '@/components/EcosystemSection';
import AskAISection from '@/components/AskAISection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import AIChat from '@/components/AIChat';
import ErrorBoundary from '@/components/ErrorBoundary';
import SEOHead from '@/components/SEOHead';
import { PersonSchema, WebSiteSchema, MedicalServiceSchema, FAQSchema } from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        canonical="https://drerickkaufman.com/"
        title="Dr. Erick Kaufman, MD | Integrative Medicine & Whole-Person Health"
        description="Dr. Erick Kaufman, MD is a medical scientist and healthcare systems builder connecting patients with vetted integrative medicine and cannabis care providers. Accessible, Affordable, Authoritative, Patient-Centered."
      />

      {/* Structured Data for SEO */}
      <PersonSchema
        name="Dr. Erick Kaufman, MD"
        jobTitle="Medical Scientist & Healthcare Systems Builder"
        description="Board-certified physician with 30+ years of experience and 232 peer-reviewed citations. Founder of Holistically Rx and Docs of Cannabis. Connecting patients with vetted integrative medicine providers."
        url="https://drerickkaufman.com"
        image="https://drerickkaufman.com/dr-kaufman-social.jpg"
        sameAs={[
          "https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26",
          "https://holisticallyrx.com",
          "https://docsofcannabis.com",
        ]}
      />
      <WebSiteSchema />
      <MedicalServiceSchema />
      <FAQSchema
        questions={[
          {
            question: "What is integrative medicine?",
            answer: "Integrative medicine is an evidence-based approach that treats the whole person — body, mind, and lifestyle — rather than just managing individual symptoms. It combines the best of conventional medicine with proven complementary therapies.",
          },
          {
            question: "Is Dr. Kaufman currently seeing patients?",
            answer: "Dr. Kaufman is no longer in direct clinical practice. He now serves as a medical scientist, educator, and systems builder — connecting patients with vetted, independent licensed providers through Holistically Rx and Docs of Cannabis.",
          },
          {
            question: "What is Holistically Rx (HRx)?",
            answer: "Holistically Rx is a platform founded by Dr. Kaufman that connects patients with independent providers who practice evidence-based integrative medicine. It is designed to make whole-person care accessible, affordable, and authoritative.",
          },
          {
            question: "What is Docs of Cannabis (DOC)?",
            answer: "Docs of Cannabis is a platform founded by Dr. Kaufman that connects patients with licensed physicians for safe, state-law-compliant medical cannabis consultations. It has served over 45,000 patients with a 4.6/5 Trustpilot rating.",
          },
          {
            question: "How do I access professional-grade supplements?",
            answer: "Through the HRx Supplement Dispensary on Fullscript, patients can access the same professional-grade supplements and lab tests that Dr. Kaufman's vetted providers trust — curated by clinical expertise and shipped directly to your door.",
          },
        ]}
      />

      <Navigation />

      <ErrorBoundary>
        <main role="main" id="main-content">

          {/* 1. Hero — the concept and the guide */}
          <HeroSection />

          {/* 2. Trust / Social Proof Stats */}
          <TrustSection />

          {/* 3. The EKMD Ecosystem — three clear pathways */}
          <EcosystemSection />

          {/* 4. Ask AI Erick — elevated content guide feature */}
          <AskAISection />

          {/* 5. Credentials — authority and research background */}
          <CredentialsSection />

          {/* 6. Patient Testimonials */}
          <div id="testimonials">
            <TestimonialsSection />
          </div>

          {/* 7. Lead Magnet — email capture with free guide */}
          <LeadMagnetSection />

        </main>
      </ErrorBoundary>

      <Footer />

      <ErrorBoundary fallback={null}>
        <AIChat />
      </ErrorBoundary>
    </div>
  );
};

export default Index;
