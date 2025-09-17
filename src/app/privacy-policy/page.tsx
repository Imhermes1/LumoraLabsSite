'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              
              <div className="text-white/70 mb-8 p-4 glass rounded-xl">
                <p className="font-semibold text-white mb-2">Effective Date: 1 August 2025</p>
                <p>Last Updated: As stated above</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-white/80 mb-4">
                  This Privacy Policy describes how Lumora Labs Pty Ltd (<strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong> or <strong>"Lumora Labs"</strong>) collects, uses, stores, and protects your personal information when you use our software applications <strong>Macro</strong> and <strong>MooDo</strong> (the <strong>"Services"</strong>) and visit our website.
                </p>
                <p className="text-white/80 mb-4">
                  We are committed to protecting your privacy and complying with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This policy explains your rights regarding your personal information and how we handle it.
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
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
                <p className="text-white/80 mb-4">We collect the following types of personal information:</p>
                
                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Account Information:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>Name and email address</li>
                    <li>User credentials and authentication data</li>
                    <li>Profile information you provide</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Usage Data:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>App usage patterns and preferences</li>
                    <li>Feature interactions and settings</li>
                    <li>Device information (type, operating system, version)</li>
                    <li>IP addresses and general location data</li>
                    <li>Session data and timestamps</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Communication Data:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>Support requests and correspondence</li>
                    <li>Feedback and survey responses</li>
                    <li>Beta testing feedback (if applicable)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">2.2 Information Collected Automatically</h3>
                <p className="text-white/80 mb-4">Our Services automatically collect certain information through:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Firebase Analytics:</strong> Usage statistics, crash reports, and performance data</li>
                  <li><strong>Apple Analytics (iOS):</strong> App performance and usage metrics</li>
                  <li><strong>Cookies and similar technologies:</strong> As detailed in our Cookies Policy</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-white/80 mb-4">We use your personal information for the following purposes under the Australian Privacy Principles:</p>
                
                <h3 className="text-xl font-semibold text-white mb-3">3.1 Primary Purposes</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Service Provision:</strong> Operating and maintaining the Macro and MooDo applications</li>
                  <li><strong>Account Management:</strong> Creating and managing your user account</li>
                  <li><strong>Customer Support:</strong> Responding to your inquiries and providing technical assistance</li>
                  <li><strong>Service Improvement:</strong> Analyzing usage patterns to enhance our applications</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">3.2 Secondary Purposes</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Communication:</strong> Sending service updates, security alerts, and important notices</li>
                  <li><strong>Marketing:</strong> With your consent, sending promotional materials about new features</li>
                  <li><strong>Legal Compliance:</strong> Meeting our legal obligations and protecting our rights</li>
                  <li><strong>Safety and Security:</strong> Preventing fraud and ensuring platform security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Security</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">4.1 Storage Locations</h3>
                <p className="text-white/80 mb-4">Your personal information is stored using the following services:</p>
                
                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Firebase (Google Cloud Platform):</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>Primary data storage for application data</li>
                    <li>Data may be processed in Google data centers globally</li>
                    <li>Subject to Google's Data Processing and Security Terms</li>
                    <li>Firebase provides encryption in transit and at rest</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Apple iCloud:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>Used for iOS app data synchronization (with user consent)</li>
                    <li>Data stored in Apple data centers (may include international locations)</li>
                    <li>Subject to Apple's Data Processing Agreement</li>
                    <li>End-to-end encryption available for certain data types</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Notion:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li>Used for internal data processing and customer support</li>
                    <li>Data processed according to Notion's GDPR-compliant practices</li>
                    <li>European data residency options available</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">4.2 Data Security Measures</h3>
                <p className="text-white/80 mb-4">We implement appropriate technical and organizational measures including:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Industry-standard encryption for data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee privacy training and confidentiality agreements</li>
                  <li>Incident response procedures for data breaches</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Third-Party Service Providers</h3>
                <p className="text-white/80 mb-4">We share limited personal information with trusted service providers:</p>
                
                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Google/Firebase:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Purpose:</strong> App analytics, crash reporting, cloud hosting</li>
                    <li><strong>Data Processing Agreement:</strong> Google Cloud Data Processing Addendum</li>
                    <li><strong>Location:</strong> Global (with data residency controls where possible)</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Apple Inc.:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Purpose:</strong> iOS app functionality and iCloud synchronization</li>
                    <li><strong>Data Processing Agreement:</strong> Apple Developer Agreement</li>
                    <li><strong>Location:</strong> Global Apple data centers</li>
                  </ul>
                </div>

                <div className="glass rounded-xl p-4 mb-4">
                  <h4 className="text-white font-semibold mb-2">Notion Labs Inc.:</h4>
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Purpose:</strong> Customer support and internal operations</li>
                    <li><strong>Data Processing Agreement:</strong> Notion GDPR Data Processing Addendum</li>
                    <li><strong>Location:</strong> US/EU (with data residency options)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">5.2 Legal Disclosures</h3>
                <p className="text-white/80 mb-4">We may disclose your information when required by Australian law or to:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Comply with legal process or government requests</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Investigate and prevent fraud or security issues</li>
                  <li>Enforce our Terms of Service</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">5.3 No Sale of Personal Information</h3>
                <p className="text-white/80 mb-4">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. International Data Transfers</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">6.1 Overseas Disclosure</h3>
                <p className="text-white/80 mb-4">Your personal information may be disclosed to recipients outside Australia, including:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>United States:</strong> Google (Firebase), Apple, Notion</li>
                  <li><strong>European Union:</strong> Google Cloud Platform, Notion (optional)</li>
                  <li><strong>Other locations:</strong> As required by our service providers' global infrastructure</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">6.2 Safeguards for Overseas Transfers</h3>
                <p className="text-white/80 mb-4">When transferring data overseas, we ensure:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Adequate contractual protections through Data Processing Agreements</li>
                  <li>Compliance with APP 8 (Cross-border disclosure of personal information)</li>
                  <li>Use of service providers with equivalent privacy protections</li>
                  <li>Regular review of international transfer arrangements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
                <p className="text-white/80 mb-4">Under Australian privacy law, you have the following rights:</p>
                
                <h3 className="text-xl font-semibold text-white mb-3">7.1 Access and Correction</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.2 Marketing Communications</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time</li>
                  <li><strong>Preferences:</strong> Manage communication preferences in your account settings</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.3 Data Portability</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Export:</strong> Request your data in a structured, commonly used format</li>
                  <li><strong>Transfer:</strong> Facilitate transfer to another service provider where technically feasible</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.4 Account Deletion</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Full Deletion:</strong> Request complete deletion of your account and associated data</li>
                  <li><strong>Data Retention:</strong> Some information may be retained for legal or security purposes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">8.1 Retention Periods</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Active Accounts:</strong> Data retained while your account remains active</li>
                  <li><strong>Inactive Accounts:</strong> Data may be deleted after 2 years of inactivity</li>
                  <li><strong>Deleted Accounts:</strong> Most data deleted within 30 days; some data retained for legal purposes</li>
                  <li><strong>Support Communications:</strong> Retained for up to 3 years for quality assurance</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">8.2 Legal Requirements</h3>
                <p className="text-white/80 mb-4">Some information may be retained longer to comply with:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Tax and accounting obligations (7 years)</li>
                  <li>Legal proceedings or investigations</li>
                  <li>Fraud prevention and security purposes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                <p className="text-white/80 mb-4">
                  Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover we have collected such information, we will delete it promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Cookies and Tracking</h2>
                <p className="text-white/80 mb-4">
                  We use cookies and similar technologies as described in our separate Cookies Policy. You can manage cookie preferences through your browser settings or our cookie consent tools.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
                <p className="text-white/80 mb-4">We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Post the updated policy on our website</li>
                  <li>Notify you via email or in-app notification for material changes</li>
                  <li>Update the "Last Updated" date at the top of this policy</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us and Complaints</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">12.1 Privacy Contact</h3>
                <p className="text-white/80 mb-4">For questions about this Privacy Policy or to exercise your rights:</p>
                <div className="glass rounded-xl p-4 mb-4">
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                    <li><strong>Response Time:</strong> We aim to respond within 30 days</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">12.2 Complaint Process</h3>
                <p className="text-white/80 mb-4">If you believe we have breached your privacy:</p>
                <ol className="text-white/80 space-y-2 mb-4">
                  <li><strong>Internal Complaint:</strong> Contact us using the details above</li>
                  <li><strong>External Complaint:</strong> Contact the Office of the Australian Information Commissioner (OAIC)
                    <div className="glass rounded-xl p-4 mt-2">
                      <ul className="text-white/80 space-y-1">
                        <li><strong>Website:</strong> www.oaic.gov.au</li>
                        <li><strong>Phone:</strong> 1300 363 992</li>
                        <li><strong>Email:</strong> enquiries@oaic.gov.au</li>
                      </ul>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-white mb-3">12.3 Resolution Timeline</h3>
                <p className="text-white/80 mb-4">We will:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Acknowledge your complaint within 7 days</li>
                  <li>Investigate and respond within 30 days</li>
                  <li>Provide information about external complaint options if needed</li>
                </ul>
              </section>

              <div className="border-t border-black/40 pt-8 mt-12">
                <p className="text-white/60 text-center">
                  <strong>This Privacy Policy is governed by Australian law and complies with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
} 
