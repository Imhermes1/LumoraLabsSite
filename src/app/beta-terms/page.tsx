'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BetaTerms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple via-black to-black">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link 
              href="/"
              className="flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Beta Testing Terms and Conditions
              </h1>
              
              <div className="text-white/70 mb-8 p-4 glass rounded-xl">
                <p className="font-semibold text-white mb-2">Effective Date: 1 August 2025</p>
                <p>Last Updated: As stated above</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-white/80 mb-4">
                  These Beta Testing Terms and Conditions (<strong>"Beta Terms"</strong>) govern your participation in beta testing programs for <strong>Macro</strong> and <strong>MooDo</strong> applications provided by Lumora Labs Pty Ltd (<strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong>, or <strong>"Lumora Labs"</strong>).
                </p>
                <p className="text-white/80 mb-4">
                  By participating in our beta testing program, you agree to these Beta Terms in addition to our standard Terms of Service and Privacy Policy.
                </p>
                <div className="glass rounded-xl p-4 mb-4">
                  <h3 className="text-white font-semibold mb-2">Contact Information:</h3>
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Company:</strong> Lumora Labs Pty Ltd</li>
                    <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                    <li><strong>Address:</strong> Vermont South, VIC, Australia</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Beta Program Overview</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Purpose</h3>
                <p className="text-white/80 mb-4">Our beta testing program allows selected users to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Test pre-release versions of Macro and MooDo applications</li>
                  <li>Provide feedback on new features and functionality</li>
                  <li>Help identify bugs and performance issues</li>
                  <li>Contribute to product development and improvement</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">2.2 Beta Software Definition</h3>
                <p className="text-white/80 mb-4"><strong>"Beta Software"</strong> includes:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Pre-release versions of our applications</li>
                  <li>Experimental features and functionality</li>
                  <li>Development builds and test versions</li>
                  <li>Any software marked as "beta," "alpha," "preview," or "experimental"</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">2.3 Participation Eligibility</h3>
                <p className="text-white/80 mb-4">To participate in beta testing, you must:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Have an active account with Lumora Labs</li>
                  <li>Accept these Beta Terms</li>
                  <li>Comply with all applicable laws and our standard Terms of Service</li>
                  <li>Meet any specific requirements for particular beta programs</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Beta Access and License</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">3.1 Limited License</h3>
                <p className="text-white/80 mb-4">We grant you a limited, non-exclusive, non-transferable, revocable license to use Beta Software solely for:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Testing and evaluation purposes</li>
                  <li>Providing feedback to Lumora Labs</li>
                  <li>Personal, non-commercial use as intended</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">3.2 License Restrictions</h3>
                <p className="text-white/80 mb-4">You may not:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Use Beta Software for commercial purposes</li>
                  <li>Distribute, share, or provide access to Beta Software to third parties</li>
                  <li>Reverse engineer, decompile, or disassemble Beta Software</li>
                  <li>Remove or modify any proprietary notices</li>
                  <li>Use Beta Software for critical business operations</li>
                  <li>Create derivative works based on Beta Software</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">3.3 Access Management</h3>
                <p className="text-white/80 mb-4">We may:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Limit the number of beta participants</li>
                  <li>Revoke access at any time without notice</li>
                  <li>Modify or terminate beta programs</li>
                  <li>Require additional terms for specific beta features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Testing Obligations and Expectations</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">4.1 Testing Responsibilities</h3>
                <p className="text-white/80 mb-4">As a beta tester, you agree to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Use Beta Software regularly and provide meaningful feedback</li>
                  <li>Report bugs, issues, and usability problems promptly</li>
                  <li>Test features according to provided guidelines</li>
                  <li>Participate in surveys and feedback sessions when requested</li>
                  <li>Follow security and confidentiality requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">4.2 Feedback Requirements</h3>
                <p className="text-white/80 mb-4">You must provide feedback through:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>In-app reporting tools</li>
                  <li>Email communications to lumos@lumoralabs.io</li>
                  <li>Scheduled feedback sessions or surveys</li>
                  <li>Bug reporting platforms we designate</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">4.3 Testing Environment</h3>
                <p className="text-white/80 mb-4">You should:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Use Beta Software in a non-production environment when possible</li>
                  <li>Maintain regular backups of important data</li>
                  <li>Understand that Beta Software may affect system performance</li>
                  <li>Use appropriate devices and operating system versions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality and Non-Disclosure</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Confidential Information</h3>
                <p className="text-white/80 mb-4">The following information is confidential:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Beta Software and its features</li>
                  <li>Technical specifications and documentation</li>
                  <li>Performance data and analytics</li>
                  <li>Product roadmaps and development plans</li>
                  <li>Any information marked as confidential</li>
                  <li>Feedback from other beta testers</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">5.2 Non-Disclosure Obligations</h3>
                <p className="text-white/80 mb-4">You agree to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Keep all confidential information strictly confidential</li>
                  <li>Not disclose Beta Software features to third parties</li>
                  <li>Not post screenshots, videos, or descriptions on social media</li>
                  <li>Not discuss beta features in public forums</li>
                  <li>Only share feedback through official channels</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">5.3 Duration of Confidentiality</h3>
                <p className="text-white/80 mb-4">Confidentiality obligations continue:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Throughout your participation in the beta program</li>
                  <li>For 2 years after your participation ends</li>
                  <li>Until information becomes publicly available through official releases</li>
                  <li>As required by applicable law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property and Feedback</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">6.1 Ownership of Beta Software</h3>
                <p className="text-white/80 mb-4">Lumora Labs retains all rights, title, and interest in:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Beta Software and all modifications</li>
                  <li>Documentation and support materials</li>
                  <li>Technical innovations and improvements</li>
                  <li>All intellectual property rights</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">6.2 Feedback Ownership</h3>
                <p className="text-white/80 mb-4">Any feedback, suggestions, or ideas you provide:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Become the exclusive property of Lumora Labs</li>
                  <li>May be used without compensation or attribution</li>
                  <li>Are provided on a non-confidential basis</li>
                  <li>Can be incorporated into future products or services</li>
                  <li>Do not create any intellectual property rights for you</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">6.3 No Claims</h3>
                <p className="text-white/80 mb-4">You waive any claims to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Ownership of improvements or modifications</li>
                  <li>Compensation for feedback or suggestions</li>
                  <li>Attribution or credit for contributions</li>
                  <li>Future royalties or licensing fees</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimers and Limitations</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">7.1 Beta Software Disclaimers</h3>
                <p className="text-white/80 mb-4">Beta Software is provided <strong>"AS IS"</strong> and may include:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Bugs, errors, and performance issues</li>
                  <li>Incomplete or non-functional features</li>
                  <li>Data loss or corruption risks</li>
                  <li>Security vulnerabilities</li>
                  <li>Compatibility problems</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.2 No Warranties</h3>
                <p className="text-white/80 mb-4">To the extent permitted by Australian law:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>We make no warranties about Beta Software functionality</li>
                  <li>Beta Software may not meet your requirements</li>
                  <li>We do not guarantee availability or uptime</li>
                  <li>Support may be limited or unavailable</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.3 Consumer Guarantees</h3>
                <p className="text-white/80 mb-4">Under Australian Consumer Law:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Consumer guarantees may apply to beta services</li>
                  <li>We cannot exclude guarantees that cannot be lawfully excluded</li>
                  <li>Remedies may be limited to re-supply of services where permitted</li>
                  <li>Some warranties and conditions cannot be excluded</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.4 Limitation of Liability</h3>
                <p className="text-white/80 mb-4">To the maximum extent permitted by law:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Our liability is limited to the re-supply of beta access</li>
                  <li>We exclude liability for indirect or consequential damages</li>
                  <li>You assume risk for using experimental software</li>
                  <li>Our total liability is limited to $100 AUD</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Data and Privacy in Beta Testing</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">8.1 Beta Data Collection</h3>
                <p className="text-white/80 mb-4">During beta testing, we may collect additional data including:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Detailed usage analytics and crash reports</li>
                  <li>Performance metrics and system information</li>
                  <li>User interaction patterns and feedback</li>
                  <li>Test results and quality metrics</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">8.2 Privacy Protection</h3>
                <p className="text-white/80 mb-4">Beta testing data is subject to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Our standard Privacy Policy</li>
                  <li>Additional protections for sensitive test data</li>
                  <li>Secure storage and transmission practices</li>
                  <li>Limited access by authorized personnel only</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">8.3 Data Retention</h3>
                <p className="text-white/80 mb-4">Beta testing data may be:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Retained longer than standard user data for analysis</li>
                  <li>Used to improve current and future products</li>
                  <li>Aggregated and anonymized for research purposes</li>
                  <li>Deleted upon request where legally permissible</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Risks and Responsibility</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">9.1 Assumption of Risk</h3>
                <p className="text-white/80 mb-4">By participating in beta testing, you acknowledge:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Beta Software may cause system instability or data loss</li>
                  <li>Features may change or be removed without notice</li>
                  <li>Your use is at your own risk</li>
                  <li>You should maintain appropriate backups</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">9.2 Your Responsibilities</h3>
                <p className="text-white/80 mb-4">You are responsible for:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Maintaining backups of important data</li>
                  <li>Using Beta Software in appropriate environments</li>
                  <li>Complying with all terms and conditions</li>
                  <li>Reporting security issues promptly</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">9.3 Indemnification</h3>
                <p className="text-white/80 mb-4">You agree to indemnify Lumora Labs against claims arising from:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Your misuse of Beta Software</li>
                  <li>Violation of these Beta Terms</li>
                  <li>Breach of confidentiality obligations</li>
                  <li>Unauthorized distribution of Beta Software</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Termination of Beta Participation</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">10.1 Termination by You</h3>
                <p className="text-white/80 mb-4">You may terminate participation by:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Uninstalling Beta Software</li>
                  <li>Notifying us at lumos@lumoralabs.io</li>
                  <li>Ceasing to use beta features</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">10.2 Termination by Us</h3>
                <p className="text-white/80 mb-4">We may terminate your participation for:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Violation of these Beta Terms</li>
                  <li>Breach of confidentiality obligations</li>
                  <li>Completion of the beta program</li>
                  <li>Any reason with or without notice</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">10.3 Effect of Termination</h3>
                <p className="text-white/80 mb-4">Upon termination:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Your license to use Beta Software ends immediately</li>
                  <li>You must delete all Beta Software and related materials</li>
                  <li>Confidentiality obligations continue as specified</li>
                  <li>Outstanding feedback requirements remain</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Beta Program Changes</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">11.1 Program Modifications</h3>
                <p className="text-white/80 mb-4">We may:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Change beta program terms with reasonable notice</li>
                  <li>Add or remove features from beta testing</li>
                  <li>Modify participation requirements</li>
                  <li>Update testing procedures and guidelines</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">11.2 Communication of Changes</h3>
                <p className="text-white/80 mb-4">Changes will be communicated through:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Email notifications to beta participants</li>
                  <li>Updates to these Beta Terms</li>
                  <li>In-app notifications and announcements</li>
                  <li>Beta program documentation updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. General Provisions</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">12.1 Relationship to Other Terms</h3>
                <p className="text-white/80 mb-4">These Beta Terms:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Supplement our standard Terms of Service</li>
                  <li>Do not replace or modify the Privacy Policy</li>
                  <li>Take precedence over conflicting terms for beta features</li>
                  <li>Are subject to applicable Australian law</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">12.2 Governing Law</h3>
                <p className="text-white/80 mb-4">These Beta Terms are governed by:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Laws of Victoria, Australia</li>
                  <li>Australian Consumer Law where applicable</li>
                  <li>Federal privacy and intellectual property laws</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">12.3 Dispute Resolution</h3>
                <p className="text-white/80 mb-4">Disputes will be resolved through:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Informal discussion and negotiation</li>
                  <li>Mediation where appropriate</li>
                  <li>Courts of Victoria, Australia</li>
                  <li>Compliance with consumer protection laws</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact and Support</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">13.1 Beta Support</h3>
                <p className="text-white/80 mb-4">For beta-related issues:</p>
                <div className="glass rounded-xl p-4 mb-4">
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Email:</strong> lumos@lumoralabs.io (mark subject "BETA SUPPORT")</li>
                    <li><strong>Response Time:</strong> Within 48 hours during business days</li>
                    <li><strong>Priority:</strong> Beta issues receive priority support</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">13.2 Reporting Requirements</h3>
                <p className="text-white/80 mb-4">Report the following immediately:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Security vulnerabilities or data breaches</li>
                  <li>Critical bugs that affect system stability</li>
                  <li>Unauthorized access or disclosure of confidential information</li>
                  <li>Any legal or compliance concerns</li>
                </ul>

                <div className="glass rounded-xl p-4 mb-4">
                  <p className="text-white font-semibold">
                    <strong>Emergency Contact:</strong> For urgent security issues, contact lumos@lumoralabs.io with "URGENT SECURITY" in the subject line.
                  </p>
                </div>
              </section>

              <div className="border-t border-white/20 pt-8 mt-12">
                <p className="text-white/60 text-center">
                  <strong>These Beta Terms are governed by Australian law and comply with applicable consumer protection and privacy regulations.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 