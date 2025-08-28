import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ExternalLink, Leaf, Shield, Users, BookOpen } from 'lucide-react';

const DocsOfCannabis = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Docs of Cannabis - Medical Cannabis Consultation | Dr. Erick Kaufman"
        description="Connect with Docs of Cannabis for expert medical cannabis consultation and education. Professional guidance for cannabis-based therapeutics and treatment options."
        canonical="https://drerickkaufman.com/docs-of-cannabis"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-primary-light to-medical-accent-light py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional-navy mb-6">
                Docs of Cannabis
              </h1>
              <p className="text-xl md:text-2xl text-medical-gray-600 mb-8 max-w-3xl mx-auto">
                Expert Medical Cannabis Consultation and Education
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-medical-primary text-white hover:bg-medical-accent"
                  asChild
                >
                  <a 
                    href="https://docsofcannabis.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Visit Docs of Cannabis
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
                  Professional Cannabis Medicine Expertise
                </h2>
                <p className="text-lg text-medical-gray-600 mb-6">
                  Docs of Cannabis is our trusted partner specializing in medical cannabis 
                  consultation and education. They provide evidence-based guidance for patients 
                  exploring cannabis-based therapeutics as part of their treatment plan.
                </p>
                <p className="text-lg text-medical-gray-600 mb-8">
                  With a focus on safety, efficacy, and patient education, Docs of Cannabis 
                  helps patients navigate the complex landscape of medical cannabis with 
                  professional oversight and support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Leaf className="h-6 w-6 text-medical-primary mr-3" />
                    <span className="text-medical-gray-700">Evidence-based cannabis medicine</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-medical-primary mr-3" />
                    <span className="text-medical-gray-700">Safe and regulated approach</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 text-medical-primary mr-3" />
                    <span className="text-medical-gray-700">Comprehensive patient education</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-medical-primary mr-3" />
                    <span className="text-medical-gray-700">Expert medical oversight</span>
                  </div>
                </div>
              </div>
              <div className="bg-medical-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-professional-navy mb-6">
                  Services Offered
                </h3>
                <ul className="space-y-4 text-medical-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Medical cannabis consultations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Patient education and guidance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dosage and administration support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Treatment monitoring and follow-up
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cannabis medicine research insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Focus Section */}
        <section className="py-16 lg:py-20 bg-medical-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-professional-navy mb-6">
                Evidence-Based Cannabis Medicine
              </h2>
              <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
                Cannabis medicine is rapidly evolving with new research and therapeutic applications. 
                Our partners at Docs of Cannabis stay current with the latest developments to provide 
                the most informed guidance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-medical-primary-light rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-xl font-semibold text-professional-navy mb-4">
                  Patient Education
                </h3>
                <p className="text-medical-gray-600">
                  Comprehensive education about cannabis medicine, including benefits, risks, 
                  and proper usage for optimal therapeutic outcomes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-medical-primary-light rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-xl font-semibold text-professional-navy mb-4">
                  Safety First
                </h3>
                <p className="text-medical-gray-600">
                  Prioritizing patient safety through careful assessment, monitoring, 
                  and adherence to medical cannabis best practices.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-medical-primary-light rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="text-xl font-semibold text-professional-navy mb-4">
                  Personalized Care
                </h3>
                <p className="text-medical-gray-600">
                  Tailored cannabis medicine recommendations based on individual patient 
                  needs, conditions, and treatment goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-professional-navy py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Medical Cannabis Options
            </h2>
            <p className="text-xl text-medical-gray-300 mb-8">
              Connect with Docs of Cannabis to learn more about medical cannabis 
              consultation and how it may fit into your healthcare journey.
            </p>
            <Button 
              size="lg"
              className="bg-medical-primary text-white hover:bg-medical-accent"
              asChild
            >
              <a 
                href="https://docsofcannabis.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Learn More
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

export default DocsOfCannabis;