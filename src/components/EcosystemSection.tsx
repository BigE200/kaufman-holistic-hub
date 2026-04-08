import { ArrowRight, Leaf, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EcosystemSection = () => {
  const pillars = [
    {
      icon: Leaf,
      label: 'Founded by Dr. Kaufman',
      title: 'Docs of Cannabis',
      subtitle: 'Safe, Compliant Cannabis Care',
      description:
        'Patients seeking guidance on medical cannabis deserve educated, licensed physicians — not guesswork. DOC connects you with independent doctors who specialize in evidence-based cannabis medicine, in full compliance with your state\'s laws.',
      stats: '45,000+ patients · 4.6/5 Trustpilot',
      cta: 'Explore Docs of Cannabis',
      href: 'https://docsofcannabis.com',
      accent: 'wellness-green',
      borderColor: 'border-wellness-green/30 hover:border-wellness-green/60',
      iconBg: 'bg-wellness-green/10',
      iconColor: 'text-wellness-green',
      labelColor: 'text-wellness-green',
      btnClass: 'bg-wellness-green hover:bg-wellness-green/90 text-white',
    },
    {
      icon: Heart,
      label: 'Founded by Dr. Kaufman',
      title: 'Holistically Rx',
      subtitle: 'Whole-Person Integrative Medicine',
      description:
        'HRx is the answer to "what else can you do?" It connects patients with vetted, independent providers who practice evidence-based integrative medicine — treating the whole person, not just the diagnosis. Accessible, affordable, and authoritative.',
      stats: 'Integrative · Telehealth · Evidence-based',
      cta: 'Explore Holistically Rx',
      href: 'https://holisticallyrx.com',
      accent: 'medical-primary',
      borderColor: 'border-medical-primary/30 hover:border-medical-primary/60',
      iconBg: 'bg-medical-primary/10',
      iconColor: 'text-medical-primary',
      labelColor: 'text-medical-primary',
      btnClass: 'bg-medical-primary hover:bg-medical-accent text-white',
    },
    {
      icon: ShoppingBag,
      label: 'Powered by Fullscript',
      title: 'HRx Supplement Dispensary',
      subtitle: 'Professional-Grade Supplements & Labs',
      description:
        'Access the same professional-grade supplements and lab tests that Dr. Kaufman\'s vetted providers trust — curated by clinical expertise, dispensed directly to your door. No middleman, no guesswork, no compromised quality.',
      stats: 'Curated protocols · Lab ordering · Direct shipping',
      cta: 'Access the Dispensary',
      href: 'https://us.fullscript.com/welcome/ckaufman1759530062',
      accent: 'trust-blue',
      borderColor: 'border-trust-blue/30 hover:border-trust-blue/60',
      iconBg: 'bg-trust-blue/10',
      iconColor: 'text-trust-blue',
      labelColor: 'text-trust-blue',
      btnClass: 'bg-trust-blue hover:bg-trust-blue/90 text-white',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-medical-primary uppercase tracking-widest mb-3">
            The EKMD Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-navy mb-4">
            Your wellness journey,{' '}
            <span className="text-medical-primary">your way.</span>
          </h2>
          <p className="text-lg sm:text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Dr. Kaufman built three distinct pathways to connect you with the right resources, providers, and products — all grounded in the same four pillars: Accessible, Affordable, Authoritative, and Patient-Centered.
          </p>
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${pillar.borderColor}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-5`}>
                <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
              </div>

              {/* Label */}
              <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${pillar.labelColor}`}>
                {pillar.label}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-professional-navy mb-1">{pillar.title}</h3>
              <p className="text-sm font-medium text-medical-gray-500 mb-4">{pillar.subtitle}</p>

              {/* Description */}
              <p className="text-medical-gray-600 text-sm leading-relaxed flex-1 mb-5">
                {pillar.description}
              </p>

              {/* Stats */}
              <p className={`text-xs font-semibold ${pillar.labelColor} mb-5`}>{pillar.stats}</p>

              {/* CTA */}
              <Button asChild className={`w-full ${pillar.btnClass}`}>
                <a href={pillar.href} target="_blank" rel="noopener noreferrer">
                  {pillar.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom disclaimer */}
        <p className="text-center text-xs text-medical-gray-400 mt-10 max-w-2xl mx-auto">
          EKMD is a marketing and referral platform. It does not provide direct medical care. All providers connected through our platforms are independent licensed professionals.
        </p>
      </div>
    </section>
  );
};

export default EcosystemSection;
