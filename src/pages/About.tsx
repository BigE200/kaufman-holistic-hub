import { ExternalLink, Youtube, Linkedin, GraduationCap, Building2, Microscope, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import { PersonSchema, WebPageSchema } from '@/components/StructuredData';
import drKaufmanOptimized from '@/assets/dr-kaufman-optimized.webp';
import drKaufmanImage from '@/assets/dr-kaufman-headshot.jpg';

const About = () => {
  const milestones = [
    {
      year: "Early Career",
      title: "Specialty & Internal Medicine",
      description: "Delivered direct patient care, initially in specialty care (ophthalmology) and later transitioning to internal medicine to provide comprehensive, whole-person treatment.",
      icon: GraduationCap
    },
    {
      year: "Academic Leadership",
      title: "Education & Research",
      description: "Returned to the university ecosystem focusing on education, research, and leadership. Published extensively, including in Nature Communications, with 232 peer-reviewed citations.",
      icon: Microscope
    },
    {
      year: "Systemic Solutions",
      title: "Docs of Cannabis (DOC)",
      description: "Founded DOC to help patients safely navigate medical cannabis in compliance with state laws, anticipating federal alignment. Built a network of 1,200+ physicians serving 45,000+ patients.",
      icon: Building2
    },
    {
      year: "Present",
      title: "Holistically Rx (HRx)",
      description: "Created HRx to answer the question 'What else can you do?' — dismantling the reactive disease-based model and connecting patients with vetted integrative medicine providers.",
      icon: Network
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Dr. C. Erick Kaufman, MD - Medical Scientist & Systems Builder"
        description="Learn about Dr. Erick Kaufman's journey from direct patient care to building healthcare systems like Holistically Rx and Docs of Cannabis."
        keywords="Dr Erick Kaufman biography, medical scientist, healthcare entrepreneur, Docs of Cannabis founder, Holistically Rx founder"
        canonical="https://drerickkaufman.com/about"
      />
      
      {/* Structured Data */}
      <PersonSchema 
        name="Dr. C. Erick Kaufman, MD"
        jobTitle="Medical Scientist & Healthcare Entrepreneur"
        description="Medical scientist and systems builder. Founder of Holistically Rx and Docs of Cannabis."
        url="https://drerickkaufman.com/about"
        image="https://drerickkaufman.com/dr-kaufman-social.jpg"
        sameAs={[
          "https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26",
          "https://holisticallyrx.com",
          "https://docsofcannabis.com"
        ]}
      />
      <WebPageSchema 
        name="About Dr. C. Erick Kaufman, MD"
        description="Learn about Dr. Erick Kaufman's journey from direct patient care to building healthcare systems."
        url="https://drerickkaufman.com/about"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
                Meet Dr. C. Erick Kaufman
              </h1>
              <p className="text-xl text-medical-gray-600 leading-relaxed mb-8">
                A medical scientist and systems builder who recognized that the traditional healthcare model was broken—and decided to build a better way.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="medical-button-primary" asChild>
                  <a 
                    href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <picture>
                <source srcSet={drKaufmanOptimized} type="image/webp" />
                <img
                  src={drKaufmanImage}
                  alt="Dr. C. Erick Kaufman, MD - Medical Scientist and Healthcare Entrepreneur"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  fetchPriority="high"
                  decoding="async"
                  width={400}
                  height={500}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  style={{ 
                    contentVisibility: 'auto', 
                    containIntrinsicSize: '400px 500px',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* The StoryBrand Narrative */}
      <section className="medical-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-8 text-center">
            From Treating Disease to Optimizing Wellness
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-medical-gray-600 leading-relaxed mb-6">
              My career spans the full spectrum of the American healthcare system. I began by delivering care one patient at a time—first in specialty care (ophthalmology), and later in internal medicine, where I focused on treating the whole person rather than just isolated symptoms.
            </p>
            
            <p className="text-medical-gray-600 leading-relaxed mb-6">
              But I kept hitting a wall. The traditional healthcare system is designed to manage disease, not optimize wellness. It is reactive, fragmented, and often leaves patients feeling unheard. Treating patients one by one within a fractured system wasn't enough. I returned to the university ecosystem, dedicating myself to education, research, and leadership to understand these systemic failures at a national scale.
            </p>
            
            <p className="text-medical-gray-600 leading-relaxed mb-6">
              This academic foundation illuminated the path forward. Driven to create structural change, I stepped out of direct patient care and into the role of a systems builder. 
            </p>

            <p className="text-medical-gray-600 leading-relaxed mb-8">
              I founded <strong>Doctors of Cannabis (DOC)</strong> to help patients safely navigate medical cannabis with the guidance of educated, independent physicians. When those same patients asked, "What else can you do?", I built <strong>Holistically Rx (HRx)</strong>. Today, I use my expertise to build secure, approved technologies that connect you with vetted, independent medical professionals who are capable of helping you achieve your personal health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-12 text-center">
            The Journey
          </h2>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="trust-card border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-medical-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-xs font-bold text-medical-primary uppercase tracking-wider">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-professional-navy">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-medical-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="medical-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-8 text-center">
            The Four Pillars of Care
          </h2>
          
          <Card className="trust-card p-8 border-medical-primary/20">
            <CardContent className="p-0">
              <p className="text-lg text-medical-gray-600 leading-relaxed mb-8 text-center">
                Every platform we build and every provider in our network is guided by four foundational principles designed to put the patient first.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-medical-primary mb-3">1. Accessible</h4>
                  <p className="text-medical-gray-600">Breaking down barriers to entry through secure telehealth, concierge services, and clear, transparent communication.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-medical-primary mb-3">2. Affordable</h4>
                  <p className="text-medical-gray-600">Providing high-value care models that offer a sustainable alternative to the bloated costs of traditional healthcare.</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-medical-primary mb-3">3. Authoritative</h4>
                  <p className="text-medical-gray-600">Grounded in rigorous medical science, extensive clinical experience, and peer-reviewed research.</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-medical-primary mb-3">4. Patient-Centered</h4>
                  <p className="text-medical-gray-600">Focusing entirely on the individual's goals for optimal wellness, not just treating a diagnosed disease.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Platforms */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-8 text-center">
            The EKMD Ecosystem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="trust-card p-6 border-medical-primary/20 hover:border-medical-primary/50 transition-colors">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-professional-navy mb-2">
                  Holistically Rx
                </h3>
                <p className="text-medical-gray-600 mb-6 text-sm">
                  Connecting patients with independent providers for evidence-based integrative medicine and whole-person care.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://holisticallyrx.com" target="_blank" rel="noopener noreferrer">
                    Visit HRx <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="trust-card p-6 border-wellness-green/20 hover:border-wellness-green/50 transition-colors">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-professional-navy mb-2">
                  Docs of Cannabis
                </h3>
                <p className="text-medical-gray-600 mb-6 text-sm">
                  Connecting patients with licensed physicians for safe, compliant medical cannabis consultations and education.
                </p>
                <Button variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green/10" asChild>
                  <a href="https://docsofcannabis.com" target="_blank" rel="noopener noreferrer">
                    Visit DOC <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-medical-gray-500 italic">
              Disclaimer: Dr. Kaufman is no longer practicing medicine. He does not diagnose, treat, or provide direct medical care. The EKMD platform markets to and connects patients with independent, licensed medical professionals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default About;
