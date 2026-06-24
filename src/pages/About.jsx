import { Heart, Target, Eye, Users, Award, Globe } from 'lucide-react'
import { useReveal } from '../useReveal'
import CTASection from '../components/CTASection'
import LotusIcon from '../components/LotusIcon'

const values = [
  { icon: Heart,  title: 'Love & Respect',  desc: 'We believe every person deserves to find a loving, respectful partner.' },
  { icon: Target, title: 'Trust First',      desc: 'Every profile is manually verified. We take trust seriously.' },
  { icon: Users,  title: 'Family Values',    desc: 'We respect and celebrate Telugu family traditions and culture.' },
  { icon: Globe,  title: 'Global Reach',     desc: 'Connecting Telugu hearts across India and 15+ countries worldwide.' },
]

const milestones = [
  { year: '2018', title: 'Mangalayam Founded',  desc: 'Started with a vision to modernize Telugu matrimony.' },
  { year: '2019', title: '1,000 Profiles',       desc: 'Reached our first milestone with growing trust.' },
  { year: '2021', title: 'NRI Expansion',        desc: 'Extended services to Telugu families worldwide.' },
  { year: '2022', title: '5,000 Weddings',       desc: 'Celebrated 5000+ successful matches made.' },
  { year: '2024', title: '50,000 Members',       desc: 'Became the most trusted Telugu matrimony platform.' },
]

export default function About() {
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()

  return (
    <main className="min-h-screen" style={{ background: '#2C1654' }}>
      {/* Hero */}
      <div
        className="relative pt-24 pb-24 text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=90')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(44,22,84,0.60) 0%, rgba(61,31,107,0.50) 50%, rgba(44,22,84,0.60) 100%)' }} />
        <div className="absolute inset-0 kolam-anim pointer-events-none opacity-10" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <LotusIcon size={40} color="#D4A017" className="mx-auto mb-4 opacity-60" />
          <span className="section-tag">Our Story</span>
          <h1 className="font-display font-bold text-white mt-2 mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            About <em className="not-italic" style={{ color: '#7B2FBE' }}>Mangalayam</em>
          </h1>
          <p className="font-body leading-relaxed" style={{ color: 'rgba(196,168,130,0.9)' }}>
            Born from a deep respect for Telugu culture and a passion for modern technology,
            Mangalayam bridges tradition with innovation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Mission & Vision */}
        <div ref={ref1} className="reveal grid md:grid-cols-2 gap-8 mb-20">
          {[
            { icon: Target, title: 'Our Mission', text: 'To provide the most trusted, safe, and emotionally intelligent matrimony platform for Telugu families worldwide — combining the warmth of tradition with the power of modern technology.' },
            { icon: Eye,    title: 'Our Vision',  text: 'To be the first choice for every Telugu family seeking a life partner — not just in India, but across every corner of the world where Telugu culture thrives.' },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{ background: '#3D1F6B', border: '1px solid rgba(212,160,23,0.15)', boxShadow: '0 4px 24px rgba(123,47,190,0.08)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(123,47,190,0.1)' }}
              >
                <Icon className="w-6 h-6" style={{ color: '#7B2FBE' }} />
              </div>
              <h2 className="font-heading text-white text-2xl font-bold mb-3">{title}</h2>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div ref={ref2} className="reveal mb-20">
          <div className="text-center mb-10">
            <span className="section-tag">Core Values</span>
            <h2 className="section-title-light">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: '#3D1F6B',
                    border: '1px solid rgba(212,160,23,0.12)',
                    transitionDelay: `${i * 80}ms`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.5)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(123,47,190,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(123,47,190,0.1)' }}>
                    <Icon className="w-6 h-6" style={{ color: '#7B2FBE' }} />
                  </div>
                  <h3 className="font-heading text-white font-bold mb-2">{v.title}</h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div ref={ref3} className="reveal">
          <div className="text-center mb-10">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title-light">How We Grew</h2>
          </div>
          <div className="relative pl-8 space-y-8 max-w-2xl mx-auto" style={{ borderLeft: '2px solid rgba(212,160,23,0.2)' }}>
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <div
                  className="absolute -left-[41px] top-0 w-5 h-5 rounded-full"
                  style={{ background: '#7B2FBE', border: '2px solid #2C1654', boxShadow: '0 0 12px rgba(123,47,190,0.4)' }}
                />
                <span className="font-body text-xs font-bold" style={{ color: '#D4A017' }}>{m.year}</span>
                <h3 className="font-heading text-white font-bold mt-1 mb-1">{m.title}</h3>
                <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </main>
  )
}
