'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Search, TrendingUp, Eye, Target } from 'lucide-react'
import Link from 'next/link'

export default function CompetitorKeywordPost() {
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
                Local SEO
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
              Steal Your Competitors' Best Keywords in 15 Minutes
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Kyle Campbell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>January 22, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>6 min read</span>
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
                <strong className="text-white">Your competitor spent $50,000 and 2 years</strong> figuring out which keywords convert. 
                I'm about to show you how to steal their entire keyword strategy in 15 minutes using free tools. This method revealed 
                <span className="text-beamray-green font-semibold"> 127 high-value keywords</span> our plumbing client was missing.
              </p>
            </div>

            {/* The Method */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Search className="text-beamray-blue" />
                The 15-Minute Competitor Keyword Heist
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-green">Step 1: Find Your Real Competitors (2 minutes)</h3>
                  <p className="text-gray-300 mb-4">Google these exact searches:</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• "[your service] near me"</li>
                    <li>• "[your service] [your city]"</li>
                    <li>• "best [your service] in [your city]"</li>
                  </ul>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-400">
                      <strong>Note:</strong> Write down the top 3 organic results (not ads) - these are crushing it with SEO
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-beamray-blue">Step 2: Extract Their Keywords (5 minutes)</h3>
                  <p className="text-gray-300 mb-4">Go to Ubersuggest.com (free version works):</p>
                  <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                    <li>Enter competitor's domain</li>
                    <li>Click "Organic Keywords"</li>
                    <li>Filter by: Position 1-20, Volume 50+</li>
                    <li>Export to CSV (or screenshot)</li>
                  </ol>
                </div>

                {/* Step 3 */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Step 3: Find the Gold (3 minutes)</h3>
                  <p className="text-gray-300 mb-4">Look for these keyword patterns:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-green-400 mb-2">High Intent Keywords:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• "emergency [service]"</li>
                        <li>• "[service] cost"</li>
                        <li>• "[service] near me open now"</li>
                        <li>• "same day [service]"</li>
                      </ul>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-400 mb-2">Hidden Gems:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Neighborhood + service</li>
                        <li>• Problem-based searches</li>
                        <li>• Brand comparisons</li>
                        <li>• "How to" + hire questions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Step 4: Check Your Gaps (5 minutes)</h3>
                  <p className="text-gray-300 mb-4">
                    Google each keyword and see if you appear. No? You've found a gap. Create a simple spreadsheet:
                  </p>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b border-white/20">
                          <th className="py-2">Keyword</th>
                          <th className="py-2">Volume</th>
                          <th className="py-2">Competitor Rank</th>
                          <th className="py-2">My Rank</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-white/10">
                          <td className="py-2">emergency plumber dallas</td>
                          <td className="py-2">590</td>
                          <td className="py-2">#2</td>
                          <td className="py-2 text-red-400">Not found</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Real Examples */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Eye className="text-green-500" />
                Real Keywords We Stole (And the Results)
              </h2>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Pest Control Client - Sacramento:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-white mb-3">Keywords Discovered:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• "rat exterminator sacramento" (720/mo)</li>
                      <li>• "termite inspection cost" (450/mo)</li>
                      <li>• "bee removal near me" (320/mo)</li>
                      <li>• "apartment pest control" (180/mo)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-3">Results After 90 Days:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 18 keywords ranking page 1</li>
                      <li>• 147% increase in organic traffic</li>
                      <li>• 31 new monthly leads</li>
                      <li>• $14,700 additional monthly revenue</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Tactics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Advanced Tactics (For Overachievers)</h2>
              
              <div className="space-y-4">
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">1. The "Also Rank For" Goldmine</h3>
                  <p className="text-gray-300">
                    In SEMrush or Ahrefs, find keywords your competitor ranks for accidentally (position 20-50). 
                    These are easy wins they're not even trying for.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">2. The Reverse Engineer Method</h3>
                  <p className="text-gray-300">
                    Look at their blog posts and service pages. What questions are they answering? 
                    Each FAQ = a keyword they're targeting.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">3. The Google Suggest Hack</h3>
                  <p className="text-gray-300">
                    Type your competitor's brand name in Google. The autocomplete suggestions show 
                    what people search about them. Create content targeting those terms.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick Win Keywords */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">10 Keywords Your Competitors Are Missing</h2>
              
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6">
                <p className="text-gray-300 mb-4">These work for almost any service business:</p>
                <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                  <li>"[service] [neighborhood name]" - Hyperlocal gold</li>
                  <li>"[competitor name] alternative" - Steal their shoppers</li>
                  <li>"how much does [service] cost in [city]" - High intent</li>
                  <li>"[service] coupon [city]" - Deal seekers ready to buy</li>
                  <li>"best time to [service action]" - Educational + commercial</li>
                  <li>"[service] vs [alternative service]" - Comparison shoppers</li>
                  <li>"[service] reviews [city]" - Bottom of funnel</li>
                  <li>"why is my [problem your service solves]" - Problem-aware</li>
                  <li>"emergency [service] after hours" - Premium service</li>
                  <li>"[service] for [specific customer type]" - Niche targeting</li>
                </ol>
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
                <h2 className="text-3xl font-bold mb-6">Your Competitors Did the Hard Work - Now Profit From It</h2>
                <p className="text-lg text-gray-300 mb-6">
                  In 15 minutes, you've uncovered keywords that took your competitors years and thousands 
                  of dollars to discover. Now create one page targeting each keyword gap, and watch your 
                  organic traffic explode over the next 90 days.
                </p>

                <div className="bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 rounded-xl p-6">
                  <p className="text-xl font-semibold text-white mb-4">
                    Want a Complete Competitor Analysis?
                  </p>
                  <p className="text-gray-300 mb-6">
                    We'll analyze your top 5 competitors, find 100+ keyword opportunities, 
                    and create a 90-day plan to outrank them. Most clients see 2-5x organic traffic in 6 months.
                  </p>
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get Your Competitor Analysis →
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