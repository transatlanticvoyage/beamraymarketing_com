import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BeamRay Marketing - Local Lead Generation Specialists',
  description: 'Generate qualified leads for your local business. Specializing in home service businesses including pest control, water damage restoration, and more.',
  keywords: 'lead generation, local marketing, pest control leads, home services marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {/* Skip to main content link for keyboard navigation */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-beamray-blue text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-beamray-green"
        >
          Skip to main content
        </a>
        
        {children}
      </body>
    </html>
  )
}