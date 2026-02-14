'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Star, MessageSquare, TrendingUp, Award } from 'lucide-react'
import Link from 'next/link'

export default function ReviewManagementPost() {
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
                Reputation Management
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
              How to Get 5-Star Reviews on Autopilot (Without Being Sleazy)
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Kyle Campbell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>January 31, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>7 min read</span>
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
                <strong className="text-white">Our HVAC client went from 3.9 to 4.8 stars</strong> and doubled 
                their monthly review count in 60 days. No incentives, no rule-breaking, just psychology and 
                automation. Here's the exact system that's generated 
                <span className="text-beamray-green font-semibold"> 2,847 reviews across 43 businesses</span>.
              </p>
            </div>

            {/* The Problem */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Traditional Review Requests Fail</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">What Doesn't Work:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• "Please leave us a review" (too vague)</li>
                    <li>• Asking months later (they forgot)</li>
                    <li>• Email-only requests (12% open rate)</li>
                    <li>• Making it complicated (multiple steps)</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">What Actually Works:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• SMS at perfect timing (87% open rate)</li>
                    <li>• One-click direct links</li>
                    <li>• Personal touch automation</li>
                    <li>• Strategic follow-up sequence</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The System */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Star className="text-yellow-400" />
                The 4-Touch Review System
              </h2>

              <div className="space-y-6">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-blue">Touch 1: The Setup (Day of Service)</h3>
                  <p className="text-gray-300 mb-4">
                    Before leaving: "I'll send you a quick text in a few days to make sure everything's still working perfectly. 
                    Is [phone number] the best number?"
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-sm text-blue-400">
                      <strong>Psychology:</strong> Creates expectation and gets permission for follow-up
                    </p>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-green">Touch 2: The Check-In (Day 3)</h3>
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <p className="text-white font-semibold mb-2">SMS Template:</p>
                    <p className="text-gray-300">
                      "Hi [Name]! It's [Tech Name] from [Company]. Just checking - is your [service] 
                      still working great? Let me know if you need anything! 👍"
                    </p>
                  </div>
                  <p className="text-gray-300">
                    When they respond positively, immediately follow with the review request.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Touch 3: The Ask (Immediate)</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <p className="text-gray-300">
                      "Awesome! Hey, would you mind sharing that in a quick Google review? It really helps our 
                      small business: [DIRECT LINK]"
                    </p>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Touch 4: The Helper (If No Response)</h3>
                  <p className="text-gray-300">
                    7 days later: "No worries if you're too busy! If you have 30 seconds, even just clicking 
                    the stars helps: [LINK]. Thanks either way! 😊"
                  </p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="text-green-500" />
                Real Results from 43 Businesses
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-beamray-green mb-2">41%</div>
                  <p className="text-gray-400">Review Conversion Rate</p>
                  <p className="text-sm text-gray-500 mt-2">(Industry avg: 13%)</p>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-beamray-blue mb-2">4.7</div>
                  <p className="text-gray-400">Average Star Rating</p>
                  <p className="text-sm text-gray-500 mt-2">(Up from 4.1)</p>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">6.3x</div>
                  <p className="text-gray-400">Monthly Review Increase</p>
                  <p className="text-sm text-gray-500 mt-2">(3 → 19 per month)</p>
                </div>
              </div>
            </section>

            {/* Automation Tools */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Automation Setup (15 Minutes)</h2>
              
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Recommended Tools:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• <strong className="text-white">Podium:</strong> Best for service businesses ($289/mo)</li>
                  <li>• <strong className="text-white">BirdEye:</strong> Most features ($299/mo)</li>
                  <li>• <strong className="text-white">Grade.us:</strong> Budget option ($89/mo)</li>
                  <li>• <strong className="text-white">DIY Option:</strong> Zapier + Twilio ($25/mo)</li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-6">
                  <p className="text-green-400">
                    <strong>Pro Tip:</strong> Set up job completion triggers in your CRM to automate the entire sequence
                  </p>
                </div>
              </div>
            </section>

            {/* Handling Negative Reviews */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Turning Negative Reviews into Wins</h2>
              
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">The HEART Response Framework:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><strong className="text-white">H</strong>umble: "We're sorry we fell short..."</li>
                  <li><strong className="text-white">E</strong>mpathize: "We understand how frustrating..."</li>
                  <li><strong className="text-white">A</strong>ction: "We've already taken steps to..."</li>
                  <li><strong className="text-white">R</strong>esolution: "Please call me directly at..."</li>
                  <li><strong className="text-white">T</strong>hank: "Thank you for the feedback to improve..."</li>
                </ul>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
                  <p className="text-yellow-400">
                    <strong>Fact:</strong> 45% of consumers are more likely to visit a business that responds to negative reviews
                  </p>
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
                <h2 className="text-3xl font-bold mb-6">Start Getting Reviews Today</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Every day without a review system, you're losing customers to competitors with better ratings. 
                  This system takes 15 minutes to set up and runs forever on autopilot.
                </p>

                <div className="bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 rounded-xl p-6">
                  <p className="text-xl font-semibold text-white mb-4">
                    Want Us to Set Up Your Review System?
                  </p>
                  <p className="text-gray-300 mb-6">
                    We'll implement this exact system for your business and manage it for you. 
                    Most clients see 10+ new reviews in the first 30 days.
                  </p>
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get Your Review System Started →
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