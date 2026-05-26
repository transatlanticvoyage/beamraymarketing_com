'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, CheckCircle, XCircle, AlertCircle, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function GoogleMapsRankingPost() {
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
              <span className="px-3 py-1 bg-white/10 text-gray-400 text-sm rounded-full">
                Featured
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
              Why Your Business Isn't Showing Up on Google Maps (And How to Fix It)
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Kyle Campbell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>February 14, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>8 min read</span>
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
                <strong className="text-white">Here's a sobering fact:</strong> 46% of all Google searches have local intent, 
                yet most local businesses are invisible when their potential customers are searching. 
                If you're not showing up in the Google Maps 3-pack (the top 3 local results), 
                you're missing out on <span className="text-beamray-green font-semibold">75% of local clicks</span>.
              </p>
            </div>

            {/* Problem 1 */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" size={32} />
                Problem #1: Your Google Business Profile Is Incomplete
              </h2>
              
              <p className="text-gray-300 mb-6">
                Google rewards completeness. An incomplete profile signals to Google that you're either not serious 
                about your business or not actively maintaining your online presence.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Common Missing Elements:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• No business description or it's under 250 words</li>
                  <li>• Missing service areas (crucial for contractors)</li>
                  <li>• No photos or only 1-2 low-quality images</li>
                  <li>• Incomplete hours, including holiday hours</li>
                  <li>• No attributes selected (wheelchair accessible, free estimates, etc.)</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={24} /> The Fix:
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li><strong>1.</strong> Write a 750-character business description using your main keywords naturally</li>
                  <li><strong>2.</strong> Add at least 20 high-quality photos (exterior, interior, team, work examples)</li>
                  <li><strong>3.</strong> List all service areas within your actual service radius</li>
                  <li><strong>4.</strong> Set special hours for every holiday in the next 12 months</li>
                  <li><strong>5.</strong> Select every relevant attribute Google offers for your category</li>
                </ol>
              </div>
            </motion.section>

            {/* Problem 2 */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" size={32} />
                Problem #2: Lack of Consistent Reviews
              </h2>
              
              <p className="text-gray-300 mb-6">
                Reviews are the #1 local ranking factor after relevance. Businesses with 4.5+ stars and 
                regular new reviews get <strong>5x more clicks</strong> than those with fewer reviews.
              </p>

              <div className="glass-effect rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-red-400">What Doesn't Work:</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Getting 20 reviews in one week then nothing</li>
                      <li>• Only asking happy customers</li>
                      <li>• Ignoring negative reviews</li>
                      <li>• Not responding to any reviews</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-green-400">What Google Wants:</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Steady flow: 2-5 new reviews monthly</li>
                      <li>• Mix of ratings (perfect 5.0 looks fake)</li>
                      <li>• Detailed reviews mentioning services</li>
                      <li>• Owner responses within 24-48 hours</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={24} /> The Fix:
                </h3>
                <p className="text-gray-300 mb-4">Implement a review generation system:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Send review requests 3-7 days after service completion</li>
                  <li>• Make it easy with direct review links (not just "leave us a review")</li>
                  <li>• Respond to ALL reviews with personalized messages</li>
                  <li>• Turn negative reviews into wins by showing you care</li>
                </ul>
              </div>
            </motion.section>

            {/* Problem 3 */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" size={32} />
                Problem #3: NAP Inconsistency
              </h2>
              
              <p className="text-gray-300 mb-6">
                NAP (Name, Address, Phone) inconsistency confuses Google and destroys trust. 
                Even small variations hurt your ranking.
              </p>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                  <AlertCircle size={24} /> Common NAP Mistakes:
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>• <strong>Business name variations:</strong> "Bob's Plumbing" vs "Bob's Plumbing LLC" vs "Bob's Plumbing Services"</p>
                  <p>• <strong>Address format:</strong> "Suite 100" vs "Ste 100" vs "#100"</p>
                  <p>• <strong>Phone numbers:</strong> Using tracking numbers on some sites, main number on others</p>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={24} /> The Fix:
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li><strong>1.</strong> Audit all your online listings (Google, Yelp, Facebook, Yellow Pages, etc.)</li>
                  <li><strong>2.</strong> Create a master NAP document with the exact format to use everywhere</li>
                  <li><strong>3.</strong> Update or claim all directory listings with consistent information</li>
                  <li><strong>4.</strong> Use the same phone number everywhere (no tracking numbers in NAP)</li>
                </ol>
              </div>
            </motion.section>

            {/* Problem 4 */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" size={32} />
                Problem #4: No Local Content Strategy
              </h2>
              
              <p className="text-gray-300 mb-6">
                Google can't rank you for local searches if you're not creating local content. 
                Generic content doesn't cut it anymore.
              </p>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={24} /> The Fix:
                </h3>
                <p className="text-gray-300 mb-4">Create location-specific content:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Service area pages: "Plumbing Services in [Neighborhood Name]"</li>
                  <li>• Local case studies and project showcases</li>
                  <li>• Community involvement posts and sponsorships</li>
                  <li>• Local emergency tips: "Preparing for [City Name] Storm Season"</li>
                  <li>• Google Posts: Weekly updates about your services and offers</li>
                </ul>
              </div>
            </motion.section>

            {/* Problem 5 */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" size={32} />
                Problem #5: Wrong or Missing Primary Category
              </h2>
              
              <p className="text-gray-300 mb-6">
                Your primary category is the strongest ranking signal to Google about what you do. 
                Choose wrong, and you'll never rank for your main services.
              </p>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={24} /> The Fix:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Research what categories your top-ranking competitors use</li>
                  <li>• Choose the most specific category that matches your main service</li>
                  <li>• Add secondary categories for additional services</li>
                  <li>• Avoid generic categories like "Company" or "Business"</li>
                </ul>
              </div>
            </motion.section>

            {/* Problem 6 */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" size={32} />
                Problem #6: Proximity Issues You Can't Control (Or Can You?)
              </h2>
              
              <p className="text-gray-300 mb-6">
                Google heavily weights proximity to the searcher. But there are ways to expand your reach 
                even if you're not in the city center.
              </p>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={24} /> The Fix:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Build location-specific landing pages for each service area</li>
                  <li>• Get reviews mentioning specific neighborhoods you serve</li>
                  <li>• Create content about local landmarks and areas</li>
                  <li>• Build local backlinks from area businesses and organizations</li>
                  <li>• Use Local Service Ads to appear above the map pack</li>
                </ul>
              </div>
            </motion.section>

            {/* Problem 7 */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <XCircle className="text-red-500" size={32} />
                Problem #7: Website Issues Killing Your Ranking
              </h2>
              
              <p className="text-gray-300 mb-6">
                Your website directly impacts your Google Maps ranking. Poor website = poor local ranking.
              </p>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Website Red Flags:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Loads slower than 3 seconds</li>
                  <li>• Not mobile-friendly (60% of local searches are mobile)</li>
                  <li>• No schema markup for local business</li>
                  <li>• Missing location pages or service area information</li>
                  <li>• No SSL certificate (not secure)</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle size={24} /> The Fix:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Test your site speed with Google PageSpeed Insights (aim for 90+ score)</li>
                  <li>• Ensure mobile responsiveness on all pages</li>
                  <li>• Add LocalBusiness schema markup</li>
                  <li>• Create location and service-specific pages</li>
                  <li>• Include your NAP in the footer of every page</li>
                </ul>
              </div>
            </motion.section>

            {/* Action Plan */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={32} />
                  Your 30-Day Action Plan
                </h2>
                
                <div className="space-y-4">
                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3 text-beamray-blue">Week 1: Foundation</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>✓ Complete your Google Business Profile (100%)</li>
                      <li>✓ Audit and fix NAP consistency across the web</li>
                      <li>✓ Add 20+ high-quality photos</li>
                    </ul>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3 text-beamray-green">Week 2: Reviews & Content</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>✓ Implement review request system</li>
                      <li>✓ Respond to all existing reviews</li>
                      <li>✓ Create 3 location-specific pages</li>
                    </ul>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">Week 3: Optimization</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>✓ Fix website speed issues</li>
                      <li>✓ Add schema markup</li>
                      <li>✓ Post weekly Google Business Profile updates</li>
                    </ul>
                  </div>

                  <div className="glass-effect rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">Week 4: Scale</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>✓ Build local backlinks</li>
                      <li>✓ Launch Local Service Ads if applicable</li>
                      <li>✓ Monitor rankings and adjust strategy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

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
                  Ranking on Google Maps isn't about tricks or hacks. It's about sending consistent signals 
                  to Google that you're a legitimate, active, and trusted local business.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Fix these 7 problems, and you'll see dramatic improvements in your visibility within 30-45 days. 
                  Most businesses see a <span className="text-beamray-green font-semibold">40-60% increase in calls</span> after 
                  implementing these changes.
                </p>
                <div className="bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 rounded-xl p-6">
                  <p className="text-xl font-semibold text-white mb-4">
                    Need help ranking on Google Maps?
                  </p>
                  <p className="text-gray-300 mb-6">
                    Our Rainstorm package has helped over 500 local businesses dominate their local markets. 
                    We handle everything from profile optimization to ongoing management.
                  </p>
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Get Your Free Local SEO Audit →
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
                <strong className="text-white">Kyle Campbell</strong> is the founder of BeamRay Marketing and has 
                helped over 500 local service businesses improve their online visibility and generate more leads 
                through strategic local SEO and digital marketing campaigns.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </>
  )
}