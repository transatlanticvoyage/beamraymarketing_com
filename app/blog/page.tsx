'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, TrendingUp, Target, Zap } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  readTime: string
  category: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: 'google-maps-ranking-2024',
    title: 'Why Your Business Isn\'t Showing Up on Google Maps (And How to Fix It)',
    excerpt: 'Discover the 7 most common reasons local businesses fail to appear in Google Maps search results and learn actionable strategies to improve your visibility within 30 days.',
    date: 'February 14, 2024',
    author: 'Kyle Campbell',
    readTime: '8 min read',
    category: 'Local SEO',
    featured: true
  }
]

export default function Blog() {
  return (
    <>
      <Navigation />
      
      <section className="min-h-screen pt-24 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              BeamRay Marketing Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven strategies, industry insights, and actionable tips to help local service businesses 
              dominate their markets and generate more qualified leads.
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-2xl p-8 mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-beamray-blue to-beamray-green text-white text-sm rounded-full font-semibold">
                  Featured Post
                </span>
                <span className="px-3 py-1 bg-white/10 text-gray-400 text-sm rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-beamray-blue transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-lg text-gray-300 mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-beamray-green font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <TrendingUp />, name: 'Local SEO', count: 1 },
                { icon: <Target />, name: 'Google Ads', count: 0 },
                { icon: <Zap />, name: 'Lead Generation', count: 0 },
                { icon: <User />, name: 'Case Studies', count: 0 }
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 mb-3">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-400">{category.count} {category.count === 1 ? 'Post' : 'Posts'}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Ahead of Your Competition</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get weekly insights on local marketing strategies, Google updates, and proven tactics 
              to generate more leads for your business.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Free Consultation <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}