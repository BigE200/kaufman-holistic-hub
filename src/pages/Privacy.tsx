import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for Dr. Erick Kaufman's educational platform and referral services for holistic health and wellness."
        keywords="privacy policy, data protection, educational content, health referrals, holistic wellness"
        canonical="https://drerickkaufman.com/privacy"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-medical-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information on our educational and referral platform.
              </p>
              <p className="text-sm text-medical-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Introduction
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    Dr. Erick Kaufman ("we," "our," or "us") operates an educational and referral platform focused on holistic health and wellness. This Privacy Policy describes how we collect, use, and protect your information when you visit our website and use our educational services.
                  </p>
                  <div className="bg-trust-blue/10 p-6 rounded-lg border border-trust-blue/20">
                    <p className="font-semibold text-professional-navy mb-2">Important Notice:</p>
                    <p>This website serves as an educational resource and referral platform. We do not provide direct medical services, diagnosis, or treatment through this website. Any medical services are provided through independent third-party platforms and practitioners that we may refer you to.</p>
                  </div>
                </div>
              </section>

              {/* Nature of Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Nature of Our Services
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>Our platform provides:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Educational content about holistic health and wellness approaches</li>
                    <li>Referrals to independent healthcare practitioners and platforms</li>
                    <li>Information about alternative and integrative health approaches</li>
                    <li>Newsletter and educational communication services</li>
                    <li>Connection to third-party health service platforms</li>
                    <li>General health and wellness guidance (not medical advice)</li>
                  </ul>
                </div>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Information We Collect
                </h2>
                <div className="space-y-6 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Contact Information</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Name and email address</li>
                      <li>Phone number (when provided)</li>
                      <li>General health interests and preferences</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Website Usage Information</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>IP address and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referral sources and website navigation patterns</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Newsletter and Communication Data</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Email engagement metrics</li>
                      <li>Content preferences and interests</li>
                      <li>Subscription management information</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Educational Services</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Providing health and wellness educational content</li>
                      <li>Customizing content based on your interests</li>
                      <li>Responding to your questions about health topics</li>
                      <li>Sending educational newsletters and updates</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Referral Services</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Connecting you with appropriate health service providers</li>
                      <li>Providing information about third-party platforms</li>
                      <li>Facilitating introductions to healthcare practitioners</li>
                      <li>Following up on referral satisfaction</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Website Operations</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Improving website functionality and user experience</li>
                      <li>Analyzing website usage patterns</li>
                      <li>Providing technical support</li>
                      <li>Ensuring website security</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Information Sharing and Disclosure
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Referral Purposes:</strong> Basic contact information may be shared with referred practitioners or platforms (with your consent)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in website operations</li>
                    <li><strong>With Your Consent:</strong> When you specifically authorize information sharing</li>
                    <li><strong>Anonymous Data:</strong> Aggregated, non-identifying data for research and improvement purposes</li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Platforms */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Third-Party Platforms and Services
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    This website may refer you to independent third-party platforms and practitioners. Please note:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Each third-party service has its own privacy policy and terms of service</li>
                    <li>We are not responsible for the privacy practices of third-party platforms</li>
                    <li>You should review the privacy policies of any platforms you choose to use</li>
                    <li>Medical services and consultations are governed by the policies of the providing platform</li>
                    <li>We do not have access to information collected by third-party platforms</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Data Security Measures
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We implement security measures to protect your information:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Secure data transmission and storage</li>
                    <li>Regular security updates and monitoring</li>
                    <li>Access controls and user authentication</li>
                    <li>Employee training on privacy best practices</li>
                    <li>Incident response procedures for potential security issues</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Your Privacy Rights
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Access:</strong> Request information about what personal data we have collected</li>
                    <li><strong>Correction:</strong> Request corrections to inaccurate personal information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Unsubscribe:</strong> Opt out of newsletters and marketing communications at any time</li>
                    <li><strong>Data Portability:</strong> Request a copy of your data in a readable format</li>
                    <li><strong>Object:</strong> Object to certain uses of your personal information</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the information provided at the end of this policy.
                  </p>
                </div>
              </section>

              {/* Cookies and Analytics */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Cookies and Website Analytics
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    Our website uses cookies and similar technologies to improve your browsing experience:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage (anonymized data)</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Data Retention
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We retain your information for the following periods:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Contact Information:</strong> Until you request deletion or unsubscribe from our services</li>
                    <li><strong>Website Analytics:</strong> Anonymized data may be retained indefinitely for improvement purposes</li>
                    <li><strong>Communication Records:</strong> Email and message logs retained for 3 years</li>
                    <li><strong>Referral Information:</strong> Basic referral records retained for 2 years for follow-up purposes</li>
                    <li><strong>Newsletter Subscriptions:</strong> Retained until you unsubscribe</li>
                  </ul>
                </div>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Minors and Privacy
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    Our website and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                  </p>
                </div>
              </section>

              {/* Policy Updates */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Policy Updates
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. Material changes will be communicated through:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Email notification to subscribers</li>
                    <li>Prominent notice on our website</li>
                    <li>Updated date at the top of this policy</li>
                  </ul>
                  <p>
                    Continued use of our services after policy updates constitutes acceptance of the revised terms.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Contact Us About Privacy
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact:
                  </p>
                  
                  <div className="bg-medical-gray-50 p-6 rounded-lg border border-medical-gray-200">
                    <h3 className="font-semibold text-professional-navy mb-3">Privacy Officer</h3>
                    <p><strong>Dr. Erick Kaufman</strong><br />
                    Email: privacy@drerickkaufman.com<br />
                    Phone: (405) XXX-XXXX<br />
                    Website: docs-of-cannabis.lovable.app</p>
                  </div>

                  <p className="text-sm text-medical-gray-500">
                    This privacy policy applies only to this educational and referral website. Any medical services provided through third-party platforms are subject to their respective privacy policies and terms of service.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;