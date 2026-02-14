'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Mail, MessageSquare, Phone, Target } from 'lucide-react'
import Link from 'next/link'

export default function LeadNurturingPost() {
  return (
    <>
      <Navigation />
      
      <article className="min-h-screen pt-24 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-gradient-to-r from-beamray-blue to-beamray-green text-white text-sm rounded-full font-semibold">
                Lead Generation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
              Why 67% of Your Leads Never Convert (And the Simple Fix)
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Kyle Campbell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>January 26, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>9 min read</span>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="glass-effect rounded-xl p-8 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">MIT research shows 78% of buyers go with the company that responds first.</strong> Yet 
                the average service business takes 42 hours to follow up with web leads. We built a system that 
                converted <span className="text-beamray-green font-semibold">43% more leads into appointments</span> using 
                automation and psychology. Here's exactly how.
              </p>
            </div>

            {/* The Statistics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Shocking Lead Response Statistics</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Lead Decay Rate:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong className="text-white">5 minutes:</strong> 100% contact rate</li>
                    <li>• <strong className="text-white">30 minutes:</strong> 62% contact rate</li>
                    <li>• <strong className="text-white">2 hours:</strong> 31% contact rate</li>
                    <li>• <strong className="text-white">24 hours:</strong> 9% contact rate</li>
                    <li>• <strong className="text-white">48 hours:</strong> 3% contact rate</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Conversion Impact:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 7x more likely to qualify leads in first hour</li>
                    <li>• 60% higher close rate with &lt;5 min response</li>
                    <li>• 391% more conversions with immediate follow-up</li>
                    <li>• Average deal size 23% larger with fast response</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The 7-Touch System */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-beamray-blue" />
                The 7-Touch Nurture System
              </h2>

              <div className="space-y-6">
                {/* Immediate Response */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-green">Touch 1: Instant Text (0-60 seconds)</h3>
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <p className="text-gray-300">
                      "Hi [Name]! This is [Your Name] from [Company]. I just got your request about [service]. 
                      I can help you with that! Are you available for a quick 2-minute call now, or would 
                      [specific time today] work better?"
                    </p>
                  </div>
                  <p className="text-sm text-blue-400">Result: 73% response rate within 5 minutes</p>
                </div>

                {/* 5 Minute Call */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-blue">Touch 2: Phone Call (5 minutes)</h3>
                  <p className="text-gray-300">
                    If no text response, call immediately. No answer? Leave this voicemail:
                  </p>
                  <div className="bg-gray-800 rounded-lg p-4 mt-4">
                    <p className="text-gray-300">
                      "Hi [Name], just following up on my text about your [service] request. I have a 
                      few openings this week. Call me back at [number] or just reply to my text. Talk soon!"
                    </p>
                  </div>
                </div>

                {/* Same Day Email */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Touch 3: Email with Value (2 hours)</h3>
                  <p className="text-gray-300 mb-4">Subject: "Quick question about your [service] project"</p>
                  <p className="text-gray-300">
                    Include: Pricing range, timeline, recent similar project photo, and 3 time slots for a call
                  </p>
                </div>

                {/* Day 2-7 Sequence */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Touches 4-7: Strategic Follow-Up</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li><strong className="text-white">Day 2:</strong> "Did you see my estimate?" text</li>
                    <li><strong className="text-white">Day 4:</strong> Case study email of similar project</li>
                    <li><strong className="text-white">Day 7:</strong> "Last check" call with special offer</li>
                    <li><strong className="text-white">Day 14:</strong> Break-up email (reactivates 22% of dead leads)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Automation Stack */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Tech Stack (Total: $97/month)</h2>
              
              <div className="glass-effect rounded-xl p-6">
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <strong className="text-white">Twilio ($20/mo):</strong> Instant SMS responses
                  </li>
                  <li>
                    <strong className="text-white">Calendly ($12/mo):</strong> Automated booking links
                  </li>
                  <li>
                    <strong className="text-white">ActiveCampaign ($49/mo):</strong> Email sequences
                  </li>
                  <li>
                    <strong className="text-white">CallRail ($16/mo):</strong> Track and record calls
                  </li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-6">
                  <p className="text-green-400">
                    <strong>ROI:</strong> Average client sees 8x return in first month
                  </p>
                </div>
              </div>
            </section>

            {/* Real World Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Real Results from Real Businesses</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">HVAC Company - Phoenix</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Lead response time: 48 hrs → 3 minutes</li>
                    <li>• Contact rate: 19% → 71%</li>
                    <li>• Appointment rate: 12% → 34%</li>
                    <li>• Monthly revenue increase: $47,000</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">Plumber - Atlanta</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Lead response time: 24 hrs → 90 seconds</li>
                    <li>• Contact rate: 24% → 68%</li>
                    <li>• Close rate: 8% → 21%</li>
                    <li>• Cost per acquisition: -62%</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5 Lead Nurturing Mistakes Killing Your Conversions</h2>
              
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <ol className="space-y-3 text-gray-300">
                    <li><strong className="text-white">1. One and done:</strong> 80% of sales need 5+ touches</li>
                    <li><strong className="text-white">2. Email only:</strong> SMS has 98% open rate vs 20% for email</li>
                    <li><strong className="text-white">3. No personalization:</strong> Generic messages convert 73% worse</li>
                    <li><strong className="text-white">4. Giving up too soon:</strong> 50% of leads buy within 18 months</li>
                    <li><strong className="text-white">5. Not tracking source:</strong> Can't optimize what you don't measure</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="glass-effect rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">Your Leads Are Gold - Stop Letting Them Rot</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Every lead that goes unanswered for an hour has a 90% chance of going to your competitor. 
                  The automation system above takes 2 hours to set up and will convert 40%+ more of your 
                  existing leads without spending another dime on advertising.
                </p>

                <div className="bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 rounded-xl p-6">
                  <p className="text-xl font-semibold text-white mb-4">
                    Want Your Lead Nurturing System Built For You?
                  </p>
                  <p className="text-gray-300 mb-6">
                    We'll set up your entire automated follow-up system in 48 hours. 
                    Most clients see 30%+ more appointments in the first week.
                  </p>
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get Your Nurture System Built →
                  </Link>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </article>
    </>
  )
}