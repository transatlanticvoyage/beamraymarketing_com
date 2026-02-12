'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Heart } from 'lucide-react'
import Image from 'next/image'

export default function About() {
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
              About BeamRay Marketing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in local business growth since 2020. We specialize in 
              creating powerful lead generation systems that deliver real results.
            </p>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="glass-effect rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Meet Kyle Campbell</h2>
                <p className="text-gray-300 mb-4">
                  Founder & Lead Marketing Strategist with over 10 years of experience 
                  in digital marketing and lead generation. Kyle has helped hundreds of 
                  local businesses transform their online presence and generate consistent, 
                  high-quality leads.
                </p>
                <p className="text-gray-300 mb-4">
                  Specializing in home service industries, Kyle understands the unique 
                  challenges and opportunities that local businesses face in today's 
                  digital landscape.
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="https://www.facebook.com/kylecampbell123/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-beamray-blue hover:text-beamray-green transition-colors">
                    Connect on Facebook →
                  </a>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-beamray-blue/20 to-beamray-purple/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-beamray-blue to-beamray-green mx-auto mb-4"></div>
                  <p className="text-gray-400">Kyle Campbell</p>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Award />, value: '500+', label: 'Successful Campaigns' },
              { icon: <Users />, value: '200+', label: 'Happy Clients' },
              { icon: <TrendingUp />, value: '10M+', label: 'Leads Generated' },
              { icon: <Heart />, value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="text-beamray-green mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center py-16"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To empower local businesses with cutting-edge digital marketing strategies 
              that drive growth, increase revenue, and build lasting customer relationships. 
              We believe every business deserves access to professional marketing that delivers results.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}