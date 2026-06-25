import { Link } from 'react-router-dom'
import { Shield, Globe, Lock, Star, Users, Phone, Award } from 'lucide-react'
import { useReveal, useRevealStagger } from '../useReveal'
import weddingCarImg from '../assets/wedding car background.jpg'

const features = [
  { icon: Shield, title: '100% Verified',        desc: 'Every profile manually reviewed by our dedicated trust & safety team.' },
  { icon: Globe,  title: 'NRI Connect',           desc: 'Dedicated support for Indian families in USA, UK, Australia, and Gulf.' },
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
    <section
      className="py-10 sm:py-14 lg:py-16"
      style={{
        backgroundImage: `url(${weddingCarImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[38%_62%] gap-8 lg:gap-12 items-center">

          {/* Left — plain text, no card */}
          <div ref={leftRef} className="reveal-left hidden sm:flex flex-col justify-center gap-6" style={{ minHeight: 420 }}>
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <Award className="w-5 h-5" style={{ color: '#fff' }} />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#fff', marginBottom: 8, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>20+ Years of Trust</h3>
              <p style={{ fontSize: '0.9rem', color: '#f0f0f0', lineHeight: 1.7, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>Since 2003, Mangalayam has united thousands of Indian families across India and abroad with care, culture, and commitment.</p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#fff', marginBottom: 8, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>Rooted in Indian Culture</h3>
              <p style={{ fontSize: '0.9rem', color: '#f0f0f0', lineHeight: 1.7, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>We honour traditions — from gotra matching to regional preferences — while embracing modern values of consent and privacy.</p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#fff', marginBottom: 8, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>50,000+ Happy Unions</h3>
              <p style={{ fontSize: '0.9rem', color: '#f0f0f0', lineHeight: 1.7, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>Real couples. Real stories. Every success fuels our mission to bring more Telugu hearts together.</p>
            </div>
          </div>

          {/* Right features */}
          <div ref={rightRef} className="reveal-right rounded-2xl p-4 sm:p-6" style={{ background: 'rgba(255,255,255,0.35)', backdropFilter: 'blur(2px)', border: '1px solid rgba(255,255,255,0.5)' }}>
            <span className="section-tag" style={{ color: '#000080' }}>Why Mangalayam</span>
            <h2 style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#1A1F36', lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: 4, marginBottom: 8 }}>
              Built for Indian Families,
              <span style={{ fontWeight: 400, fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: '#6B7280', display: 'block', marginTop: 4 }}>By Indian Families</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              Two decades of trust. Thousands of happy unions. One platform built with heart and tradition.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6 sm:mb-8">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={f.title}
                    ref={el => featureRefs.current[i] = el}
                    data-idx={i}
                    className="flex items-start gap-2 reveal"
                    style={{ transitionDelay: `${i * 80}ms`, background: 'rgba(255,255,255,0.7)', borderRadius: 10, padding: '10px 12px', border: '1px solid rgba(0,0,128,0.12)' }}>
                    <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(0,0,128,0.12)' }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: '#000080' }} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.8rem', color: '#1A1F36', marginBottom: 2 }}>{f.title}</h4>
                      <p style={{ fontSize: '0.72rem', color: '#374151', lineHeight: 1.5 }}>{f.desc}</p>
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
