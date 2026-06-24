import { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, User, Heart, MessageCircle, CreditCard, Settings, LogOut, Bell, Sparkles, Menu, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { to: '/dashboard',  icon: LayoutDashboard, label: 'Dashboard', badge: null, color: '#000080' },
  { to: '/my-profile', icon: User,            label: 'My Profile',badge: null, color: '#000080' },
  { to: '/interests',  icon: Heart,           label: 'Interests', badge: '3',  color: '#F8B500' },
  { to: '/matches',    icon: MessageCircle,   label: 'Browse',    badge: null, color: '#000080' },
  { to: '/membership', icon: CreditCard,      label: 'Plan',      badge: null, color: '#F8B500' },
  { to: '#',           icon: Settings,        label: 'Settings',  badge: null, color: '#000080' },
]

const FONT = '"DM Sans", system-ui, sans-serif'

export default function DashLayout({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [hovered, setHovered]     = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const handleLogout = () => { logout(); navigate('/') }

  return (
    <div style={{ background: '#F0F2F8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── MOBILE top bar (hidden on lg+) ── */}
      <div className="flex lg:hidden" style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'white', borderBottom: '1px solid #E8EBF5',
        padding: '10px 16px', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={user?.photo} alt="" style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid #E8EBF5' }} />
          <div>
            <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, color: '#111827' }}>{user?.name}</div>
            <div style={{ fontFamily: FONT, fontSize: 10, color: '#9CA3AF', textTransform: 'capitalize' }}>{user?.membershipPlan} plan</div>
          </div>
        </div>
        <button onClick={() => setSidebarOpen(true)} style={{ width: 36, height: 36, borderRadius: 10, background: '#F0F2F8', border: '1px solid #E8EBF5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Menu size={18} color="#000080" />
        </button>
      </div>

      {/* ── MOBILE sidebar drawer ── */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} onClick={() => setSidebarOpen(false)} />
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 260, background: 'white', boxShadow: '4px 0 32px rgba(0,0,0,0.12)', overflowY: 'auto', animation: 'dashSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
            <div style={{ height: 4, background: '#000080' }} />
            <div style={{ padding: '14px 16px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: 14, color: '#111827' }}>{user?.name}</span>
              <button onClick={() => setSidebarOpen(false)} style={{ width: 28, height: 28, borderRadius: 8, background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={14} color="#6B7280" />
              </button>
            </div>
            <nav style={{ padding: '4px 10px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {navLinks.map(({ to, icon: Icon, label, badge, color }) => (
                <NavLink key={label} to={to} end={to === '/dashboard'}
                  onClick={() => setSidebarOpen(false)}
                  style={({ isActive }) => ({ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 11, fontFamily: FONT, fontSize: 13.5, fontWeight: isActive ? 700 : 500, textDecoration: 'none', background: isActive ? `${color}15` : 'transparent', color: isActive ? color : '#6B7280' })}>
                  {({ isActive }) => (
                    <>
                      <span style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isActive ? `${color}18` : '#F9FAFB' }}>
                        <Icon size={14} color={isActive ? color : '#9CA3AF'} />
                      </span>
                      <span style={{ flex: 1 }}>{label}</span>
                      {badge && <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 10, background: '#000080', color: 'white' }}>{badge}</span>}
                    </>
                  )}
                </NavLink>
              ))}
              <div style={{ height: 1, background: '#F3F4F6', margin: '6px 0' }} />
              <button onClick={() => { handleLogout(); setSidebarOpen(false) }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 11, fontFamily: FONT, fontSize: 13.5, fontWeight: 500, background: 'transparent', color: '#9CA3AF', border: 'none', cursor: 'pointer', width: '100%' }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F9FAFB' }}><LogOut size={14} color="#9CA3AF" /></span>
                Log out
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* ── BODY: sidebar + content ── */}
      <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', gap: 22, maxWidth: 1440, margin: '0 auto', width: '100%', padding: '28px 20px' }}
        className="pb-20 lg:pb-6 px-3 lg:px-6">

        {/* ── DESKTOP sidebar (hidden on mobile) ── */}
        <aside className="hidden lg:flex" style={{
          width: 252, flexShrink: 0, flexDirection: 'column',
          borderRadius: 20, background: 'white',
          boxShadow: '0 4px 32px rgba(0,0,128,0.08), 0 1px 4px rgba(0,0,0,0.04)',
          position: 'sticky', top: 28, overflow: 'hidden',
          border: '1px solid #E2E5F0',
          animation: 'dashSlideIn 0.5s cubic-bezier(0.16,1,0.3,1) both',
        }}>
          {/* Top gradient strip */}
          <div style={{ height: 5, background: '#000080', flexShrink: 0 }} />

          {/* Profile block */}
          <div style={{ padding: '20px 20px 14px' }}>
            <div style={{ position: 'relative', marginBottom: 14 }}>
              <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,128,0.10)' }}>
                <img src={user?.photo} alt="profile" style={{ width: '100%', height: 148, objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <span style={{ position: 'absolute', bottom: 8, left: 8, display: 'flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 20, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', animation: 'pulseDot 2s infinite' }} />
                <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, color: '#15803D' }}>Online</span>
              </span>
              <button style={{ position: 'absolute', top: 8, right: 8, width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Bell size={13} color="#000080" />
                <span style={{ position: 'absolute', top: 5, right: 5, width: 7, height: 7, borderRadius: '50%', background: '#F8B500', border: '1.5px solid white' }} />
              </button>
            </div>

            <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: 15, color: '#111827', letterSpacing: '-0.02em' }}>{user?.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 5 }}>
              <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 20, background: '#000080', color: 'white', textTransform: 'capitalize' }}>
                {user?.membershipPlan}
              </span>
              <span style={{ fontFamily: FONT, fontSize: 11, color: '#9CA3AF' }}>· {user?.location}</span>
            </div>

            {/* Profile strength bar */}
            <div style={{ marginTop: 13 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontFamily: FONT, fontSize: 11, color: '#6B7280' }}>Profile strength</span>
                <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800, color: '#000080' }}>{user?.profileComplete || 72}%</span>
              </div>
              <div style={{ height: 6, borderRadius: 6, background: '#F3F4F6', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 6, background: '#000080', width: `${user?.profileComplete || 72}%`, animation: 'barGrow 1.4s cubic-bezier(0.16,1,0.3,1) 0.2s both' }} />
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,#E5E7EB,transparent)', margin: '0 16px 8px' }} />

          {/* Nav */}
          <nav style={{ padding: '0 12px 14px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {navLinks.map(({ to, icon: Icon, label, badge, color }, idx) => (
              <NavLink key={label} to={to} end={to === '/dashboard'}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                style={({ isActive }) => ({
                  display: 'flex', alignItems: 'center', gap: 11,
                  padding: '10px 13px', borderRadius: 12,
                  fontFamily: FONT, fontSize: 13.5, fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
                  background: isActive ? `${color}15` : hovered === label ? '#F0F2F8' : 'transparent',
                  color: isActive ? color : hovered === label ? '#1A1F36' : '#6B7280',
                  transform: hovered === label && !isActive ? 'translateX(3px)' : 'none',
                  animationDelay: `${80 + idx * 40}ms`,
                  animation: 'dashFadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both',
                })}
              >
                {({ isActive }) => (
                  <>
                    <span style={{ width: 34, height: 34, borderRadius: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isActive ? `${color}18` : hovered === label ? `${color}10` : '#F9FAFB', transition: 'all 0.2s', transform: hovered === label ? 'scale(1.1) rotate(-4deg)' : 'scale(1)', boxShadow: isActive ? `0 4px 12px ${color}30` : 'none' }}>
                      <Icon size={15} color={isActive ? color : hovered === label ? color : '#9CA3AF'} />
                    </span>
                    <span style={{ flex: 1 }}>{label}</span>
                    {badge && <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 10, background: '#000080', color: 'white' }}>{badge}</span>}
                    {isActive && <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}` }} />}
                  </>
                )}
              </NavLink>
            ))}

            <div style={{ height: 1, background: '#F3F4F6', margin: '6px 0' }} />

            <button onClick={handleLogout}
              onMouseEnter={() => setHovered('logout')}
              onMouseLeave={() => setHovered(null)}
              style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '10px 13px', borderRadius: 12, fontFamily: FONT, fontSize: 13.5, fontWeight: 500, background: hovered === 'logout' ? '#FFF8E6' : 'transparent', color: hovered === 'logout' ? '#B45309' : '#9CA3AF', border: 'none', cursor: 'pointer', width: '100%', transition: 'all 0.2s', transform: hovered === 'logout' ? 'translateX(3px)' : 'none' }}>
              <span style={{ width: 34, height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: hovered === 'logout' ? '#FEF3C7' : '#F9FAFB', transition: 'all 0.2s' }}>
                <LogOut size={15} color={hovered === 'logout' ? '#B45309' : '#9CA3AF'} />
              </span>
              Log out
            </button>
          </nav>

          {/* Upgrade promo */}
          <div style={{ margin: '0 12px 16px', padding: '14px', borderRadius: 16, background: 'linear-gradient(135deg,#EEF1FF,#E8EBF5)', border: '1px solid rgba(0,0,128,0.12)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -10, right: -10, width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg,#000080,#1a1aad)', opacity: 0.08 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <Sparkles size={13} color="#000080" />
              <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: '#000080' }}>Upgrade to Premium</span>
            </div>
            <p style={{ fontFamily: FONT, fontSize: 11, color: '#6B7280', lineHeight: 1.5, marginBottom: 10 }}>Get unlimited matches &amp; direct contact</p>
            <button className="dash-btn" style={{ width: '100%', padding: '8px 0', borderRadius: 10, background: '#000080', color: 'white', border: 'none', cursor: 'pointer', fontFamily: FONT, fontSize: 12, fontWeight: 800, boxShadow: '0 4px 14px rgba(0,0,128,0.3)' }}>
              Upgrade Now
            </button>
          </div>
        </aside>

        {/* ── Page content ── */}
        <main key={pathname} style={{ flex: 1, minWidth: 0, animation: 'pageEnter 0.38s cubic-bezier(0.16,1,0.3,1) both' }}>
          {children}
        </main>
      </div>

      {/* ── MOBILE bottom nav (hidden on lg+) ── */}
      <nav className="flex lg:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, background: 'white', borderTop: '1px solid #E8EBF5', boxShadow: '0 -4px 20px rgba(0,0,128,0.06)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {[
          { to: '/dashboard',  icon: LayoutDashboard, label: 'Home' },
          { to: '/matches',    icon: MessageCircle,   label: 'Browse' },
          { to: '/interests',  icon: Heart,           label: 'Interests' },
          { to: '/my-profile', icon: User,            label: 'Profile' },
          { to: '/membership', icon: CreditCard,      label: 'Plans' },
        ].map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end={to === '/dashboard'}
            style={({ isActive }) => ({ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px 4px 8px', textDecoration: 'none', color: isActive ? '#000080' : '#9CA3AF', borderTop: isActive ? '2px solid #000080' : '2px solid transparent', transition: 'all 0.15s' })}>
            <Icon size={19} />
            <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 600, marginTop: 3 }}>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
