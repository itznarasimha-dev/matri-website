import { Link } from 'react-router-dom'
import { Shield, Globe, Lock, Star, Users, Phone } from 'lucide-react'
import { useReveal, useRevealStagger } from '../useReveal'

const features = [
  { icon: Shield, title: '100% Verified',        desc: 'Every profile manually reviewed by our dedicated trust & safety team.' },
  { icon: Globe,  title: 'NRI Connect',           desc: 'Dedicated support for USA, UK, Australia, and Gulf Telugu families.' },
  { icon: Lock,   title: 'Privacy First',         desc: 'Phone and email hidden until both parties give explicit consent.' },
  { icon: Star,   title: 'Horoscope Match',       desc: 'Built-in Vedic horoscope compatibility scoring for every profile.' },
  { icon: Users,  title: 'Family-Friendly',       desc: 'Profiles visible to the whole family, not just individuals.' },
  { icon: Phone,  title: 'Relationship Managers', desc: 'Dedicated advisors assigned to every Premium member.' },
]

export default function WhyChooseUs() {
  const leftRef     = useReveal()
  const rightRef    = useReveal()
  const featureRefs = useRevealStagger(features.length)

  return (
    <section className="py-10 sm:py-14 lg:py-16" style={{ background: '#F0F4FF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[38%_62%] gap-8 lg:gap-12 items-center">

          {/* Left — real photo */}
          <div ref={leftRef} className="reveal-left hidden sm:block">
            <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=700&q=85"
                alt="Telugu wedding couple"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right features */}
          <div ref={rightRef} className="reveal-right">
            <span className="section-tag" style={{ color: '#000080' }}>Why Mangalayam</span>
            <h2 style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#1A1F36', lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: 4, marginBottom: 8 }}>
              Built for Telugu Families,
              <span style={{ fontWeight: 400, fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: '#6B7280', display: 'block', marginTop: 4 }}>By Telugu Families</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              Two decades of trust. Thousands of happy unions. One platform built with the heart of Telugu culture.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={f.title}
                    ref={el => featureRefs.current[i] = el}
                    data-idx={i}
                    className="flex items-start gap-3 reveal"
                    style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,0,128,0.1)' }}>
                      <Icon className="w-4 h-4" style={{ color: '#000080' }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1A1F36', marginBottom: 2 }}>{f.title}</h4>
                      <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/register" className="btn-primary">Register Free</Link>
              <Link to="/contact"  className="btn-outline-crimson">Talk to an Advisor</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
