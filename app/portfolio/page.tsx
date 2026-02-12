'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Target } from 'lucide-react'

export default function Portfolio() {
  const caseStudies = [
    {
      title: 'Elite Pest Control',
      industry: 'Pest Control',
      results: {
        leads: '+324%',
        revenue: '+$250K',
        roi: '12:1'
      },
      description: 'Transformed local pest control business into regional leader with comprehensive digital strategy.',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'AquaRestore Pro',
      industry: 'Water Damage',
      results: {
        leads: '+467%',
        revenue: '+$500K',
        roi: '15:1'
      },
      description: 'Emergency lead generation system delivering 24/7 qualified leads for water damage restoration.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'PowerUp Electric',
      industry: 'Electrical Services',
      results: {
        leads: '+238%',
        revenue: '+$180K',
        roi: '9:1'
      },
      description: 'Dominated local search results and tripled service calls within 90 days.',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'MoldGuard Solutions',
      industry: 'Mold Removal',
      results: {
        leads: '+512%',
        revenue: '+$420K',
        roi: '18:1'
      },
      description: 'Built trust through educational content and captured high-value remediation projects.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'FlowMaster Plumbing',
      industry: 'Plumbing',
      results: {
        leads: '+289%',
        revenue: '+$320K',
        roi: '11:1'
      },
      description: 'Emergency plumbing leads on-demand with optimized local campaigns.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'BuildRight Contractors',
      industry: 'General Contracting',
      results: {
        leads: '+195%',
        revenue: '+$750K',
        roi: '8:1'
      },
      description: 'Generated consistent high-value renovation project leads through targeted campaigns.',
      gradient: 'from-indigo-500 to-blue-500'
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
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses. See how we've helped home service 
              companies transform their lead generation and grow their revenue.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="glass-effect rounded-2xl p-8 mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-beamray-green mb-2">$3.2M+</div>
                <p className="text-gray-300">Revenue Generated for Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-beamray-blue mb-2">10,000+</div>
                <p className="text-gray-300">Qualified Leads Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-beamray-purple mb-2">12:1</div>
                <p className="text-gray-300">Average ROI</p>
              </div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <div className={`h-2 bg-gradient-to-r ${study.gradient}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{study.industry}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-1 text-beamray-green font-bold">
                        <TrendingUp size={16} />
                        {study.results.leads}
                      </div>
                      <p className="text-xs text-gray-400">Leads</p>
                    </div>
                    <div>
                      <div className="text-beamray-blue font-bold">{study.results.revenue}</div>
                      <p className="text-xs text-gray-400">Revenue</p>
                    </div>
                    <div>
                      <div className="text-beamray-purple font-bold">{study.results.roi}</div>
                      <p className="text-xs text-gray-400">ROI</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                  
                  <button className="text-beamray-blue hover:text-beamray-green transition-colors text-sm font-medium inline-flex items-center gap-1">
                    View Case Study <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="glass-effect rounded-2xl p-12 mb-16 text-center"
          >
            <div className="text-6xl text-beamray-green mb-6">"</div>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              BeamRay Marketing completely transformed our business. We went from struggling 
              to find customers to having more leads than we can handle. The ROI has been 
              incredible, and Kyle's team truly understands our industry.
            </p>
            <p className="font-bold">John Smith</p>
            <p className="text-sm text-gray-400">CEO, Elite Pest Control</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <a href="/contact" className="btn-primary">
              Start Your Growth Journey
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}