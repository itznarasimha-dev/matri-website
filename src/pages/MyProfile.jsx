import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Edit, MapPin, Briefcase, Heart, Eye, Star, MousePointerClick, Camera, Plus } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { profileDetails } from '../data/profiles'
import DashLayout from '../components/DashLayout'

export default function MyProfile() {
  const { user } = useAuth()
  const details = profileDetails[1]
  const completion = user?.profileComplete || 72
  const [activeTab, setActiveTab] = useState('about')
  const tabs = ['about', 'family', 'preferences', 'photos']
  const photos = [user?.photo, ...Array(5).fill('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80')]

  return (
    <DashLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Hero Card */}
        <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 1px 12px rgba(35,56,176,0.08)', border: '1px solid #E8EBF5' }}>
          <div style={{ height: 140, background: 'linear-gradient(135deg,#2338B0,#3D52C8,#F8B500)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 12, right: 12 }}>
              <Link to="/my-profile" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.18)', color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)' }}>
                <Edit size={13} /> Edit Profile
              </Link>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, fontFamily: 'Outfit, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.9)', background: 'rgba(0,0,0,0.18)', padding: '5px 20px', textAlign: 'center' }}>
              👁 This is how your profile appears to others
            </div>
          </div>

          <div style={{ padding: '0 24px 24px', display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', marginTop: -48 }}>
              <img src={user?.photo} alt={user?.name} style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: '4px solid white', boxShadow: '0 4px 16px rgba(35,56,176,0.2)' }} />
              <button style={{ position: 'absolute', bottom: 4, right: 4, width: 26, height: 26, borderRadius: '50%', background: '#2338B0', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Camera size={11} color="white" />
              </button>
            </div>
            <div style={{ paddingTop: 12, flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 24, color: '#111827' }}>{user?.name}</div>
              <div style={{ display: 'flex', gap: 14, marginTop: 5, flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#6B7280' }}>
                  <MapPin size={13} color="#2338B0" /> {user?.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#6B7280' }}>
                  <Briefcase size={13} color="#2338B0" /> {user?.profession}
                </span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, padding: '2px 10px', borderRadius: 20, background: '#EEF1FF', color: '#2338B0', fontWeight: 600, textTransform: 'capitalize' }}>
                  {user?.membershipPlan} plan
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 20, paddingTop: 16 }}>
              {[
                { icon: <Heart size={14} color="#EF4444" fill="#EF4444" />, val: 12, label: 'Likes' },
                { icon: <Eye size={14} color="#2338B0" />, val: 47, label: 'Views' },
                { icon: <Star size={14} color="#F8B500" fill="#F8B500" />, val: 8, label: 'Interests' },
                { icon: <MousePointerClick size={14} color="#0D9488" />, val: 23, label: 'Clicks' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: '#111827' }}>{s.icon} {s.val}</div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#9CA3AF' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Completion */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 14, color: '#374151' }}>Profile Completion</span>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 14, color: '#2338B0' }}>{completion}%</span>
          </div>
          <div style={{ height: 8, borderRadius: 8, background: '#E8EBF5', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 8, background: 'linear-gradient(90deg,#2338B0,#3D52C8,#F8B500)', width: `${completion}%` }} />
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
            {[{ label: 'Add horoscope', pct: '+8%' }, { label: 'More photos', pct: '+10%' }, { label: 'Family details', pct: '+10%' }].map(n => (
              <button key={n.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 8, background: '#EEF1FF', border: '1px solid #C7D0F8', fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#2338B0', cursor: 'pointer' }}>
                <Plus size={11} /> {n.label} <strong>{n.pct}</strong>
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #E8EBF5' }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                style={{ flex: 1, padding: '14px 8px', fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', textTransform: 'capitalize', transition: 'all 0.15s',
                  background: activeTab === t ? '#EEF1FF' : 'white',
                  color: activeTab === t ? '#2338B0' : '#6B7280',
                  borderBottom: activeTab === t ? '2px solid #2338B0' : '2px solid transparent' }}>
                {t}
              </button>
            ))}
          </div>

          <div style={{ padding: 20 }}>
            {activeTab === 'about' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 13, color: '#374151', marginBottom: 8 }}>About Me</div>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{details.about}</p>
                </div>
                {[['Age', user?.age], ['Height', "5'4\""], ['Religion', 'Hindu'], ['Caste', 'Reddy'], ['Diet', details.diet], ['Smoke', details.smoke], ['Drink', details.drink]].map(([k, v]) => (
                  <div key={k} style={{ background: '#F8F9FF', borderRadius: 10, padding: '10px 14px', border: '1px solid #E8EBF5' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#9CA3AF' }}>{k}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 13, color: '#111827', marginTop: 2 }}>{v}</div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'family' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {Object.entries(details.family).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: '#F8F9FF', borderRadius: 10, border: '1px solid #E8EBF5' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#6B7280', textTransform: 'capitalize' }}>{k}</span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 600, color: '#111827' }}>{v}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'preferences' && (
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#6B7280', lineHeight: 1.8, background: '#F8F9FF', borderRadius: 12, padding: 16, border: '1px solid #E8EBF5' }}>
                {details.expectations}
                <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {details.hobbies.split(', ').map(h => (
                    <span key={h} style={{ padding: '4px 12px', borderRadius: 20, background: '#EEF1FF', color: '#2338B0', fontSize: 12, fontWeight: 500 }}>{h}</span>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'photos' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {photos.map((p, i) => (
                  <div key={i} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', aspectRatio: '1', background: '#F3F4F6' }}>
                    <img src={p} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                    {i === 0 && <span style={{ position: 'absolute', top: 6, left: 6, fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 6, background: '#2338B0', color: 'white' }}>Main</span>}
                  </div>
                ))}
                <button style={{ borderRadius: 12, aspectRatio: '1', background: '#EEF1FF', border: '2px dashed #C7D0F8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, cursor: 'pointer' }}>
                  <Plus size={20} color="#2338B0" />
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#2338B0' }}>Add photo</span>
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </DashLayout>
  )
}
