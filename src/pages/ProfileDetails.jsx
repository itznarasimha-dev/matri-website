import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, Bookmark, MapPin, Briefcase, GraduationCap, Star, ChevronLeft, MessageCircle } from 'lucide-react'
import { profiles, profileDetails } from '../data/profiles'

function MatchCircle({ score }) {
  const circleRef = useRef(null)
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - score / 100)

  useEffect(() => {
    const el = circleRef.current
    if (!el) return
    el.style.strokeDashoffset = circumference
    const t = setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)'
      el.style.strokeDashoffset = offset
    }, 300)
    return () => clearTimeout(t)
  }, [circumference, offset])

  return (
    <div className="flex flex-col items-center py-6">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(212,160,23,0.15)" strokeWidth="6" />
        <circle
          ref={circleRef}
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="#D4A017"
          strokeWidth="6"
          strokeLinecap="round"
          style={{ strokeDasharray: circumference, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
        <text x="50" y="46" textAnchor="middle" fontFamily="Bodoni Moda" fontSize="18" fontWeight="700" fill="#D4A017">{score}%</text>
        <text x="50" y="60" textAnchor="middle" fontFamily="Outfit" fontSize="8" fill="rgba(255,255,255,0.5)">Match</text>
      </svg>
    </div>
  )
}

function HoroscopeBar({ score = 78 }) {
  const barRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && barRef.current) {
        barRef.current.style.width = `${score}%`
      }
    }, { threshold: 0.5 })
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [score])

  return (
    <div className="mt-4 px-5 pb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="font-body text-xs text-white/50">Horoscope Match</span>
        <span className="font-body text-xs font-bold" style={{ color: '#D4A017' }}>{score}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: 0, background: 'linear-gradient(90deg, #7B2FBE, #D4A017)', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
        />
      </div>
    </div>
  )
}

export default function ProfileDetails() {
  const { id }    = useParams()
  const profile   = profiles.find(p => p.id === Number(id)) ?? profiles[0]
  const details   = profileDetails[profile.id] ?? profileDetails[1]
  const [saved, setSaved] = useState(false)

  return (
    <main className="min-h-screen" style={{ background: '#2C1654' }}>
      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img src={profile.photo} alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'rgba(44,22,84,0.75)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div
            className="w-28 h-28 rounded-full overflow-hidden mb-3"
            style={{ border: '3px solid #D4A017', boxShadow: '0 0 32px rgba(212,160,23,0.25)' }}
          >
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover object-top" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white">{profile.name}</h1>
          <p className="font-body text-sm mt-1" style={{ color: '#D4A017' }}>
            {profile.age} · {profile.location} · {profile.profession}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link to="/matches" className="inline-flex items-center gap-2 font-body text-sm mb-8 transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.4)' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#D4A017' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
        >
          <ChevronLeft className="w-4 h-4" /> Back to Matches
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                title: 'About Me',
                content: <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{details.about}</p>,
              },
              {
                title: 'Education & Profession',
                content: (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: GraduationCap, label: 'Education', value: profile.education },
                      { icon: Briefcase,     label: 'Profession', value: profile.profession },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: 'rgba(212,160,23,0.06)', border: '1px solid rgba(212,160,23,0.12)' }}>
                        <Icon className="w-8 h-8 shrink-0" style={{ color: '#D4A017' }} />
                        <div>
                          <div className="font-heading text-white font-semibold text-sm">{value}</div>
                          <div className="font-body text-xs text-white/40">{label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: 'Family Details',
                content: (
                  <div className="space-y-3 text-sm">
                    {Object.entries(details.family).map(([k, v]) => (
                      <div key={k} className="flex gap-3">
                        <span className="capitalize font-heading font-semibold text-white/80 w-24 shrink-0">{k}:</span>
                        <span className="font-body" style={{ color: 'rgba(255,255,255,0.55)' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: 'Lifestyle',
                content: (
                  <div className="flex flex-wrap gap-3">
                    {[['Diet', details.diet], ['Smoking', details.smoke], ['Drinking', details.drink], ['Hobbies', details.hobbies]].map(([k, v]) => (
                      <div key={k} className="px-4 py-3 rounded-xl" style={{ border: '1px solid rgba(212,160,23,0.2)', background: 'rgba(255,255,255,0.03)' }}>
                        <span className="font-body text-xs text-white/40 block">{k}</span>
                        <span className="font-heading text-white font-semibold text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: 'Partner Expectations',
                content: <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{details.expectations}</p>,
              },
            ].map(({ title, content }) => (
              <div
                key={title}
                className="rounded-2xl p-6"
                style={{ background: '#3D1F6B', border: '1px solid rgba(212,160,23,0.1)' }}
              >
                <h2 className="font-heading text-white font-bold text-lg mb-4">{title}</h2>
                {content}
              </div>
            ))}
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl overflow-hidden sticky top-24"
              style={{ background: '#3D1F6B', border: '1px solid rgba(212,160,23,0.15)' }}
            >
              <MatchCircle score={profile.score} />

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-2 px-5 pb-4">
                {[['Age', profile.age], ['Height', profile.height], ['Caste', profile.caste], ['Religion', profile.religion]].map(([label, val]) => (
                  <div key={label} className="rounded-xl p-3 text-center" style={{ background: 'rgba(212,160,23,0.06)' }}>
                    <div className="font-heading text-white font-bold text-sm">{val}</div>
                    <div className="font-body text-[11px] text-white/40">{label}</div>
                  </div>
                ))}
              </div>

              {/* Horoscope bar */}
              <HoroscopeBar score={profile.score} />

              {/* Action buttons */}
              <div className="px-5 pb-6 space-y-3">
                <button className="btn-primary w-full justify-center gap-2">
                  <Heart className="w-4 h-4" /> Send Interest
                </button>
                <button
                  onClick={() => setSaved(s => !s)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-body font-semibold text-sm transition-all duration-200"
                  style={
                    saved
                      ? { background: 'rgba(212,160,23,0.15)', border: '2px solid #D4A017', color: '#D4A017' }
                      : { border: '2px solid rgba(212,160,23,0.4)', color: '#D4A017' }
                  }
                >
                  <Bookmark className="w-4 h-4" />
                  {saved ? 'Saved' : 'Save Profile'}
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-body font-semibold text-sm bg-green-600 hover:bg-green-500 text-white transition-colors duration-200">
                  <MessageCircle className="w-4 h-4" /> Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
