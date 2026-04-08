import { useState } from 'react';
import { Download, BookOpen, Microscope, Users, CheckCircle, Loader2 } from 'lucide-react';

// HubSpot Forms Submit API configuration
const HUBSPOT_PORTAL_ID = '5490681';
const HUBSPOT_FORM_ID = '3cf0ed42-181a-45f1-a080-7d66eea66b42';

const LeadMagnetSection = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              {
                objectTypeId: '0-1',
                name: 'firstname',
                value: firstName.trim(),
              },
              {
                objectTypeId: '0-1',
                name: 'email',
                value: email.trim(),
              },
              {
                objectTypeId: '0-1',
                name: 'ekmd_lead_source',
                value: 'EKMD_guide_download',
              },
            ],
            context: {
              pageUri: window.location.href,
              pageName: 'EKMD — Integrative Health Guide Download',
            },
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setFirstName('');
        setEmail('');
      } else {
        const errorData = await response.json().catch(() => ({}));
        const msg = errorData?.errors?.[0]?.message || `Submission failed (${response.status})`;
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error — please check your connection and try again.');
      setStatus('error');
    }
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
              <h3 className="text-2xl font-bold text-professional-navy mb-2">
                Get Your Free Copy
              </h3>
              <p className="text-medical-gray-600 mb-6">
                Join thousands of patients and providers who are rethinking what healthcare can be.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="h-12 w-12 text-medical-primary mb-4" />
                  <p className="text-lg font-semibold text-professional-navy mb-2">
                    Thank you! Your free guide is on its way.
                  </p>
                  <p className="text-sm text-medical-gray-600">
                    Check your inbox — it should arrive within a few minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="lead-firstname"
                      className="block text-sm font-medium text-professional-navy mb-1"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lead-firstname"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-xl border border-medical-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-primary/40 focus:border-medical-primary text-professional-navy placeholder-medical-gray-400 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block text-sm font-medium text-professional-navy mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-medical-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-primary/40 focus:border-medical-primary text-professional-navy placeholder-medical-gray-400 transition"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-medical-primary hover:bg-medical-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Me the Free Guide'
                    )}
                  </button>
                </form>
              )}

              <p className="text-xs text-medical-gray-400 text-center mt-4">
                No spam, ever. Unsubscribe at any time. Your privacy is our priority.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
