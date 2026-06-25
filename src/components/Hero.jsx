import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ShieldCheck, Heart, Users, MapPin, Calendar, Search } from 'lucide-react'
import heroBg from '../assets/hero-background.jpg'

const STATS = [
  { icon: Users,       value: '2,00,000+', label: 'Verified Profiles' },
  { icon: Heart,       value: '4,800+',    label: 'Happy Marriages'   },
  { icon: ShieldCheck, value: '98%',       label: 'Satisfaction Rate' },
]

export default function Hero() {
  const [gender,   setGender]   = useState('female')
  const [ageRange, setAgeRange] = useState('22-30')
  const [location, setLocation] = useState('Any')
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    const resize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', fn, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    return () => { window.removeEventListener('scroll', fn); window.removeEventListener('resize', resize) }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const [ageMin, ageMax] = ageRange.split('-')
    navigate(`/matches?gender=${gender}&ageMin=${ageMin}&ageMax=${ageMax}&location=${location}`)
  }

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }} />
      <div style={{ position: 'absolute', inset: 0, background: isMobile ? 'rgba(0,0,0,0.45)' : 'transparent' }} />

      <div style={{
        position: 'relative', zIndex: 10, flex: 1,
        display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row',
        maxWidth: 1280, margin: '0 auto', width: '100%',
        padding: isMobile ? '100px 1.25rem 60px' : 'clamp(100px,12vh,130px) 2rem clamp(60px,8vh,100px)',
        gap: isMobile ? 32 : 40,
      }}>

        {/* LEFT — headline + CTAs */}
        <div style={{ flex: '0 0 auto', width: isMobile ? '100%' : 'clamp(300px, 46%, 560px)', textAlign: isMobile ? 'center' : 'left' }}>

          {/* Badge */}
          <div style={{ marginBottom: 20, animation: 'hup 0.5s ease both', display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,131,106,0.12)', border: '1px solid rgba(232,131,106,0.35)', borderRadius: 100, padding: '6px 18px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8836A', flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: 'rgba(232,131,106,0.85)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Indian Matrimony</span>
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', marginBottom: 14, animation: 'hup 0.6s ease 0.1s both' }}>
            Find Your Perfect<br />
            <span style={{ background: 'linear-gradient(90deg, #E8836A 0%, #F5B49A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Life Partner
            </span>
          </h1>

          {/* Subtext */}
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 28, animation: 'hup 0.6s ease 0.18s both' }}>
            Trusted by lakhs of Indian families across India & abroad.
            Verified profiles, horoscope matching & dedicated support.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32, justifyContent: isMobile ? 'center' : 'flex-start', animation: 'hup 0.6s ease 0.26s both' }}>
            <Link to="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 100, background: '#E8836A', color: '#fff', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 8px 28px rgba(232,131,106,0.45)', transition: 'all 0.2s', textDecoration: 'none' }}>
              Create Free Profile <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link to="/success-stories" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 100, border: '1.5px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '0.875rem', transition: 'all 0.2s', textDecoration: 'none' }}>
              Success Stories
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 0, background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, overflow: 'hidden', animation: 'hup 0.6s ease 0.34s both', maxWidth: isMobile ? '100%' : 420 }}>
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div key={i} style={{ flex: 1, padding: isMobile ? '12px 6px' : '16px 12px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Icon size={13} color="#E8836A" strokeWidth={2} />
                <div style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: isMobile ? 8 : 9.5, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — search card */}
        <div style={{ flex: '0 0 auto', width: isMobile ? '100%' : 'clamp(220px, 30%, 320px)', marginLeft: isMobile ? 0 : 'auto', animation: 'hup 0.6s ease 0.2s both' }}>
          <div style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 16, padding: '20px 18px', boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: 3 }}>Find Your Match</h3>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>2,00,000+ verified profiles</p>

            <form onSubmit={handleSearch}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                {[['female', 'Female'], ['male', 'Male']].map(([val, lbl]) => (
                  <button key={val} type="button" onClick={() => setGender(val)} style={{ flex: 1, padding: '8px 0', borderRadius: 8, border: gender === val ? '2px solid #fff' : '2px solid rgba(255,255,255,0.2)', background: gender === val ? '#fff' : 'transparent', color: gender === val ? '#000080' : 'rgba(255,255,255,0.6)', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                    {lbl}
                  </button>
                ))}
              </div>

              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                  <Calendar size={10} color="rgba(255,255,255,0.5)" strokeWidth={2.5} />
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Age Range</span>
                </div>
                <select value={ageRange} onChange={e => setAgeRange(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '9px 10px', outline: 'none', color: '#fff', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', fontFamily: 'inherit' }}>
                  {[['18-25','18 – 25 yrs'],['22-30','22 – 30 yrs'],['25-35','25 – 35 yrs'],['30-40','30 – 40 yrs']].map(([v,l]) => (
                    <option key={v} value={v} style={{ background: '#0a0a2e' }}>{l}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                  <MapPin size={10} color="rgba(255,255,255,0.5)" strokeWidth={2.5} />
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Location</span>
                </div>
                <select value={location} onChange={e => setLocation(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '9px 10px', outline: 'none', color: '#fff', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', fontFamily: 'inherit' }}>
                  {['Any','Hyderabad','Vijayawada','Visakhapatnam','Bangalore','Chennai','USA','UK'].map(v => (
                    <option key={v} value={v} style={{ background: '#0a0a2e' }}>{v === 'Any' ? 'Anywhere' : v}</option>
                  ))}
                </select>
              </div>

              <button type="submit" style={{ width: '100%', padding: '11px', background: '#000080', color: '#fff', border: 'none', borderRadius: 10, fontFamily: 'inherit', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, cursor: 'pointer', transition: 'filter 0.2s', boxShadow: '0 6px 18px rgba(0,0,128,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.2)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
              >
                <Search size={13} strokeWidth={2.5} /> Find My Match
              </button>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: 10 }}>Free to join · No hidden charges</p>
            </form>
          </div>
        </div>
      </div>

      {!scrolled && (
        <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <ChevronDown size={18} className="animate-bounce" style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
      )}

      <style>{`@keyframes hup { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </section>
  )
}
