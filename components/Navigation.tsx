'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_ITEMS: Array<{
  label: string
  href: string | null
  children?: Array<{ label: string; href: string }>
}> = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'GBP Optimization', href: '/services/gbp-optimization' },
      { label: 'Website SEO', href: '/services/website-seo' },
      { label: 'Web Design', href: '/services/web-design' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  {
    label: 'Software',
    href: null,
    children: [
      { label: 'Tregnar', href: '/tregnar' },
      { label: 'Solstice', href: '/solstice' },
      { label: 'Flowerdock', href: '/flowerdock' },
      { label: 'Pavillion', href: '/pavillion' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setOpenDropdown(null)
      }
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 glass-effect" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="text-2xl font-bold gradient-text focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white rounded-lg px-2"
            aria-label="BeamRay Marketing - Home"
          >
            BeamRay Marketing
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="pb-1"
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 px-3 py-2 hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white rounded"
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </Link>
                    ) : (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="inline-flex items-center gap-1 px-3 py-2 hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white rounded"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                    {openDropdown === item.label && (
                      <ul className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 shadow-lg rounded-lg py-1 z-50">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm hover:bg-slate-50 hover:text-beamray-blue transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="inline-block px-3 py-2 hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white rounded"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800 p-2 focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white rounded"
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
          <div id="mobile-menu" className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-md" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
            <ul className="flex flex-col p-4 space-y-1" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <div className="flex items-center justify-between">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="block px-2 py-2 hover:text-beamray-blue transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="block px-2 py-2 text-slate-500">{item.label}</span>
                        )}
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="p-2 hover:text-beamray-blue transition-colors"
                          aria-expanded={mobileExpanded === item.label}
                        >
                          <ChevronDown size={16} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileExpanded === item.label && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-2 py-2 text-sm hover:text-beamray-blue transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-2 py-2 hover:text-beamray-blue transition-colors focus:outline-none focus:ring-2 focus:ring-beamray-blue focus:ring-offset-2 focus:ring-offset-white rounded"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
