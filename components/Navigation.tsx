'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            BeamRay Marketing
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-beamray-blue transition-colors">Home</Link>
            <Link href="/about" className="hover:text-beamray-blue transition-colors">About</Link>
            <Link href="/services" className="hover:text-beamray-blue transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-beamray-blue transition-colors">Portfolio</Link>
            <Link href="/contact" className="hover:text-beamray-blue transition-colors">Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full glass-effect">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="hover:text-beamray-blue transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="hover:text-beamray-blue transition-colors" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/services" className="hover:text-beamray-blue transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/portfolio" className="hover:text-beamray-blue transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link href="/contact" className="hover:text-beamray-blue transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}