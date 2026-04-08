import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Stethoscope, Users, ShoppingBag, FlaskConical, Leaf } from 'lucide-react';

const HolisticallyRx = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Holistically Rx — Whole Person Care & Integrative Medicine | Dr. Erick Kaufman"
        description="Holistically Rx (HRx) is Dr. Kaufman's platform for whole-person, integrative care. Connect with vetted independent providers and access the HRx supplement dispensary powered by Fullscript."
        canonical="https://drerickkaufman.com/holistically-rx"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-primary-light to-medical-accent-light py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block bg-medical-primary/10 text-medical-primary text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Founded by Dr. Erick Kaufman
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional-navy mb-6">
                Holistically Rx
              </h1>
              <p className="text-xl md:text-2xl text-medical-gray-600 mb-4 max-w-3xl mx-auto">
                Whole Person Care. Evidence-Based. Patient-Centered.
              </p>
              <p className="text-lg text-medical-gray-500 mb-8 max-w-2xl mx-auto">
                HRx is Dr. Kaufman's answer to the question patients kept asking: <em>"What else can you do?"</em> It connects you with independent, vetted providers who treat root causes — not just symptoms.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-medical-primary text-white hover:bg-medical-accent"
                  asChild
                >
                  <a 
                    href="https://holisticallyrx.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Visit Holistically Rx
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-medical-primary text-medical-primary hover:bg-medical-primary/10"
                  asChild
                >
                  <a 
                    href="https://us.fullscript.com/welcome/ckaufman1759530062" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Leaf className="mr-2 h-5 w-5" />
                    Access Our Supplement Dispensary
                  </a>
                </Button>
              </div>
              <p className="text-xs text-medical-gray-400 mt-4">
                EKMD is a referral platform. It connects patients with independent licensed providers and does not provide direct medical care.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-6">
                  What is Holistically Rx?
                </h2>
                <p className="text-lg text-medical-gray-600 mb-6">
                  HRx is a physician-designed platform that connects patients with independent integrative medicine providers. It was built by Dr. Kaufman after decades in specialty care, academic medicine, and research — driven by a simple conviction: Americans deserve healthcare that helps them achieve optimal health, not just manage disease.
                </p>
                <p className="text-lg text-medical-gray-600 mb-8">
                  Every provider in the HRx network is independently licensed and vetted. They use secure, approved telehealth technology and are guided by the same four pillars that define all of Dr. Kaufman's work: Accessible, Affordable, Authoritative, and Patient-Centered.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-medical-primary mr-3 flex-shrink-0" />
                    <span className="text-medical-gray-700">Patient-centered, whole-person care approach</span>
                  </div>
                  <div className="flex items-center">
                    <Stethoscope className="h-6 w-6 text-medical-primary mr-3 flex-shrink-0" />
                    <span className="text-medical-gray-700">Evidence-based integrative and functional medicine</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-medical-primary mr-3 flex-shrink-0" />
                    <span className="text-medical-gray-700">Network of vetted, independent licensed providers</span>
                  </div>
                </div>
              </div>
              <div className="bg-medical-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-professional-navy mb-6">
                  Areas of Focus
                </h3>
                <ul className="space-y-4 text-medical-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hormone health and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Longevity, anti-aging, and preventive care
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chronic conditions and root-cause medicine
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cognitive health and brain optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nutritional and IV nutrient therapy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mental health and emotional resilience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fullscript Dispensary Section */}
        <section className="py-16 lg:py-20 bg-medical-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-wellness-green/10 text-wellness-green text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
                Powered by Fullscript
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-4">
                The HRx Supplement Dispensary
              </h2>
              <p className="text-lg text-medical-gray-600 max-w-3xl mx-auto">
                Access professional-grade supplements and labs recommended by the HRx provider network — all through our secure, trusted Fullscript dispensary. No guessing. No unverified brands. Just evidence-based nutritional support, curated by medical professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-medical-gray-200 text-center">
                <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="font-semibold text-professional-navy mb-2">Professional-Grade Quality</h3>
                <p className="text-sm text-medical-gray-600">
                  Every product in the dispensary is third-party tested and meets the quality standards required by integrative medicine practitioners.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-medical-gray-200 text-center">
                <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="font-semibold text-professional-navy mb-2">Lab Ordering Available</h3>
                <p className="text-sm text-medical-gray-600">
                  Your HRx provider can order labs directly through the platform, giving you a seamless, integrated path from testing to treatment support.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-medical-gray-200 text-center">
                <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="font-semibold text-professional-navy mb-2">Curated by Your Provider</h3>
                <p className="text-sm text-medical-gray-600">
                  Your independent HRx provider can send you a personalized protocol directly through Fullscript, so you always know exactly what to take and why.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-medical-primary text-white hover:bg-medical-accent px-10"
                asChild
              >
                <a 
                  href="https://us.fullscript.com/welcome/ckaufman1759530062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Leaf className="mr-2 h-5 w-5" />
                  Access the HRx Dispensary on Fullscript
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-xs text-medical-gray-400 mt-3">
                You will be taken to a secure Fullscript page to create your patient account. Supplement recommendations are made by your independent licensed provider.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-professional-navy py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Whole-Person Health Journey?
            </h2>
            <p className="text-xl text-medical-gray-300 mb-8">
              Connect with a vetted, independent integrative medicine provider through Holistically Rx. Evidence-based. Patient-centered. Built for people who want more than disease management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-medical-primary text-white hover:bg-medical-accent"
                asChild
              >
                <a 
                  href="https://holisticallyrx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Find a Provider on HRx
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a 
                  href="https://us.fullscript.com/welcome/ckaufman1759530062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Leaf className="mr-2 h-5 w-5" />
                  Access the Supplement Dispensary
                </a>
              </Button>
            </div>
            <p className="text-xs text-medical-gray-400 mt-6">
              EKMD refers patients to independent licensed providers. It does not provide direct medical care, diagnosis, or treatment.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default HolisticallyRx;
