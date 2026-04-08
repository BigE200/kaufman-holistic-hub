import { Star, Award, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustSection = () => {
  const trustMetrics = [
    {
      icon: Users,
      number: "45,000+",
      label: "Patients Connected",
      description: "Across the DOC & HRx platforms"
    },
    {
      icon: Star,
      number: "4.6/5",
      label: "Trustpilot Rating",
      description: "Verified patient reviews"
    },
    {
      icon: Award,
      number: "30+",
      label: "Years Experience",
      description: "In medicine, research & education"
    },
    {
      icon: BookOpen,
      number: "232",
      label: "Research Citations",
      description: "Peer-reviewed publications"
    }
  ];

  return (
    <section className="medical-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-professional-navy mb-4">
            A Trusted Authority in Integrative Medicine
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Dr. Kaufman's expertise and the platforms he built have connected tens of thousands of Americans with the evidence-based, patient-centered care they deserve.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {trustMetrics.map((metric, index) => (
            <Card key={index} className="trust-card text-center p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="mb-3 sm:mb-4">
                  <metric.icon className="h-6 w-6 sm:h-8 sm:w-8 text-medical-primary mx-auto" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-professional-navy mb-1 sm:mb-2">
                  {metric.number}
                </div>
                <div className="font-semibold text-medical-gray-900 mb-1 text-sm sm:text-base">
                  {metric.label}
                </div>
                <div className="text-xs sm:text-sm text-medical-gray-600">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trustmary Widget Placeholder */}
        <div className="bg-medical-gray-50 rounded-xl p-8 text-center">
          <h4 className="text-xl font-semibold text-professional-navy mb-4">
            Verified Patient Reviews
          </h4>
          <div className="bg-background rounded-lg p-6 border border-medical-gray-200">
            <div className="text-medical-gray-600 mb-4">
              <em>Trustmary Review Widget — Live Reviews from Holistically Rx &amp; Docs of Cannabis</em>
            </div>
            <p className="text-sm text-medical-gray-600">
              Real-time verified patient feedback from the HRx and DOC provider networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
