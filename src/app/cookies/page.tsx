'use client'

import Link from 'next/link'
import { ArrowLeft, Shield, Settings, Eye, Lock } from 'lucide-react'

export default function CookiePolicy() {
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
                Cookies Policy
              </h1>
              
              <div className="text-white/70 mb-8 p-4 glass rounded-xl">
                <p className="font-semibold text-white mb-2">Effective Date: 1 August 2025</p>
                <p>Last Updated: As stated above</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-white/80 mb-4">
                  This Cookies Policy explains how Lumora Labs Pty Ltd (<strong>"we"</strong>, <strong>"us"</strong>, <strong>"our"</strong>, or <strong>"Lumora Labs"</strong>) uses cookies and similar tracking technologies on our website and in our <strong>Macro</strong> and <strong>MooDo</strong> applications (collectively, the <strong>"Services"</strong>).
                </p>
                <p className="text-white/80 mb-4">
                  This policy should be read alongside our Privacy Policy and Terms of Service. By continuing to use our Services, you consent to our use of cookies as described in this policy.
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
                <h2 className="text-2xl font-bold text-white mb-4">2. What Are Cookies?</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Definition</h3>
                <p className="text-white/80 mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit websites or use applications. They contain information that is transferred to your device's hard drive and allow us to recognize your device and store certain information about your preferences or past actions.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">2.2 Types of Cookies</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Session Cookies</h4>
                    <p className="text-white/70 text-sm">Temporary cookies that are deleted when you close your browser or app.</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Persistent Cookies</h4>
                    <p className="text-white/70 text-sm">Remain on your device for a predetermined period or until you delete them.</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">First-Party Cookies</h4>
                    <p className="text-white/70 text-sm">Set directly by our website or applications.</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Third-Party Cookies</h4>
                    <p className="text-white/70 text-sm">Set by external services we use (such as analytics providers).</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">2.3 Similar Technologies</h3>
                <p className="text-white/80 mb-4">We also use similar technologies including:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Web beacons/pixels:</strong> Small images that track user behavior</li>
                  <li><strong>Local storage:</strong> Browser-based storage for application data</li>
                  <li><strong>Software development kits (SDKs):</strong> Code libraries that collect usage data</li>
                  <li><strong>Application analytics:</strong> Tools that track app usage and performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Cookies</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-lumora-pink/20 rounded-lg flex items-center justify-center mr-3">
                        <Lock className="text-lumora-pink" size={20} />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Essential Cookies</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-3">These cookies are necessary for our Services to function properly and cannot be switched off.</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• User authentication and login management</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Essential application functionality</li>
                      <li>• Load balancing and system stability</li>
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-lumora-purple/20 rounded-lg flex items-center justify-center mr-3">
                        <Eye className="text-lumora-purple" size={20} />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Performance & Analytics</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-3">These cookies help us understand how users interact with our Services.</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Firebase Analytics (Google)</li>
                      <li>• Google Analytics</li>
                      <li>• Custom analytics</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-deep-purple/20 rounded-lg flex items-center justify-center mr-3">
                        <Settings className="text-deep-purple" size={20} />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Functionality Cookies</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-3">These cookies enhance your experience by remembering your preferences.</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• User interface preferences</li>
                      <li>• Language and regional preferences</li>
                      <li>• Feature customization options</li>
                      <li>• Accessibility settings</li>
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-lumora-pink/20 rounded-lg flex items-center justify-center mr-3">
                        <Shield className="text-lumora-pink" size={20} />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Marketing & Advertising</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-3">We currently do not use marketing or advertising cookies.</p>
                    <p className="text-white/70 text-sm">If we implement advertising features, we will update this policy with clear information and seek appropriate consent.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services and Cookies</h2>
                
                <div className="space-y-4 mb-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Firebase (Google Cloud Platform)</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>Purpose:</strong> Application hosting, analytics, and crash reporting</li>
                      <li><strong>Cookies/Data:</strong> App usage analytics, performance metrics, crash logs</li>
                      <li><strong>Privacy Policy:</strong> https://firebase.google.com/support/privacy</li>
                      <li><strong>Data Processing:</strong> Subject to Google Cloud Data Processing Addendum</li>
                      <li><strong>Location:</strong> Data may be processed globally in Google data centers</li>
                    </ul>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Apple Services (iOS)</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>Purpose:</strong> iOS app functionality and iCloud synchronization</li>
                      <li><strong>Cookies/Data:</strong> App usage analytics, performance data</li>
                      <li><strong>Privacy Policy:</strong> https://www.apple.com/privacy/</li>
                      <li><strong>Data Processing:</strong> Subject to Apple Developer Agreement</li>
                      <li><strong>Location:</strong> Apple data centers globally</li>
                    </ul>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Notion (Internal Operations)</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>Purpose:</strong> Internal customer support and operations</li>
                      <li><strong>Cookies/Data:</strong> Support ticket information, internal documentation</li>
                      <li><strong>Privacy Policy:</strong> https://www.notion.so/privacy</li>
                      <li><strong>Data Processing:</strong> Subject to Notion GDPR Data Processing Addendum</li>
                      <li><strong>Location:</strong> US/EU data centers</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Cookie Choices and Control</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Browser-Based Controls</h3>
                <p className="text-white/80 mb-4">You can manage cookies through your browser settings:</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Google Chrome</h4>
                    <ol className="text-white/70 text-sm space-y-1">
                      <li>1. Click Settings > Privacy and Security > Cookies and other site data</li>
                      <li>2. Choose your preferred cookie settings</li>
                      <li>3. Manage exceptions for specific sites</li>
                    </ol>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Safari</h4>
                    <ol className="text-white/70 text-sm space-y-1">
                      <li>1. Go to Preferences > Privacy</li>
                      <li>2. Choose cookie and tracking preferences</li>
                      <li>3. Manage website data</li>
                    </ol>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Firefox</h4>
                    <ol className="text-white/70 text-sm space-y-1">
                      <li>1. Click Settings > Privacy & Security</li>
                      <li>2. Choose cookie and tracking protection settings</li>
                      <li>3. Manage data for individual sites</li>
                    </ol>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Microsoft Edge</h4>
                    <ol className="text-white/70 text-sm space-y-1">
                      <li>1. Click Settings > Cookies and site permissions</li>
                      <li>2. Choose cookie preferences</li>
                      <li>3. Manage site-specific permissions</li>
                    </ol>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">5.2 Mobile App Controls</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">iOS (iPhone/iPad)</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Settings > Privacy & Security > Analytics & Improvements</li>
                      <li>• Specific app settings within Settings > [App Name]</li>
                      <li>• iCloud settings for data synchronization</li>
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Android</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Settings > Google > Ads</li>
                      <li>• App-specific permissions in Settings > Apps</li>
                      <li>• Google Play Services data controls</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Impact of Disabling Cookies</h2>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-white/70 text-sm">Disabling essential cookies may result in:</p>
                    <ul className="text-white/70 text-sm space-y-1 mt-2">
                      <li>• Inability to log in to your account</li>
                      <li>• Loss of security features</li>
                      <li>• Reduced application functionality</li>
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Performance Cookies</h4>
                    <p className="text-white/70 text-sm">Disabling performance cookies may result in:</p>
                    <ul className="text-white/70 text-sm space-y-1 mt-2">
                      <li>• Reduced ability to improve our services</li>
                      <li>• Less personalized experience</li>
                      <li>• Potential performance issues going undetected</li>
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Functionality Cookies</h4>
                    <p className="text-white/70 text-sm">Disabling functionality cookies may result in:</p>
                    <ul className="text-white/70 text-sm space-y-1 mt-2">
                      <li>• Loss of personalized settings</li>
                      <li>• Need to reconfigure preferences repeatedly</li>
                      <li>• Reduced user experience customization</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Protection and Privacy</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">7.1 Australian Privacy Compliance</h3>
                <p className="text-white/80 mb-4">Our use of cookies complies with:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Privacy Act 1988 (Cth)</li>
                  <li>Australian Privacy Principles (APPs)</li>
                  <li>Australian Consumer Law</li>
                  <li>Spam Act 2003 (Cth) where applicable</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.2 Data Security</h3>
                <p className="text-white/80 mb-4">Cookie data is protected through:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Encryption in transit and at rest</li>
                  <li>Secure cookie settings (HttpOnly, Secure flags)</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Data minimization practices</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">7.3 Data Retention</h3>
                <p className="text-white/80 mb-4">We retain cookie data for:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Session cookies:</strong> Until browser/app session ends</li>
                  <li><strong>Essential cookies:</strong> Duration necessary for service provision</li>
                  <li><strong>Analytics cookies:</strong> Maximum 26 months (Google Analytics standard)</li>
                  <li><strong>Functionality cookies:</strong> Until user changes preferences or deletes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">8.1 Age Restrictions</h3>
                <p className="text-white/80 mb-4">
                  Our Services are not intended for children under 13 years of age. We do not knowingly collect cookie data from children under 13.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">8.2 Parental Controls</h3>
                <p className="text-white/80 mb-4">Parents and guardians can:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Monitor and control children's internet usage</li>
                  <li>Configure browser cookie settings on family devices</li>
                  <li>Contact us to request deletion of any inadvertently collected data</li>
                  <li>Use device-level parental controls</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Updates to This Policy</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">9.1 Policy Changes</h3>
                <p className="text-white/80 mb-4">We may update this Cookies Policy to reflect:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Changes in our cookie usage</li>
                  <li>New third-party services</li>
                  <li>Legal or regulatory updates</li>
                  <li>Improvements to user controls</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">9.2 Notification of Changes</h3>
                <p className="text-white/80 mb-4">We will notify you of significant changes through:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Email notifications to registered users</li>
                  <li>In-app notifications</li>
                  <li>Website banner announcements</li>
                  <li>Updated policy with revised effective date</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">9.3 Continued Use</h3>
                <p className="text-white/80 mb-4">
                  Continued use of our Services after policy updates constitutes acceptance of the revised terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us About Cookies</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">10.1 Questions and Requests</h3>
                <p className="text-white/80 mb-4">For questions about this Cookies Policy or to exercise your rights:</p>
                <div className="glass rounded-xl p-4 mb-4">
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                    <li><strong>Subject Line:</strong> "Cookie Policy Inquiry"</li>
                    <li><strong>Response Time:</strong> Within 30 days</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">10.2 Complaints Process</h3>
                <p className="text-white/80 mb-4">If you have concerns about our cookie practices:</p>
                <ol className="text-white/80 space-y-2 mb-4">
                  <li><strong>Contact us directly</strong> using the information above</li>
                  <li><strong>Internal review</strong> within 30 days of your complaint</li>
                  <li><strong>External complaint</strong> to the Office of the Australian Information Commissioner (OAIC)
                    <div className="glass rounded-xl p-4 mt-2">
                      <ul className="text-white/80 space-y-1">
                        <li><strong>Website:</strong> www.oaic.gov.au</li>
                        <li><strong>Phone:</strong> 1300 363 992</li>
                      </ul>
                    </div>
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-white mb-3">10.3 Cookie-Related Requests</h3>
                <p className="text-white/80 mb-4">You may request:</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Information about specific cookies we use</li>
                  <li>Deletion of cookie data where legally permissible</li>
                  <li>Clarification about third-party cookie practices</li>
                  <li>Assistance with cookie preference settings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Additional Resources</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">11.1 Third-Party Cookie Policies</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Google/Firebase:</strong> https://policies.google.com/privacy</li>
                  <li><strong>Apple:</strong> https://www.apple.com/privacy/</li>
                  <li><strong>Notion:</strong> https://www.notion.so/privacy</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">11.2 Browser Help Resources</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Chrome:</strong> https://support.google.com/chrome/answer/95647</li>
                  <li><strong>Safari:</strong> https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac</li>
                  <li><strong>Firefox:</strong> https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer</li>
                  <li><strong>Edge:</strong> https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">11.3 Privacy Education</h3>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li><strong>Australian Privacy Principles:</strong> https://www.oaic.gov.au/privacy/australian-privacy-principles</li>
                  <li><strong>Cookie information:</strong> https://www.allaboutcookies.org/</li>
                  <li><strong>Digital privacy tips:</strong> https://www.cyber.gov.au/</li>
                </ul>
              </section>

              <div className="border-t border-white/20 pt-8 mt-12">
                <p className="text-white/60 text-center">
                  <strong>This Cookies Policy is designed to comply with Australian privacy laws and provide clear information about our cookie practices. For the most current version, please visit our website.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 