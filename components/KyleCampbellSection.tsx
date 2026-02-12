'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Facebook, Mail, Award, TrendingUp, Users } from 'lucide-react'

export default function KyleCampbellSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-effect rounded-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-beamray-blue/20 to-beamray-green/20 rounded-2xl blur-3xl"></div>
                <Image
                  src="/images/kyle-with-bg.png"
                  alt="Kyle Campbell - Founder of BeamRay Marketing"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-beamray-blue to-beamray-green p-4 rounded-xl text-white shadow-xl">
                  <div className="text-2xl font-bold">10+ Years</div>
                  <div className="text-sm">Industry Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="gradient-text">Kyle Campbell</span>
              </h2>
              
              <div className="text-xl text-beamray-blue font-semibold mb-4">
                Founder & Lead Marketing Strategist
              </div>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                With over a decade of experience in digital marketing and lead generation, 
                Kyle has transformed hundreds of local businesses into market leaders. 
                His data-driven approach and deep understanding of local SEO has generated 
                millions in revenue for clients across the United States.
              </p>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Specializing in home service industries, Kyle pioneered the "Rainstorm" 
                method that consistently delivers top 3 Google Maps rankings. His 
                "Free Until You Rank" guarantee has revolutionized how small businesses 
                approach digital marketing.
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="text-yellow-500" size={30} />
                  </div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-400">Campaigns Delivered</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="text-green-500" size={30} />
                  </div>
                  <div className="text-2xl font-bold text-white">87%</div>
                  <div className="text-xs text-gray-400">Avg Lead Increase</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="text-blue-500" size={30} />
                  </div>
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-xs text-gray-400">Happy Clients</div>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.facebook.com/kylecampbell123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors text-blue-400"
                >
                  <Facebook size={20} />
                  <span>Connect on Facebook</span>
                </a>
                <a 
                  href="mailto:kyle@beamraymarketing.com"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 rounded-lg transition-colors text-green-400"
                >
                  <Mail size={20} />
                  <span>Email Kyle</span>
                </a>
              </div>

              {/* Quote */}
              <div className="mt-8 p-4 bg-gradient-to-r from-beamray-blue/10 to-beamray-green/10 rounded-xl border-l-4 border-beamray-blue">
                <p className="text-gray-300 italic">
                  "Your success is my success. I don't just deliver leads – I deliver 
                  partnerships that transform businesses."
                </p>
                <p className="text-beamray-blue font-semibold mt-2">- Kyle Campbell</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}