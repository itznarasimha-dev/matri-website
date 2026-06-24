import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react'
import { profiles } from '../data/profiles'

const PHOTOS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=85',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
]

const STATS = [
  { value: '2L+',  label: 'Verified Profiles' },
  { value: '4800+', label: 'Marriages' },
  { value: '98%',  label: 'Satisfaction' },
]

export default function Hero() {
  const [gender, setGender]   = useState('bride')
  const [ageMin, setAgeMin]   = useState('22')
  const [ageMax, setAgeMax]   = useState('30')
  const [location, setLocation] = useState('Any')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/matches?gender=${gender}&ageMin=${ageMin}&ageMax=${ageMax}&location=${location}`)
  }

  return (
    <section className="relative min-h-screen flex overflow-hidden" style={{ background: '#0E0B14' }}>

      {/* ── LEFT PANEL ─────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-8 md:px-14 lg:px-20 py-24">

        {/* Ambient glow */}
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(35,56,176,0.18) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-20 w-64 h-64 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(248,181,0,0.08) 0%, transparent 70%)' }} />

        {/* Telugu script badge */}
        <div className="flex items-center gap-3 mb-10" style={{ animation: 'fadeIn 0.6s ease 0.1s both' }}>
          <div className="h-px w-8" style={{ background: '#F8B500' }} />
          <span style={{ fontFamily: '"Noto Serif Telugu", serif', fontSize: '13px', color: '#F8B500', letterSpacing: '0.08em' }}>
            మంగళాయం
          </span>
          <div className="h-px w-8" style={{ background: '#F8B500' }} />
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-bold mb-6 leading-[1.08]"
          style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: '#FFFFFF', letterSpacing: '-0.02em', animation: 'fadeIn 0.7s ease 0.2s both' }}
        >
          Where Telugu<br />
          Hearts Find<br />
          <em className="not-italic" style={{ color: '#F8B500' }}>Their Forever</em>
        </h1>

        {/* Divider line */}
        <div className="flex items-center gap-4 mb-6" style={{ animation: 'fadeIn 0.6s ease 0.35s both' }}>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'rgba(248,181,0,0.5)' }} />
          <p className="font-body text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Connecting verified Telugu families across India & NRI communities with trust and tradition.
          </p>
        </div>

        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-8" style={{ animation: 'fadeIn 0.7s ease 0.45s both' }}>
          <div
            className="rounded-2xl p-1.5 mb-3"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
          >
            <div className="grid grid-cols-3 gap-1 mb-1.5">
              <select
                value={gender}
                onChange={e => setGender(e.target.value)}
                className="font-body text-sm px-3 py-3 rounded-xl outline-none"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: 'none' }}
              >
                <option value="bride" style={{ background: '#1A1F36' }}>Bride</option>
                <option value="groom" style={{ background: '#1A1F36' }}>Groom</option>
              </select>
              <select
                value={`${ageMin}-${ageMax}`}
                onChange={e => { const [mn, mx] = e.target.value.split('-'); setAgeMin(mn); setAgeMax(mx) }}
                className="font-body text-sm px-3 py-3 rounded-xl outline-none"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: 'none' }}
              >
                <option value="18-25" style={{ background: '#1A1F36' }}>18 – 25</option>
                <option value="22-30" style={{ background: '#1A1F36' }}>22 – 30</option>
                <option value="25-35" style={{ background: '#1A1F36' }}>25 – 35</option>
                <option value="30-40" style={{ background: '#1A1F36' }}>30 – 40</option>
              </select>
              <select
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="font-body text-sm px-3 py-3 rounded-xl outline-none"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: 'none' }}
              >
                {['Any','Hyderabad','Vijayawada','Visakhapatnam','Bangalore','Chennai','USA','UK'].map(l => (
                  <option key={l} style={{ background: '#1A1F36' }}>{l}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-body font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #2338B0, #3D52C8)', color: 'white', boxShadow: '0 4px 20px rgba(35,56,176,0.4)' }}
            >
              Find My Match <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="font-body text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Free to join · 2,00,000+ verified profiles
          </p>
        </form>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 mb-12" style={{ animation: 'fadeIn 0.6s ease 0.55s both' }}>
          <Link to="/register"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
            style={{ background: '#F8B500', color: '#0E0B14', boxShadow: '0 4px 20px rgba(248,181,0,0.35)' }}
          >
            Register Free
          </Link>
          <Link to="/success-stories"
            className="inline-flex items-center gap-2 font-body text-sm transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            View Success Stories →
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex gap-8" style={{ animation: 'fadeIn 0.6s ease 0.65s both' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="font-display font-bold text-2xl" style={{ color: '#F8B500', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div className="font-body text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL — portrait grid ────────────── */}
      <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full overflow-hidden">

        {/* Gradient fade to left */}
        <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0E0B14 0%, transparent 100%)' }} />
        {/* Gradient fade to bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0E0B14 0%, transparent 100%)' }} />

        {/* Two columns of portraits */}
        <div className="flex gap-3 h-full px-3 pt-8" style={{ marginLeft: '40px' }}>

          {/* Column 1 — scrolls up */}
          <div className="flex flex-col gap-3 w-1/2"
            style={{ animation: 'scrollUp 25s linear infinite' }}>
            {[...PHOTOS, ...PHOTOS].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shrink-0"
                style={{ height: '220px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                <img src={src} alt="" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(14,11,20,0.6) 0%, transparent 50%)' }} />
                {i % 3 === 0 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3" style={{ color: '#F8B500' }} />
                    <span className="font-body text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>Verified</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 2 — scrolls down, offset start */}
          <div className="flex flex-col gap-3 w-1/2"
            style={{ animation: 'scrollDown 30s linear infinite', marginTop: '-80px' }}>
            {[...PHOTOS.slice(3), ...PHOTOS, ...PHOTOS.slice(0, 3)].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shrink-0"
                style={{ height: '200px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                <img src={src} alt="" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(14,11,20,0.6) 0%, transparent 50%)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!scrolled && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-1">
          <span className="font-body text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
      )}

      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-20%); }
          100% { transform: translateY(30%); }
        }
      `}</style>
    </section>
  )
}
