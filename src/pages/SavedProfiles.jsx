import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bookmark, Heart, X, MapPin, Briefcase, GraduationCap, Search } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { profiles } from '../data/profiles'
import DashLayout from '../components/DashLayout'

export default function SavedProfiles() {
  const { user } = useAuth()
  const initial = profiles.filter(p => user.savedProfiles?.includes(p.id))
  const [saved, setSaved] = useState(initial.length ? initial : profiles.slice(0, 4))
  const [interested, setInterested] = useState([])
  const [search, setSearch] = useState('')

  const filtered = saved.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <DashLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Header */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '18px 22px', boxShadow: '0 1px 12px rgba(0,0,128,0.07)', border: '1px solid #E8EBF5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 26, color: '#1A1F36', margin: 0 }}>Saved Profiles</h1>
            <p style={{ fontFamily: 'inherit', fontSize: 13, color: '#9CA3AF', margin: 0 }}>{saved.length} profile{saved.length !== 1 ? 's' : ''} shortlisted</p>
          </div>
          <Link to="/matches" style={{ padding: '9px 20px', borderRadius: 10, background: '#000080', color: 'white', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 14px rgba(0,0,128,0.25)' }}>
            Browse More
          </Link>
        </div>

        {/* Search */}
        {saved.length > 0 && (
          <div style={{ position: 'relative' }}>
            <Search size={15} color="#9CA3AF" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search saved profiles..."
              style={{ width: '100%', padding: '10px 14px 10px 40px', borderRadius: 12, border: '1px solid #E8EBF5', fontFamily: 'inherit', fontSize: 13, color: '#374151', background: '#fff', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        )}

        {/* Empty state */}
        {saved.length === 0 ? (
          <div style={{ background: '#fff', borderRadius: 16, padding: '60px 20px', textAlign: 'center', boxShadow: '0 1px 12px rgba(0,0,128,0.07)', border: '1px solid #E8EBF5' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#EEF1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Bookmark size={28} color="#C7D0F8" />
            </div>
            <p style={{ fontFamily: 'inherit', fontWeight: 600, fontSize: 16, color: '#374151', marginBottom: 8 }}>No saved profiles yet</p>
            <p style={{ fontFamily: 'inherit', fontSize: 13, color: '#9CA3AF', marginBottom: 20 }}>Browse matches and shortlist profiles you like.</p>
            <Link to="/matches" style={{ padding: '10px 24px', borderRadius: 10, background: '#000080', color: 'white', fontFamily: 'inherit', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Browse Matches</Link>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ background: '#fff', borderRadius: 16, padding: '40px 20px', textAlign: 'center', border: '1px solid #E8EBF5' }}>
            <p style={{ fontFamily: 'inherit', color: '#9CA3AF' }}>No profiles match "{search}"</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16 }}>
            {filtered.map(p => (
              <div key={p.id}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,128,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = '0 1px 12px rgba(0,0,128,0.07)'; }}
                style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 12px rgba(0,0,128,0.07)', border: '1px solid #E8EBF5', transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s' }}>
                <div style={{ position: 'relative', height: 200 }}>
                  <img src={p.photo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,31,54,0.6) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', top: 10, left: 10, fontFamily: 'inherit', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 20, background: 'rgba(255,255,255,0.92)', color: '#000080' }}>
                    {p.score}% Match
                  </div>
                  <button onClick={() => setSaved(s => s.filter(x => x.id !== p.id))}
                    style={{ position: 'absolute', top: 10, right: 10, width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="Remove from saved">
                    <X size={12} color="#EF4444" />
                  </button>
                  <div style={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }}>
                    <div style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 14 }}>{p.name}, {p.age}</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', fontSize: 12, color: '#6B7280' }}><MapPin size={11} color="#000080" />{p.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', fontSize: 12, color: '#6B7280' }}><Briefcase size={11} color="#000080" />{p.profession}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'inherit', fontSize: 12, color: '#6B7280' }}><GraduationCap size={11} color="#000080" />{p.education}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Link to={`/profile/${p.id}`}
                      style={{ flex: 1, textAlign: 'center', padding: '7px 0', borderRadius: 8, background: '#000080', color: 'white', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, textDecoration: 'none' }}>
                      View Profile
                    </Link>
                    <button onClick={() => setInterested(i => i.includes(p.id) ? i.filter(x => x !== p.id) : [...i, p.id])}
                      style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid #FEE2E2', background: interested.includes(p.id) ? '#FEE2E2' : 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s' }}>
                      <Heart size={13} color="#EF4444" fill={interested.includes(p.id) ? '#EF4444' : 'none'} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashLayout>
  )
}
