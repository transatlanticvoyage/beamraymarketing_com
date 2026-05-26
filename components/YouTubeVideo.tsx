'use client'

import { motion } from 'framer-motion'

export default function YouTubeVideo() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            See How We Generate Leads
          </h2>
          <p className="text-gray-300 text-lg">
            Watch our proven strategies in action
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-2xl p-4 md:p-6"
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/s3R6R6MILAI?si=k5_roc-8ylbflC9h" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Learn more about our data-driven approach to lead generation
          </p>
        </motion.div>
      </div>
    </section>
  )
}