import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SlidersHorizontal, Heart, MapPin, Briefcase, GraduationCap, Star } from 'lucide-react'
import { profiles } from '../data/profiles'
import DashLayout from '../components/DashLayout'

const castes    = ['Any', 'Reddy', 'Kamma', 'Brahmin', 'Kapu', 'Vaishya', 'Yadav']
const locations = ['Any', 'Hyderabad', 'Vijayawada', 'Visakhapatnam', 'Bangalore', 'Chennai', 'USA']
const educations = ['Any', 'B.Tech', 'M.Tech', 'MBBS', 'MD', 'MBA', 'CA']

const Label = ({ children }) => (
  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{children}</div>
)

const Select = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}
    style={{ width: '100%', padding: '8px 12px', borderRadius: 10, border: '1px solid #E8EBF5', fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#374151', background: 'white', outline: 'none' }}>
    {options.map(o => <option key={o}>{o}</option>)}
  </select>
)

export default function Matches() {
  const [filters, setFilters] = useState({ gender: 'any', ageMin: 18, ageMax: 40, caste: 'Any', location: 'Any', education: 'Any' })
  const [saved, setSaved] = useState([])
  const [interested, setInterested] = useState([])
  const [filtersOpen, setFiltersOpen] = useState(true)
  const set = (k, v) => setFilters(f => ({ ...f, [k]: v }))

  const filtered = profiles.filter(p => {
    if (filters.gender !== 'any' && p.gender !== filters.gender) return false
    if (p.age < filters.ageMin || p.age > filters.ageMax) return false
    if (filters.caste !== 'Any' && p.caste !== filters.caste) return false
    if (filters.location !== 'Any' && p.location !== filters.location) return false
    if (filters.education !== 'Any' && p.education !== filters.education) return false
    return true
  })

  return (
    <DashLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Header */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '18px 22px', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 26, color: '#1A1F36', margin: 0 }}>Browse Matches</h1>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#9CA3AF', margin: 0 }}>{filtered.length} profiles found for you</p>
          </div>
          <button onClick={() => setFiltersOpen(o => !o)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 10, fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 600, border: '1px solid #E8EBF5', cursor: 'pointer', transition: 'all 0.15s',
              background: filtersOpen ? '#2338B0' : 'white', color: filtersOpen ? 'white' : '#374151' }}>
            <SlidersHorizontal size={15} /> Filters
          </button>
        </div>

        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

          {/* Filter panel */}
          {filtersOpen && (
            <div style={{ width: 220, flexShrink: 0, background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', position: 'sticky', top: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 16, color: '#1A1F36' }}>Filters</span>
                <button onClick={() => setFilters({ gender: 'any', ageMin: 18, ageMax: 40, caste: 'Any', location: 'Any', education: 'Any' })}
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#2338B0', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Reset</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <Label>Looking for</Label>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['any', 'bride', 'groom'].map(g => (
                      <button key={g} onClick={() => set('gender', g)}
                        style={{ flex: 1, padding: '6px 0', borderRadius: 8, fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, textTransform: 'capitalize', border: '1px solid #E8EBF5', cursor: 'pointer', transition: 'all 0.15s',
                          background: filters.gender === g ? '#2338B0' : 'white',
                          color: filters.gender === g ? 'white' : '#374151' }}>{g}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Age: {filters.ageMin} – {filters.ageMax}</Label>
                  <input type="range" min={18} max={50} value={filters.ageMin} onChange={e => set('ageMin', +e.target.value)} style={{ width: '100%', accentColor: '#2338B0', marginBottom: 6 }} />
                  <input type="range" min={18} max={50} value={filters.ageMax} onChange={e => set('ageMax', +e.target.value)} style={{ width: '100%', accentColor: '#2338B0' }} />
                </div>
                <div><Label>Caste</Label><Select value={filters.caste} onChange={v => set('caste', v)} options={castes} /></div>
                <div><Label>Location</Label><Select value={filters.location} onChange={v => set('location', v)} options={locations} /></div>
                <div><Label>Education</Label><Select value={filters.education} onChange={v => set('education', v)} options={educations} /></div>
              </div>
            </div>
          )}

          {/* Profile grid */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {filtered.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: 16, border: '1px solid #E8EBF5' }}>
                <Heart size={40} color="#C7D0F8" style={{ margin: '0 auto 12px' }} />
                <p style={{ fontFamily: 'Outfit, sans-serif', color: '#9CA3AF' }}>No profiles match your filters.</p>
              </div>
            ) : filtered.map(p => (
              <div key={p.id}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(35,56,176,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = '0 1px 12px rgba(35,56,176,0.07)'; }}
                style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s' }}>
                <div style={{ position: 'relative', height: 200 }}>
                  <img src={p.photo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,31,54,0.65) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', top: 10, left: 10, fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 20, background: 'rgba(255,255,255,0.92)', color: '#2338B0' }}>
                    {p.score}% Match
                  </div>
                  <button onClick={() => setSaved(s => s.includes(p.id) ? s.filter(x => x !== p.id) : [...s, p.id])}
                    style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Star size={14} color={saved.includes(p.id) ? '#F8B500' : '#9CA3AF'} fill={saved.includes(p.id) ? '#F8B500' : 'none'} />
                  </button>
                  <div style={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 14 }}>{p.name}, {p.age}</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#6B7280' }}><MapPin size={11} color="#2338B0" /> {p.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#6B7280' }}><Briefcase size={11} color="#2338B0" /> {p.profession}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#6B7280' }}><GraduationCap size={11} color="#2338B0" /> {p.education}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Link to={`/profile/${p.id}`}
                      style={{ flex: 1, textAlign: 'center', padding: '7px 0', borderRadius: 8, background: '#2338B0', color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 600, textDecoration: 'none' }}>
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
        </div>
      </div>
    </DashLayout>
  )
}
