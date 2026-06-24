import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Heart, Bookmark, MapPin, Briefcase, GraduationCap,
  ChevronLeft, MessageCircle, User, Home, Utensils,
  Cigarette, Wine, Star, CheckCircle, Phone
} from 'lucide-react'
import { profiles, profileDetails } from '../data/profiles'
import DashLayout from '../components/DashLayout'

function MatchRing({ score }) {
  const circleRef = useRef(null)
  const r = 36
  const circ = 2 * Math.PI * r

  useEffect(() => {
    const el = circleRef.current
    if (!el) return
    el.style.strokeDashoffset = circ
    const t = setTimeout(() => {
      el.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)'
      el.style.strokeDashoffset = circ * (1 - score / 100)
    }, 300)
    return () => clearTimeout(t)
  }, [circ, score])

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={88} height={88} viewBox="0 0 88 88">
        <circle cx={44} cy={44} r={r} fill="none" stroke="#E8EBF5" strokeWidth={7} />
        <circle ref={circleRef} cx={44} cy={44} r={r} fill="none"
          stroke="#000080" strokeWidth={7} strokeLinecap="round"
          style={{ strokeDasharray: circ, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <div style={{ fontFamily: 'inherit', fontWeight: 800, fontSize: 18, color: '#000080', lineHeight: 1 }}>{score}</div>
        <div style={{ fontFamily: 'inherit', fontSize: 9, color: '#9CA3AF', fontWeight: 600 }}>% Match</div>
      </div>
    </div>
  )
}

function HoroscopeBar({ score }) {
  const barRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && barRef.current) barRef.current.style.width = `${score}%`
    }, { threshold: 0.3 })
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [score])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontFamily: 'inherit', fontSize: 12, color: '#6B7280' }}>Horoscope Match</span>
        <span style={{ fontFamily: 'inherit', fontSize: 12, fontWeight: 700, color: '#F8B500' }}>{score}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 6, background: '#E8EBF5', overflow: 'hidden' }}>
        <div ref={barRef} style={{ height: '100%', width: 0, borderRadius: 6, background: '#000080', transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)' }} />
      </div>
    </div>
  )
}

const S = {
  card: { background: '#fff', borderRadius: 16, border: '1px solid #E8EBF5', boxShadow: '0 1px 12px rgba(0,0,128,0.07)' },
  label: { fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' },
  value: { fontFamily: 'inherit', fontSize: 13, fontWeight: 600, color: '#111827' },
  sectionTitle: { fontFamily: 'inherit', fontWeight: 700, fontSize: 17, color: '#1A1F36', marginBottom: 14 },
}

export default function ProfileDetails() {
  const { id }  = useParams()
  const profile = profiles.find(p => p.id === Number(id)) ?? profiles[0]
  const details = profileDetails[profile.id] ?? profileDetails[1]
  const [saved, setSaved]         = useState(false)
  const [interested, setInterested] = useState(false)

  const quickStats = [
    { label: 'Age',      value: `${profile.age} yrs` },
    { label: 'Height',   value: profile.height },
    { label: 'Caste',    value: profile.caste },
    { label: 'Religion', value: profile.religion },
    { label: 'Location', value: profile.location },
    { label: 'Education',value: profile.education },
  ]

  const lifestyle = [
    { icon: Utensils,  label: 'Diet',     value: details.diet },
    { icon: Cigarette, label: 'Smoking',  value: details.smoke },
    { icon: Wine,      label: 'Drinking', value: details.drink },
  ]

  return (
    <DashLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Back */}
        <Link to="/matches"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'inherit', fontSize: 13, fontWeight: 600, color: '#6B7280', textDecoration: 'none', width: 'fit-content' }}
          onMouseEnter={e => e.currentTarget.style.color = '#000080'}
          onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
        >
          <ChevronLeft size={16} /> Back to Matches
        </Link>

        {/* ── Hero banner ── */}
        <div style={{ ...S.card, overflow: 'hidden' }}>
          {/* Cover strip */}
          <div style={{ height: 130, background: '#000080', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            {/* Match badge */}
            <div style={{ position: 'absolute', top: 14, right: 16, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 20, padding: '4px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Star size={12} color="#F8B500" fill="#F8B500" />
              <span style={{ fontFamily: 'inherit', fontSize: 12, fontWeight: 700, color: 'white' }}>{profile.score}% Match</span>
            </div>
          </div>

          {/* Avatar + info row */}
          <div className="px-4 md:px-7" style={{ paddingBottom: 24, display: 'flex', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ marginTop: -52, position: 'relative', flexShrink: 0 }}>
              <img src={profile.photo} alt={profile.name}
                style={{ width: 104, height: 104, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: '4px solid white', boxShadow: '0 4px 20px rgba(0,0,128,0.2)' }} />
              <span style={{ position: 'absolute', bottom: 6, right: 6, width: 14, height: 14, borderRadius: '50%', background: '#22C55E', border: '2px solid white', boxShadow: '0 0 6px #22C55E' }} />
            </div>

            <div style={{ paddingTop: 10, flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 26, color: '#111827' }}>{profile.name}</div>
              <div style={{ display: 'flex', gap: 16, marginTop: 5, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', fontSize: 13, color: '#6B7280' }}>
                  <MapPin size={13} color="#000080" /> {profile.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', fontSize: 13, color: '#6B7280' }}>
                  <Briefcase size={13} color="#000080" /> {profile.profession}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', fontSize: 13, color: '#6B7280' }}>
                  <GraduationCap size={13} color="#000080" /> {profile.education}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="w-full md:w-auto" style={{ display: 'flex', gap: 8, paddingTop: 12, flexWrap: 'wrap' }}>
              <button onClick={() => setInterested(s => !s)}
                style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 10, fontFamily: 'inherit', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s', border: 'none', flex: 1,
                  background: interested ? '#FEE2E2' : '#000080',
                  color: interested ? '#EF4444' : 'white',
                  boxShadow: interested ? 'none' : '0 4px 14px rgba(0,0,128,0.3)' }}>
                <Heart size={14} fill={interested ? '#EF4444' : 'none'} />
                {interested ? 'Interest Sent' : 'Send Interest'}
              </button>
              <button onClick={() => setSaved(s => !s)}
                style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 10, fontFamily: 'inherit', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s', flex: 1,
                  background: saved ? '#EEF1FF' : 'white',
                  color: saved ? '#000080' : '#374151',
                  border: `1px solid ${saved ? '#000080' : '#E8EBF5'}` }}>
                <Bookmark size={14} fill={saved ? '#000080' : 'none'} color={saved ? '#000080' : '#374151'} />
                {saved ? 'Saved' : 'Save'}
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 10, fontFamily: 'inherit', fontSize: 13, fontWeight: 700, cursor: 'pointer', background: '#DCFCE7', color: '#16A34A', border: 'none', flex: 1, justifyContent: 'center' }}>
                <MessageCircle size={14} /> Chat
              </button>
            </div>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Quick stats grid */}
            <div style={{ ...S.card, padding: 20 }}>
              <div style={S.sectionTitle}>Profile Details</div>
              <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: 10 }}>
                {quickStats.map(s => (
                  <div key={s.label} style={{ background: '#F8F9FF', borderRadius: 10, padding: '10px 14px', border: '1px solid #E8EBF5' }}>
                    <div style={S.label}>{s.label}</div>
                    <div style={{ ...S.value, marginTop: 3 }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div style={{ ...S.card, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#EEF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={14} color="#000080" />
                </div>
                <div style={S.sectionTitle}>About Me</div>
              </div>
              <p style={{ fontFamily: 'inherit', fontSize: 13, color: '#6B7280', lineHeight: 1.8 }}>{details.about}</p>
            </div>

            {/* Family */}
            <div style={{ ...S.card, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#EEF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Home size={14} color="#000080" />
                </div>
                <div style={S.sectionTitle}>Family Details</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {Object.entries(details.family).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#F8F9FF', borderRadius: 10, border: '1px solid #E8EBF5' }}>
                    <span style={{ ...S.label, textTransform: 'capitalize' }}>{k}</span>
                    <span style={S.value}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifestyle */}
            <div style={{ ...S.card, padding: 20 }}>
              <div style={S.sectionTitle}>Lifestyle</div>
              <div className="grid grid-cols-3" style={{ gap: 10, marginBottom: 16 }}>
                {lifestyle.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ background: '#F8F9FF', borderRadius: 10, padding: '12px 14px', border: '1px solid #E8EBF5', textAlign: 'center' }}>
                    <Icon size={16} color="#000080" style={{ margin: '0 auto 6px' }} />
                    <div style={S.label}>{label}</div>
                    <div style={{ ...S.value, marginTop: 3 }}>{value}</div>
                  </div>
                ))}
              </div>
              {/* Hobbies */}
              <div style={{ ...S.label, marginBottom: 8 }}>Hobbies & Interests</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {details.hobbies.split(', ').map(h => (
                  <span key={h} style={{ padding: '4px 12px', borderRadius: 20, background: '#EEF1FF', color: '#000080', fontFamily: 'inherit', fontSize: 12, fontWeight: 500 }}>{h}</span>
                ))}
              </div>
            </div>

            {/* Partner Expectations */}
            <div style={{ ...S.card, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={14} color="#B45309" />
                </div>
                <div style={S.sectionTitle}>Partner Expectations</div>
              </div>
              <p style={{ fontFamily: 'inherit', fontSize: 13, color: '#6B7280', lineHeight: 1.8, background: '#F8F9FF', borderRadius: 10, padding: '12px 16px', border: '1px solid #E8EBF5' }}>
                {details.expectations}
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="order-first lg:order-last" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Mobile: horizontal row for match + connect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

            {/* Match score card */}
            <div style={{ ...S.card, padding: 20, textAlign: 'center' }}>
              <div style={{ fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Compatibility</div>
              <MatchRing score={profile.score} />
              <div style={{ marginTop: 16 }}>
                <HoroscopeBar score={profile.score} />
              </div>
            </div>

            {/* Contact card */}
            <div style={{ ...S.card, padding: 20 }}>
              <div style={{ fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Connect</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button onClick={() => setInterested(s => !s)}
                  style={{ width: '100%', padding: '11px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all 0.15s',
                    background: interested ? '#FEE2E2' : '#000080',
                    color: interested ? '#EF4444' : 'white',
                    boxShadow: interested ? 'none' : '0 4px 14px rgba(0,0,128,0.25)' }}>
                  <Heart size={14} fill={interested ? '#EF4444' : 'none'} />
                  {interested ? 'Interest Sent ✓' : 'Send Interest'}
                </button>
                <button style={{ width: '100%', padding: '11px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#DCFCE7', color: '#16A34A' }}>
                  <MessageCircle size={14} /> Send Message
                </button>
                <button style={{ width: '100%', padding: '11px', borderRadius: 10, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'white', color: '#374151', border: '1px solid #E8EBF5' }}>
                  <Phone size={14} color="#000080" /> Request Contact
                </button>
              </div>
            </div>
            </div>{/* end grid */}

            {/* Profile ID tag */}
            <div style={{ ...S.card, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'inherit', fontSize: 12, color: '#9CA3AF' }}>Profile ID</span>
              <span style={{ fontFamily: 'inherit', fontSize: 12, fontWeight: 700, color: '#000080', background: '#EEF1FF', padding: '3px 10px', borderRadius: 20 }}>MGL{String(profile.id).padStart(5, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  )
}
