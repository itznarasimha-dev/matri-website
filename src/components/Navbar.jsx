import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, User, Edit, CreditCard, LogOut } from 'lucide-react'
import LotusIcon from './LotusIcon'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fn = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  const handleLogout = () => { logout(); setDropOpen(false); navigate('/') }

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 70, background: 'transparent' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <Link to={user ? '/dashboard' : '/'} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <LotusIcon size={34} color="#E8836A" />
          <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.02em', color: 'white' }}>
            Mangalayam
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {user ? (
            <div ref={dropRef} style={{ position: 'relative' }}>
              <button onClick={() => setDropOpen(o => !o)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 100, background: 'transparent', border: '1px solid rgba(255,255,255,0.35)', cursor: 'pointer' }}>
                <img src={user.photo} alt={user.name} style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
                <span style={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 600, color: 'white' }}>
                  {user.name.split(' ')[0]}
                </span>
                <ChevronDown style={{ width: 12, height: 12, color: 'rgba(255,255,255,0.7)', transform: dropOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
              </button>

              {dropOpen && (
                <div style={{ position: 'absolute', right: 0, top: 48, width: 200, borderRadius: 16, overflow: 'hidden', background: 'white', border: '1px solid #E2E5F0', boxShadow: '0 16px 48px rgba(0,0,128,0.16)', zIndex: 50 }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid #E2E5F0' }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#1A1F36' }}>{user.name}</div>
                    <div style={{ fontSize: 12, color: '#E8836A' }}>{user.membershipPlan === 'free' ? 'Free Plan' : 'Premium'}</div>
                  </div>
                  {[
                    { icon: User,       label: 'My Profile',   to: '/my-profile' },
                    { icon: Edit,       label: 'Edit Profile', to: '/my-profile' },
                    { icon: CreditCard, label: 'Membership',   to: '/membership' },
                  ].map(({ icon: Icon, label, to }) => (
                    <Link key={label} to={to} onClick={() => setDropOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', fontSize: 13, color: '#4B5563', textDecoration: 'none' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#F0F4FF'; e.currentTarget.style.color = '#000080' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4B5563' }}
                    >
                      <Icon style={{ width: 15, height: 15 }} /> {label}
                    </Link>
                  ))}
                  <button onClick={handleLogout}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', fontSize: 13, color: 'rgba(239,68,68,0.8)', background: 'transparent', border: 'none', borderTop: '1px solid #E2E5F0', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#FEF2F2'; e.currentTarget.style.color = '#ef4444' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(239,68,68,0.8)' }}
                  >
                    <LogOut style={{ width: 15, height: 15 }} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" style={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 600, padding: '8px 18px', borderRadius: 100, textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.4)', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Sign In
              </Link>
              <Link to="/register" style={{ fontFamily: 'inherit', fontSize: 13, fontWeight: 600, padding: '8px 18px', borderRadius: 100, textDecoration: 'none', background: '#000080', color: 'white', boxShadow: '0 4px 14px rgba(0,0,128,0.35)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1a1aad'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Register Free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
