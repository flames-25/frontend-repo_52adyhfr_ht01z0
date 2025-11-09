import React from 'react'

const posts = [
  {
    slug: 'spring-cleaning-checklist',
    title: 'Ultimate Spring Cleaning Checklist',
    excerpt:
      'A room-by-room plan our pros use to refresh your home quickly and thoroughly.',
    image:
      'https://images.unsplash.com/photo-1600585152497-9b39cf03d1c7?q=80&w=1600&auto=format&fit=crop',
    date: '2025-03-12',
    tags: ['tips', 'home'],
  },
  {
    slug: 'eco-friendly-cleaning',
    title: 'Eco-Friendly Cleaning: Products That Actually Work',
    excerpt:
      'Our favorite planet-friendly solutions that are safe for kids and pets.',
    image:
      'https://images.unsplash.com/photo-1556228453-efd1e3f58ef3?q=80&w=1600&auto=format&fit=crop',
    date: '2025-02-22',
    tags: ['eco', 'products'],
  },
  {
    slug: 'office-hygiene-2025',
    title: 'Office Hygiene in 2025: What Matters Most',
    excerpt:
      'From high-touch surfaces to air quality — how to keep your team healthy.',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    date: '2025-01-15',
    tags: ['office', 'health'],
  },
]

export default function Blog({ onRead }) {
  return (
    <section id="blog" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest from our blog</h2>
          <a href="#" className="text-blue-700 hover:text-blue-800 hidden md:inline">
            View all
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl bg-white border shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-1 text-gray-600">{post.excerpt}</p>
                <button
                  onClick={() => onRead(post)}
                  className="mt-3 text-blue-700 hover:text-blue-800 font-medium"
                >
                  Read in app →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
