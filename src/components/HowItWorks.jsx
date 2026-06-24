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
    }, { threshold: 0.15 })
    if (cardRefs.current[0]) observer.observe(cardRefs.current[0])
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="reveal text-center mb-16">
          <span className="section-tag" style={{ color: '#2338B0' }}>The Mangalayam Journey</span>
          <h2 className="section-title">Find Your Perfect Match<br />in 4 Simple Steps</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                ref={el => cardRefs.current[i] = el}
                className="reveal relative bg-white rounded-2xl p-7 text-center transition-all duration-300"
                style={{ boxShadow: '0 2px 16px rgba(35,56,176,0.08)', border: '1px solid #E2E5F0' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#2338B0'
                  e.currentTarget.style.boxShadow   = '0 16px 48px rgba(35,56,176,0.14)'
                  e.currentTarget.style.transform   = 'translateY(-12px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E2E5F0'
                  e.currentTarget.style.boxShadow   = '0 2px 16px rgba(35,56,176,0.08)'
                  e.currentTarget.style.transform   = 'translateY(0)'
                }}
              >
                <span className="absolute top-3 right-4 font-display font-bold select-none pointer-events-none"
                  style={{ fontSize: '5.5rem', color: 'rgba(35,56,176,0.06)', lineHeight: 1 }}>
                  {i + 1}
                </span>

                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                  style={{ background: '#2338B0' }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2 relative z-10" style={{ color: '#1A1F36' }}>
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed relative z-10" style={{ color: '#6B7280' }}>
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
