import { Star, Award, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustSection = () => {
  const trustMetrics = [
    {
      icon: Users,
      number: "10,000+",
      label: "Patients Served",
      description: "Across telemedicine platforms"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Patient Rating",
      description: "Based on verified reviews"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "In medical practice"
    },
    {
      icon: Shield,
      number: "100%",
      label: "HIPAA Compliant",
      description: "Secure patient care"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Oklahoma",
      rating: 5,
      text: "Dr. Kaufman transformed my approach to chronic pain management. His holistic methods with alternative therapies have given me my life back.",
      treatment: "Alternative Medicine Certification"
    },
    {
      name: "Michael R.",
      location: "Texas",
      rating: 5,
      text: "The telehealth experience was seamless and professional. Dr. Kaufman takes time to understand your whole health picture.",
      treatment: "Integrative Medicine Consultation"
    },
    {
      name: "Jennifer L.",
      location: "Colorado",
      rating: 5,
      text: "Finally found a doctor who listens and provides real solutions. The feedback system builds incredible trust in the process.",
      treatment: "Holistic Healthcare Plan"
    }
  ];

  return (
    <section className="medical-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-professional-navy mb-4">
            Trusted by Thousands of Patients
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Building transparency and trust through patient-centered care and innovative feedback systems
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

        {/* Patient Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-professional-navy mb-4">
              What Patients Say
            </h3>
            <p className="text-lg text-medical-gray-600">
              Real feedback from patients who've experienced our holistic approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="trust-card p-4 sm:p-6">
                <CardContent className="p-0">
                  {/* Rating Stars */}
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-medical-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-medical-gray-200 pt-3 sm:pt-4">
                    <div className="font-semibold text-professional-navy text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-medical-gray-600">
                      {testimonial.location} • {testimonial.treatment}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trustmary Widget Placeholder */}
        <div className="bg-medical-gray-50 rounded-xl p-8 text-center">
          <h4 className="text-xl font-semibold text-professional-navy mb-4">
            Verified Patient Reviews
          </h4>
          <div className="bg-background rounded-lg p-6 border border-medical-gray-200">
            <div className="text-medical-gray-600 mb-4">
              <em>Trustmary Review Widget Integration</em>
            </div>
            <p className="text-sm text-medical-gray-600">
              Real-time patient feedback from Holistically Rx and Docs of Cannabis platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;