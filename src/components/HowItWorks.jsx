import { useEffect, useRef } from 'react'
import { FileText, Search, MessageCircle, Sparkles } from 'lucide-react'
import { useReveal } from '../useReveal'

const steps = [
  { icon: FileText,      title: 'Create Your Profile',  desc: 'Share your preferences, family background, and expectations to get started.' },
  { icon: Search,        title: 'Browse Matches',        desc: 'AI-powered suggestions filtered by community, age, and location.' },
  { icon: MessageCircle, title: 'Connect Privately',     desc: 'Send interest, chat securely, share contact with mutual consent.' },
  { icon: Sparkles,      title: 'Begin Your Journey',    desc: 'Meet families, exchange horoscopes, celebrate your match.' },
]

export default function HowItWorks() {
  const headRef  = useReveal()
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cardRefs.current.forEach((r, i) => {
          if (r) setTimeout(() => r.classList.add('visible'), i * 150)
        })
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    if (cardRefs.current[0]) observer.observe(cardRefs.current[0])
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-10 sm:py-14 lg:py-16 relative overflow-hidden">
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1510076857177-7470076d4098?w=1600&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.07,
      }} />
      <div style={{ position: 'absolute', inset: 0, background: '#ffffff' , opacity: 0.93 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={headRef} className="reveal text-center mb-8 sm:mb-10">
          <span className="section-tag" style={{ color: '#000080' }}>The Mangalayam Journey</span>
          <h2 style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#1A1F36', lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: 4 }}>
            Find Your Perfect Match
            <span style={{ fontWeight: 400, fontSize: 'clamp(0.875rem, 1.4vw, 1rem)', color: '#6B7280', display: 'block', marginTop: 4 }}>in 4 Simple Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title}
                ref={el => cardRefs.current[i] = el}
                className="reveal relative bg-white rounded-xl p-5 text-center transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(0,0,128,0.08)', border: '1px solid #E2E5F0' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#000080'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,128,0.14)'; e.currentTarget.style.transform = 'translateY(-10px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,128,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span className="absolute top-3 right-4 font-display font-bold select-none pointer-events-none"
                  style={{ fontSize: 'clamp(3.5rem,6vw,5.5rem)', color: 'rgba(0,0,128,0.06)', lineHeight: 1 }}>
                  {i + 1}
                </span>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px z-10"
                    style={{ background: 'rgba(0,0,128,0.2)' }} />
                )}

                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10"
                  style={{ background: '#000080', boxShadow: '0 4px 12px rgba(0,0,128,0.3)' }}>
                  <Icon className="w-4 h-4 text-white" />
                </div>

                <h3 style={{ fontWeight: 600, fontSize: '1rem', color: '#1A1F36', letterSpacing: '-0.01em', marginBottom: 4 }} className="relative z-10">
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.6 }} className="relative z-10">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
