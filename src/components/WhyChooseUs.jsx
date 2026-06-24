import { Link } from 'react-router-dom'
import { Shield, Globe, Lock, Star, Users, Phone } from 'lucide-react'
import { useReveal } from '../useReveal'

const features = [
  { icon: Shield, title: '100% Verified',          desc: 'Every profile manually reviewed by our dedicated trust & safety team.' },
  { icon: Globe,  title: 'NRI Connect',             desc: 'Dedicated support for USA, UK, Australia, and Gulf Telugu families.' },
  { icon: Lock,   title: 'Privacy First',           desc: 'Phone and email hidden until both parties give explicit consent.' },
  { icon: Star,   title: 'Horoscope Match',         desc: 'Built-in Vedic horoscope compatibility scoring for every profile.' },
  { icon: Users,  title: 'Family-Friendly',         desc: 'Profiles visible to the whole family, not just individuals.' },
  { icon: Phone,  title: 'Relationship Managers',   desc: 'Dedicated advisors assigned to every Premium member.' },
]

export default function WhyChooseUs() {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className="py-16 md:py-28" style={{ background: '#F0F4FF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">

          {/* Left — Illustration panel */}
          <div ref={leftRef} className="reveal-left">
            <div className="rounded-3xl overflow-hidden relative"
              style={{ background: 'linear-gradient(135deg, #2338B0 0%, #3D52C8 100%)', aspectRatio: '4/5' }}>
              <svg viewBox="0 0 400 500" className="w-full h-full" style={{ opacity: 0.9 }}>
                <circle cx="200" cy="250" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                <circle cx="200" cy="250" r="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
                <circle cx="200" cy="250" r="100" stroke="rgba(232,131,106,0.12)"  strokeWidth="1" fill="none" />

                <ellipse cx="155" cy="190" rx="28" ry="34" fill="rgba(255,255,255,0.25)" />
                <path d="M127 224 Q155 310 130 400 L180 400 Q175 310 185 280 Q195 310 190 400 L210 400 Q185 310 183 224 Z" fill="rgba(255,255,255,0.2)" />
                <path d="M127 224 Q100 270 95 360 L135 360 Q130 270 155 280 Z" fill="rgba(232,131,106,0.35)" />

                <ellipse cx="245" cy="185" rx="26" ry="32" fill="rgba(255,255,255,0.2)" />
                <path d="M219 217 Q225 310 215 400 L260 400 Q255 310 265 280 Q270 310 268 400 L285 400 Q278 310 271 217 Z" fill="rgba(255,255,255,0.18)" />
                <path d="M219 217 Q205 260 208 340 L225 340 Q222 270 235 260 Z" fill="rgba(232,131,106,0.25)" />

                <path d="M175 210 Q200 230 225 210" stroke="#E8836A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <circle cx="200" cy="228" r="5" fill="#E8836A" opacity="0.9" />

                {[0,60,120,180,240,300].map((a, i) => (
                  <circle key={i}
                    cx={200 + 170 * Math.cos(a * Math.PI / 180)}
                    cy={250 + 170 * Math.sin(a * Math.PI / 180)}
                    r="3" fill="#E8836A" opacity="0.4" />
                ))}
              </svg>
              <div className="absolute bottom-0 left-0 right-0 p-8"
                style={{ background: 'linear-gradient(to top, rgba(26,31,54,0.9), transparent)' }}>
                <p className="font-telugu text-base font-bold" style={{ color: '#E8836A' }}>మంగళాయం</p>
                <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 700, color: 'white', marginTop: 4 }}>Telugu. Trusted. Timeless.</p>
              </div>
            </div>
          </div>

          {/* Right — Features */}
          <div ref={rightRef} className="reveal-right">
            <span className="section-tag" style={{ color: '#2338B0' }}>Why Mangalayam</span>
            <h2 className="section-title mb-3">
              Built for Telugu Families,<br />By Telugu Families
            </h2>
            <p className="font-body mb-10 max-w-lg" style={{ color: '#6B7280' }}>
              Two decades of trust. Thousands of happy unions. One platform built with the heart of Telugu culture.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={f.title} className="flex items-start gap-4 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(35,56,176,0.1)' }}>
                      <Icon className="w-5 h-5" style={{ color: '#2338B0' }} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-0.5" style={{ color: '#1A1F36' }}>{f.title}</h4>
                      <p className="font-body text-sm" style={{ color: '#6B7280' }}>{f.desc}</p>
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
