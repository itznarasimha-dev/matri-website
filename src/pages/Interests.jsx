import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, MapPin, Briefcase, CheckCircle, XCircle, Clock, Send } from 'lucide-react'
import { profiles } from '../data/profiles'
import DashLayout from '../components/DashLayout'

const received = profiles.slice(0, 5).map((p, i) => ({ ...p, isNew: i < 3, time: `${i + 1} day${i > 0 ? 's' : ''} ago`, tier: ['Platinum', 'Gold', 'Free', 'Gold', 'Platinum'][i] }))
const sent     = profiles.slice(2, 7).map((p, i) => ({ ...p, status: ['Pending', 'Accepted', 'Pending', 'Declined', 'Accepted'][i], sentTime: `${i + 1} day${i > 0 ? 's' : ''} ago` }))

const tierColors = { Platinum: '#2338B0', Gold: '#B45309', Free: '#6B7280' }
const tierBg    = { Platinum: '#EEF1FF', Gold: '#FEF3C7', Free: '#F3F4F6' }
const statusStyle = {
  Pending:  { color: '#B45309', bg: '#FEF3C7', icon: Clock },
  Accepted: { color: '#16A34A', bg: '#DCFCE7', icon: CheckCircle },
  Declined: { color: '#DC2626', bg: '#FEE2E2', icon: XCircle },
}

export default function Interests() {
  const [tab, setTab] = useState('received')
  const [acceptedIds, setAccepted] = useState([])
  const [declinedIds, setDeclined] = useState([])

  return (
    <DashLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Header */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '18px 22px', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 26, color: '#1A1F36', margin: 0 }}>Interests</h1>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#9CA3AF', margin: 0 }}>Manage your sent and received interest requests</p>
          </div>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, background: '#FEF3C7', color: '#B45309', padding: '5px 14px', borderRadius: 20 }}>
            {received.filter(r => r.isNew && !acceptedIds.includes(r.id) && !declinedIds.includes(r.id)).length} new requests
          </span>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { key: 'received', label: 'Received', icon: <Heart size={14} />, count: received.length },
            { key: 'sent',     label: 'Sent',     icon: <Send size={14} />,  count: sent.length },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 12, fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.15s',
                background: tab === t.key ? '#2338B0' : '#fff',
                color: tab === t.key ? 'white' : '#374151',
                boxShadow: tab === t.key ? '0 4px 14px rgba(35,56,176,0.25)' : '0 1px 6px rgba(0,0,0,0.06)' }}>
              {t.icon} {t.label}
              <span style={{ fontSize: 11, padding: '1px 7px', borderRadius: 20, background: tab === t.key ? 'rgba(255,255,255,0.25)' : '#F3F4F6', color: tab === t.key ? 'white' : '#6B7280', fontWeight: 700 }}>{t.count}</span>
            </button>
          ))}
        </div>

        {/* Received */}
        {tab === 'received' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {received.map(p => {
              const isAcc = acceptedIds.includes(p.id)
              const isDec = declinedIds.includes(p.id)
              return (
                <div key={p.id}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(35,56,176,0.10)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 12px rgba(35,56,176,0.07)'}
                  style={{ background: '#fff', borderRadius: 16, padding: '16px 20px', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', transition: 'box-shadow 0.2s', borderLeft: p.isNew && !isAcc && !isDec ? '4px solid #2338B0' : '4px solid #E8EBF5' }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <img src={p.photo} alt={p.name} style={{ width: 56, height: 56, borderRadius: 14, objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: -6, left: -6, fontSize: 9, fontWeight: 700, padding: '2px 5px', borderRadius: 6, background: tierBg[p.tier], color: tierColors[p.tier] }}>{p.tier}</span>
                    {p.isNew && !isAcc && !isDec && <span style={{ position: 'absolute', bottom: -3, right: -3, width: 10, height: 10, borderRadius: '50%', background: '#22C55E', border: '2px solid white' }} />}
                  </div>
                  <div style={{ flex: 1, minWidth: 150 }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 15, color: '#111827' }}>{p.name}, {p.age}</div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 3, flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#6B7280' }}><Briefcase size={11} />{p.profession}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#6B7280' }}><MapPin size={11} />{p.location}</span>
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#9CA3AF', marginTop: 4 }}>{p.time}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {isAcc ? (
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#16A34A', fontWeight: 600, background: '#DCFCE7', padding: '6px 14px', borderRadius: 8 }}>✓ Accepted</span>
                    ) : isDec ? (
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#DC2626', fontWeight: 600, background: '#FEE2E2', padding: '6px 14px', borderRadius: 8 }}>✗ Declined</span>
                    ) : (
                      <>
                        <button onClick={() => setAccepted(a => [...a, p.id])}
                          style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 14px', borderRadius: 8, background: '#DCFCE7', color: '#16A34A', border: 'none', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600 }}>
                          <CheckCircle size={13} /> Accept
                        </button>
                        <button onClick={() => setDeclined(d => [...d, p.id])}
                          style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 14px', borderRadius: 8, background: '#FEE2E2', color: '#DC2626', border: 'none', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600 }}>
                          <XCircle size={13} /> Decline
                        </button>
                      </>
                    )}
                    <Link to={`/profile/${p.id}`} style={{ padding: '7px 14px', borderRadius: 8, background: '#EEF1FF', color: '#2338B0', fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>View</Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Sent */}
        {tab === 'sent' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {sent.map(p => {
              const s = statusStyle[p.status]
              const StatusIcon = s.icon
              return (
                <div key={p.id}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(35,56,176,0.10)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 12px rgba(35,56,176,0.07)'}
                  style={{ background: '#fff', borderRadius: 16, padding: '16px 20px', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', transition: 'box-shadow 0.2s' }}>
                  <img src={p.photo} alt={p.name} style={{ width: 56, height: 56, borderRadius: 14, objectFit: 'cover', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 150 }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 15, color: '#111827' }}>{p.name}, {p.age}</div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 3, flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#6B7280' }}><Briefcase size={11} />{p.profession}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#6B7280' }}><MapPin size={11} />{p.location}</span>
                    </div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#9CA3AF', marginTop: 4 }}>Sent {p.sentTime}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 8, fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600, background: s.bg, color: s.color }}>
                      <StatusIcon size={13} /> {p.status}
                    </span>
                    <Link to={`/profile/${p.id}`} style={{ padding: '7px 14px', borderRadius: 8, background: '#EEF1FF', color: '#2338B0', fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>View</Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </DashLayout>
  )
}
