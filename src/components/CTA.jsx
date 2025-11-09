import React from 'react'
import { ArrowRight, PlayCircle, Apple } from 'lucide-react'

export default function CTA({ onBook }) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Ready for a spotless space?</h2>
          <p className="mt-2 text-white/90 max-w-2xl">
            Tap below to finish your booking in our mobile app. No signups on the web — just fast, secure scheduling.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button onClick={onBook} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-blue-700 shadow hover:bg-blue-50">
              Book in the app <ArrowRight className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <PlayCircle className="h-4 w-4" /> Google Play
              <span className="mx-1">•</span>
              <Apple className="h-4 w-4" /> App Store
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
