import { Mail, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/forms/ContactForm';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Button } from '@/components/ui/button';

const Contact = () => {
  // Form submission handling would connect to your backend API
  const handleFormSubmit = async (data: any) => {
    // In production, this would make an API call to your secure backend
    // await api.submitContactForm(data);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Professional Inquiries",
      description: "For medical consultations and professional collaborations",
      contact: "contact@drerickkaufman.com",
      note: "HIPAA-compliant secure messaging"
    },
    {
      icon: Phone,
      title: "Telehealth Services",
      description: "Schedule secure video consultations",
      contact: "Available through patient portal",
      note: "Book through Holistically Rx platform"
    },
    {
      icon: MapPin,
      title: "Virtual Practice",
      description: "Serving patients nationwide via telehealth",
      contact: "Remote consultations available",
      note: "Licensed in multiple states"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Professional inquiry responses",
      contact: "24-48 hours",
      note: "Emergency consultations available"
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "All communications secure"
    },
    {
      icon: Award,
      title: "Board Certified",
      description: "Licensed medical professional"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact Dr. Erick Kaufman, MD - Integrative Medicine Consultations"
        description="Contact Dr. Erick Kaufman for integrative medicine consultations, medical cannabis guidance, and telehealth services. HIPAA-compliant secure messaging available."
        canonical="https://drerickkaufman.com/contact"
      />
      
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <ErrorBoundary>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-professional-navy mb-6">
              Contact Dr. Kaufman
            </h1>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Ready to explore integrative medicine? Connect with Dr. Kaufman for personalized consultations, 
              medical cannabis guidance, and holistic healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-background border border-medical-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6">
                  Send a Message
                </h2>
                <ContactForm onSubmit={handleFormSubmit} />
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-professional-navy mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-medical-primary rounded-lg flex items-center justify-center">
                          <method.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-professional-navy mb-1">
                          {method.title}
                        </h3>
                        <p className="text-medical-gray-600 text-sm mb-1">
                          {method.description}
                        </p>
                        <p className="text-medical-primary font-medium mb-1">
                          {method.contact}
                        </p>
                        <p className="text-xs text-medical-gray-500">
                          {method.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-medical-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-professional-navy mb-4">
                  Secure & Professional
                </h3>
                <div className="space-y-4">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <indicator.icon className="h-5 w-5 text-medical-primary" />
                      <div>
                        <span className="font-medium text-professional-navy">
                          {indicator.title}
                        </span>
                        <span className="text-medical-gray-600 text-sm ml-2">
                          - {indicator.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Access Buttons */}
              <div className="space-y-4">
                <h3 className="font-semibold text-professional-navy">
                  Quick Access
                </h3>
                <div className="space-y-3">
                  <Button 
                    asChild 
                    className="w-full bg-medical-primary hover:bg-medical-accent text-primary-foreground"
                  >
                    <a 
                      href="https://holisticallyrx.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book Holistically Rx Consultation
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-primary-foreground"
                  >
                    <a 
                      href="https://docsofcannabis.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Medical Cannabis Card
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ErrorBoundary>
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default Contact;