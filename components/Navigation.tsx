'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold gradient-text focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg px-2" aria-label="BeamRay Marketing - Home">
            BeamRay Marketing
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8" role="list">
            <li><Link href="/" className="hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Home</Link></li>
            <li><Link href="/about" className="hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">About</Link></li>
            <li><Link href="/services" className="hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Services</Link></li>
            <li><Link href="/industries" className="hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Industries</Link></li>
            <li><Link href="/portfolio" className="hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1">Contact</Link></li>
          </ul>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden absolute top-16 left-0 w-full glass-effect" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
            <ul className="flex flex-col space-y-4 p-4" role="list">
              <li><Link href="/" className="block hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" className="block hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="/services" className="block hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link href="/industries" className="block hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1" onClick={() => setIsOpen(false)}>Industries</Link></li>
              <li><Link href="/portfolio" className="block hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
              <li><Link href="/blog" className="block hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1" onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li><Link href="/contact" className="block hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}