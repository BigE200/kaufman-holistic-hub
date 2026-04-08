import { ArrowRight, ShieldCheck, Truck, FlaskConical, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';

const FULLSCRIPT_URL = 'https://us.fullscript.com/welcome/ckaufman1759530062';

const categories = [
  {
    title: 'Hormone Health & Balance',
    description: 'Clinically curated protocols for thyroid support, adrenal health, and hormonal optimization.',
    icon: '⚖️',
    tags: ['Thyroid', 'Adrenal', 'DHEA', 'Cortisol'],
    color: 'bg-rose-50 border-rose-100 hover:border-rose-300',
    labelColor: 'text-rose-600',
  },
  {
    title: 'Longevity & Cellular Health',
    description: 'Evidence-based supplements targeting mitochondrial function, NAD+ pathways, and healthy aging.',
    icon: '🔬',
    tags: ['NAD+', 'CoQ10', 'Resveratrol', 'Telomere Support'],
    color: 'bg-purple-50 border-purple-100 hover:border-purple-300',
    labelColor: 'text-purple-600',
  },
  {
    title: 'Brain & Cognitive Function',
    description: 'Nootropic and neuroprotective protocols for focus, memory, and mental clarity.',
    icon: '🧠',
    tags: ['Omega-3', 'Lion\'s Mane', 'Magnesium', 'B-Complex'],
    color: 'bg-blue-50 border-blue-100 hover:border-blue-300',
    labelColor: 'text-blue-600',
  },
  {
    title: 'Gut Health & Microbiome',
    description: 'Targeted probiotics, prebiotics, and digestive enzymes to restore the gut-brain axis.',
    icon: '🌿',
    tags: ['Probiotics', 'L-Glutamine', 'Digestive Enzymes', 'Fiber'],
    color: 'bg-green-50 border-green-100 hover:border-green-300',
    labelColor: 'text-green-600',
  },
  {
    title: 'Immune & Inflammation Support',
    description: 'Anti-inflammatory protocols and immune modulators backed by peer-reviewed research.',
    icon: '🛡️',
    tags: ['Vitamin D3', 'Zinc', 'Quercetin', 'Curcumin'],
    color: 'bg-amber-50 border-amber-100 hover:border-amber-300',
    labelColor: 'text-amber-600',
  },
  {
    title: 'Sleep & Stress Recovery',
    description: 'Adaptogenic and restorative protocols for deep sleep, HPA axis balance, and resilience.',
    icon: '🌙',
    tags: ['Magnesium Glycinate', 'Ashwagandha', 'L-Theanine', 'Melatonin'],
    color: 'bg-indigo-50 border-indigo-100 hover:border-indigo-300',
    labelColor: 'text-indigo-600',
  },
];

const whyFullscript = [
  {
    icon: ShieldCheck,
    title: 'Pharmaceutical-Grade Quality',
    description: 'Every brand in the Fullscript catalog is vetted for purity, potency, and third-party testing — the same standard used by integrative medicine clinics.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Ordering Available',
    description: 'Order the same functional labs that Dr. Kaufman\'s vetted providers use to personalize your protocol — no clinic visit required.',
  },
  {
    icon: Truck,
    title: 'Ships Directly to You',
    description: 'No middleman, no retail markup. Your supplements are dispensed and shipped directly from the manufacturer to your door.',
  },
  {
    icon: Star,
    title: 'Clinically Curated Protocols',
    description: 'Browse Dr. Kaufman\'s curated treatment plans — organized by health goal, not by marketing hype.',
  },
];

const Supplements = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        canonical="https://drerickkaufman.com/supplements"
        title="HRx Supplement Dispensary | Dr. Erick Kaufman, MD"
        description="Access professional-grade supplements and lab tests curated by Dr. Erick Kaufman, MD. Powered by Fullscript — the same dispensary trusted by integrative medicine providers nationwide."
      />

      <Navigation />

      <main>
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-professional-navy to-trust-blue text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">
              HRx Supplement Dispensary · Powered by Fullscript
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Professional-grade supplements,<br className="hidden sm:block" />
              <span className="text-medical-primary/80"> curated by clinical expertise.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed">
              The supplement industry is crowded with noise. Dr. Kaufman's dispensary cuts through it — offering the same pharmaceutical-grade products and protocols that vetted integrative medicine providers trust, dispensed directly to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-professional-navy hover:bg-white/90 font-bold text-base px-8 py-4 shadow-lg"
              >
                <a href={FULLSCRIPT_URL} target="_blank" rel="noopener noreferrer">
                  Access the Dispensary
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-4"
              >
                <a href="/holistically-rx">
                  Learn About HRx
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/40 mt-6 italic">
              This dispensary is operated through Fullscript, a licensed supplement dispensing platform. EKMD does not hold inventory or process orders directly.
            </p>
          </div>
        </section>

        {/* Why Fullscript */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-professional-navy mb-3">
                Why we chose Fullscript
              </h2>
              <p className="text-medical-gray-600 max-w-2xl mx-auto">
                Not all supplements are created equal. Fullscript is the platform of choice for integrative medicine providers because it sets the standard for quality, transparency, and clinical reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyFullscript.map((item) => (
                <div key={item.title} className="text-center p-6 rounded-2xl bg-medical-gray-50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-medical-primary" />
                  </div>
                  <h3 className="font-bold text-professional-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-medical-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Categories */}
        <section className="py-16 sm:py-20 bg-medical-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-medical-primary uppercase tracking-widest mb-3">
                Curated Protocols
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-professional-navy mb-3">
                Shop by health goal
              </h2>
              <p className="text-medical-gray-600 max-w-2xl mx-auto">
                Each category links to a curated collection in the dispensary — organized by clinical outcome, not marketing claims.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <a
                  key={category.title}
                  href={FULLSCRIPT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${category.color}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label={category.title}>
                      {category.icon}
                    </span>
                    <ArrowRight className={`h-5 w-5 ${category.labelColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${category.labelColor}`}>{category.title}</h3>
                  <p className="text-sm text-medical-gray-600 leading-relaxed mb-4 flex-1">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-white/70 text-medical-gray-600 rounded-full border border-medical-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                className="bg-medical-primary hover:bg-medical-accent text-white font-bold text-base px-10 py-4 shadow-md"
              >
                <a href={FULLSCRIPT_URL} target="_blank" rel="noopener noreferrer">
                  Browse the Full Dispensary
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-10 bg-white border-t border-medical-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-xs text-medical-gray-400 leading-relaxed">
              The EKMD Supplement Dispensary is operated through Fullscript, a licensed third-party dispensing platform. Dr. Kaufman is not currently in clinical practice and does not prescribe supplements or medications. The protocols and products listed are for informational and educational purposes only. Always consult with a licensed healthcare provider before starting any supplement regimen. EKMD is a referral and marketing platform and does not provide direct medical care.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <AIChat />
    </div>
  );
};

export default Supplements;
