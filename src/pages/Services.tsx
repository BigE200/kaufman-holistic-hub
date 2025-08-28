import { CheckCircle, Clock, Shield, Award, Users, Heart, Leaf, Brain } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Holistic Health Consultations",
      description: "Comprehensive personalized health assessments integrating conventional and alternative medicine approaches.",
      features: [
        "90-minute initial consultation",
        "Personalized treatment plans",
        "Lifestyle and nutrition guidance",
        "Supplement recommendations"
      ],
      cta: "Book via Holistically Rx",
      ctaLink: "https://holisticallyrx.com"
    },
    {
      icon: Leaf,
      title: "Medical Cannabis Guidance",
      description: "Expert guidance on medical cannabis for qualifying conditions with evidence-based recommendations.",
      features: [
        "Medical cannabis evaluations",
        "Dosing and strain guidance",
        "Condition-specific protocols",
        "Ongoing support and monitoring"
      ],
      cta: "Get Medical Cannabis Card",
      ctaLink: "https://docsofcannabis.com"
    },
    {
      icon: Brain,
      title: "Integrative Mental Health",
      description: "Holistic approaches to mental wellness combining conventional therapy with alternative modalities.",
      features: [
        "Anxiety and depression support",
        "Stress management techniques",
        "Mindfulness and meditation",
        "Nutritional psychiatry"
      ],
      cta: "Schedule Consultation",
      ctaLink: "https://holisticallyrx.com"
    },
    {
      icon: Users,
      title: "Corporate Wellness",
      description: "Workplace wellness programs designed to optimize employee health and productivity.",
      features: [
        "Employee wellness assessments",
        "Stress reduction workshops",
        "Nutrition education programs",
        "Executive health consultations"
      ],
      cta: "Contact for Proposal",
      ctaLink: "/contact"
    }
  ];

  const processSteps = [
    {
      icon: Shield,
      title: "Initial Consultation",
      description: "Comprehensive health assessment to understand your unique needs and goals."
    },
    {
      icon: Award,
      title: "Personalized Plan",
      description: "Custom treatment plan integrating the best of conventional and alternative medicine."
    },
    {
      icon: Clock,
      title: "Ongoing Support",
      description: "Regular follow-ups and plan adjustments to ensure optimal outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Integrative Medicine Services - Dr. Erick Kaufman, MD"
        description="Comprehensive integrative medicine services including holistic health consultations, medical cannabis guidance, mental health support, and corporate wellness programs."
        canonical="https://drerickkaufman.com/services"
      />
      
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <ErrorBoundary>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
              Integrative Medicine Services
            </h1>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions that bridge conventional medicine with evidence-based 
              alternative therapies for optimal wellness and healing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-background border border-medical-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-medical-primary rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-professional-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-medical-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-wellness-green flex-shrink-0" />
                      <span className="text-medical-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className="w-full bg-medical-primary hover:bg-medical-accent text-primary-foreground"
                >
                  <a 
                    href={service.ctaLink}
                    target={service.ctaLink.startsWith('http') ? "_blank" : "_self"}
                    rel={service.ctaLink.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {service.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-medical-gray-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-professional-navy mb-4">
                Our Process
              </h2>
              <p className="text-xl text-medical-gray-600">
                A streamlined approach to your health journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-medical-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-professional-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-medical-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-medical-primary/5 to-trust-blue/5 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-professional-navy mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-xl text-medical-gray-600 mb-6">
              Schedule your consultation today and take the first step toward optimal wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-medical-primary hover:bg-medical-accent text-primary-foreground"
              >
                <a 
                  href="https://holisticallyrx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book Consultation
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-primary-foreground"
              >
                <a href="/contact">
                  Contact Dr. Kaufman
                </a>
              </Button>
            </div>
          </div>
        </ErrorBoundary>
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default Services;