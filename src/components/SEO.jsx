import React, { useEffect } from 'react'

export default function SEO() {
  useEffect(() => {
    document.title = 'Spotles Solutions — Premium Home & Office Cleaning | Book in App'

    const setMeta = (name, content, attr = 'name') => {
      let el = document.head.querySelector(`${attr}="${name}"`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', 'Spotles Solutions provides premium home and office cleaning with vetted professionals, eco-friendly supplies, and lightning-fast scheduling. Book in our mobile app.')
    setMeta('robots', 'index, follow')
    setMeta('theme-color', '#2563eb')

    const setOG = (property, content) => setMeta(property, content, 'property')
    setOG('og:type', 'website')
    setOG('og:title', 'Spotles Solutions — Premium Cleaning')
    setOG('og:description', 'Hotel-grade cleaning for homes and offices. Book in our mobile app.')
    setOG('og:image', 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop')
    setOG('og:site_name', 'Spotles Solutions')

    // Canonical link
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', window.location.origin + '/')
  }, [])

  return null
}
