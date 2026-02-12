'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Bug, Droplets, Zap, Home, Wrench, Building, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: <Bug size={40} />,
      title: 'Pest Control',
      description: 'Generate high-quality leads for pest control services with targeted local campaigns.',
      features: ['Local SEO', 'Google Ads', 'Facebook Ads', 'Review Management'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Droplets size={40} />,
      title: 'Water Damage Restoration',
      description: 'Emergency lead generation for water damage and restoration services.',
      features: ['24/7 Lead Capture', 'Emergency SEO', 'PPC Campaigns', 'Mobile Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap size={40} />,
      title: 'Electrical Services',
      description: 'Connect with homeowners needing electrical repairs and installations.',
      features: ['Service Area Targeting', 'Lead Qualification', 'Conversion Tracking', 'ROI Reporting'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <Home size={40} />,
      title: 'Mold Removal',
      description: 'Target property owners concerned about mold and air quality issues.',
      features: ['Content Marketing', 'Educational Campaigns', 'Trust Building', 'Lead Nurturing'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Plumbing Services',
      description: 'Generate consistent leads for residential and commercial plumbing services.',
      features: ['Emergency Keywords', 'Local Directories', 'Schema Markup', 'Call Tracking'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Building size={40} />,
      title: 'General Contractors',
      description: 'Attract high-value renovation and construction project leads.',
      features: ['Portfolio Showcasing', 'Project-Based SEO', 'Retargeting', 'Lead Scoring'],
      color: 'from-indigo-500 to-blue-500'
    }
  ]

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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive lead generation solutions tailored for home service businesses. 
              We understand your industry and deliver results that matter.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-8 hover:scale-105 transition-transform"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <ChevronRight size={16} className="text-beamray-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="glass-effect rounded-2xl p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Proven Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your business and goals' },
                { step: '02', title: 'Strategy', desc: 'Creating a customized lead generation plan' },
                { step: '03', title: 'Implementation', desc: 'Launching and optimizing campaigns' },
                { step: '04', title: 'Results', desc: 'Delivering qualified leads consistently' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-beamray-green mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <Link href="/contact" className="btn-primary">
              Get Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}