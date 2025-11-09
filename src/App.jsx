import React, { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Blog from './components/Blog'
import CTA from './components/CTA'
import DownloadAppModal from './components/DownloadAppModal'
import SEO from './components/SEO'
import { Facebook, Instagram, Phone, Mail } from 'lucide-react'

export default function App() {
  const [open, setOpen] = useState(false)
  const onBook = () => setOpen(true)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-block h-8 w-8 rounded-lg bg-blue-600" aria-hidden />
            Spotles Solutions
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#blog" className="hover:text-blue-700">Blog</a>
            <button onClick={onBook} className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book in app</button>
          </nav>
          <button onClick={onBook} className="md:hidden rounded-full bg-blue-600 px-4 py-2 text-white">Book</button>
        </div>
      </header>

      {/* Main sections */}
      <main>
        <Hero onBook={onBook} />
        <Services onBook={onBook} />
        <CTA onBook={onBook} />
        <Blog onRead={onBook} />
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="inline-block h-7 w-7 rounded-lg bg-blue-600" aria-hidden /> Spotles Solutions
            </div>
            <p className="mt-2 text-gray-600">Premium cleaning for homes and offices. All bookings are completed in our mobile app.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#services" className="hover:text-blue-700">Services</a></li>
              <li><a href="#blog" className="hover:text-blue-700">Blog</a></li>
              <li><button onClick={onBook} className="hover:text-blue-700">Download app</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-gray-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 555-1234</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@spotles.app</li>
              <li className="flex items-center gap-2">
                <a aria-label="Facebook" href="#" className="hover:text-blue-700"><Facebook className="h-5 w-5" /></a>
                <a aria-label="Instagram" href="#" className="hover:text-blue-700"><Instagram className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Spotles Solutions. All rights reserved.</div>
      </footer>

      <DownloadAppModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
