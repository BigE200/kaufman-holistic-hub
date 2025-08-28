import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Linkedin, Shield, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';
import SEOHead from '@/components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with secure form service
    // Form submitted successfully
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Professional Inquiries",
      description: "For medical consultations and professional collaborations",
      contact: "contact@drerickkaufman.com",
      note: "HIPAA-compliant secure messaging"
    },
    {
      icon: Calendar,
      title: "Consultation Booking",
      description: "Schedule a telehealth consultation",
      contact: "Book through our platforms",
      note: "Via Holistically Rx or Docs of Cannabis"
    },
    {
      icon: Linkedin,
      title: "Professional Networking",
      description: "Connect for professional opportunities",
      contact: "LinkedIn Profile",
      note: "Best for industry connections"
    }
  ];

  const platformLinks = [
    {
      name: "Holistically Rx",
      url: "https://holisticallyrx.com",
      description: "Comprehensive integrative medicine consultations"
    },
    {
      name: "Docs of Cannabis",
      url: "https://docsofcannabis.com",
      description: "Medical cannabis certifications and consultations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Contact Dr. Erick Kaufman, MD - Schedule Integrative Medicine Consultation"
        description="Contact Dr. Erick Kaufman for integrative medicine and medical cannabis consultations. Telehealth appointments available. Board certified physician serving patients nationwide."
        keywords="contact Dr Erick Kaufman, integrative medicine consultation, medical cannabis appointment, telehealth physician, schedule consultation"
        canonical="https://drerickkaufman.com/contact"
      />
      <Navigation />
      {/* Header */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Ready to explore integrative medicine or discuss healthcare innovation? 
              I'm here to help with professional inquiries and patient consultations.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-professional-navy mb-8">
              How to Reach Me
            </h2>
            
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card key={index} className="trust-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-medical-primary rounded-full flex items-center justify-center">
                          <method.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-professional-navy mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-medical-gray-600 mb-2">
                          {method.description}
                        </p>
                        <p className="font-medium text-medical-primary mb-1">
                          {method.contact}
                        </p>
                        <p className="text-xs text-medical-gray-500">
                          {method.note}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Platform Links */}
            <h3 className="text-lg font-semibold text-professional-navy mb-4">
              Consultation Platforms
            </h3>
            <div className="space-y-3">
              {platformLinks.map((platform, index) => (
                <Card key={index} className="trust-card">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-professional-navy">
                          {platform.name}
                        </h4>
                        <p className="text-sm text-medical-gray-600">
                          {platform.description}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={platform.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Visit
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-professional-navy mb-4">
                Connect Professionally
              </h3>
              <div className="flex space-x-4">
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://doximity.com" target="_blank" rel="noopener noreferrer">
                    Doximity
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="trust-card">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-6 w-6 text-medical-primary" />
                  <div>
                    <h2 className="text-2xl font-bold text-professional-navy">
                      Secure Contact Form
                    </h2>
                    <p className="text-sm text-medical-gray-600">
                      HIPAA-compliant secure messaging for your privacy
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Medical Consultation</SelectItem>
                          <SelectItem value="cannabis">Medical Cannabis Inquiry</SelectItem>
                          <SelectItem value="collaboration">Professional Collaboration</SelectItem>
                          <SelectItem value="media">Media/Speaking Request</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I consent to having my information securely stored and used to respond to my inquiry. 
                        I understand this communication is HIPAA-compliant and my privacy is protected.
                      </Label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="medical-button-primary flex-1"
                      disabled={!formData.consent}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Secure Message
                    </Button>
                    
                    <Button type="button" variant="outline" className="flex-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                  </div>
                </form>

                {/* Response Time Notice */}
                <div className="mt-8 p-4 bg-medical-primary-light/20 rounded-lg border border-medical-primary/20">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-medical-primary" />
                    <p className="text-sm text-medical-gray-600">
                      <strong>Response Time:</strong> I typically respond to inquiries within 24-48 hours. 
                      For urgent medical consultations, please use our telehealth platforms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Contact;