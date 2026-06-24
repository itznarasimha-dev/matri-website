import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ShieldCheck, Heart, Users, MapPin, Calendar, Search } from 'lucide-react'

const heroBg = '/hero-background.jpg'

const STATS = [
  { icon: Users,       value: '2,00,000+', label: 'Verified Profiles' },
  { icon: Heart,       value: '4,800+',    label: 'Happy Marriages'   },
  { icon: ShieldCheck, value: '98%',       label: 'Satisfaction Rate' },
]

export default function Hero() {
  const [gender,   setGender]   = useState('bride')
  const [ageRange, setAgeRange] = useState('22-30')
  const [location, setLocation] = useState('Any')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const [ageMin, ageMax] = ageRange.split('-')
    navigate(`/matches?gender=${gender}&ageMin=${ageMin}&ageMax=${ageMax}&location=${location}`)
  }

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
      }} />

      {/* No overlay */}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(110px, 15vh, 150px) 1.5rem clamp(60px, 8vh, 100px)',
      }}>

        {/* Badge */}
        <div style={{ marginBottom: 28, animation: 'hup 0.5s ease both' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(232,131,106,0.12)',
            border: '1px solid rgba(232,131,106,0.35)',
            borderRadius: 100, padding: '7px 20px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8836A', flexShrink: 0 }} />
            <span style={{ fontFamily: '"Noto Serif Telugu", serif', fontSize: 12, color: '#E8836A', letterSpacing: '0.06em' }}>మంగళాయం</span>
            <span style={{ width: 1, height: 14, background: 'rgba(232,131,106,0.3)', flexShrink: 0 }} />
            <span style={{ fontSize: 11, color: 'rgba(232,131,106,0.85)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Telugu Matrimony</span>
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
          fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em',
          color: '#fff', maxWidth: 760, marginBottom: 16,
          animation: 'hup 0.6s ease 0.1s both',
        }}>
          Find Your Perfect<br />
          <span style={{
            background: 'linear-gradient(90deg, #E8836A 0%, #F5B49A 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Telugu Life Partner</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: '1rem', color: 'rgba(255,255,255,0.52)',
          maxWidth: 460, lineHeight: 1.8, marginBottom: 40,
          animation: 'hup 0.6s ease 0.18s both',
        }}>
          Trusted by lakhs of Telugu families across India &amp; abroad.
          Verified profiles, horoscope matching &amp; dedicated support.
        </p>

        {/* Search card */}
        <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: 720, marginBottom: 14, animation: 'hup 0.6s ease 0.26s both' }}>

          {/* Gender pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            {[['bride', 'Bride'], ['groom', 'Groom']].map(([val, lbl]) => (
              <button key={val} type="button" onClick={() => setGender(val)} style={{
                padding: '9px 32px', borderRadius: 100,
                border: gender === val ? '2px solid #fff' : '2px solid rgba(255,255,255,0.25)',
                background: gender === val ? '#fff' : 'transparent',
                color: gender === val ? '#000080' : 'rgba(255,255,255,0.65)',
                fontFamily: 'inherit', fontWeight: 700, fontSize: '0.85rem',
                cursor: 'pointer', transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
              }}>
                {lbl}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div style={{
            display: 'flex', alignItems: 'stretch',
            background: '#fff',
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          }}>

            {/* Age */}
            <div style={{ flex: 1, padding: '15px 22px', borderRight: '1.5px solid #F0F0F0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <Calendar size={11} color="#9CA3AF" strokeWidth={2.5} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF' }}>Age Range</span>
              </div>
              <select value={ageRange} onChange={e => setAgeRange(e.target.value)} style={{
                background: 'transparent', border: 'none', outline: 'none',
                color: '#111827', fontSize: '0.92rem', fontWeight: 700,
                cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', fontFamily: 'inherit',
                padding: 0,
              }}>
                {[['18-25','18 – 25 yrs'],['22-30','22 – 30 yrs'],['25-35','25 – 35 yrs'],['30-40','30 – 40 yrs']].map(([v,l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div style={{ flex: 1, padding: '15px 22px', borderRight: '1.5px solid #F0F0F0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <MapPin size={11} color="#9CA3AF" strokeWidth={2.5} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9CA3AF' }}>Location</span>
              </div>
              <select value={location} onChange={e => setLocation(e.target.value)} style={{
                background: 'transparent', border: 'none', outline: 'none',
                color: '#111827', fontSize: '0.92rem', fontWeight: 700,
                cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', fontFamily: 'inherit',
                padding: 0,
              }}>
                {['Any','Hyderabad','Vijayawada','Visakhapatnam','Bangalore','Chennai','USA','UK'].map(v => (
                  <option key={v} value={v}>{v === 'Any' ? 'Anywhere' : v}</option>
                ))}
              </select>
            </div>

            {/* Button */}
            <button type="submit" style={{
              flexShrink: 0, padding: '0 32px',
              background: 'linear-gradient(135deg, #000080 0%, #1a1aad 100%)',
              color: '#fff', border: 'none', cursor: 'pointer',
              fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'filter 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            >
              <Search size={15} strokeWidth={2.5} />
              Find Match
            </button>
          </div>
        </form>

        {/* Trust text */}
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 36, animation: 'hup 0.5s ease 0.32s both', letterSpacing: '0.03em' }}>
          Free to join &nbsp;&middot;&nbsp; No hidden charges &nbsp;&middot;&nbsp; 100% verified profiles
        </p>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12,
          marginBottom: 56, animation: 'hup 0.6s ease 0.38s both',
        }}>
          <Link to="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 30px', borderRadius: 100,
            background: '#E8836A', color: '#fff',
            fontWeight: 700, fontSize: '0.875rem',
            boxShadow: '0 8px 28px rgba(232,131,106,0.45)',
            transition: 'all 0.2s', textDecoration: 'none',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(232,131,106,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,131,106,0.45)' }}
          >
            Create Free Profile <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
          <Link to="/success-stories" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 30px', borderRadius: 100,
            border: '1.5px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.8)',
            fontWeight: 600, fontSize: '0.875rem',
            transition: 'all 0.2s', textDecoration: 'none',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
          >
            View Success Stories
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          animation: 'hup 0.6s ease 0.44s both',
          gap: 0,
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 16,
          overflow: 'hidden',
          maxWidth: 520, width: '100%',
        }}>
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div key={i} style={{
              flex: '1 1 120px',
              padding: '22px 20px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
            }}>
              <Icon size={17} color="#E8836A" strokeWidth={2} />
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.09em' }}>{label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll hint */}
      {!scrolled && (
        <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <ChevronDown size={18} className="animate-bounce" style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
      )}

      <style>{`
        @keyframes hup {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
