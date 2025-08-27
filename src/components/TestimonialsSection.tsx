import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Chronic Pain Patient",
      quote: "Dr. Kaufman's approach to cannabis medicine changed my life. For the first time in years, I'm managing my chronic pain effectively without harsh pharmaceuticals.",
      rating: 5,
      location: "Oklahoma City, OK"
    },
    {
      name: "Michael R.", 
      condition: "Anxiety & PTSD",
      quote: "The comprehensive care and education I received about medical cannabis was exceptional. Dr. Kaufman took time to understand my specific needs.",
      rating: 5,
      location: "Tulsa, OK"
    },
    {
      name: "Jennifer L.",
      condition: "Cancer Support",
      quote: "During my cancer treatment, Dr. Kaufman's holistic approach helped manage side effects and improved my quality of life significantly.",
      rating: 5,
      location: "Norman, OK"
    },
    {
      name: "David K.",
      condition: "Sleep Disorders",
      quote: "After years of prescription sleep aids, Dr. Kaufman's integrative approach finally gave me natural, restorative sleep.",
      rating: 5,
      location: "Edmond, OK"
    }
  ];

  const stats = [
    { number: "1,200+", label: "Physicians in Network" },
    { number: "10,000+", label: "Patients Served" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "30+", label: "Years Experience" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-medical-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-navy mb-4">
            Patient <span className="text-medical-primary">Success Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Real patients sharing their transformative experiences with integrative and cannabis medicine
          </p>
        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-medical-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-medical-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 sm:p-8 border border-medical-gray-200 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-medical-primary/20" />
                <blockquote className="text-medical-gray-700 italic leading-relaxed pl-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="border-t border-medical-gray-200 pt-4">
                <div className="font-semibold text-professional-navy">
                  {testimonial.name}
                </div>
                <div className="text-sm text-medical-primary">
                  {testimonial.condition}
                </div>
                <div className="text-xs text-medical-gray-500 mt-1">
                  {testimonial.location}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-medical-primary/5 to-trust-blue/5 border-medical-primary/20">
            <p className="text-medical-gray-600 mb-3">
              Join thousands of patients who have transformed their health journey
            </p>
            <div className="text-sm text-medical-gray-500">
              ★★★★★ Rated 4.9/5 by patients nationwide
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;