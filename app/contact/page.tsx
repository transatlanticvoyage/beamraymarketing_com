'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setSubmitStatus('idle')
      }, 3000)
    }, 1000)
  }

  return (
    <>
      <Navigation />
      
      <section className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you 
              generate more leads and grow your revenue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {/* Status Messages */}
              <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
                {submitStatus === 'loading' && 'Submitting your form...'}
                {submitStatus === 'success' && 'Your message has been sent successfully!'}
                {submitStatus === 'error' && 'There was an error sending your message. Please try again.'}
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6" role="alert">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-beamray-blue focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={submitStatus === 'loading'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-beamray-blue focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={submitStatus === 'loading'}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    aria-describedby="phone-format"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-beamray-blue focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled={submitStatus === 'loading'}
                  />
                  <span id="phone-format" className="text-xs text-slate-500 mt-1">Format: (555) 123-4567</span>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-beamray-blue focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    disabled={submitStatus === 'loading'}
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO</option>
                    <option value="website-design">Website Design</option>
                    <option value="paid-ads">Paid Ads</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    aria-describedby="message-hint"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 focus:border-beamray-blue focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    disabled={submitStatus === 'loading'}
                  ></textarea>
                  <span id="message-hint" className="text-xs text-slate-500 mt-1">Tell us about your project and goals</span>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={submitStatus === 'loading'}
                  aria-busy={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" aria-hidden="true"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="text-beamray-blue mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate-600">info@beamraymarketing.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-beamray-blue mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-slate-600">Serving businesses nationwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-beamray-blue mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-slate-600">Saturday - Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Connect With Kyle</h3>
                <p className="text-slate-600 mb-4">
                  Follow us on social media for marketing tips and industry insights.
                </p>
                <a 
                  href="https://www.facebook.com/kylecampbell123/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beamray-blue hover:text-beamray-green transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white rounded px-2 py-1"
                  aria-label="Visit Kyle Campbell's Facebook Profile (opens in new tab)"
                >
                  Facebook Profile <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}