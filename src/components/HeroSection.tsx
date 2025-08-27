import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import drKaufmanImage from '@/assets/dr-kaufman-headshot.jpg';

const HeroSection = () => {
  return (
    <section className="medical-hero min-h-[90vh] sm:min-h-[80vh] flex items-center py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-professional-navy leading-tight">
                Erick Kaufman MD:
                <span className="text-medical-primary block mt-1">
                  Pioneering Integrative Medicine
                </span>
                <span className="text-trust-blue block mt-1">
                  and Medical Cannabis
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-medical-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From ophthalmology and internal medicine academia to entrepreneurship in 
                patient-centered care, transforming healthcare through innovation and trust.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-medical-gray-200">
              <h3 className="font-semibold text-professional-navy mb-2 text-base sm:text-lg">Our Mission</h3>
              <p className="text-medical-gray-600 italic text-sm sm:text-base">
                "Making holistic, cannabis-based, and accessible healthcare transparent and trustworthy"
              </p>
            </div>

            {/* Call-to-Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                className="medical-button-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on LinkedIn
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="medical-button-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                asChild
              >
                <a href="#media">
                  Watch My Podcasts
                  <PlayCircle className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 text-center lg:text-left">
              <div className="text-sm text-medical-gray-600">
                <span className="font-semibold">Founder & Medical Director:</span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <a 
                  href="https://holisticallyrx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-medical-primary hover:text-medical-accent font-medium text-sm sm:text-base transition-colors"
                >
                  Holistically Rx
                </a>
                <span className="text-medical-gray-300">•</span>
                <a 
                  href="https://docsofcannabis.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-medical-primary hover:text-medical-accent font-medium text-sm sm:text-base transition-colors"
                >
                  Docs of Cannabis
                </a>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10">
              <img
                src={drKaufmanImage}
                alt="Dr. Erick Kaufman, MD - Integrative Medicine Physician"
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="eager"
                width="400"
                height="500"
              />
              
              {/* Credentials Badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-medical-gray-200">
                <div className="text-center">
                  <div className="font-bold text-professional-navy text-base sm:text-lg">MD</div>
                  <div className="text-xs text-medical-gray-600">Board Certified</div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-4 left-4 w-16 sm:w-24 h-16 sm:h-24 bg-medical-primary/10 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-12 sm:w-16 h-12 sm:h-16 bg-trust-blue/10 rounded-full"></div>
              <div className="absolute top-1/2 -left-2 sm:-left-4 w-8 sm:w-12 h-8 sm:h-12 bg-wellness-green/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;