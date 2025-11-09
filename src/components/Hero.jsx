import React from 'react'
import { ArrowRight, Shield, Sparkles } from 'lucide-react'

export default function Hero({ onBook }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-50 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 ring-1 ring-blue-200">
              <Sparkles className="h-4 w-4" /> Premium cleaning on-demand
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Spotless spaces, on your schedule
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Spotles Solutions delivers hotel-grade cleaning for homes and offices with vetted pros, eco-friendly supplies, and lightning-fast scheduling.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onBook}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700 focus:outline-none"
              >
                Book in the app <ArrowRight className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-600" /> 100% insured and vetted
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl border bg-white/70 p-4 shadow-xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1600&auto=format&fit=crop"
                alt="Professional cleaner sanitizing a modern living room"
                className="rounded-2xl object-cover w-full h-[360px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
