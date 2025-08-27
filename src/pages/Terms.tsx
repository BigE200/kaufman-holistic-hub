import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Terms of Service for Dr. Erick Kaufman's educational platform and referral services for holistic health and wellness."
        keywords="terms of service, educational platform, health referrals, wellness services, holistic health"
        canonical="https://drerickkaufman.com/terms"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-medical-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our educational platform and referral services. By using our website, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-medical-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Agreement */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Agreement to Terms
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement between you and Dr. Erick Kaufman ("we," "us," "our") regarding your use of our educational platform and referral services. By using this website, you agree to be bound by these Terms.
                  </p>
                  <div className="bg-trust-blue/10 p-6 rounded-lg border border-trust-blue/20">
                    <p className="font-semibold text-professional-navy mb-2">Important Notice:</p>
                    <p>This website serves as an educational resource and referral platform and does not provide direct medical services. All medical services are provided through independent third-party platforms and practitioners that we may refer you to.</p>
                  </div>
                </div>
              </section>

              {/* Nature of Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Nature of Our Services
                </h2>
                <div className="space-y-6 text-medical-gray-700">
                  <p>
                    Dr. Erick Kaufman's website provides educational content and referral services related to holistic health and wellness. Our services include:
                  </p>
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

              {/* User Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>As a user of our educational and referral services, you agree to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Use the website and its content for educational purposes only</li>
                    <li>Understand that content provided is not medical advice</li>
                    <li>Consult with qualified healthcare providers for medical decisions</li>
                    <li>Provide accurate information when requesting referrals</li>
                    <li>Respect the independent nature of referred practitioners and platforms</li>
                    <li>Comply with the terms of service of any third-party platforms you choose to use</li>
                    <li>Not use our services for any unlawful or unauthorized purposes</li>
                    <li>Respect the intellectual property rights of our content</li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Third-Party Services and Referrals
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We may refer you to independent third-party platforms and practitioners. Please understand:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>All referred services operate independently from our website</li>
                    <li>Each third-party service has its own terms of service and privacy policy</li>
                    <li>We do not control or guarantee the quality of third-party services</li>
                    <li>Financial transactions occur directly between you and the service provider</li>
                    <li>We are not liable for the actions or services of third-party providers</li>
                    <li>You are responsible for evaluating the suitability of any referred services</li>
                  </ul>
                  <p className="mt-4 font-semibold">
                    For medical emergencies, please call 911 or go to your nearest emergency room immediately.
                  </p>
                </div>
              </section>

              {/* Educational Content */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Educational Content and Disclaimers
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    All content on this website is provided for educational and informational purposes only:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Content is not intended as medical advice, diagnosis, or treatment</li>
                    <li>Information should not replace consultation with qualified healthcare providers</li>
                    <li>We make no guarantees about the completeness or accuracy of information</li>
                    <li>Health outcomes depend on individual circumstances and professional care</li>
                    <li>Content may be updated or changed without notice</li>
                  </ul>
                  <p className="mt-4 font-semibold">
                    Always consult with qualified healthcare professionals before making any health-related decisions or changes to your treatment regimen.
                  </p>
                </div>
              </section>

              {/* Website Use */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Website Use and Acceptable Conduct
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>When using our website and online services, you agree not to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit viruses, malware, or harmful code</li>
                    <li>Attempt unauthorized access to our systems</li>
                    <li>Use our services for commercial purposes without permission</li>
                    <li>Post or transmit offensive, threatening, or inappropriate content</li>
                    <li>Interfere with the proper functioning of our services</li>
                    <li>Impersonate another person or entity</li>
                    <li>Collect personal information from other users</li>
                    <li>Misrepresent your identity or affiliation</li>
                  </ul>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Intellectual Property Rights
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    All content on our website, including text, graphics, logos, images, videos, and software, is the property of Dr. Erick Kaufman or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>You may not:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Copy, modify, or distribute our content without permission</li>
                    <li>Use our trademarks or service marks without authorization</li>
                    <li>Create derivative works based on our content</li>
                    <li>Use our content for commercial purposes without a license</li>
                    <li>Remove copyright or proprietary notices from our content</li>
                  </ul>
                </div>
              </section>

              {/* Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Privacy and Data Protection
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    Your privacy is protected in accordance with our Privacy Policy. By using our services, you acknowledge that you have read and understand our Privacy Policy.
                  </p>
                  <p>
                    You consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy and as necessary for providing our educational and referral services.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Limitation of Liability and Disclaimers
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Service Availability</h3>
                    <p>
                      Our website and services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free operation of our website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Limitation of Liability</h3>
                    <p>To the fullest extent permitted by law:</p>
                    <ul className="space-y-2 list-disc list-inside mt-2">
                      <li>Our liability is limited to educational and referral services provided through this website</li>
                      <li>We are not liable for any actions or services of third-party providers</li>
                      <li>We make no guarantees regarding health outcomes or treatment results</li>
                      <li>Users acknowledge that health decisions involve personal responsibility and professional guidance</li>
                      <li>We are not liable for indirect, incidental, or consequential damages related to website use</li>
                      <li>This limitation applies to all claims, whether based on contract, tort, or other legal theories</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless Dr. Erick Kaufman and our affiliates from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Termination of Services
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We reserve the right to terminate or suspend your access to our services at any time for violations of these Terms or for any other reason at our sole discretion.
                  </p>
                  <p>
                    You may discontinue use of our services at any time. Upon termination, you must cease all use of our website and services.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Governing Law and Disputes
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    These Terms are governed by the laws of the State of Oklahoma, without regard to conflict of law principles. Any disputes arising under these Terms will be resolved in the courts of Oklahoma.
                  </p>
                  <p>
                    You agree to resolve any disputes through individual legal action and waive any right to participate in class action lawsuits or class-wide arbitrations.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Changes to These Terms
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We may update these Terms from time to time to reflect changes in our services, applicable laws, or for other operational reasons. Material changes will be communicated through:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Email notification to subscribers</li>
                    <li>Prominent notice on our website</li>
                    <li>Updated date at the top of these Terms</li>
                  </ul>
                  <p>
                    Continued use of our services after changes are posted constitutes acceptance of the revised Terms.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Contact Information
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    If you have questions about these Terms of Service, please contact:
                  </p>
                  
                  <div className="bg-medical-gray-50 p-6 rounded-lg border border-medical-gray-200">
                    <p><strong>Dr. Erick Kaufman</strong><br />
                    Email: info@drerickkaufman.com<br />
                    Phone: (405) XXX-XXXX<br />
                    Website: docs-of-cannabis.lovable.app</p>
                  </div>

                  <p className="text-sm text-medical-gray-500">
                    These terms apply only to this educational and referral website. Any medical services provided through third-party platforms are subject to their respective terms of service and privacy policies.
                  </p>
                </div>
              </section>

              {/* Severability */}
              <section className="mb-12">
                <div className="bg-medical-primary/10 p-6 rounded-lg border border-medical-primary/20">
                  <h3 className="font-semibold text-professional-navy mb-3">Severability</h3>
                  <p className="text-medical-gray-700">
                    If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect. The invalid provision will be replaced with a valid provision that most closely reflects the intent of the original provision.
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

export default Terms;