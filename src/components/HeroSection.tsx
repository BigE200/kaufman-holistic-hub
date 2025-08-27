import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import drKaufmanImage from '@/assets/dr-kaufman-headshot.jpg';

const HeroSection = () => {
  return (
    <section className="medical-hero min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-professional-navy leading-tight">
                Dr. Erick Kaufman, MD:
                <span className="text-medical-primary block">
                  Pioneering Integrative Medicine
                </span>
                <span className="text-trust-blue block">
                  and Medical Cannabis
                </span>
              </h1>
              
              <p className="text-xl text-medical-gray-600 leading-relaxed max-w-2xl">
                From ophthalmology and internal medicine academia to entrepreneurship in 
                patient-centered care, transforming healthcare through innovation and trust.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-medical-gray-200">
              <h3 className="font-semibold text-professional-navy mb-2">Our Mission</h3>
              <p className="text-medical-gray-600 italic">
                "Making holistic, cannabis-based, and accessible healthcare transparent and trustworthy"
              </p>
            </div>

            {/* Call-to-Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="medical-button-primary text-lg px-8 py-4"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on LinkedIn
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="medical-button-secondary text-lg px-8 py-4"
                asChild
              >
                <a href="#media">
                  Watch My Podcasts
                  <PlayCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="text-sm text-medical-gray-600">
                <span className="font-semibold">Founder & Medical Director:</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://holisticallyrx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-medical-primary hover:text-medical-accent font-medium"
                >
                  Holistically Rx
                </a>
                <span className="text-medical-gray-300">•</span>
                <a 
                  href="https://docsofcannabis.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-medical-primary hover:text-medical-accent font-medium"
                >
                  Docs of Cannabis
                </a>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={drKaufmanImage}
                alt="Dr. Erick Kaufman, MD - Integrative Medicine Physician"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Credentials Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-medical-gray-200">
                <div className="text-center">
                  <div className="font-bold text-professional-navy text-lg">MD</div>
                  <div className="text-xs text-medical-gray-600">Board Certified</div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-4 left-4 w-24 h-24 bg-medical-primary/10 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-trust-blue/10 rounded-full"></div>
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-wellness-green/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;