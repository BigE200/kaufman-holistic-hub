import { ExternalLink, Youtube, Linkedin, GraduationCap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';
import drKaufmanImage from '@/assets/dr-kaufman-headshot.jpg';

const About = () => {
  const milestones = [
    {
      year: "2005-2012",
      title: "Medical Education & Residency",
      description: "Completed medical school and specialized training in ophthalmology and internal medicine",
      icon: GraduationCap
    },
    {
      year: "2012-2018",
      title: "Academic Medicine",
      description: "Faculty positions in ophthalmology and internal medicine, focusing on patient care and research",
      icon: Building2
    },
    {
      year: "2018-2020",
      title: "Entrepreneurial Transition",
      description: "Recognized gaps in traditional healthcare and began developing patient-centered solutions",
      icon: Building2
    },
    {
      year: "2020-Present",
      title: "Holistically Rx & Docs of Cannabis",
      description: "Founded innovative telehealth platforms focusing on integrative medicine and medical cannabis",
      icon: Building2
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="About Dr. Erick Kaufman, MD - Integrative Medicine Physician Biography"
        description="Learn about Dr. Erick Kaufman's journey from traditional medicine to integrative healthcare. Board certified physician, founder of Holistically Rx and Docs of Cannabis."
        keywords="Dr Erick Kaufman biography, integrative medicine physician, medical cannabis expert, holistic healthcare, telehealth doctor"
        canonical="https://drerickkaufman.com/about"
      />
      <Navigation />
      {/* Hero Section */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
                About Dr. Erick Kaufman
              </h1>
              <p className="text-xl text-medical-gray-600 leading-relaxed mb-8">
                A journey from traditional medicine to pioneering integrative healthcare 
                through innovation, transparency, and patient-centered care.
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
                <Button variant="outline" asChild>
                  <a href="#video-intro">
                    <Youtube className="mr-2 h-4 w-4" />
                    Watch Introduction
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={drKaufmanImage}
                alt="Dr. Erick Kaufman, MD"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Biography */}
      <section className="medical-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-8 text-center">
            My Journey in Medicine
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-medical-gray-600 leading-relaxed mb-6">
              My path in medicine began with traditional training in ophthalmology and internal medicine, 
              where I spent years in academic settings focusing on evidence-based care and research. 
              However, I soon recognized significant gaps in our healthcare system – particularly around 
              patient accessibility, personalized care, and the integration of holistic approaches.
            </p>
            
            <p className="text-medical-gray-600 leading-relaxed mb-6">
              This realization led me to entrepreneurship, where I could create solutions that truly 
              serve patients. The founding of <strong>Holistically Rx</strong> and <strong>Docs of Cannabis</strong> 
              represents my commitment to bridging the gap between traditional medicine and innovative, 
              patient-centered care.
            </p>
            
            <p className="text-medical-gray-600 leading-relaxed mb-8">
              At the core of my practice is the belief that healthcare should be transparent, accessible, 
              and built on trust. Through feedback loops and continuous patient engagement, we're not 
              just treating symptoms – we're addressing root causes and empowering patients to take 
              control of their health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-12 text-center">
            Career Milestones
          </h2>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="trust-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center">
                        <milestone.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-semibold text-medical-primary bg-medical-primary-light px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-semibold text-professional-navy">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-medical-gray-600">
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

      {/* What is Integrative Medicine */}
      <section className="medical-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-8 text-center">
            What is Integrative Medicine?
          </h2>
          
          <Card className="trust-card p-8">
            <CardContent className="p-0">
              <p className="text-lg text-medical-gray-600 leading-relaxed mb-6">
                Integrative medicine is a healing-oriented approach that takes the whole person into account, 
                including all aspects of lifestyle. It emphasizes the therapeutic relationship between 
                practitioner and patient, is informed by evidence, and makes use of all appropriate 
                therapies to achieve optimal health and healing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-professional-navy mb-3">Key Principles:</h4>
                  <ul className="space-y-2 text-medical-gray-600">
                    <li>• Addressing root causes, not just symptoms</li>
                    <li>• Combining conventional and evidence-based alternatives</li>
                    <li>• Emphasizing prevention and wellness</li>
                    <li>• Treating the whole person, not just the disease</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-professional-navy mb-3">Our Focus Areas:</h4>
                  <ul className="space-y-2 text-medical-gray-600">
                    <li>• Medical cannabis therapeutics</li>
                    <li>• Chronic pain management</li>
                    <li>• Telehealth accessibility</li>
                    <li>• Patient education and empowerment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Links */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-professional-navy mb-8 text-center">
            Professional Affiliations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="trust-card p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-professional-navy mb-4">
                  Holistically Rx
                </h3>
                <p className="text-medical-gray-600 mb-4">
                  Comprehensive telehealth platform focused on integrative medicine 
                  and personalized patient care.
                </p>
                <Button variant="outline" asChild>
                  <a 
                    href="https://holisticallyrx.com/about-us" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="trust-card p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-professional-navy mb-4">
                  Docs of Cannabis
                </h3>
                <p className="text-medical-gray-600 mb-4">
                  Specialized platform for medical cannabis consultations 
                  and certifications across multiple states.
                </p>
                <Button variant="outline" asChild>
                  <a 
                    href="https://docsofcannabis.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Platform
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Introduction */}
      <section id="video-intro" className="medical-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-professional-navy mb-8">
            Introduction to Holistic Care
          </h2>
          
          <div className="bg-medical-gray-100 rounded-xl p-8 border border-medical-gray-200">
            <div className="aspect-video bg-medical-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Youtube className="h-16 w-16 text-medical-gray-400 mx-auto mb-4" />
                <p className="text-medical-gray-600">
                  YouTube Video: "My Approach to Integrative Medicine"
                </p>
                <p className="text-sm text-medical-gray-500 mt-2">
                  Video will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <AIChat />
    </div>
  );
};

export default About;