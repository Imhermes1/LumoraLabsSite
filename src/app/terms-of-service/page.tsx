'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pb-24 pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-[-28rem] -z-10 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[70rem] bg-gradient-to-br from-lumora-pink/20 via-lumora-purple/20 to-transparent opacity-70" />
      </div>
      <div className="absolute inset-y-0 right-[-14rem] top-16 -z-10 hidden lg:block">
        <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-lumora-purple/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="mt-10 glass-strong rounded-3xl p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Terms of Service
              </h1>
              
              <div className="text-white/70 mb-8 p-4 glass rounded-xl">
                <p className="font-semibold text-white mb-2">Effective Date: 1 August 2025</p>
                <p>Last Updated: As stated above</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction and Acceptance</h2>
                <p className="text-white/80 mb-4">
                  These Terms of Service (<strong>"Terms"</strong>) govern your use of the software applications <strong>Macro</strong> and <strong>MooDo</strong> (the <strong>"Services"</strong>) provided by Lumora Labs Pty Ltd (<strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong>, or <strong>"Lumora Labs"</strong>).
                </p>
                <p className="text-white/80 mb-4">
                  By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use our Services.
                </p>
                <div className="glass rounded-xl p-4 mb-4">
                  <h3 className="text-white font-semibold mb-2">Company Details:</h3>
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Company:</strong> Lumora Labs Pty Ltd</li>
                    <li><strong>Address:</strong> Vermont South, VIC, Australia</li>
                    <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                    <li><strong>Website:</strong> www.lumoralabs.io</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Service Overview</h3>
                <p className="text-white/80 mb-4">Lumora Labs provides:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Macro:</strong> AI-powered nutrition tracking and coaching</li>
                  <li><strong>MooDo:</strong> Smart task management based on mental health</li>
                  <li>Associated website, support, and account management services</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">2.2 Service Modifications</h3>
                <p className="text-white/80 mb-4">We reserve the right to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Modify, update, or discontinue any aspect of our Services with reasonable notice</li>
                  <li>Add new features or remove existing features</li>
                  <li>Change service availability or functionality</li>
                  <li>Update system requirements or technical specifications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Registration</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">3.1 Account Creation</h3>
                <p className="text-white/80 mb-4">To use our Services, you must:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Provide accurate and complete registration information</li>
                  <li>Be at least 13 years of age (or the age of majority in your jurisdiction)</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain the security of your account credentials</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">3.2 Account Responsibilities</h3>
                <p className="text-white/80 mb-4">You are responsible for:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>All activities that occur under your account</li>
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>Notifying us immediately of any unauthorized account access</li>
                  <li>Ensuring your account information remains current and accurate</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">3.3 Account Termination</h3>
                <p className="text-white/80 mb-4">We may suspend or terminate your account if you:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Violate these Terms or our policies</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Provide false or misleading information</li>
                  <li>Fail to pay applicable fees when due</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">4.1 Permitted Uses</h3>
                <p className="text-white/80 mb-4">You may use our Services to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Access and use features as intended and documented</li>
                  <li>Create, store, and manage your personal data</li>
                  <li>Connect with other users where applicable</li>
                  <li>Provide feedback and suggestions for improvement</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">4.2 Prohibited Uses</h3>
                <p className="text-white/80 mb-4">You must not:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Use our Services for any unlawful purpose or activity</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Interfere with or disrupt the operation of our Services</li>
                  <li>Upload or transmit viruses, malware, or other harmful code</li>
                  <li>Harvest or collect user information without consent</li>
                  <li>Impersonate others or provide false identity information</li>
                  <li>Use our Services to spam, harass, or abuse others</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code</li>
                  <li>Resell, redistribute, or commercialize our Services without permission</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data and Privacy</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Privacy Policy</h3>
                <p className="text-white/80 mb-4">
                  Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which forms part of these Terms.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.2 Data Storage and Processing</h3>
                <p className="text-white/80 mb-4">We use the following third-party services for data storage and processing:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Firebase (Google):</strong> Application hosting and analytics</li>
                  <li><strong>Apple iCloud:</strong> iOS data synchronization (with user consent)</li>
                  <li><strong>Notion:</strong> Internal operations and customer support</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">5.3 Your Data Rights</h3>
                <p className="text-white/80 mb-4">You retain ownership of your personal data and content. We process your data in accordance with:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Australian Privacy Principles (APPs)</li>
                  <li>Privacy Act 1988 (Cth)</li>
                  <li>Our published Privacy Policy</li>
                  <li>Applicable data processing agreements with third-party providers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Consumer Guarantees and Australian Consumer Law</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">6.1 Consumer Guarantees</h3>
                <p className="text-white/80 mb-4">Under the Australian Consumer Law (ACL), our Services come with guarantees that cannot be excluded. These include:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Services provided with due care and skill</li>
                  <li>Services fit for the purpose you told us about</li>
                  <li>Services provided within a reasonable time</li>
                  <li>Services of acceptable quality</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">6.2 Limitation of Liability</h3>
                <p className="text-white/80 mb-4">To the extent permitted by law:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Our liability is limited to re-supplying the services or paying for re-supply</li>
                  <li>We exclude liability for indirect, consequential, or special damages</li>
                  <li>Our total liability is limited to the amount paid by you in the 12 months prior to the claim</li>
                  <li>These limitations do not apply to liability that cannot be excluded under the ACL</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">6.3 Warranty Disclaimer</h3>
                <p className="text-white/80 mb-4">Except for consumer guarantees that cannot be excluded:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Services are provided "as is" without additional warranties</li>
                  <li>We do not warrant that services will be uninterrupted or error-free</li>
                  <li>We do not guarantee compatibility with all devices or systems</li>
                  <li>Third-party integrations are subject to their own terms and availability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Fees and Payment</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">7.1 Subscription Fees</h3>
                <p className="text-white/80 mb-4">Some Services may require payment of subscription fees:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Fees are charged in advance on a recurring basis</li>
                  <li>All fees are in Australian Dollars (AUD) unless otherwise stated</li>
                  <li>Pricing is subject to change with 30 days' notice</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.2 Payment Terms</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Payment is due immediately upon subscription or renewal</li>
                  <li>Failed payments may result in service suspension</li>
                  <li>You are responsible for applicable taxes and third-party payment processor fees</li>
                  <li>Refunds are provided in accordance with Australian Consumer Law and our refund policy</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.3 Automatic Renewal</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>You may cancel renewal at any time before the next billing cycle</li>
                  <li>Cancelled subscriptions remain active until the end of the paid period</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">8.1 Our Intellectual Property</h3>
                <p className="text-white/80 mb-4">We own all intellectual property rights in:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>The Macro and MooDo applications</li>
                  <li>Our website, logos, and branding</li>
                  <li>Documentation and support materials</li>
                  <li>Software code, algorithms, and technical innovations</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">8.2 Your Content</h3>
                <p className="text-white/80 mb-4">You retain ownership of content you create using our Services, subject to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Our right to use your content to provide the Services</li>
                  <li>Our right to display your content within the application interface</li>
                  <li>Technical requirements for data storage and processing</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">8.3 License Grant</h3>
                <p className="text-white/80 mb-4">
                  We grant you a limited, non-exclusive, non-transferable license to use our Services in accordance with these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Beta Testing and Pre-Release Features</h2>
                <p className="text-white/80 mb-4">Some features may be offered in beta or pre-release form:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Beta features are experimental and may not function as intended</li>
                  <li>Beta access may be limited and subject to additional terms</li>
                  <li>We may modify or discontinue beta features without notice</li>
                  <li>Beta features are provided without warranty beyond consumer guarantees</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Services</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">10.1 Integration with Third Parties</h3>
                <p className="text-white/80 mb-4">Our Services may integrate with third-party services including:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Firebase for analytics and hosting</li>
                  <li>Apple services for iOS functionality</li>
                  <li>Other approved integrations and partnerships</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">10.2 Third-Party Terms</h3>
                <p className="text-white/80 mb-4">
                  Your use of third-party services is subject to their respective terms and policies. We are not responsible for third-party service availability, functionality, or data practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Suspension and Termination</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">11.1 Suspension</h3>
                <p className="text-white/80 mb-4">We may suspend your access if:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>You violate these Terms</li>
                  <li>Your account shows suspicious activity</li>
                  <li>We need to perform maintenance or updates</li>
                  <li>Required by law or court order</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">11.2 Termination by You</h3>
                <p className="text-white/80 mb-4">You may terminate your account at any time by:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Using account deletion tools in the application</li>
                  <li>Contacting us at lumos@lumoralabs.io</li>
                  <li>Following cancellation procedures for paid subscriptions</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">11.3 Termination by Us</h3>
                <p className="text-white/80 mb-4">We may terminate your account for:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Material breach of these Terms</li>
                  <li>Extended period of account inactivity</li>
                  <li>Business reasons with reasonable notice</li>
                  <li>Legal or regulatory requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">11.4 Effect of Termination</h3>
                <p className="text-white/80 mb-4">Upon termination:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Your access to Services will cease</li>
                  <li>Your data will be deleted according to our data retention policy</li>
                  <li>These Terms will survive to the extent necessary to resolve disputes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Dispute Resolution</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">12.1 Informal Resolution</h3>
                <p className="text-white/80 mb-4">Before initiating formal proceedings, you agree to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Contact us to discuss and attempt to resolve disputes</li>
                  <li>Provide reasonable information about your concern</li>
                  <li>Allow us 30 days to investigate and respond</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">12.2 Formal Disputes</h3>
                <p className="text-white/80 mb-4">If informal resolution fails:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Disputes will be resolved under Australian law</li>
                  <li>Courts of Victoria, Australia have exclusive jurisdiction</li>
                  <li>You may also have rights under Australian Consumer Law to pursue remedies through consumer protection agencies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">13. Indemnity</h2>
                <p className="text-white/80 mb-4">You agree to indemnify and hold harmless Lumora Labs from claims arising from:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Your use of the Services in violation of these Terms</li>
                  <li>Your content or data uploaded to our Services</li>
                  <li>Your violation of third-party rights</li>
                  <li>Your breach of applicable laws or regulations</li>
                </ul>
                <p className="text-white/80 mb-4">
                  This indemnity does not apply to our negligence or breaches of consumer guarantees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">14. General Provisions</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">14.1 Entire Agreement</h3>
                <p className="text-white/80 mb-4">
                  These Terms, together with our Privacy Policy and any additional terms for specific Services, constitute the entire agreement between you and Lumora Labs.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">14.2 Severability</h3>
                <p className="text-white/80 mb-4">
                  If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in full force and effect.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">14.3 Assignment</h3>
                <p className="text-white/80 mb-4">
                  You may not assign these Terms without our written consent. We may assign these Terms to any successor or affiliate.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">14.4 Governing Law</h3>
                <p className="text-white/80 mb-4">
                  These Terms are governed by the laws of Victoria, Australia, without regard to conflict of law principles.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">14.5 Changes to Terms</h3>
                <p className="text-white/80 mb-4">We may update these Terms by:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Posting revised Terms on our website</li>
                  <li>Providing notice through our Services or by email</li>
                  <li>Giving at least 30 days' notice for material changes</li>
                </ul>
                <p className="text-white/80 mb-4">
                  Continued use after changes constitutes acceptance of updated Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
                <p className="text-white/80 mb-4">For questions about these Terms or our Services:</p>
                <div className="glass rounded-xl p-4 mb-4">
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                    <li><strong>Website:</strong> www.lumoralabs.io</li>
                    <li><strong>Address:</strong> Lumora Labs Pty Ltd, Vermont South, VIC, Australia</li>
                  </ul>
                </div>
              </section>

              <div className="border-t border-white/20 pt-8 mt-12">
                <p className="text-white/60 text-center">
                  <strong>These Terms are governed by Australian law and designed to comply with the Australian Consumer Law and other applicable regulations.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
