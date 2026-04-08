import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Download, BookOpen, Microscope, Users } from 'lucide-react';

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Wire to HubSpot form submission
    // POST to HubSpot Forms API or use embedded HubSpot form
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: BookOpen,
      text: 'The 4 Pillars of Whole-Person Health — explained in plain language',
    },
    {
      icon: Microscope,
      text: 'What the research actually says about integrative vs. conventional care',
    },
    {
      icon: Users,
      text: 'How to find and evaluate a vetted integrative medicine provider',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-medical-primary/5 via-white to-trust-blue/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-medical-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Offer */}
            <div className="p-8 sm:p-12 bg-gradient-to-br from-professional-navy to-trust-blue text-white flex flex-col justify-center">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Download className="h-7 w-7 text-white" />
              </div>

              <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-3">
                Free Guide
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                The EKMD Guide to Integrative Health
              </h2>

              <p className="text-white/75 mb-8 leading-relaxed">
                A practical, evidence-based introduction to whole-person care — written by a medical scientist with 30+ years of clinical experience and 232 peer-reviewed citations.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <benefit.icon className="h-4 w-4 text-white/80" />
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-professional-navy mb-2">
                    Get Your Free Copy
                  </h3>
                  <p className="text-medical-gray-600 mb-8">
                    Join thousands of patients and providers who are rethinking what healthcare can be.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-professional-navy mb-1.5">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-professional-navy mb-1.5">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-medical-primary hover:bg-medical-accent text-white py-3 text-base font-semibold mt-2"
                    >
                      {isLoading ? 'Sending...' : 'Send Me the Free Guide'}
                      {!isLoading && <Download className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>

                  <p className="text-xs text-medical-gray-400 text-center mt-4">
                    No spam, ever. Unsubscribe at any time. Your privacy is our priority.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-wellness-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-8 w-8 text-wellness-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-professional-navy mb-3">
                    You're in, {firstName}!
                  </h3>
                  <p className="text-medical-gray-600 leading-relaxed">
                    Check your inbox — your free guide is on its way. Welcome to the EKMD community.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
