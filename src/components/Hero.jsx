import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, Shield, Phone, Globe, Star } from 'lucide-react'
import { profiles } from '../data/profiles'
import heroBg from '../assets/hero-background.jpg'

const words = ['Where', 'Telugu', 'Hearts', 'Find', 'Their', 'Home']

const trustBadges = [
  { icon: Shield, label: 'Verified Profiles' },
  { icon: Phone,  label: '24/7 Support' },
  { icon: Globe,  label: 'NRI Friendly' },
]

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true)
  const [gender, setGender]         = useState('bride')
  const [ageMin, setAgeMin]         = useState('22')
  const [ageMax, setAgeMax]         = useState('30')
  const [location, setLocation]     = useState('Any')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/matches?gender=${gender}&ageMin=${ageMin}&ageMax=${ageMax}&location=${location}`)
  }

  const featuredCards = profiles.slice(0, 3)

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >


      <div className="max-w-7xl mx-auto px-6 w-full py-16 relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center min-h-[80vh]">

          {/* Left — Content */}
          <div>
            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
              style={{
                background: 'rgba(248,181,0,0.15)',
                border: '1px solid rgba(248,181,0,0.5)',
                animation: 'fadeIn 0.6s ease 0.2s both',
              }}
            >
              <Star className="w-3.5 h-3.5" style={{ color: '#F8B500' }} />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: '#F8B500' }}>
                Trusted by 2 Lakh+ Telugu Families
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', letterSpacing: '-0.03em', color: '#FFFFFF' }}
            >
              {words.map((word, i) => (
                <span
                  key={word}
                  className="inline-block mr-[0.25em] word-animate"
                  style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                >
                  {word === 'Home' ? (
                    <span className="relative">
                      <em className="not-italic" style={{ color: '#F8B500' }}>Home</em>
                      <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 120 8" fill="none" aria-hidden="true">
                        <path d="M2 6 C20 2, 60 2, 118 6" stroke="#F8B500" strokeWidth="2.5" strokeLinecap="round" className="hero-underline" />
                      </svg>
                    </span>
                  ) : word}
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <p
              className="font-body text-lg mb-8 max-w-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.80)', animation: 'fadeIn 0.8s ease 0.9s both' }}
            >
              Mangalayam connects Telugu families across India and NRI communities
              with trust, tradition, and technology.
            </p>

            {/* Search bar */}
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-2xl p-2 mb-6 flex flex-col sm:flex-row gap-2"
              style={{
                boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                border: '1px solid rgba(255,255,255,0.15)',
                animation: 'fadeUp 0.8s ease 1.1s both',
              }}
            >
              <select
                value={gender}
                onChange={e => setGender(e.target.value)}
                className="flex-1 px-4 py-3 font-body text-sm rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ background: '#F0F4FF', color: '#1A1F36' }}
              >
                <option value="bride">Looking for Bride</option>
                <option value="groom">Looking for Groom</option>
              </select>
              <select
                value={`${ageMin}-${ageMax}`}
                onChange={e => { const [mn, mx] = e.target.value.split('-'); setAgeMin(mn); setAgeMax(mx) }}
                className="flex-1 px-4 py-3 font-body text-sm rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ background: '#F0F4FF', color: '#1A1F36' }}
              >
                <option value="18-25">Age 18 – 25</option>
                <option value="22-30">Age 22 – 30</option>
                <option value="25-35">Age 25 – 35</option>
                <option value="30-40">Age 30 – 40</option>
              </select>
              <select
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="flex-1 px-4 py-3 font-body text-sm rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ background: '#F0F4FF', color: '#1A1F36' }}
              >
                {['Any','Hyderabad','Vijayawada','Visakhapatnam','Bangalore','Chennai','USA','UK'].map(l => (
                  <option key={l}>{l}</option>
                ))}
              </select>
              <button type="submit" className="btn-primary whitespace-nowrap px-6">
                Find Matches →
              </button>
            </form>

            {/* Trust strip */}
            <p
              className="font-body text-xs mb-3"
              style={{ color: 'rgba(255,255,255,0.50)', animation: 'fadeIn 0.6s ease 1.3s both' }}
            >
              12,000+ profiles verified this month
            </p>
            <div className="flex flex-wrap gap-3" style={{ animation: 'fadeIn 0.6s ease 1.4s both' }}>
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 font-body text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.85)' }}
                >
                  <Icon className="w-3 h-3" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Floating profile cards */}
          <div className="hidden lg:flex items-center justify-center relative h-[520px]">
            <div
              className="absolute w-72 h-72 rounded-full pointer-events-none"
              style={{ border: '1px solid rgba(248,181,0,0.20)', animation: 'lotusSpin 20s linear infinite' }}
            />
            <div
              className="absolute w-52 h-52 rounded-full pointer-events-none"
              style={{ border: '1px solid rgba(255,255,255,0.12)', animation: 'lotusSpin 15s linear reverse infinite' }}
            />

            {featuredCards.map((p, i) => {
              const positions = [
                { top: 30,  left: 20,  rotate: -6 },
                { top: 160, left: 120, rotate: 0  },
                { top: 40,  left: 240, rotate: 4  },
              ]
              const pos = positions[i]
              return (
                <div
                  key={p.id}
                  className="absolute rounded-2xl overflow-hidden w-44"
                  style={{
                    transform: `rotate(${pos.rotate}deg)`,
                    top: `${pos.top}px`,
                    left: `${pos.left}px`,
                    background: 'rgba(255,255,255,0.97)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
                    animation: `fadeUp 0.7s ease ${0.5 + i * 0.25}s both, float 3s ease-in-out ${i * 0.5}s infinite`,
                  }}
                >
                  <img src={p.photo} alt={p.name} className="w-full h-32 object-cover object-top" />
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-heading text-sm font-semibold truncate" style={{ color: '#1A1F36' }}>{p.name}</p>
                      <span
                        className="text-[10px] font-body font-bold px-2 py-0.5 rounded-full shrink-0 ml-1"
                        style={{ background: 'rgba(35,56,176,0.1)', color: '#2338B0' }}
                      >
                        {p.score}%
                      </span>
                    </div>
                    <p className="font-body text-[11px]" style={{ color: '#9CA3AF' }}>{p.age} · {p.location}</p>
                    <p className="font-body text-[11px] font-semibold" style={{ color: '#F8B500' }}>{p.profession}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {showScroll && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none" style={{ color: 'rgba(255,255,255,0.6)' }}>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      )}
    </section>
  )
}
