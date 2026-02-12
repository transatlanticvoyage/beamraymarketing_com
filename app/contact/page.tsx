'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-beamray-blue focus:outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-beamray-blue focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-beamray-blue focus:outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-beamray-blue focus:outline-none transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="water-damage">Water Damage Restoration</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="mold-removal">Mold Removal</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="general">General Contractors</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-beamray-blue focus:outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message <Send size={20} />
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
                    <Mail className="text-beamray-blue mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">info@beamraymarketing.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-beamray-blue mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-beamray-blue mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-300">Serving businesses nationwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-beamray-blue mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-300">Saturday - Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-300 mb-4">
                  We respond to all inquiries within 24 hours. For urgent matters, 
                  please call us directly.
                </p>
                <div className="flex items-center gap-2 text-beamray-green">
                  <div className="w-2 h-2 bg-beamray-green rounded-full animate-pulse"></div>
                  <span className="text-sm">Available Now</span>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Connect With Kyle</h3>
                <p className="text-gray-300 mb-4">
                  Follow us on social media for marketing tips and industry insights.
                </p>
                <a 
                  href="https://www.facebook.com/kylecampbell123/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beamray-blue hover:text-beamray-green transition-colors"
                >
                  Facebook Profile →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}