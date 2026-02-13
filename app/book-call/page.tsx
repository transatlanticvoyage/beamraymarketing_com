'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Script from 'next/script'

export default function BookCall() {
  return (
    <>
      {/* Calendly Script */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive" 
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
        {/* Minimal Header - No Navigation */}
        <header className="py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-2xl font-black gradient-text">BeamRay Marketing</div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">
                See Why Competitors Outrank You on Google
              </h1>
              <p className="text-xl md:text-2xl text-beamray-green font-semibold">
                Free 15-Minute Strategy Call
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-8 mb-8 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Users className="text-beamray-blue" size={20} />
                <span>500+ Businesses Helped</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-beamray-green" size={20} />
                <span>87% Avg Lead Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="text-yellow-500" size={20} />
                <span>Results in 30-45 Days</span>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-effect rounded-xl p-6 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                In This Quick Call, You'll Discover:
              </h2>
              <ul className="space-y-3">
                {[
                  'Why your Google Business Profile isn\'t converting visitors into calls',
                  'The exact keywords your competitors are ranking for (and you\'re not)',
                  '3 quick wins you can implement this week to increase visibility',
                  'Hidden opportunities in your local market worth thousands in revenue'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Calendar Embed Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-1 mb-8"
            >
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/your-link-here?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </motion.div>

            {/* Pre-qualification Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mb-8"
            >
              <div className="glass-effect rounded-xl p-6 inline-block">
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Who This Call Is For:</strong>
                </p>
                <p className="text-gray-400 text-sm max-w-2xl">
                  This call is for established local service businesses (pest control, plumbing, HVAC, restoration, contractors) 
                  looking to increase inbound calls from Google. Not suitable for DIY marketers or brand new startups.
                </p>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-gray-400 mb-4">Trusted by local service businesses nationwide</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'].map((stars, index) => (
                  <div key={index} className="glass-effect rounded-lg px-4 py-2">
                    <div className="text-yellow-400">{stars}</div>
                    <p className="text-xs text-gray-500">Verified Client</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="py-8 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              © 2024 BeamRay Marketing • Results-Driven Lead Generation
            </p>
            <p className="text-gray-600 text-xs mt-2">
              No spam, no high-pressure sales. Just honest advice about growing your business.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}