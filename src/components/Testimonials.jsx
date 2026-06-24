import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReveal } from '../useReveal'

const testimonials = [
  {
    quote: "Mangalayam matched us perfectly. Within two months of joining, we found each other and got married in a beautiful Telugu ceremony.",
    name: 'Sravani & Naveen', age: 27, city: 'Hyderabad',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    quote: "As an NRI, I was worried about finding a Telugu partner. Mangalayam's verified profiles and dedicated NRI support made everything seamless.",
    name: 'Anil Kumar', age: 31, city: 'USA',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    quote: "The horoscope compatibility feature was spot on. Our families trusted the platform completely and we couldn't be happier.",
    name: 'Divya & Karthik', age: 26, city: 'Vijayawada',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80',
  },
  {
    quote: "Premium membership gave us a dedicated relationship manager who guided us through every step. Worth every rupee.",
    name: 'Harika Sharma', age: 25, city: 'Visakhapatnam',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const headRef = useReveal()

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(a => (a + 1) % testimonials.length)
  const t = testimonials[active]

  return (
    <section className="py-16 md:py-28 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="reveal text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(35,56,176,0.07)', border: '1px solid rgba(35,56,176,0.15)' }}>
            <span className="font-body text-xs font-bold" style={{ color: '#E8836A' }}>★★★★★</span>
            <span className="font-body text-xs font-medium" style={{ color: '#6B7280' }}>4.9 Average Rating · 12,000+ Reviews</span>
          </div>
          <h2 className="section-title">What Families Say</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Side cards — desktop */}
          <div className="hidden lg:block absolute -left-40 top-12 w-56 opacity-30 scale-90 pointer-events-none select-none">
            <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(35,56,176,0.08)' }}>
              <p className="font-display italic text-sm leading-relaxed line-clamp-3" style={{ color: '#6B7280' }}>
                "{testimonials[(active - 1 + testimonials.length) % testimonials.length].quote}"
              </p>
            </div>
          </div>
          <div className="hidden lg:block absolute -right-40 top-12 w-56 opacity-30 scale-90 pointer-events-none select-none">
            <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(35,56,176,0.08)' }}>
              <p className="font-display italic text-sm leading-relaxed line-clamp-3" style={{ color: '#6B7280' }}>
                "{testimonials[(active + 1) % testimonials.length].quote}"
              </p>
            </div>
          </div>

          {/* Active card */}
          <div key={active} className="bg-white rounded-2xl p-10 relative"
            style={{ boxShadow: '0 16px 48px rgba(35,56,176,0.12)', border: '1px solid rgba(35,56,176,0.12)', animation: 'fadeInScale 0.4s ease forwards' }}>
            <span className="absolute -top-4 left-8 font-display font-bold leading-none select-none pointer-events-none"
              style={{ fontSize: '8rem', color: 'rgba(35,56,176,0.05)', lineHeight: 1 }}>"</span>

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#E8836A', fontSize: '1.1rem' }}>★</span>
              ))}
            </div>

            <p className="font-display italic text-2xl md:text-3xl leading-relaxed mb-8 relative z-10" style={{ color: '#1A1F36' }}>
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4">
              <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover object-top"
                style={{ border: '2px solid rgba(35,56,176,0.25)' }} />
              <div>
                <p className="font-heading font-semibold" style={{ color: '#1A1F36' }}>{t.name}</p>
                <p className="font-body text-sm" style={{ color: '#6B7280' }}>{t.age} · {t.city}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ border: '1px solid rgba(35,56,176,0.25)', color: '#2338B0' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2338B0'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2338B0' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === active ? '24px' : '8px', height: '8px', background: i === active ? '#2338B0' : 'rgba(35,56,176,0.2)' }} />
              ))}
            </div>

            <button onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ border: '1px solid rgba(35,56,176,0.25)', color: '#2338B0' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2338B0'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2338B0' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
