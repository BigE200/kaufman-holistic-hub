import { useEffect, useRef } from 'react';
import { Download, BookOpen, Microscope, Users } from 'lucide-react';

// HubSpot form configuration
const HUBSPOT_PORTAL_ID = '5490681';
const HUBSPOT_FORM_ID = '3cf0ed42-181a-45f1-a080-7d66eea66b42';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

const LeadMagnetSection = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoaded = useRef(false);

  useEffect(() => {
    if (formLoaded.current) return;

    const loadHubSpotForm = () => {
      if (window.hbspt && formContainerRef.current) {
        formLoaded.current = true;
        window.hbspt.forms.create({
          region: 'na1',
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          target: '#hubspot-form-container',
        });
      }
    };

    // Check if HubSpot script is already loaded
    if (window.hbspt) {
      loadHubSpotForm();
      return;
    }

    // Load the HubSpot embed script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = loadHubSpotForm;
    document.head.appendChild(script);

    return () => {
      // Cleanup: don't remove the script as it may be used elsewhere
    };
  }, []);

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

            {/* Right: HubSpot Form */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-professional-navy mb-2">
                Get Your Free Copy
              </h3>
              <p className="text-medical-gray-600 mb-6">
                Join thousands of patients and providers who are rethinking what healthcare can be.
              </p>

              {/* HubSpot form renders here */}
              <div
                id="hubspot-form-container"
                ref={formContainerRef}
                className="hubspot-form-wrapper"
              />

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
