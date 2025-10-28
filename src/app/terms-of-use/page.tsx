import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          End User License Agreement
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Terms of Use for Macro and Micro mobile applications by Lumora Labs Pty Ltd.
        </p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2">
              <strong>Effective Date:</strong> 1 August 2025
            </p>
            <p className="text-gray-700">
              <strong>Last Updated:</strong> 1 August 2025
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Acceptance</h2>
            <p className="text-gray-700 mb-4">
              This End User License Agreement ("EULA") governs your use of the software applications Macro and Micro (the "Licensed Applications") provided by Lumora Labs Pty Ltd ("we", "us", "our", or "Lumora Labs").
            </p>
            <p className="text-gray-700 mb-4">
              By downloading, installing, or using our Licensed Applications, you agree to be bound by this EULA and our Privacy Policy. If you do not agree to these terms, you must not use our Licensed Applications.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Details:</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Company:</strong> Lumora Labs Pty Ltd</li>
                <li><strong>Address:</strong> Vermont South, VIC, Australia</li>
                <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                <li><strong>Website:</strong> www.lumoralabs.io</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. License Grant</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Scope of License:</h3>
            <p className="text-gray-700 mb-4">
              Subject to your compliance with this EULA, Lumora Labs grants you a limited, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Download and install the Licensed Applications on devices you own or control</li>
              <li>Use the Licensed Applications in accordance with their intended functionality</li>
              <li>Access and use features as documented and intended</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Restrictions:</h3>
            <p className="text-gray-700 mb-4">You may not:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Copy, modify, or create derivative works of the Licensed Applications</li>
              <li>Reverse engineer, disassemble, or attempt to derive source code</li>
              <li>Distribute, sublicense, or transfer the Licensed Applications</li>
              <li>Remove or modify any copyright notices or proprietary markings</li>
              <li>Use the Licensed Applications for any unlawful purpose</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">To use certain features, you may need to create an account:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete registration information</li>
              <li>Be at least 13 years of age (or age of majority in your jurisdiction)</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data Use</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which forms part of this EULA.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Processing:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Supabase:</strong> Application hosting and user data storage</li>
              <li><strong>PostHog:</strong> Application analytics and user behavior tracking</li>
              <li><strong>Resend:</strong> Email communications and notifications</li>
              <li><strong>Notion:</strong> Internal operations and customer support</li>
              <li><strong>Local Device Storage:</strong> Data stored directly on your device</li>
            </ul>
            <p className="text-gray-700">
              We process your data in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Australian Consumer Law</h2>
            <p className="text-gray-700 mb-4">
              Under the Australian Consumer Law, our Licensed Applications come with guarantees that cannot be excluded:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Services provided with due care and skill</li>
              <li>Services fit for the purpose you told us about</li>
              <li>Services provided within a reasonable time</li>
              <li>Services of acceptable quality</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription and Payments</h2>
            <p className="text-gray-700 mb-4">Some features may require payment:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fees are charged in advance on a recurring basis</li>
              <li>All fees are in Australian Dollars (AUD) unless otherwise stated</li>
              <li>Pricing is subject to change with 30 days' notice</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Refunds are provided in accordance with Australian Consumer Law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              Lumora Labs owns all intellectual property rights in:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>The Macro and Micro applications</li>
              <li>Software code, algorithms, and technical innovations</li>
              <li>User interface designs and branding</li>
            </ul>
            <p className="text-gray-700">
              You retain ownership of content you create using our Licensed Applications, subject to our right to use your content to provide the Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You may use our Licensed Applications to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Access and use features as intended and documented</li>
              <li>Create, store, and manage your personal data</li>
              <li>Provide feedback and suggestions for improvement</li>
            </ul>

            <p className="text-gray-700 mb-4">You must not:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use for any unlawful purpose or activity</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Upload viruses, malware, or harmful code</li>
              <li>Harvest or collect user information without consent</li>
              <li>Impersonate others or provide false information</li>
              <li>Use to spam, harass, or abuse others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our Licensed Applications integrate with the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Supabase:</strong> Backend hosting and database services</li>
              <li><strong>PostHog:</strong> Analytics and user insights</li>
              <li><strong>Resend:</strong> Email delivery service</li>
              <li><strong>Notion:</strong> Data management and internal operations</li>
            </ul>
            <p className="text-gray-700">
              Your use of third-party services is subject to their respective terms and policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-4">This EULA is effective until terminated. You may terminate by:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Deleting the Licensed Applications from your devices</li>
              <li>Cancelling your account through the app settings</li>
              <li>Contacting us at lumos@lumoralabs.io</li>
            </ul>

            <p className="text-gray-700 mb-4">We may terminate your license if you:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Violate this EULA</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Fail to pay applicable fees</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Warranty and Liability</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Warranty Disclaimer:</h3>
            <p className="text-gray-700 mb-6">
              Except for consumer guarantees that cannot be excluded under Australian law, the Licensed Applications are provided "as is" without warranties of any kind.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability:</h3>
            <p className="text-gray-700">
              To the extent permitted by law, our total liability is limited to the amount you paid in the 12 months prior to the claim. We exclude liability for indirect, consequential, or special damages, subject to consumer guarantee limitations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to EULA</h2>
            <p className="text-gray-700">
              We may update this EULA by posting the revised version and providing notice. Continued use after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law and Disputes</h2>
            <p className="text-gray-700 mb-4">
              This EULA is governed by the laws of Victoria, Australia. Disputes will be resolved in the courts of Victoria.
            </p>
            <p className="text-gray-700">
              Before formal proceedings, you agree to contact us to attempt informal resolution of disputes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">For questions about this EULA:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="text-gray-700 space-y-2">
                <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                <li><strong>Website:</strong> www.lumoralabs.io</li>
                <li><strong>Address:</strong> Lumora Labs Pty Ltd, Vermont South, VIC, Australia</li>
              </ul>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600 text-center">
              <strong>This EULA is governed by Australian law and designed to comply with the Australian Consumer Law and other applicable regulations. Your rights under consumer guarantee legislation cannot be excluded or limited.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
