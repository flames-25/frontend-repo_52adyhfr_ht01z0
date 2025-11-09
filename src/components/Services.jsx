import React from 'react'
import { Home, Building2, Leaf, WashingMachine, Couch, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Home Cleaning',
    desc: 'Thorough cleans for apartments and houses with eco-friendly products.',
    keywords: 'home cleaning, apartment cleaning, house cleaning, maid service',
  },
  {
    icon: Building2,
    title: 'Office & Commercial',
    desc: 'Reliable weekly or nightly service for offices and retail spaces.',
    keywords: 'office cleaning, commercial cleaning, janitorial services',
  },
  {
    icon: WashingMachine,
    title: 'Move In/Out',
    desc: 'Deep cleans for moving day, including inside appliances and cabinets.',
    keywords: 'move out cleaning, deep cleaning, end of tenancy clean',
  },
  {
    icon: Couch,
    title: 'Upholstery & Carpets',
    desc: 'Stain removal and steam treatments to refresh fabrics and rugs.',
    keywords: 'carpet cleaning, sofa cleaning, upholstery steam cleaning',
  },
  {
    icon: Leaf,
    title: 'Eco & Allergies',
    desc: 'Green options and hypoallergenic supplies available on request.',
    keywords: 'green cleaning, eco-friendly cleaning, allergy safe',
  },
  {
    icon: Sparkles,
    title: 'Custom Projects',
    desc: 'Post-renovation, Airbnb turnovers, events, and more.',
    keywords: 'post construction cleaning, airbnb cleaning, event cleaning',
  },
]

export default function Services({ onBook }) {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted cleaning services</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Choose a service and finalize your booking in our mobile app. No accounts or web logins — just quick, secure scheduling.
            </p>
          </div>
          <button onClick={onBook} className="hidden md:inline-flex rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Book in app
          </button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group rounded-2xl border p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <button
                onClick={onBook}
                className="mt-4 inline-flex text-blue-700 hover:text-blue-800 font-medium"
                aria-label={`Book ${title} in the app`}
              >
                Book now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
