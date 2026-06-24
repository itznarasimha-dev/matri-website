import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react'

const PHOTOS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=85',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
]

const STATS = [
  { value: '2L+', label: 'Verified Profiles' },
  { value: '4800+', label: 'Marriages' },
  { value: '98%', label: 'Satisfaction' },
]

export default function Hero() {
  const [gender, setGender] = useState('bride')
  const [ageMin, setAgeMin] = useState('22')
  const [ageMax, setAgeMax] = useState('30')
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

      {/* Mobile bg tint */}
      <div className="lg:hidden absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url(${PHOTOS[0]})`, backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.12 }} />

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(35,56,176,0.22) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-10 sm:left-20 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(232,131,106,0.12) 0%, transparent 70%)' }} />

      {/* ── LEFT PANEL ── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-5 sm:px-8 md:px-14 lg:px-20 pt-28 pb-14 lg:py-24">

        {/* Telugu badge */}
        <div className="flex items-center gap-3 mb-6 sm:mb-10" style={{ animation: 'slideUp 0.6s ease 0.1s both' }}>
          <div className="h-px w-6 sm:w-8" style={{ background: '#E8836A' }} />
          <span style={{ fontFamily: '"Noto Serif Telugu", serif', fontSize: '12px', color: '#E8836A', letterSpacing: '0.08em' }}>
            మంగళాయం
          </span>
          <div className="h-px w-6 sm:w-8" style={{ background: '#E8836A' }} />
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold mb-5 sm:mb-6 leading-[1.08]"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', color: '#FFFFFF', letterSpacing: '-0.02em', animation: 'slideUp 0.7s ease 0.2s both' }}
        >
          Where Telugu<br />
          Hearts Find<br />
          <em className="not-italic" style={{ color: '#E8836A' }}>Their Forever</em>
        </h1>

        {/* Subtext */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6" style={{ animation: 'slideUp 0.6s ease 0.35s both' }}>
          <div className="h-px w-10 shrink-0" style={{ background: 'rgba(232,131,106,0.5)' }} />
          <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 340 }}>
            Connecting verified Telugu families across India & NRI communities with trust and tradition.
          </p>
        </div>

        {/* Search form */}
        <form onSubmit={handleSearch} className="mb-6 sm:mb-8" style={{ animation: 'slideUp 0.7s ease 0.45s both' }}>
          <div className="rounded-2xl p-1.5 mb-3"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
            <div className="grid grid-cols-3 gap-1 mb-1.5">
              {[
                { val: gender, onChange: e => setGender(e.target.value), opts: [['bride','Bride'],['groom','Groom']] },
                { val: `${ageMin}-${ageMax}`, onChange: e => { const [mn,mx]=e.target.value.split('-'); setAgeMin(mn); setAgeMax(mx) }, opts: [['18-25','18–25'],['22-30','22–30'],['25-35','25–35'],['30-40','30–40']] },
                { val: location, onChange: e => setLocation(e.target.value), opts: ['Any','Hyderabad','Vijayawada','Visakhapatnam','Bangalore','Chennai','USA','UK'].map(l=>[l,l]) },
              ].map((s, idx) => (
                <select key={idx} value={s.val} onChange={s.onChange}
                  className="font-body text-xs sm:text-sm px-2 sm:px-3 py-2.5 sm:py-3 rounded-xl outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: 'none' }}>
                  {s.opts.map(([v,l]) => <option key={v} value={v} style={{ background: '#1A1F36' }}>{l}</option>)}
                </select>
              ))}
            </div>
            <button type="submit"
              className="w-full py-3 sm:py-3.5 rounded-xl font-body font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #2338B0, #3D52C8)', color: 'white', boxShadow: '0 4px 20px rgba(35,56,176,0.4)' }}>
              Find My Match <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="font-body text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Free to join · 2,00,000+ verified profiles
          </p>
        </form>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12" style={{ animation: 'slideUp 0.6s ease 0.55s both' }}>
          <Link to="/register"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm px-5 sm:px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: '#E8836A', color: '#ffffff', boxShadow: '0 4px 20px rgba(232,131,106,0.35)' }}>
            Register Free
          </Link>
          <Link to="/success-stories"
            className="inline-flex items-center gap-2 font-body text-sm transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
            View Success Stories →
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-5 sm:gap-8" style={{ animation: 'slideUp 0.6s ease 0.65s both' }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="font-display font-bold text-xl sm:text-2xl" style={{ color: '#E8836A', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div className="font-body text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL — portrait grid (desktop only) ── */}
      <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0E0B14 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0E0B14 0%, transparent 100%)' }} />

        <div className="flex gap-3 h-full px-3 pt-8" style={{ marginLeft: '40px' }}>
          <div className="flex flex-col gap-3 w-1/2" style={{ animation: 'scrollUp 25s linear infinite' }}>
            {[...PHOTOS, ...PHOTOS].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shrink-0"
                style={{ height: '220px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                <img src={src} alt="" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,11,20,0.6) 0%, transparent 50%)' }} />
                {i % 3 === 0 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3" style={{ color: '#E8836A' }} />
                    <span className="font-body text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>Verified</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-1/2" style={{ animation: 'scrollDown 30s linear infinite', marginTop: '-80px' }}>
            {[...PHOTOS.slice(3), ...PHOTOS, ...PHOTOS.slice(0, 3)].map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shrink-0"
                style={{ height: '200px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                <img src={src} alt="" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,11,20,0.6) 0%, transparent 50%)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!scrolled && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-1">
          <span className="font-body text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: 'rgba(255,255,255,0.3)' }} />
        </div>
      )}

      <style>{`
        @keyframes scrollUp { 0% { transform:translateY(0); } 100% { transform:translateY(-50%); } }
        @keyframes scrollDown { 0% { transform:translateY(-20%); } 100% { transform:translateY(30%); } }
        @keyframes slideUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  )
}
