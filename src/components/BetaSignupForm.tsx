'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  device: string
  experience: string
  expectations: string
  agreeToTerms: boolean
}

interface BetaSignupFormProps {
  onSuccess?: () => void
}

export default function BetaSignupForm({ onSuccess }: BetaSignupFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    device: '',
    experience: '',
    expectations: '',
    agreeToTerms: false,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Validate required fields
    if (!formData.name || !formData.email) {
      setSubmitStatus('error')
      setErrorMessage('Name and email are required')
      setIsSubmitting(false)
      return
    }

    if (!formData.agreeToTerms) {
      setSubmitStatus('error')
      setErrorMessage('You must agree to our Terms of Use and Privacy Policy')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/notion', {
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
          phone: '',
          device: '',
          experience: '',
          expectations: '',
          agreeToTerms: false,
        })
        if (onSuccess) {
          onSuccess()
        }
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-positive/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-positive" size={32} />
        </div>
        <h3 className="text-white font-semibold text-xl mb-2">
          Welcome to the Beta! 🎉
        </h3>
        <p className="text-white/70 text-sm mb-6">
          Thank you for joining our exclusive beta program. We'll be in touch soon with your early access details.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="glass-strong rounded-full px-6 py-3 text-white font-semibold hover:bg-lumora-purple/30 transition-all duration-300"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Phone and Device */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
            placeholder="+61 400 000 000"
          />
        </div>
        
        <div>
          <label htmlFor="device" className="block text-white/80 text-sm font-medium mb-2">
            Primary Device
          </label>
          <select
            id="device"
            name="device"
            value={formData.device}
            onChange={handleInputChange}
            className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300"
          >
            <option value="">Select your device</option>
            <option value="iPhone">iPhone</option>
            <option value="iPad">iPad</option>
            <option value="Android Phone">Android Phone</option>
            <option value="Android Tablet">Android Tablet</option>
            <option value="Mac">Mac</option>
            <option value="Windows">Windows</option>
            <option value="Multiple">Multiple devices</option>
          </select>
        </div>
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-white/80 text-sm font-medium mb-2">
          What's your experience with productivity apps?
        </label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          rows={3}
          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300 resize-none"
          placeholder="Tell us about your experience with task management, nutrition tracking, or similar apps..."
        />
      </div>

      {/* Expectations */}
      <div>
        <label htmlFor="expectations" className="block text-white/80 text-sm font-medium mb-2">
          What are you hoping to achieve with our apps?
        </label>
        <textarea
          id="expectations"
          name="expectations"
          value={formData.expectations}
          onChange={handleInputChange}
          rows={3}
          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lumora-purple/50 transition-all duration-300 resize-none"
          placeholder="What problems are you trying to solve? What would success look like for you?"
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

      {/* Terms Agreement */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          className="mt-1 w-4 h-4 text-lumora-purple bg-white/10 border-white/30 rounded focus:ring-lumora-purple/50 focus:ring-2"
        />
        <label htmlFor="agreeToTerms" className="text-white/70 text-sm">
          I agree to the{' '}
          <a href="/terms-of-use" className="text-lumora-pink hover:underline" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </a>{' '}
          and{' '}
          <a href="/privacy-policy" className="text-lumora-pink hover:underline" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full glass-strong rounded-xl px-6 py-4 text-white font-semibold text-lg hover:bg-lumora-purple/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Join Beta Program</span>
            <span>✨</span>
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <p className="text-white/50 text-xs text-center">
        By submitting this form, you agree to receive updates about our beta program and accept our{' '}
        <a href="/terms-of-use" className="text-lumora-pink hover:underline" target="_blank" rel="noopener noreferrer">
          Terms of Use
        </a>{' '}
        and{' '}
        <a href="/privacy-policy" className="text-lumora-pink hover:underline" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>. 
        We respect your privacy and will never share your information with third parties.
      </p>
    </form>
  )
} 