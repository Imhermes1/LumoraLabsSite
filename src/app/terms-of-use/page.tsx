import React from 'react'
import { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Terms of Use - Lumora Labs',
  description: 'End User License Agreement for Macro and Micro apps by Lumora Labs Pty Ltd.',
}

export default function TermsOfUse() {
  return (
    <PageShell>
      <header className="mb-20 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
          End User License Agreement
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Terms of Use for Macro and Micro mobile applications by Lumora Labs Pty Ltd.
        </p>
      </header>

      <main className="flex flex-col gap-12">
        <RevealOnScroll>
          <section className="page-surface rounded-3xl p-8 md:p-12">
            <div className="mb-8">
              <p className="text-sm text-gray-500">
                <strong>Effective Date:</strong> 1 August 2025<br />
                <strong>Last Updated:</strong> 1 August 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Introduction and Acceptance</h2>
              <p className="mb-6">
                This End User License Agreement ("EULA") governs your use of the software applications Macro and Micro (the "Licensed Applications") provided by Lumora Labs Pty Ltd ("we", "us", "our", or "Lumora Labs").
              </p>
              <p className="mb-6">
                By downloading, installing, or using our Licensed Applications, you agree to be bound by this EULA and our Privacy Policy. If you do not agree to these terms, you must not use our Licensed Applications.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details:</h3>
              <ul className="mb-6 list-disc pl-6">
                <li><strong>Company:</strong> Lumora Labs Pty Ltd</li>
                <li><strong>Address:</strong> Vermont South, VIC, Australia</li>
                <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                <li><strong>Website:</strong> www.lumoralabs.io</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. License Grant</h2>
              <p className="mb-4"><strong>Scope of License:</strong></p>
              <p className="mb-4">
                Subject to your compliance with this EULA, Lumora Labs grants you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Download and install the Licensed Applications on devices you own or control</li>
                <li>Use the Licensed Applications in accordance with their intended functionality</li>
                <li>Access and use features as documented and intended</li>
              </ul>

              <p className="mb-4"><strong>Restrictions:</strong></p>
              <p className="mb-6">You may not:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Copy, modify, or create derivative works of the Licensed Applications</li>
                <li>Reverse engineer, disassemble, or attempt to derive source code</li>
                <li>Distribute, sublicense, or transfer the Licensed Applications</li>
                <li>Remove or modify any copyright notices or proprietary markings</li>
                <li>Use the Licensed Applications for any unlawful purpose</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. User Accounts</h2>
              <p className="mb-4">To use certain features, you may need to create an account:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Provide accurate and complete registration information</li>
                <li>Be at least 13 years of age (or age of majority in your jurisdiction)</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Privacy and Data Use</h2>
              <p className="mb-4">
                Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which forms part of this EULA.
              </p>
              <p className="mb-4"><strong>Data Processing:</strong></p>
              <ul className="mb-6 list-disc pl-6">
                <li><strong>Firebase (Google):</strong> Application hosting and analytics</li>
                <li><strong>Apple iCloud:</strong> iOS data synchronization (with user consent)</li>
                <li><strong>Notion:</strong> Internal operations and customer support</li>
              </ul>
              <p className="mb-6">
                We process your data in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Australian Consumer Law</h2>
              <p className="mb-4">
                Under the Australian Consumer Law, our Licensed Applications come with guarantees that cannot be excluded:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Services provided with due care and skill</li>
                <li>Services fit for the purpose you told us about</li>
                <li>Services provided within a reasonable time</li>
                <li>Services of acceptable quality</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Subscription and Payments</h2>
              <p className="mb-4">Some features may require payment:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Fees are charged in advance on a recurring basis</li>
                <li>All fees are in Australian Dollars (AUD) unless otherwise stated</li>
                <li>Pricing is subject to change with 30 days' notice</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are provided in accordance with Australian Consumer Law</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Intellectual Property</h2>
              <p className="mb-4">
                Lumora Labs owns all intellectual property rights in:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>The Macro and Micro applications</li>
                <li>Software code, algorithms, and technical innovations</li>
                <li>User interface designs and branding</li>
              </ul>
              <p className="mb-6">
                You retain ownership of content you create using our Licensed Applications, subject to our right to use your content to provide the Services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Acceptable Use</h2>
              <p className="mb-4">You may use our Licensed Applications to:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Access and use features as intended and documented</li>
                <li>Create, store, and manage your personal data</li>
                <li>Provide feedback and suggestions for improvement</li>
              </ul>

              <p className="mb-4">You must not:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Use for any unlawful purpose or activity</li>
                <li>Attempt unauthorized access to our systems</li>
                <li>Upload viruses, malware, or harmful code</li>
                <li>Harvest or collect user information without consent</li>
                <li>Impersonate others or provide false information</li>
                <li>Use to spam, harass, or abuse others</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Third-Party Services</h2>
              <p className="mb-4">
                Our Licensed Applications may integrate with third-party services:
              </p>
              <ul className="mb-6 list-disc pl-6">
                <li>Firebase for analytics and hosting</li>
                <li>Apple services for iOS functionality</li>
                <li>Other approved integrations and partnerships</li>
              </ul>
              <p className="mb-6">
                Your use of third-party services is subject to their respective terms and policies.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Termination</h2>
              <p className="mb-4">This EULA is effective until terminated. You may terminate by:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Deleting the Licensed Applications from your devices</li>
                <li>Cancelling your account through the app settings</li>
                <li>Contacting us at lumos@lumoralabs.io</li>
              </ul>

              <p className="mb-4">We may terminate your license if you:</p>
              <ul className="mb-6 list-disc pl-6">
                <li>Violate this EULA</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Fail to pay applicable fees</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">11. Warranty and Liability</h2>
              <p className="mb-4">
                <strong>Warranty Disclaimer:</strong>
              </p>
              <p className="mb-6">
                Except for consumer guarantees that cannot be excluded under Australian law, the Licensed Applications are provided "as is" without warranties of any kind.
              </p>

              <p className="mb-4">
                <strong>Limitation of Liability:</strong>
              </p>
              <p className="mb-6">
                To the extent permitted by law, our total liability is limited to the amount you paid in the 12 months prior to the claim. We exclude liability for indirect, consequential, or special damages, subject to consumer guarantee limitations.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">12. Changes to EULA</h2>
              <p className="mb-6">
                We may update this EULA by posting the revised version and providing notice. Continued use after changes constitutes acceptance of the updated terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">13. Governing Law and Disputes</h2>
              <p className="mb-4">
                This EULA is governed by the laws of Victoria, Australia. Disputes will be resolved in the courts of Victoria.
              </p>
              <p className="mb-6">
                Before formal proceedings, you agree to contact us to attempt informal resolution of disputes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-6">14. Contact Information</h2>
              <p className="mb-4">For questions about this EULA:</p>
              <ul className="mb-6 list-disc pl-6">
                <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                <li><strong>Website:</strong> www.lumoralabs.io</li>
                <li><strong>Address:</strong> Lumora Labs Pty Ltd, Vermont South, VIC, Australia</li>
              </ul>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> This EULA is governed by Australian law and designed to comply with the Australian Consumer Law and other applicable regulations. Your rights under consumer guarantee legislation cannot be excluded or limited.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </PageShell>
  )
}
