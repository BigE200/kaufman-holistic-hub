import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Terms of Service for Dr. Erick Kaufman's medical practice, telehealth services, and website. Review our policies, patient responsibilities, and service agreements."
        keywords="terms of service, medical practice terms, telehealth terms, patient agreement, medical disclaimer, healthcare policies"
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
                Please read these terms carefully before using our services. By accessing our website or using our medical services, you agree to be bound by these terms.
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
                    These Terms of Service ("Terms") constitute a legally binding agreement between you and Dr. Erick Kaufman, MD ("we," "us," "our," or "Practice") regarding your use of our website, medical services, and telehealth platforms including Holistically Rx and Docs of Cannabis.
                  </p>
                  <p>
                    By accessing our website, scheduling appointments, or receiving medical services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                  </p>
                </div>
              </section>

              {/* Medical Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Medical Services and Patient Relationship
                </h2>
                <div className="space-y-6 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Physician-Patient Relationship</h3>
                    <p>
                      A physician-patient relationship is established only after:
                    </p>
                    <ul className="space-y-2 list-disc list-inside mt-2">
                      <li>Completion of our intake process and medical history forms</li>
                      <li>A scheduled consultation with Dr. Kaufman</li>
                      <li>Mutual agreement to proceed with treatment</li>
                      <li>Payment of applicable fees</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Scope of Practice</h3>
                    <p>
                      Dr. Kaufman provides integrative medicine services, alternative therapy consultations, and specialized medical certifications. Services include but are not limited to:
                    </p>
                    <ul className="space-y-2 list-disc list-inside mt-2">
                      <li>Integrative medicine consultations</li>
                      <li>Alternative therapy recommendations</li>
                      <li>Chronic pain management</li>
                      <li>Holistic health assessments</li>
                      <li>Telehealth consultations</li>
                      <li>Medical certifications as legally permitted</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Geographic Limitations</h3>
                    <p>
                      Medical services are provided in accordance with state licensing requirements. Dr. Kaufman is licensed to practice medicine in Oklahoma and provides services only to patients located in states where he is legally authorized to practice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Telehealth Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Telehealth Services
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Technology Requirements</h3>
                    <p>To participate in telehealth consultations, you must:</p>
                    <ul className="space-y-2 list-disc list-inside mt-2">
                      <li>Have access to reliable internet connection</li>
                      <li>Use a device with video and audio capabilities</li>
                      <li>Be in a private, secure location during consultations</li>
                      <li>Ensure good lighting and audio quality</li>
                      <li>Have a valid form of identification available</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Limitations of Telehealth</h3>
                    <p>You understand that telehealth services have limitations, including:</p>
                    <ul className="space-y-2 list-disc list-inside mt-2">
                      <li>Physical examination may be limited</li>
                      <li>Technology may experience interruptions or failures</li>
                      <li>Emergency services are not available through telehealth</li>
                      <li>Some conditions may require in-person evaluation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Emergency Situations</h3>
                    <p>
                      Telehealth services are not appropriate for emergency medical situations. If you experience a medical emergency, immediately call 911 or go to your nearest emergency room. Do not use telehealth services for urgent or emergency medical conditions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Patient Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Patient Responsibilities
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>As a patient, you agree to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Provide accurate, complete, and truthful medical and personal information</li>
                    <li>Update your medical history and current medications as they change</li>
                    <li>Follow prescribed treatment plans and recommendations</li>
                    <li>Attend scheduled appointments or provide reasonable notice for cancellations</li>
                    <li>Pay fees for services in accordance with our payment policies</li>
                    <li>Maintain confidentiality of login credentials for patient portals</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect the rights and dignity of all staff and other patients</li>
                    <li>Inform us of any adverse reactions or concerns about treatment</li>
                    <li>Seek immediate emergency care when appropriate rather than using telehealth</li>
                  </ul>
                </div>
              </section>

              {/* Appointments and Cancellations */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Appointments and Cancellation Policy
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Scheduling</h3>
                    <p>
                      Appointments may be scheduled through our website, patient portal, or by contacting our office directly. Confirmation of appointment time, date, and access information will be provided.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Cancellation Policy</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>24-hour notice is required for appointment cancellations</li>
                      <li>Late cancellations (less than 24 hours) may incur fees</li>
                      <li>No-show appointments will be charged the full consultation fee</li>
                      <li>Excessive cancellations may result in discharge from the practice</li>
                      <li>Emergency situations will be considered on a case-by-case basis</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Late Arrivals</h3>
                    <p>
                      If you arrive more than 15 minutes late for a telehealth appointment, we may need to reschedule to avoid impacting other patients' appointments.
                    </p>
                  </div>
                </div>
              </section>

              {/* Payment Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Payment Terms and Billing
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Payment Requirements</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Payment is due at the time of service unless other arrangements are made</li>
                      <li>We accept major credit cards, debit cards, and electronic payments</li>
                      <li>Payment plans may be available for certain services upon request</li>
                      <li>Returned payments will incur additional fees</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Insurance and Reimbursement</h3>
                    <p>
                      Many of our services may not be covered by traditional insurance plans. We will provide documentation for you to submit to your insurance company for potential reimbursement. You are responsible for understanding your insurance benefits and coverage limitations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Refund Policy</h3>
                    <p>
                      Refunds are generally not provided for medical consultations once services have been rendered. Refund requests will be considered on a case-by-case basis for extenuating circumstances.
                    </p>
                  </div>
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
                    <li>Share your login credentials with others</li>
                    <li>Use our services for commercial purposes without permission</li>
                    <li>Post or transmit offensive, threatening, or inappropriate content</li>
                    <li>Interfere with the proper functioning of our services</li>
                    <li>Impersonate another person or entity</li>
                    <li>Collect personal information from other users</li>
                  </ul>
                </div>
              </section>

              {/* Medical Disclaimers */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Medical Disclaimers and Limitations
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">No Medical Advice on Website</h3>
                    <p>
                      Information on our website is for educational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider for medical advice, diagnosis, or treatment recommendations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Treatment Outcomes</h3>
                    <p>
                      We cannot guarantee specific treatment outcomes. Individual results may vary based on numerous factors including your health condition, compliance with treatment, and individual response to therapy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Third-Party Links and Services</h3>
                    <p>
                      Our website may contain links to third-party websites or reference third-party services. We do not endorse or assume responsibility for the content, privacy policies, or practices of third-party sites.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Intellectual Property Rights
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    All content on our website, including text, graphics, logos, images, videos, and software, is the property of Dr. Erick Kaufman, MD or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>You may not:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Copy, modify, or distribute our content without permission</li>
                    <li>Use our trademarks or service marks without authorization</li>
                    <li>Create derivative works based on our content</li>
                    <li>Use our content for commercial purposes without a license</li>
                  </ul>
                </div>
              </section>

              {/* Privacy and Confidentiality */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Privacy and Confidentiality
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    Your privacy is protected in accordance with our Privacy Policy and applicable healthcare privacy laws, including HIPAA. By using our services, you acknowledge that you have read and understand our Privacy Policy.
                  </p>
                  <p>
                    You consent to the collection, use, and disclosure of your personal and health information as described in our Privacy Policy and as necessary for treatment, payment, and healthcare operations.
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
                      While we strive to provide reliable services, we cannot guarantee uninterrupted access to our website or telehealth platforms. Services may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, our liability for any damages arising from your use of our services is limited to the amount you paid for the specific service giving rise to the claim.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-professional-navy mb-3">Disclaimer of Warranties</h3>
                    <p>
                      Our website and services are provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
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
                  <p>We reserve the right to terminate or suspend your access to our services for:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Violation of these Terms of Service</li>
                    <li>Non-payment of fees</li>
                    <li>Inappropriate or disruptive behavior</li>
                    <li>Non-compliance with treatment recommendations</li>
                    <li>Provision of false or misleading information</li>
                    <li>Any reason that compromises patient or staff safety</li>
                  </ul>
                  <p>
                    Upon termination, you will receive appropriate notice and assistance with transitioning your care to another provider when medically appropriate.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Governing Law and Dispute Resolution
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    These Terms are governed by the laws of the State of Oklahoma, without regard to conflict of law principles. Any disputes arising from these Terms or your use of our services will be resolved through binding arbitration in Oklahoma, except for claims that may be brought in small claims court.
                  </p>
                  <p>
                    Before initiating formal dispute resolution, we encourage you to contact us directly to discuss and resolve any concerns.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-professional-navy mb-6 border-b border-medical-gray-200 pb-3">
                  Changes to Terms of Service
                </h2>
                <div className="space-y-4 text-medical-gray-700">
                  <p>
                    We may update these Terms periodically to reflect changes in our services, legal requirements, or business practices. Material changes will be communicated through:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Email notification to registered patients</li>
                    <li>Prominent notice on our website</li>
                    <li>Notice provided at your next appointment</li>
                  </ul>
                  <p>
                    Continued use of our services after changes to the Terms constitutes acceptance of the updated Terms.
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
                    If you have questions about these Terms of Service or need assistance with our services, please contact us:
                  </p>
                  
                  <div className="bg-medical-gray-50 p-6 rounded-lg border border-medical-gray-200">
                    <h3 className="font-semibold text-professional-navy mb-3">Dr. Erick Kaufman, MD</h3>
                    <p>
                      Email: info@drerickkaufman.com<br />
                      Phone: (405) XXX-XXXX<br />
                      Address: [Practice Address]<br />
                      Oklahoma [ZIP Code]
                    </p>
                  </div>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="mb-12">
                <div className="bg-medical-primary/10 p-6 rounded-lg border border-medical-primary/20">
                  <p className="text-medical-gray-700">
                    <strong>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong> These Terms supplement and do not replace any informed consent documents, treatment agreements, or other medical forms you may sign as part of your care.
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