import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Heart, Brain, Leaf, Shield, Zap, Stethoscope, Users } from 'lucide-react';

const HealthCategoriesSection = () => {
  const categories = [
    {
      title: "Alternative Medicine",
      description: "Plant-based therapies and alternative treatments",
      icon: Leaf,
      color: "text-wellness-green",
      bgColor: "bg-wellness-green/10",
      path: "/cannabis-medicine"
    },
    {
      title: "Longevity Therapies",
      description: "Age optimization and preventive medicine",
      icon: Heart,
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10",
      path: "/longevity"
    },
    {
      title: "Integrative Medicine",
      description: "Holistic approach to healing and wellness",
      icon: Leaf,
      color: "text-trust-blue",
      bgColor: "bg-trust-blue/10",
      path: "/integrative"
    },
    {
      title: "Cognitive Health",
      description: "Brain optimization and mental clarity",
      icon: Brain,
      color: "text-professional-navy",
      bgColor: "bg-professional-navy/10",
      path: "/cognitive"
    },
    {
      title: "Chronic Conditions",
      description: "Comprehensive care for complex conditions",
      icon: Shield,
      color: "text-medical-secondary",
      bgColor: "bg-medical-secondary/10",
      path: "/chronic-conditions"
    },
    {
      title: "IV Therapy",
      description: "Nutrient optimization and wellness support",
      icon: Zap,
      color: "text-medical-accent",
      bgColor: "bg-medical-accent/10",
      path: "/iv-therapy"
    },
    {
      title: "Hormone Health",
      description: "Hormone optimization and balance",
      icon: Stethoscope,
      color: "text-wellness-green",
      bgColor: "bg-wellness-green/10",
      path: "/hormones"
    },
    {
      title: "Emotional Wellness",
      description: "Mental health and emotional support",
      icon: Users,
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10",
      path: "/emotional-wellness"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-medical-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-navy mb-4">
            What brings you to{" "}
            <span className="text-medical-primary">Erick Kaufman MD</span>{" "}
            today?
          </h2>
          <p className="text-lg sm:text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Get personalized access to comprehensive healthcare solutions designed for your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {categories.map((category, index) => (
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

        <div className="text-center">
          <Button 
            size="lg"
            className="medical-button-primary text-lg px-8 py-4"
          >
            Get Started with Personalized Care
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-medical-gray-600 mt-3">
            Unlimited access to comprehensive healthcare solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthCategoriesSection;