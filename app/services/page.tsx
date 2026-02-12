'use client'

import Navigation from '@/components/Navigation'
import RainstormDiagram from '@/components/RainstormDiagram'
import { motion } from 'framer-motion'
import { Zap, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Award } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
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
              Our Service Packages
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect lead generation package for your business. 
              Both packages deliver premium results with different payment structures.
            </p>
          </motion.div>

          {/* Rainstorm Package */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <div className="glass-effect rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <Zap className="text-white" size={30} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Rainstorm Package</h2>
                <span className="ml-auto px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                  PREMIUM
                </span>
              </div>

              <p className="text-lg text-gray-300 mb-8">
                Our most comprehensive lead generation solution. Creates a powerful network of 
                backlinks and signals that dominate local search results.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-beamray-blue">What's Included:</h3>
                  <ul className="space-y-3">
                    {[
                      'Complete GBP optimization',
                      'Domain authority building',
                      'Brand signal amplification',
                      'Local citation network',
                      'Review generation system',
                      'Competitor displacement strategy',
                      'Weekly performance reports',
                      '24/7 monitoring & adjustments'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-beamray-green">How It Works:</h3>
                  <RainstormDiagram />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">87%</div>
                    <div className="text-sm text-gray-400">Avg. Lead Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">30-45</div>
                    <div className="text-sm text-gray-400">Days to Results</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">12:1</div>
                    <div className="text-sm text-gray-400">Avg. ROI</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get Started with Rainstorm <ArrowRight />
                </Link>
                <button className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>

          {/* Free Until You Rank Package */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <div className="glass-effect rounded-2xl p-8 md:p-12 border-2 border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Award className="text-white" size={30} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Free Until You Rank Package</h2>
                <span className="ml-auto px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold animate-pulse">
                  NO RISK
                </span>
              </div>

              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-green-400 mb-2">$0 UPFRONT</div>
                  <p className="text-lg text-gray-300">Pay only when you reach top 3 in Google Maps</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-beamray-green">Perfect For:</h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      'New businesses wanting to test results',
                      'Companies with limited marketing budgets',
                      'Businesses skeptical about digital marketing',
                      'Anyone who wants guaranteed results'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="text-yellow-500 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 text-beamray-green">What's Included:</h3>
                  <ul className="space-y-3">
                    {[
                      'Google Business Profile optimization',
                      'Local SEO foundation',
                      'Citation building',
                      'Basic review management',
                      'Monthly ranking reports',
                      'Top 3 guarantee or pay nothing'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-beamray-green">How It Works:</h3>
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'Analysis', desc: 'We analyze your current position and competition' },
                      { step: '2', title: 'Optimization', desc: 'Implement proven ranking strategies' },
                      { step: '3', title: 'Monitor', desc: 'Track progress with weekly updates' },
                      { step: '4', title: 'Rank', desc: 'Reach top 3 in local search results' },
                      { step: '5', title: 'Pay', desc: 'Start paying only after achieving results' }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-yellow-400 mb-1">100% Risk-Free Guarantee</div>
                    <p className="text-sm text-gray-300">
                      If we don't get you ranked in the top 3 within 90 days, you pay absolutely nothing. 
                      No hidden fees, no contracts, no obligations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                  Start Free Until You Rank <ArrowRight />
                </Link>
                <button className="px-6 py-3 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all">
                  See Success Stories
                </button>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Package Comparison</h2>
            <div className="glass-effect rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Rainstorm</th>
                    <th className="px-6 py-4 text-center">Free Until You Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Upfront Cost', '$2,500', '$0'],
                    ['Results Timeline', '30-45 days', '60-90 days'],
                    ['Ranking Guarantee', 'Top 3', 'Top 3'],
                    ['GBP Optimization', '✅ Advanced', '✅ Basic'],
                    ['Backlink Building', '✅ Extensive', '❌'],
                    ['Brand Signaling', '✅ Full Suite', '✅ Limited'],
                    ['Review Management', '✅ Advanced', '✅ Basic'],
                    ['Competitor Analysis', '✅', '❌'],
                    ['Weekly Reports', '✅', '❌ Monthly'],
                    ['Dedicated Account Manager', '✅', '❌']
                  ].map(([feature, rainstorm, free], index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="px-6 py-3 text-gray-300">{feature}</td>
                      <td className="px-6 py-3 text-center text-blue-400">{rainstorm}</td>
                      <td className="px-6 py-3 text-center text-green-400">{free}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center py-16"
          >
            <h2 className="text-3xl font-bold mb-6">Not Sure Which Package is Right for You?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your business goals and find the perfect solution
            </p>
            <Link href="/contact" className="btn-primary text-lg inline-flex items-center gap-2">
              Get Free Consultation <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}