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
      <body className={`${inter.className} bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white`}>
        {children}
      </body>
    </html>
  )
}