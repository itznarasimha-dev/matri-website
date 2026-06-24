import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, X, Menu, ChevronRight, Bell, ChevronDown, User, Edit, CreditCard, Settings, LogOut } from 'lucide-react'
import LotusIcon from './LotusIcon'
import { useAuth } from '../context/AuthContext'

const publicLinks = [
  { to: '/',               label: 'Home' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/membership',      label: 'Membership' },
  { to: '/about',           label: 'About' },
  { to: '/contact',         label: 'Contact' },
]

const privateLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/matches',   label: 'Browse' },
  { to: '/interests', label: 'Interests' },
  { to: '/saved',     label: 'Saved' },
  { to: '/membership', label: 'Membership' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropOpen, setDropOpen]     = useState(false)
  const [query, setQuery]           = useState('')
  const navigate  = useNavigate()
  const dropRef   = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 80
      setScrolled(isScrolled)
      document.body.classList.toggle('navbar-scrolled', isScrolled)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(user ? `/matches?q=${encodeURIComponent(query.trim())}` : '/login')
      setSearchOpen(false)
      setQuery('')
    }
  }

  const handleLogout = () => {
    logout()
    setDropOpen(false)
    navigate('/')
  }

  const links = user ? privateLinks : publicLinks

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--top'}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to={user ? '/dashboard' : '/'} className="navbar__logo">
            <div className="navbar__logo-icon">
              <LotusIcon size={22} color="white" />
            </div>
            <div>
              <span className="navbar__logo-telugu">మంగళాయం</span>
              <span className="navbar__logo-brand" style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '0.02em' }}>Mangalayam</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="navbar__links">
            {links.map(l => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) => `navlink${isActive ? ' navlink--active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="navbar__actions">
            <button onClick={() => setSearchOpen(true)} className="navbar__hamburger" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>

            {user ? (
              <>
                {/* Notification bell */}
                <Link to="/interests" className="navbar__hamburger relative hidden lg:flex" aria-label="Interests">
                  <Bell className="w-4 h-4" />
                  {user.newInterests > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{ background: '#D4A017', color: '#2C1654' }}>
                      {user.newInterests}
                    </span>
                  )}
                </Link>

                {/* Avatar dropdown */}
                <div className="relative hidden lg:block" ref={dropRef}>
                  <button onClick={() => setDropOpen(o => !o)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200"
                    style={{ border: '1px solid rgba(212,160,23,0.3)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#D4A017'}
                    onMouseLeave={e => { if (!dropOpen) e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)' }}
                  >
                    <img src={user.photo} alt={user.name} className="w-7 h-7 rounded-full object-cover" style={{ border: '1px solid rgba(212,160,23,0.4)' }} />
                    <span className="font-body text-xs text-white font-medium">{user.name.split(' ')[0]}</span>
                    <ChevronDown className={`w-3 h-3 text-gold transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropOpen && (
                    <div className="absolute right-0 top-12 w-52 rounded-2xl overflow-hidden shadow-hover z-50"
                      style={{ background: '#2C1654', border: '1px solid rgba(212,160,23,0.2)' }}>
                      <div className="px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                        <p className="font-heading text-white text-sm font-semibold">{user.name}</p>
                        <p className="font-body text-xs" style={{ color: '#D4A017' }}>{user.membershipPlan === 'free' ? 'Free Plan' : 'Premium'}</p>
                      </div>
                      {[
                        { icon: User,       label: 'My Profile',   to: '/my-profile' },
                        { icon: Edit,       label: 'Edit Profile', to: '/my-profile' },
                        { icon: CreditCard, label: 'Membership',   to: '/membership' },
                        { icon: Settings,   label: 'Settings',     to: '#' },
                      ].map(({ icon: Icon, label, to }) => (
                        <Link key={label} to={to} onClick={() => setDropOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 font-body text-sm transition-colors duration-150"
                          style={{ color: 'rgba(255,255,255,0.7)' }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(123,47,190,0.12)'; e.currentTarget.style.color = '#D4A017' }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                        >
                          <Icon className="w-4 h-4" />
                          {label}
                        </Link>
                      ))}
                      <button onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 font-body text-sm border-t transition-colors duration-150"
                        style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,100,100,0.8)' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,80,80,0.08)'; e.currentTarget.style.color = '#ff6464' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,100,100,0.8)' }}
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login"    className="hidden lg:inline-flex btn-outline-crimson text-xs px-5 py-2">Login</Link>
                <Link to="/register" className="hidden lg:inline-flex btn-primary text-xs px-5 py-2">Register Free</Link>
              </>
            )}

            <button className="navbar__hamburger lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <form className="w-full max-w-xl px-6" onClick={e => e.stopPropagation()} onSubmit={handleSearch}>
            <div className="flex items-center gap-3 bg-white border rounded-2xl px-5 py-4" style={{ borderColor: 'rgba(35,56,176,0.2)', boxShadow: '0 8px 32px rgba(35,56,176,0.12)' }}>
              <Search className="w-5 h-5 shrink-0" style={{ color: '#2338B0' }} />
              <input autoFocus value={query} onChange={e => setQuery(e.target.value)}
                placeholder="Search by name, profession, location…"
                className="flex-1 bg-transparent font-body text-dark placeholder-muted/60 text-base outline-none"
              />
              <button type="button" onClick={() => setSearchOpen(false)}>
                <X className="w-5 h-5 transition-colors" style={{ color: '#9CA3AF' }} />
              </button>
            </div>
            <p className="text-center font-body text-xs mt-3" style={{ color: '#9CA3AF' }}>Press Enter to search · Esc to close</p>
          </form>
        </div>
      )}

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[150]" onClick={() => setMobileOpen(false)}>
          <div className="mobile-panel" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: '#E2E5F0' }}>
              <Link to={user ? '/dashboard' : '/'} className="navbar__logo" onClick={() => setMobileOpen(false)}>
                <div className="navbar__logo-icon"><LotusIcon size={20} color="white" /></div>
                <div>
                  <span className="navbar__logo-telugu">మంగళాయం</span>
                  <span className="navbar__logo-brand" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Mangalayam</span>
                </div>
              </Link>
              <button onClick={() => setMobileOpen(false)} style={{ color: '#6B7280' }}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {user && (
              <div className="px-5 py-4 border-b flex items-center gap-3" style={{ borderColor: '#E2E5F0' }}>
                <img src={user.photo} alt={user.name} className="w-10 h-10 rounded-full object-cover" style={{ border: '2px solid rgba(35,56,176,0.3)' }} />
                <div>
                  <p className="font-heading text-sm font-semibold" style={{ color: '#1A1F36' }}>{user.name}</p>
                  <p className="font-body text-xs" style={{ color: '#2338B0' }}>{user.membershipPlan === 'free' ? 'Free Plan' : 'Premium'}</p>
                </div>
              </div>
            )}

            <div className="p-5 space-y-1">
              {links.map((l, i) => (
                <NavLink key={l.to} to={l.to}
                  className={({ isActive }) => `mobile-link${isActive ? ' mobile-link--active' : ''}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </NavLink>
              ))}
            </div>

            <div className="p-5 pt-0 space-y-3 border-t border-white/10 mt-4">
              {user ? (
                <button onClick={() => { handleLogout(); setMobileOpen(false) }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-body text-sm font-semibold transition-colors duration-200"
                  style={{ border: '1px solid rgba(239,68,68,0.4)', color: 'rgba(239,68,68,0.8)' }}
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              ) : (
                <>
                  <Link to="/login"    className="btn-outline-crimson w-full text-sm py-3" onClick={() => setMobileOpen(false)}>Login</Link>
                  <Link to="/register" className="btn-primary w-full text-sm py-3"          onClick={() => setMobileOpen(false)}>Register Free</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
