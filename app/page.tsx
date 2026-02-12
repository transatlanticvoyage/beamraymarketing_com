'use client'

import Navigation from '@/components/Navigation'
import KeywordDataTabs from '@/components/KeywordDataTabs'
import YouTubeVideo from '@/components/YouTubeVideo'
import KyleCampbellSection from '@/components/KyleCampbellSection'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Target, Zap, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Generate <span className="gradient-text">Qualified Leads</span>
            <br />for Your Local Business
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Specializing in lead generation for home service businesses including pest control, 
            water damage restoration, mold removal, electrical services, and more.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Started <ArrowRight />
            </Link>
            <Link href="/services" className="btn-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Keyword Data Tables */}
      <KeywordDataTabs />

      {/* YouTube Video */}
      <YouTubeVideo />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Why Choose BeamRay Marketing?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp size={40} />, title: 'Data-Driven Results', desc: 'Advanced analytics and tracking to optimize your campaigns' },
              { icon: <Users size={40} />, title: 'Targeted Audiences', desc: 'Reach the right customers at the right time' },
              { icon: <Target size={40} />, title: 'Local SEO Experts', desc: 'Dominate your local market with proven strategies' },
              { icon: <Zap size={40} />, title: 'Fast Implementation', desc: 'Get started within 48 hours' },
              { icon: <CheckCircle size={40} />, title: 'Proven Track Record', desc: '500+ successful campaigns delivered' },
              { icon: <Star size={40} />, title: 'Premium Support', desc: '24/7 dedicated support team' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="text-beamray-blue mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kyle Campbell Section */}
      <KyleCampbellSection />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass-effect rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful businesses that trust BeamRay Marketing
          </p>
          <Link href="/contact" className="btn-primary text-lg inline-flex items-center gap-2">
            Start Your Campaign <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}