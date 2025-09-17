'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfUse() {
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
              Terms of Use
            </h1>
              
              <div className="text-white/70 mb-8 p-4 glass rounded-xl">
                <p className="font-semibold text-white mb-2">Effective Date: 1 August 2025</p>
                <p>Last Updated: As stated above</p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-white/80 mb-4">
                  By accessing and using the Lumora Labs website and services, including but not limited to our beta signup forms, 
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-white/80 mb-4">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p className="text-white/80 mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Lumora Labs's 
                  website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on Lumora Labs's website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                <p className="text-white/80 mb-4">
                  The materials on Lumora Labs's website are provided on an 'as is' basis. Lumora Labs makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
                <p className="text-white/80 mb-4">
                  In no event shall Lumora Labs or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on Lumora Labs's website, even if Lumora Labs or a Lumora Labs authorized representative 
                  has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
                <p className="text-white/80 mb-4">
                  The materials appearing on Lumora Labs's website could include technical, typographical, or photographic errors. 
                  Lumora Labs does not warrant that any of the materials on its website are accurate, complete or current. 
                  Lumora Labs may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
                <p className="text-white/80 mb-4">
                  Lumora Labs has not reviewed all of the sites linked to its website and is not responsible for the contents 
                  of any such linked site. The inclusion of any link does not imply endorsement by Lumora Labs of the site. 
                  Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
                <p className="text-white/80 mb-4">
                  Lumora Labs may revise these terms of use for its website at any time without notice. By using this website 
                  you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <p className="text-white/80 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of Australia and you 
                  irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Beta Program Terms</h2>
                <p className="text-white/80 mb-4">
                  By participating in our beta program, you acknowledge that:
                </p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>Beta software may contain bugs and may not function as intended</li>
                  <li>We may collect feedback and usage data to improve our services</li>
                  <li>Beta access is provided at our discretion and may be revoked at any time</li>
                  <li>You agree to provide honest feedback about your experience</li>
                  <li>Beta participants may receive early access to features but should not rely on them for critical tasks</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <div className="glass rounded-xl p-4">
                  <p className="text-white/80 mb-2">
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <ul className="text-white/80 space-y-1">
                    <li><strong>Email:</strong> lumos@lumoralabs.io</li>
                    <li><strong>Website:</strong> www.lumoralabs.io</li>
                    <li><strong>Address:</strong> Vermont South, VIC, Australia</li>
                  </ul>
                </div>
              </section>

              <div className="mt-12 p-6 glass rounded-xl border border-white/10">
                <p className="text-white/60 text-sm text-center">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
