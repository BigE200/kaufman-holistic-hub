import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy for Dr. Erick Kaufman's medical practice and telehealth services. Learn how we protect your personal health information and comply with HIPAA regulations."
        keywords="privacy policy, HIPAA compliance, medical privacy, telehealth privacy, patient confidentiality, health information protection"
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
                Your privacy and the security of your personal health information is our highest priority. 
                This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-medical-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* HIPAA Compliance */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  HIPAA Compliance & Medical Privacy
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    As a licensed medical practice, we are committed to complying with the Health Insurance Portability 
                    and Accountability Act (HIPAA) and all applicable state and federal privacy regulations. Your Protected 
                    Health Information (PHI) is safeguarded with the highest level of security and confidentiality.
                  </p>
                  <p>
                    We will only use and disclose your health information as permitted by law and as necessary for your 
                    treatment, payment for services, and healthcare operations.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Information We Collect
                </h2>
                <div className="space-y-6 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Medical Information</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Medical history and current health conditions</li>
                      <li>Symptoms and treatment responses</li>
                      <li>Prescription and medication information</li>
                      <li>Laboratory results and diagnostic information</li>
                      <li>Insurance and billing information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Personal Information</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Name, address, phone number, and email address</li>
                      <li>Date of birth and emergency contact information</li>
                      <li>Communication preferences</li>
                      <li>Appointment scheduling information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Technical Information</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>IP address and device information for telehealth sessions</li>
                      <li>Browser type and operating system</li>
                      <li>Website usage analytics (anonymized)</li>
                      <li>Cookies and similar tracking technologies</li>
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
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Treatment Purposes</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Providing medical consultations and telehealth services</li>
                      <li>Developing and implementing treatment plans</li>
                      <li>Coordinating care with other healthcare providers when necessary</li>
                      <li>Monitoring treatment progress and outcomes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Administrative Purposes</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Appointment scheduling and reminders</li>
                      <li>Billing and insurance processing</li>
                      <li>Quality improvement and patient safety initiatives</li>
                      <li>Compliance with legal and regulatory requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Communication</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Appointment confirmations and follow-up care</li>
                      <li>Educational health information (with your consent)</li>
                      <li>Practice updates and policy changes</li>
                      <li>Emergency health notifications when applicable</li>
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
                    We do not sell, rent, or trade your personal health information. We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                    <li><strong>Treatment Coordination:</strong> With other healthcare providers involved in your care</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                    <li><strong>Public Health:</strong> For public health activities as required by law</li>
                    <li><strong>Business Associates:</strong> With HIPAA-compliant service providers who support our operations</li>
                    <li><strong>Emergency Situations:</strong> To prevent serious harm to you or others</li>
                  </ul>
                </div>
              </section>

              {/* Telehealth Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Telehealth Platform Security
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    Our telehealth consultations are conducted through HIPAA-compliant platforms that employ:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>End-to-end encryption for all video and audio communications</li>
                    <li>Secure data transmission and storage protocols</li>
                    <li>Multi-factor authentication for access control</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Automatic session timeouts and secure session termination</li>
                  </ul>
                  <p>
                    We partner with Holistically Rx and Docs of Cannabis platforms, which maintain their own HIPAA-compliant privacy policies and security measures.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Data Security Measures
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We implement comprehensive security measures to protect your information:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Advanced encryption for data in transit and at rest</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Access controls and user authentication protocols</li>
                    <li>Regular data backups with secure off-site storage</li>
                    <li>Employee training on privacy and security best practices</li>
                    <li>Incident response procedures for potential security breaches</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Your Privacy Rights
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>Under HIPAA and applicable privacy laws, you have the right to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Access:</strong> Request copies of your medical records</li>
                    <li><strong>Amendment:</strong> Request corrections to your health information</li>
                    <li><strong>Restriction:</strong> Request limits on how we use or share your information</li>
                    <li><strong>Confidential Communication:</strong> Request communication through specific methods or locations</li>
                    <li><strong>Accounting:</strong> Request a list of disclosures of your health information</li>
                    <li><strong>Complaint:</strong> File a complaint about our privacy practices</li>
                    <li><strong>Revocation:</strong> Revoke previous authorizations (except where action has already been taken)</li>
                  </ul>
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
                    We retain your health information in accordance with:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Medical practice standards and legal requirements</li>
                    <li>State and federal record retention laws</li>
                    <li>Professional licensing board regulations</li>
                    <li>Insurance and billing requirements</li>
                  </ul>
                  <p>
                    Medical records are typically retained for a minimum of seven years from the last date of service, or longer as required by applicable laws.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Minors and Privacy
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    For patients under 18 years of age:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Parental or guardian consent is required for treatment</li>
                    <li>Parents/guardians have access rights to their minor's health information</li>
                    <li>State laws regarding adolescent privacy rights are respected</li>
                    <li>Special protections apply for sensitive health information</li>
                  </ul>
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
                    <li>Email notification to registered patients</li>
                    <li>Prominent notice on our website</li>
                    <li>Updated notice provided at your next appointment</li>
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
                    For questions about this Privacy Policy, to exercise your privacy rights, or to file a privacy complaint, please contact:
                  </p>
                  
                  <div className="bg-medical-gray-50 p-6 rounded-lg border border-medical-gray-200">
                    <h3 className="font-semibold text-professional-navy mb-3">Privacy Officer</h3>
                    <p><strong>Dr. Erick Kaufman, MD</strong><br />
                    Email: privacy@drerickkaufman.com<br />
                    Phone: (405) XXX-XXXX<br />
                    Address: [Practice Address]<br />
                    Oklahoma [ZIP Code]</p>
                  </div>

                  <div className="bg-trust-blue/10 p-6 rounded-lg border border-trust-blue/20">
                    <h3 className="font-semibold text-professional-navy mb-3">File a Complaint</h3>
                    <p>
                      You may also file a complaint with the U.S. Department of Health and Human Services if you believe your privacy rights have been violated:
                    </p>
                    <p className="mt-2">
                      <strong>U.S. Department of Health and Human Services</strong><br />
                      Office for Civil Rights<br />
                      Website: www.hhs.gov/ocr/privacy<br />
                      Phone: 1-800-368-1019
                    </p>
                  </div>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="mb-12">
                <div className="bg-medical-primary/10 p-6 rounded-lg border border-medical-primary/20">
                  <p className="text-medical-gray-700">
                    <strong>Important:</strong> This Privacy Policy supplements but does not replace the Notice of Privacy Practices you receive as part of your patient registration. Together, these documents provide comprehensive information about how we protect your privacy and handle your health information.
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