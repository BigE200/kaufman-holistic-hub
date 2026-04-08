import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Heart, Brain, Leaf, Shield, Zap, Stethoscope, Users, FlaskConical } from 'lucide-react';

const HealthCategoriesSection = () => {
  const categories = [
    {
      title: "Medical Cannabis",
      description: "Safe, compliant cannabis guidance via independent licensed physicians",
      icon: Leaf,
      color: "text-wellness-green",
      bgColor: "bg-wellness-green/10",
      destination: "doc"
    },
    {
      title: "Longevity & Prevention",
      description: "Age optimization and preventive medicine for a longer, healthier life",
      icon: Heart,
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10",
      destination: "hrx"
    },
    {
      title: "Integrative Medicine",
      description: "Whole-person care that addresses root causes, not just symptoms",
      icon: Stethoscope,
      color: "text-trust-blue",
      bgColor: "bg-trust-blue/10",
      destination: "hrx"
    },
    {
      title: "Cognitive Health",
      description: "Brain optimization, mental clarity, and neurological wellness",
      icon: Brain,
      color: "text-professional-navy",
      bgColor: "bg-professional-navy/10",
      destination: "hrx"
    },
    {
      title: "Chronic Conditions",
      description: "Comprehensive, root-cause approaches to complex chronic illness",
      icon: Shield,
      color: "text-medical-secondary",
      bgColor: "bg-medical-secondary/10",
      destination: "hrx"
    },
    {
      title: "IV & Nutrient Therapy",
      description: "Nutrient optimization and targeted wellness support",
      icon: Zap,
      color: "text-medical-accent",
      bgColor: "bg-medical-accent/10",
      destination: "hrx"
    },
    {
      title: "Hormone Health",
      description: "Evidence-based hormone optimization and balance",
      icon: FlaskConical,
      color: "text-wellness-green",
      bgColor: "bg-wellness-green/10",
      destination: "hrx"
    },
    {
      title: "Emotional Wellness",
      description: "Mental health, emotional resilience, and whole-person support",
      icon: Users,
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10",
      destination: "hrx"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-medical-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-navy mb-4">
            What brings you here{" "}
            <span className="text-medical-primary">today?</span>
          </h2>
          <p className="text-lg sm:text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Tell us your goal and we'll connect you with the right independent, licensed provider through one of Dr. Kaufman's trusted platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group p-6 border border-medical-gray-200 hover:border-medical-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-full ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-professional-navy mb-2 group-hover:text-medical-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-medical-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dual CTA — the core conversion section */}
        <div className="mt-12">
          <p className="text-center text-medical-gray-600 mb-8 text-lg font-medium">
            Choose your path:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-wellness-green/30 bg-wellness-green/5 hover:border-wellness-green/60 transition-colors">
              <Leaf className="h-8 w-8 text-wellness-green mb-3" />
              <h3 className="font-bold text-professional-navy mb-2">Medical Cannabis Care</h3>
              <p className="text-sm text-medical-gray-600 mb-4">
                Connect with a licensed physician through Docs of Cannabis for safe, state-compliant cannabis guidance.
              </p>
              <Button
                asChild
                className="w-full bg-wellness-green hover:bg-wellness-green/90 text-white"
              >
                <a href="https://docsofcannabis.com" target="_blank" rel="noopener noreferrer">
                  Go to Docs of Cannabis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-medical-primary/30 bg-medical-primary/5 hover:border-medical-primary/60 transition-colors">
              <Heart className="h-8 w-8 text-medical-primary mb-3" />
              <h3 className="font-bold text-professional-navy mb-2">Whole Person &amp; Integrative Care</h3>
              <p className="text-sm text-medical-gray-600 mb-4">
                Connect with a vetted integrative medicine provider through Holistically Rx for comprehensive wellness.
              </p>
              <Button
                asChild
                className="w-full medical-button-primary"
              >
                <a href="https://holisticallyrx.com" target="_blank" rel="noopener noreferrer">
                  Go to Holistically Rx
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <p className="text-center text-xs text-medical-gray-500 mt-6">
            This site provides informational referrals to independent licensed providers. It is not a medical practice and does not provide direct medical care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthCategoriesSection;
