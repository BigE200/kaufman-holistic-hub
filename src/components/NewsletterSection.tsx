import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, CheckCircle, Leaf, Brain, Heart } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setIsSubscribed(true);
    setEmail('');
  };

  const benefits = [
    {
      icon: Leaf,
      title: "Cannabis Medicine Updates",
      description: "Latest research and treatment protocols"
    },
    {
      icon: Brain,
      title: "Integrative Health Tips", 
      description: "Evidence-based wellness strategies"
    },
    {
      icon: Heart,
      title: "Longevity Insights",
      description: "Anti-aging and optimization techniques"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-medical-primary/5 to-trust-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 border border-medical-gray-200 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-medical-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-professional-navy mb-4">
                Stay Informed About Your <span className="text-medical-primary">Health Journey</span>
              </h2>
              <p className="text-lg text-medical-gray-600 max-w-2xl mx-auto">
                Get exclusive insights on integrative medicine, cannabis therapeutics, and personalized wellness strategies delivered to your inbox.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <benefit.icon className="h-6 w-6 text-medical-primary" />
                  </div>
                  <h3 className="font-semibold text-professional-navy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-medical-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Signup Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button 
                    type="submit"
                    className="medical-button-primary px-6"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-medical-gray-500 text-center mt-3">
                  No spam, unsubscribe at any time. Your privacy is our priority.
                </p>
              </form>
            ) : (
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-wellness-green mb-3">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-semibold">Successfully subscribed!</span>
                </div>
                <p className="text-medical-gray-600">
                  Welcome to our community. You'll receive your first newsletter soon.
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;