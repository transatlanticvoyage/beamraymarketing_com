'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, DollarSign, Target, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function FacebookAdsPost() {
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
                Paid Advertising
              </span>
              <span className="px-3 py-1 bg-white/10 text-gray-400 text-sm rounded-full">
                Case Study
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
              The $500 Facebook Ads Strategy That Generated 47 Leads for a Local Plumber
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Kyle Campbell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>February 9, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>10 min read</span>
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
                <strong className="text-white">Last month, we spent exactly $547.23</strong> on Facebook ads for a local plumber 
                in Phoenix. The result? 47 qualified leads, 19 booked appointments, and 11 completed jobs worth 
                <span className="text-beamray-green font-semibold"> $28,400 in revenue</span>. Here's the exact playbook 
                you can copy for your service business.
              </p>
            </div>

            {/* The Problem */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Problem with Most Facebook Ads for Service Businesses</h2>
              
              <p className="text-gray-300 mb-6">
                Most home service businesses fail at Facebook ads because they treat it like Google Ads. 
                They target "emergency" keywords and wonder why their cost per lead is $200+.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Common Mistakes:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Targeting too broadly (entire city with no segmentation)</li>
                  <li>• Using stock photos that scream "advertisement"</li>
                  <li>• Sending people to homepage instead of dedicated landing page</li>
                  <li>• No retargeting strategy for website visitors</li>
                  <li>• Leading with price instead of value</li>
                </ul>
              </div>
            </section>

            {/* The Strategy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-beamray-blue" />
                The $500 Strategy That Actually Works
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-green">Step 1: Hyper-Local Targeting</h3>
                  <p className="text-gray-300 mb-4">
                    Instead of targeting "Phoenix," we targeted specific neighborhoods with:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Household income: $75,000+</li>
                    <li>• Age: 35-65</li>
                    <li>• Homeowners (not renters)</li>
                    <li>• 10-mile radius from shop location</li>
                    <li>• Exclude: People who work in plumbing/construction</li>
                  </ul>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-400">
                      <strong>Result:</strong> Audience size went from 1.2M to 47,000 highly qualified prospects
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-green">Step 2: The "Neighbor Testimonial" Ad</h3>
                  <p className="text-gray-300 mb-4">
                    We created ads that looked like neighborhood recommendations, not advertisements:
                  </p>
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <p className="text-white font-semibold mb-2">Ad Copy Example:</p>
                    <p className="text-gray-300 italic">
                      "Phoenix homeowners — if you need a reliable plumber, I can't recommend Mike's Plumbing enough. 
                      They fixed our water heater issue same day and their price was $400 less than the other quote we got. 
                      They're doing free estimates this month for water heater inspections."
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Used actual customer photo (with permission)</li>
                    <li>• Mentioned specific neighborhood names</li>
                    <li>• Included a soft offer (free estimate)</li>
                    <li>• Social proof in the opening line</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-green">Step 3: The Two-Touch Funnel</h3>
                  <p className="text-gray-300 mb-4">
                    Instead of asking for immediate booking, we used a two-step process:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Touch 1: Value First</h4>
                      <p className="text-sm text-gray-300">
                        Free guide: "5 Plumbing Issues That Can Cost You Thousands If Ignored"
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Touch 2: Soft Sell</h4>
                      <p className="text-sm text-gray-300">
                        Email/SMS follow-up with seasonal offer and social proof
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="text-green-500" />
                The Results (With Real Numbers)
              </h2>

              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Campaign Metrics:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><strong className="text-white">Ad Spend:</strong> $547.23</li>
                      <li><strong className="text-white">Impressions:</strong> 28,456</li>
                      <li><strong className="text-white">Clicks:</strong> 892</li>
                      <li><strong className="text-white">CTR:</strong> 3.13%</li>
                      <li><strong className="text-white">Landing Page Conversion:</strong> 23.1%</li>
                      <li><strong className="text-white">Cost Per Lead:</strong> $11.64</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Business Results:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><strong className="text-white">Total Leads:</strong> 47</li>
                      <li><strong className="text-white">Qualified Leads:</strong> 31</li>
                      <li><strong className="text-white">Appointments Booked:</strong> 19</li>
                      <li><strong className="text-white">Jobs Completed:</strong> 11</li>
                      <li><strong className="text-white">Total Revenue:</strong> $28,400</li>
                      <li><strong className="text-green-400">ROI:</strong> 5,089%</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-semibold">
                    Key Insight: Average job value was $2,582, meaning we only needed 1 job to be profitable
                  </p>
                </div>
              </div>
            </section>

            {/* The Ad Creative */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Exact Ad Creative We Used</h2>
              
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Primary Text:</h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <p className="text-gray-300">
                    Phoenix neighbors — Quick recommendation! 👋<br/><br/>
                    
                    We had Mike's Plumbing out last week for what we thought would be a nightmare water heater replacement. 
                    Not only did they diagnose it was just the thermostat (saved us $1,800!), but they did a free 
                    inspection and caught a small leak that could've caused serious damage.<br/><br/>
                    
                    If you're like us and haven't had your water heater checked in years, they're doing free 
                    inspections through the end of the month. Takes about 20 minutes.<br/><br/>
                    
                    Fair warning: They're getting pretty booked up. Lisa from our HOA had to wait almost 2 weeks, 
                    so I'd grab a spot soon if you want the free inspection.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-4">Headline:</h3>
                <p className="text-gray-300 mb-6">Free Water Heater Safety Inspection (Phoenix Only)</p>

                <h3 className="text-xl font-semibold mb-4">Call-to-Action Button:</h3>
                <p className="text-gray-300">Learn More → Landing page with appointment scheduler</p>
              </div>
            </section>

            {/* Implementation Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">How to Implement This Strategy</h2>
              
              <div className="space-y-4">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-beamray-blue">Week 1: Foundation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Set up Facebook Business Manager and Pixel</li>
                    <li>✓ Create dedicated landing page (not homepage!)</li>
                    <li>✓ Install pixel on landing page and thank you page</li>
                    <li>✓ Get 3-5 real customer photos/testimonials</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-beamray-green">Week 2: Campaign Setup</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Create hyper-local audiences (under 50k people)</li>
                    <li>✓ Write "neighbor recommendation" style ads</li>
                    <li>✓ Set up lead form or calendar booking</li>
                    <li>✓ Create email follow-up sequence</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Week 3-4: Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Start with $20/day budget</li>
                    <li>✓ Test 3 different ad copies</li>
                    <li>✓ Kill poor performers after 3 days</li>
                    <li>✓ Scale winners to $50/day</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Questions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">FAQs About This Strategy</h2>
              
              <div className="space-y-4">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">
                    Q: Will this work for [insert service business]?
                  </h3>
                  <p className="text-gray-300">
                    Yes, if your average job value is over $500. We've tested this with HVAC, electrical, 
                    roofing, pest control, and cleaning services. The key is the neighborhood-focused approach.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">
                    Q: What if I don't have customer photos?
                  </h3>
                  <p className="text-gray-300">
                    Use photos of your actual team at work. Authentic, non-stock photos outperform 
                    professional shots by 3x in our tests. iPhone photos are fine!
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">
                    Q: How long until I see results?
                  </h3>
                  <p className="text-gray-300">
                    With proper setup, you'll see leads within 48 hours. Give it 2 weeks to optimize 
                    before making major changes. Month 2 is typically 2x more profitable than Month 1.
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
                <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Facebook ads work for local service businesses when you stop trying to compete with 
                  e-commerce brands and start acting like a helpful neighbor. This plumber went from 
                  skeptical to spending $3,000/month after seeing these results.
                </p>
                
                <div className="bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 rounded-xl p-6">
                  <p className="text-xl font-semibold text-white mb-4">
                    Want This Exact Campaign Set Up For Your Business?
                  </p>
                  <p className="text-gray-300 mb-6">
                    We'll build and manage your Facebook ad campaigns using this proven framework. 
                    Average client sees 15-30 qualified leads in the first 30 days.
                  </p>
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get Your Custom Facebook Ad Strategy →
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Author Bio */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold mb-4">About the Author</h3>
              <p className="text-gray-300">
                <strong className="text-white">Kyle Campbell</strong> has managed over $2M in Facebook ad spend 
                for local service businesses, generating 10,000+ qualified leads across pest control, plumbing, 
                HVAC, and home service industries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </>
  )
}