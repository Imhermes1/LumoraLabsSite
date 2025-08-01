'use client'

import { useState } from 'react'
import { X, Mail, MessageSquare, User, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setErrorMessage('Please fill in all fields')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        // Auto-close after 3 seconds
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 3000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl">
        <div className="bg-gray-900/95 backdrop-blur-md rounded-3xl border border-purple-500/30 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-purple-500/30">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-white/80">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 rounded-full p-3 text-white/70 hover:text-white transition-all duration-300 flex-shrink-0"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-positive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-positive" size={32} />
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  Message Sent Successfully! 🎉
                </h3>
                <p className="text-white/70">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full glass rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="glass rounded-xl p-4 border border-red-500/30">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="text-red-400" size={20} />
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-strong rounded-xl px-6 py-4 text-white font-semibold text-lg hover:bg-lumora-purple/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 