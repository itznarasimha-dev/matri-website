import { Target, Eye, Heart, Star, Users, Globe, Shield, Lightbulb, Lock } from 'lucide-react'
import { useReveal, useRevealStagger } from '../useReveal'
import CTASection from '../components/CTASection'
import weddingBg from '../assets/wedding hands background.jpg'

const missions = [
  {
    icon: Heart,
    title: 'Unite Indian Hearts',
    desc: 'To bring together individuals and families across India and the world through a trusted, culturally rooted matrimony platform.',
  },
  {
    icon: Shield,
    title: 'Build Trust & Safety',
    desc: 'To provide a 100% verified, safe, and transparent environment where every profile is genuine and every interaction is respectful.',
  },
  {
    icon: Users,
    title: 'Honour Family Values',
    desc: 'To respect the role of families in the marriage process while empowering individuals to make their own choices with dignity.',
  },
  {
    icon: Globe,
    title: 'Serve the Indian Diaspora',
    desc: 'To extend our services to Indian families in the USA, UK, Australia, Gulf, and beyond — bridging distances and cultures seamlessly.',
  },
]

const visions = [
  {
    icon: Lightbulb,
    title: 'The First Choice Platform',
    desc: 'To become the most trusted and preferred matrimony platform for every Indian family — whether in a small town or a global city.',
  },
  {
    icon: Star,
    title: 'AI-Powered Matching',
    desc: 'To leverage cutting-edge technology and Vedic compatibility science to deliver the most accurate, meaningful matches for every member.',
  },
  {
    icon: Target,
    title: '1 Lakh Happy Unions',
    desc: 'To celebrate 1,00,000 successful Telugu marriages by 2030, creating a legacy of love, trust, and cultural pride.',
  },
  {
    icon: Eye,
    title: 'Redefine Matrimony',
    desc: 'To transform how Telugu families find life partners — from a stressful search to a joyful, confident, and culturally meaningful journey.',
  },
]

const values = [
  { icon: Heart,     title: 'Respect',     desc: 'Every person deserves dignity, privacy, and respect throughout their journey.' },
  { icon: Shield,    title: 'Trust',       desc: 'We verify every profile and stand behind every match we facilitate.' },
  { icon: Lightbulb, title: 'Innovation',  desc: 'We combine tradition with technology to serve modern Indian families.' },
  { icon: Star,      title: 'Love',        desc: "We genuinely care about every family's happiness and success." },
  { icon: Globe,     title: 'Inclusivity', desc: 'We welcome all Indian communities — across castes, regions, and borders.' },
  { icon: Lock,      title: 'Privacy',     desc: 'Your data and contact details are protected at every step.' },
]

export default function VisionMission() {
  const heroRef    = useReveal()
  const missionRef = useReveal()
  const visionRef  = useReveal()
  const valuesRef  = useRevealStagger(values.length)

  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>

      {/* Hero */}
      <div className="relative pt-32 sm:pt-36 pb-20 text-center overflow-hidden"
        style={{ backgroundImage: `url(${weddingBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '55vh' }}>
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,46,0.6)' }} />
        <div ref={heroRef} className="reveal relative z-10 max-w-2xl mx-auto px-6">
          <span className="section-tag" style={{ color: '#E8836A' }}>Who We Are</span>
          <h1 className="font-display font-bold text-white mt-2 mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            Our Vision &amp; Mission
          </h1>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Guided by purpose, driven by love — this is why Mangalayam exists.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

        {/* Mission */}
        <div ref={missionRef} className="reveal mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-title">What We Set Out to Do</h2>
            <p className="font-body text-sm mt-3 max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              Mangalayam was founded with a clear purpose — to make finding a life partner a dignified, joyful, and culturally meaningful experience for every Indian family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {missions.map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2"
                style={{ background: '#fff', border: '1px solid #E2E5F0', boxShadow: '0 4px 24px rgba(0,0,128,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#000080'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,128,0.14)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,128,0.07)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(0,0,128,0.08)' }}>
                  <Icon className="w-6 h-6" style={{ color: '#000080' }} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#1A1F36' }}>{title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div ref={visionRef} className="reveal mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="section-tag">Our Vision</span>
            <h2 className="section-title">Where We're Headed</h2>
            <p className="font-body text-sm mt-3 max-w-xl mx-auto" style={{ color: '#6B7280' }}>
              We dream of a world where every Indian heart finds its match — with confidence, joy, and the blessings of family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {visions.map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2"
                style={{ background: 'linear-gradient(135deg, #000080, #1a1aad)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 24px rgba(0,0,128,0.2)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <Icon className="w-6 h-6" style={{ color: '#E8836A' }} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#fff' }}>{title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-10">
          <span className="section-tag">Core Values</span>
          <h2 className="section-title">The Heart Behind Mangalayam</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
            <div key={v.title}
              ref={el => valuesRef.current[i] = el}
              data-idx={i}
              className="reveal rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
              style={{ background: '#fff', border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(0,0,128,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#000080'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,128,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,128,0.06)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: 'rgba(0,0,128,0.08)' }}>
                <Icon className="w-6 h-6" style={{ color: '#000080' }} />
              </div>
              <h3 className="font-heading font-bold mb-2" style={{ color: '#1A1F36' }}>{v.title}</h3>
              <p className="font-body text-xs leading-relaxed" style={{ color: '#6B7280' }}>{v.desc}</p>
            </div>
            )
          })}
        </div>
      </div>

      <CTASection />
    </main>
  )
}
