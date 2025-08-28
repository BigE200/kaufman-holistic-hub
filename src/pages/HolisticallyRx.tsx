import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Stethoscope, Users } from 'lucide-react';

const HolisticallyRx = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Holistically Rx - Integrative Healthcare Solutions | Dr. Erick Kaufman"
        description="Discover Holistically Rx, our trusted partner for comprehensive integrative healthcare solutions. Get personalized care through evidence-based holistic medicine approaches."
        canonical="https://drerickkaufman.com/holistically-rx"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-primary-light to-medical-accent-light py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional-navy mb-6">
                Holistically Rx
              </h1>
              <p className="text-xl md:text-2xl text-medical-gray-600 mb-8 max-w-3xl mx-auto">
                Your Gateway to Comprehensive Integrative Healthcare Solutions
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
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-6">
                  Trusted Partner in Holistic Health
                </h2>
                <p className="text-lg text-medical-gray-600 mb-6">
                  Holistically Rx is our carefully selected partner organization that specializes in 
                  comprehensive integrative healthcare solutions. They share our commitment to treating 
                  the whole person, not just symptoms.
                </p>
                <p className="text-lg text-medical-gray-600 mb-8">
                  Through evidence-based holistic approaches, Holistically Rx provides personalized 
                  care plans that address the root causes of health issues while supporting your 
                  body's natural healing processes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-medical-primary mr-3" />
                    <span className="text-medical-gray-700">Patient-centered care approach</span>
                  </div>
                  <div className="flex items-center">
                    <Stethoscope className="h-6 w-6 text-medical-primary mr-3" />
                    <span className="text-medical-gray-700">Evidence-based integrative medicine</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-medical-primary mr-3" />
                    <span className="text-medical-gray-700">Collaborative healthcare team</span>
                  </div>
                </div>
              </div>
              <div className="bg-medical-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-professional-navy mb-6">
                  Services Available
                </h3>
                <ul className="space-y-4 text-medical-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive health assessments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personalized treatment plans
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nutritional counseling and support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Lifestyle medicine guidance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ongoing health monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-professional-navy py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Holistic Health Journey?
            </h2>
            <p className="text-xl text-medical-gray-300 mb-8">
              Connect with Holistically Rx to explore comprehensive integrative healthcare 
              solutions tailored to your unique needs.
            </p>
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
                Get Started Today
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default HolisticallyRx;