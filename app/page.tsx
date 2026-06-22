'use client'
// Test comment for Vercel deployment - Feb 14, 2024

import Navigation from '@/components/Navigation'
import KeywordDataTabs from '@/components/KeywordDataTabs'
import KyleCampbellSection from '@/components/KyleCampbellSection'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Target, Zap, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <main id="main-content" role="main">
      <section className="min-h-screen flex items-center justify-center px-4 pt-16" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6"
            id="hero-heading"
          >
            Generate <span className="gradient-text">Qualified Leads</span>
            <br />for Your Local Business
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
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
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2" aria-label="Get started with lead generation services">
              Get Started <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary" aria-label="Learn more about our services">
              Learn More About Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Keyword Data Tables */}
      <KeywordDataTabs />

      {/* Features Section */}
      <section className="py-20 px-4" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
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
                role="article"
              >
                <div className="text-beamray-blue mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">SEO Plans</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose from one of these SEO packages for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">

            {/* Domination — featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border-2 border-beamray-blue bg-white shadow-xl p-8 flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-beamray-blue to-beamray-green text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">Most Popular</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-2 mb-1">Organic &amp; Local SEO</h3>
              <p className="text-beamray-blue font-semibold text-sm mb-4">Domination</p>
              <div className="mb-6">
                <span className="text-5xl font-black gradient-text">$2,999</span>
                <span className="text-slate-500 text-sm ml-1">/ month</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {['On-Page SEO', 'Off-Page Domain & Page Growth Outreach', 'SEO Blog Content (4,000 words total)', 'Google & Social PPC Promotions for Blog Content ($400)'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
                    <CheckCircle size={16} className="text-beamray-green mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-center text-sm">Start Today!</Link>
            </motion.div>

            {/* Competitive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md p-8 flex flex-col"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-1">Organic &amp; Local SEO</h3>
              <p className="text-beamray-purple font-semibold text-sm mb-4">Competitive</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-slate-900">$1,999</span>
                <span className="text-slate-500 text-sm ml-1">/ month</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {['On-Page SEO', 'Off-Page Domain & Page Growth Outreach', 'SEO Blog Content (2,000 words total)', 'Google & Social PPC Promotions for Blog Content ($200)'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
                    <CheckCircle size={16} className="text-beamray-green mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary text-center text-sm">Start Today!</Link>
            </motion.div>

            {/* Starter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-md p-8 flex flex-col"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-1">Organic &amp; Local SEO</h3>
              <p className="text-beamray-green font-semibold text-sm mb-4">Starter</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-slate-900">$999</span>
                <span className="text-slate-500 text-sm ml-1">/ month</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {['On-Page SEO', 'Off-Page Domain & Page Growth Outreach', 'SEO Blog Content (1,000 words total)'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
                    <CheckCircle size={16} className="text-beamray-green mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary text-center text-sm">Start Today!</Link>
            </motion.div>

            {/* Paid Ads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-md p-8 flex flex-col"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-1">Paid Ads Management</h3>
              <p className="text-slate-500 text-sm mb-4">&nbsp;</p>
              <div className="mb-2">
                <span className="text-5xl font-black text-slate-900">$500</span>
                <span className="text-slate-500 text-sm ml-1">/ month</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">per campaign + 10% of ad budget</p>
              <ul className="space-y-3 flex-1 mb-8">
                {['Maximize Profitability', 'Increase Leads and Sales', 'No Long-Term Contracts'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
                    <CheckCircle size={16} className="text-beamray-blue mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary text-center text-sm">Start Today!</Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Kyle Campbell Section */}
      <KyleCampbellSection />

      {/* CTA Section */}
      <section className="py-20 px-4" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center glass-effect rounded-2xl p-12">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join hundreds of successful businesses that trust BeamRay Marketing
          </p>
          <Link href="/contact" className="btn-primary text-lg inline-flex items-center gap-2" aria-label="Start your marketing campaign today">
            Start Your Campaign <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      </main>
    </>
  )
}