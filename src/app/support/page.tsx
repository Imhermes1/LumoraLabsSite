'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, MessageCircle, HelpCircle, Shield, Bug, Star, Clock, Phone } from 'lucide-react'

export default function Support() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pb-24 pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-[-28rem] -z-10 flex justify-center blur-3xl">
        <div className="aspect-[6/3] w-[70rem] bg-gradient-to-br from-lumora-pink/20 via-lumora-purple/20 to-transparent opacity-70" />
      </div>
      <div className="absolute inset-y-0 right-[-16rem] top-16 -z-10 hidden lg:block">
        <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-lumora-purple/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="mt-10 glass-strong rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Customer Support
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Get Help with Macro and MooDo Applications
              </p>
              <p className="text-lg text-white/70 mt-4">
                Welcome to Lumora Labs customer support. We're here to help you get the most out of your Macro and MooDo applications.
              </p>
            </div>

            {/* Quick Support Options */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Support Options</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-lumora-pink/20 rounded-xl flex items-center justify-center">
                    <HelpCircle className="text-lumora-pink" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Search Help Center</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Find instant answers to common questions in our comprehensive knowledge base.
                  </p>
                  <div className="text-lumora-pink text-sm font-medium">
                    Popular Topics →
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-lumora-purple/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-lumora-purple" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Live Chat Support</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Get real-time assistance from our support team during business hours.
                  </p>
                  <div className="text-lumora-purple text-sm font-medium">
                    Available 9 AM - 5 PM AEST →
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-deep-purple/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-deep-purple" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-white/70 text-sm mb-4">
                    For detailed questions or when you need to share screenshots/files.
                  </p>
                  <div className="text-deep-purple text-sm font-medium">
                    Response within 24 hours →
                  </div>
                </div>
              </div>
            </section>

            {/* Support Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Support Categories</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-lumora-pink/20 rounded-lg flex items-center justify-center mr-3">
                      <Star className="text-lumora-pink" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Getting Started</h3>
                  </div>
                  <p className="text-white/70 mb-4">New to Macro or MooDo? We'll help you get up and running quickly.</p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Account setup and verification</li>
                    <li>• Initial app configuration</li>
                    <li>• Basic feature orientation</li>
                    <li>• Data import and setup</li>
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-lumora-purple/20 rounded-lg flex items-center justify-center mr-3">
                      <Bug className="text-lumora-purple" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Technical Support</h3>
                  </div>
                  <p className="text-white/70 mb-4">Experiencing technical issues? Our technical team can help resolve problems.</p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• App crashes or freezing</li>
                    <li>• Sync problems with iCloud or Firebase</li>
                    <li>• Login and authentication issues</li>
                    <li>• Performance and speed problems</li>
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-deep-purple/20 rounded-lg flex items-center justify-center mr-3">
                      <Clock className="text-deep-purple" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Billing & Account</h3>
                  </div>
                  <p className="text-white/70 mb-4">Questions about your account or subscription? We handle all billing inquiries.</p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Subscription management and changes</li>
                    <li>• Payment method updates</li>
                    <li>• Refund requests</li>
                    <li>• Account deletion requests</li>
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-lumora-pink/20 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="text-lumora-pink" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Privacy & Security</h3>
                  </div>
                  <p className="text-white/70 mb-4">Concerned about your data privacy or security? We take these matters seriously.</p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Understanding what data we collect</li>
                    <li>• Managing your privacy settings</li>
                    <li>• Data deletion requests</li>
                    <li>• Reporting security vulnerabilities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Premium Support */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Premium Support</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-lumora-pink to-lumora-purple rounded-lg flex items-center justify-center mr-3">
                      <Star className="text-white" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Priority Support</h3>
                  </div>
                  <p className="text-white/70 mb-4">Available for paid subscribers of Macro and MooDo applications.</p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Faster response times (within 4 hours)</li>
                    <li>• Direct access to senior support staff</li>
                    <li>• Phone support for critical issues</li>
                    <li>• Beta program access and early feature previews</li>
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-lumora-purple to-deep-purple rounded-lg flex items-center justify-center mr-3">
                      <Phone className="text-white" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Enterprise Support</h3>
                  </div>
                  <p className="text-white/70 mb-4">For business and enterprise customers with special requirements.</p>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Dedicated support manager</li>
                    <li>• Custom service level agreements (SLAs)</li>
                    <li>• On-site training and implementation support</li>
                    <li>• Compliance and legal documentation support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-4">Business Details</h3>
                  <ul className="text-white/70 space-y-2">
                    <li><strong>Company:</strong> Lumora Labs Pty Ltd</li>
                    <li><strong>Address:</strong> Vermont South, VIC, Australia</li>
                    <li><strong>Website:</strong> www.lumoralabs.io</li>
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-4">Support Channels</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-white font-medium">General Support:</p>
                      <p className="text-lumora-pink">lumos@lumoralabs.io</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Business Hours:</p>
                      <p className="text-white/70">Monday to Friday: 9:00 AM - 5:00 PM AEST</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">Emergency Support:</p>
                      <p className="text-lumora-pink">Mark emails "URGENT SECURITY"</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Response Time Commitments */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Response Time Commitments</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass rounded-2xl p-6 text-center">
                  <h3 className="text-white font-semibold mb-3">Standard Support</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Live Chat: 2-5 minutes</li>
                    <li>• Email: Within 24 hours</li>
                    <li>• Complex Issues: 2-3 business days</li>
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6 text-center">
                  <h3 className="text-white font-semibold mb-3">Priority Support</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Live Chat: Immediate</li>
                    <li>• Email: Within 4 hours</li>
                    <li>• Phone: Available for urgent issues</li>
                  </ul>
                </div>

                <div className="glass rounded-2xl p-6 text-center">
                  <h3 className="text-white font-semibold mb-3">Emergency Support</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Response: Within 2 hours, 24/7</li>
                    <li>• Contact: "URGENT SECURITY"</li>
                    <li>• Escalation: Automatic to senior staff</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Australian Consumer Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Australian Consumer Law and Your Rights</h2>
              
              <div className="glass rounded-2xl p-6">
                <p className="text-white/80 mb-4">
                  As an Australian business, we comply with the Australian Consumer Law (ACL). You have certain rights that cannot be excluded:
                </p>
                
                <h3 className="text-white font-semibold text-lg mb-3">Consumer Guarantees</h3>
                <p className="text-white/80 mb-4">Our services come with guarantees that:</p>
                <ul className="text-white/70 space-y-2 mb-6">
                  <li>• Services are provided with due care and skill</li>
                  <li>• Services are fit for the purpose you told us about</li>
                  <li>• Services are provided within a reasonable time</li>
                  <li>• Services are of acceptable quality</li>
                </ul>

                <h3 className="text-white font-semibold text-lg mb-3">Making a Complaint</h3>
                <p className="text-white/80 mb-4">If you're not satisfied with our response:</p>
                <ol className="text-white/70 space-y-2">
                  <li><strong>Internal escalation:</strong> Ask to speak with a supervisor or manager</li>
                  <li><strong>Formal complaint:</strong> Submit a written complaint to lumos@lumoralabs.io (mark subject "FORMAL COMPLAINT")</li>
                  <li><strong>External resolution:</strong> Contact the Australian Competition and Consumer Commission (ACCC) or your state/territory consumer protection agency</li>
                </ol>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h3>
                <p className="text-white/70 mb-6">
                  Start a live chat or email us for quick assistance with your Macro and MooDo applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:lumos@lumoralabs.io"
                    className="bg-gradient-to-r from-lumora-pink to-lumora-purple rounded-full px-8 py-3 text-white font-semibold hover:shadow-lg hover:shadow-lumora-purple/25 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <Mail size={20} className="mr-2" />
                    Email Support
                  </a>
                  <button className="border border-black/60 rounded-full px-8 py-3 text-white font-semibold hover:border-black hover:bg-slate-900/80 transition-all duration-300">
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-black/40 pt-8 mt-12">
              <p className="text-white/60 text-center">
                <strong>This support page complies with Australian Consumer Law and outlines your rights as a consumer. We're committed to providing excellent service while respecting your privacy and data protection rights.</strong>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
} 
