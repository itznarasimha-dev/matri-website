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
    <section className="py-10 sm:py-14 lg:py-16" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center mb-8 sm:mb-10">
          <span className="section-tag" style={{ color: '#2338B0' }}>The Mangalayam Journey</span>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#1A1F36', lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: 4 }}>
            Find Your Perfect Match
            <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, fontSize: 'clamp(0.875rem, 1.4vw, 1rem)', color: '#6B7280', display: 'block', marginTop: 4 }}>in 4 Simple Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                ref={el => cardRefs.current[i] = el}
                className="reveal relative bg-white rounded-xl p-5 text-center transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(35,56,176,0.08)', border: '1px solid #E2E5F0' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#2338B0'
                  e.currentTarget.style.boxShadow   = '0 16px 48px rgba(35,56,176,0.14)'
                  e.currentTarget.style.transform   = 'translateY(-10px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E2E5F0'
                  e.currentTarget.style.boxShadow   = '0 2px 16px rgba(35,56,176,0.08)'
                  e.currentTarget.style.transform   = 'translateY(0)'
                }}
              >
                {/* Step number watermark */}
                <span className="absolute top-3 right-4 font-display font-bold select-none pointer-events-none"
                  style={{ fontSize: 'clamp(3.5rem,6vw,5.5rem)', color: 'rgba(35,56,176,0.06)', lineHeight: 1 }}>
                  {i + 1}
                </span>

                {/* Connector line for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px z-10"
                    style={{ background: 'linear-gradient(to right, #2338B0, rgba(35,56,176,0.2))' }} />
                )}

                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10"
                  style={{ background: 'linear-gradient(135deg, #2338B0, #3D52C8)', boxShadow: '0 4px 12px rgba(35,56,176,0.3)' }}>
                  <Icon className="w-4 h-4 text-white" />
                </div>

                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#1A1F36', letterSpacing: '-0.01em', marginBottom: 4 }} className="relative z-10">
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.6 }} className="relative z-10">
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
