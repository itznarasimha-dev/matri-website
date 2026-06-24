import { Heart, Target, Eye, Users, Globe } from 'lucide-react'
import { useReveal, useRevealStagger } from '../useReveal'
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
  const ref1      = useReveal()
  const ref2      = useReveal()
  const ref3      = useReveal()
  const valueRefs = useRevealStagger(values.length)

  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>

      {/* Hero */}
      <div
        className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=90')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(10,14,26,0.52)' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <LotusIcon size={40} color="#E8836A" className="mx-auto mb-4 opacity-70" />
          <span className="section-tag" style={{ color: '#E8836A' }}>Our Story</span>
          <h1 className="font-display font-bold text-white mt-2 mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            About <em className="not-italic" style={{ color: '#E8836A' }}>Mangalayam</em>
          </h1>
          <p className="font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.70)' }}>
            Born from a deep respect for Telugu culture and a passion for modern technology,
            Mangalayam bridges tradition with innovation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Mission & Vision */}
        <div ref={ref1} className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {[
            { icon: Target, title: 'Our Mission', text: 'To provide the most trusted, safe, and emotionally intelligent matrimony platform for Telugu families worldwide — combining the warmth of tradition with the power of modern technology.' },
            { icon: Eye,    title: 'Our Vision',  text: 'To be the first choice for every Telugu family seeking a life partner — not just in India, but across every corner of the world where Telugu culture thrives.' },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{ background: '#FFFFFF', border: '1px solid #E2E5F0', boxShadow: '0 4px 24px rgba(35,56,176,0.08)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2338B0'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(35,56,176,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(35,56,176,0.08)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(35,56,176,0.08)' }}>
                <Icon className="w-6 h-6" style={{ color: '#2338B0' }} />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-3" style={{ color: '#1A1F36' }}>{title}</h2>
              <p className="font-body text-sm leading-relaxed" style={{ color: '#6B7280' }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div ref={ref2} className="reveal mb-20">
          <div className="text-center mb-10">
            <span className="section-tag">Core Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  ref={el => valueRefs.current[i] = el}
                  data-idx={i}
                  className="reveal rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
                  style={{ background: '#FFFFFF', border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(35,56,176,0.06)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#2338B0'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(35,56,176,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,56,176,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'rgba(35,56,176,0.08)' }}>
                    <Icon className="w-6 h-6" style={{ color: '#2338B0' }} />
                  </div>
                  <h3 className="font-heading font-bold mb-2" style={{ color: '#1A1F36' }}>{v.title}</h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: '#6B7280' }}>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div ref={ref3} className="reveal">
          <div className="text-center mb-10">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">How We Grew</h2>
          </div>
          <div className="relative pl-8 space-y-8 max-w-2xl mx-auto"
            style={{ borderLeft: '2px solid rgba(35,56,176,0.15)' }}>
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <div
                  className="absolute -left-[41px] top-0 w-5 h-5 rounded-full"
                  style={{ background: '#2338B0', border: '3px solid #F0F2F8', boxShadow: '0 0 0 2px #2338B0' }}
                />
                <span className="font-body text-xs font-bold" style={{ color: '#E8836A' }}>{m.year}</span>
                <h3 className="font-heading font-bold mt-1 mb-1" style={{ color: '#1A1F36' }}>{m.title}</h3>
                <p className="font-body text-sm" style={{ color: '#6B7280' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </main>
  )
}
