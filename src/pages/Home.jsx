import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { Lock, Heart, Star, ChevronRight } from 'lucide-react'
import Hero from '../components/Hero'
import MembershipTeaser from '../components/SearchSection'
import StatsSection from '../components/StatsSection'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import FeaturedProfiles from '../components/FeaturedProfiles'
import SuccessStories from '../components/SuccessStories'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import BlogSection from '../components/BlogSection'
import CTASection from '../components/CTASection'
import { ProfileCard } from '../components/ProfileCard'
import { profiles } from '../data/profiles'
import { useReveal } from '../useReveal'

/* ─── LOGGED-OUT LANDING ─────────────────────── */
function HomeLanding() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <HowItWorks />

      {/* Teaser — blurred locked profiles */}
      <section className="py-16 md:py-24" style={{ background: '#0a0a2e' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-tag">Browse Profiles</span>
            <h2 className="section-title-light">2,00,000+ Verified Profiles</h2>
            <p className="font-body text-sm mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Login to view full profiles, contact details and send interest
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {profiles.slice(0, 3).map(p => (
              <div key={p.id} className="relative">
                <div style={{ filter: 'blur(4px)', pointerEvents: 'none', userSelect: 'none' }}>
                  <ProfileCard profile={p} />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
                  style={{ background: 'rgba(10,10,46,0.55)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.4)' }}>
                    <Lock className="w-5 h-5" style={{ color: '#E8836A' }} />
                  </div>
                  <Link to="/login" className="btn-primary text-xs px-5 py-2">Login to View</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center flex flex-wrap gap-4 justify-center">
            <Link to="/register" className="btn-primary text-base px-10 py-4">Create Free Profile</Link>
            <Link to="/login"    className="btn-outline text-base px-10 py-4">Login</Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <SuccessStories />
      <MembershipTeaser />
      <Testimonials />
      <Gallery />
      <BlogSection />
      <CTASection />
    </main>
  )
}

/* ─── LOGGED-IN COMPONENTS ───────────────────── */
function WelcomeBar({ user }) {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'
  return (
    <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0a2e 0%, #00006b 100%)' }}>
      <div className="absolute inset-0 kolam-anim opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={user.photo} alt={user.name} className="w-14 h-14 rounded-full object-cover"
              style={{ border: '2px solid #E8836A', boxShadow: '0 0 20px rgba(212,160,23,0.3)' }} />
            <div>
              <p className="font-body text-sm mb-0.5" style={{ color: '#E8836A' }}>{greeting} 🪷</p>
              <h1 className="font-display text-white font-bold"
                style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', letterSpacing: '-0.03em' }}>
                {user.name}
              </h1>
              <p className="font-body text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                You have{' '}
                <span style={{ color: '#E8836A', fontWeight: 600 }}>{user.newInterests} new interests</span> and{' '}
                <span style={{ color: '#E8836A', fontWeight: 600 }}>{user.matchesCount} matches</span> waiting
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="/interests" className="btn-gold text-sm px-6 py-3">View Interests</Link>
            <Link to="/matches"   className="btn-outline text-sm px-6 py-3">Browse Matches</Link>
          </div>
        </div>
      </div>
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #E8836A, transparent)' }} />
    </div>
  )
}

function ProfileCompletion({ user }) {
  const ref = useReveal()
  const pct = user.profileComplete
  const nudges = [
    { label: 'Add horoscope details', points: '+8%' },
    { label: 'Upload more photos',    points: '+10%' },
    { label: 'Add family details',    points: '+10%' },
  ]
  return (
    <div ref={ref} className="reveal rounded-3xl p-7" style={{ background: '#F5ECD7', border: '1px solid #E8D5B0' }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-dark font-bold text-lg">Profile Completion</h3>
        <span className="font-display font-bold text-2xl" style={{ color: '#000080' }}>{pct}%</span>
      </div>
      <div className="h-2.5 rounded-full mb-2 overflow-hidden" style={{ background: '#E8D5B0' }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #000080, #E8836A)', transition: 'width 1s cubic-bezier(0.16,1,0.3,1)' }} />
      </div>
      <p className="font-body text-xs text-muted mb-5">Complete your profile to get 3× more matches</p>
      <div className="space-y-2 mb-6">
        {nudges.map(n => (
          <div key={n.label} className="flex items-center justify-between">
            <span className="font-body text-sm text-muted">+ {n.label}</span>
            <span className="font-body text-xs font-bold" style={{ color: '#000080' }}>{n.points}</span>
          </div>
        ))}
      </div>
      <Link to="/my-profile" className="btn-primary w-full justify-center">Complete My Profile</Link>
    </div>
  )
}

function MembershipNudge() {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal rounded-3xl p-7 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #000080 0%, #00006b 100%)', border: '1px solid rgba(212,160,23,0.3)' }}>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
      <div className="flex items-start gap-3 mb-5">
        <Star className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#E8836A' }} />
        <div>
          <h3 className="font-heading text-white font-bold mb-1">You're on the Free Plan</h3>
          <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Upgrade to Premium to unlock direct contact, unlimited views and a relationship manager.
          </p>
        </div>
      </div>
      <Link to="/membership" className="btn-gold w-full justify-center">Upgrade to Premium — ₹999/mo</Link>
    </div>
  )
}

/* ─── LOGGED-IN HOME FEED ────────────────────── */
function HomeDashboard({ user }) {
  const todayMatches   = profiles.filter(p => p.gender !== user.gender).slice(0, 6)
  const interestedIn   = profiles.filter(p => user.savedProfiles?.includes(p.id)).slice(0, 3)
  const recentlyViewed = profiles.filter(p => user.viewedProfiles?.includes(p.id)).slice(0, 3)
  const headRef = useReveal()

  return (
    <main style={{ background: '#0a0a2e', minHeight: '100vh' }}>
      <WelcomeBar user={user} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">

          {/* ── Main feed ── */}
          <div className="space-y-16">

            {/* Today's Matches */}
            <section>
              <div ref={headRef} className="reveal flex items-end justify-between mb-8">
                <div>
                  <span className="section-tag">Personalised for You</span>
                  <h2 className="section-title-light">Today's Matches</h2>
                </div>
                <Link to="/matches" className="font-body text-sm flex items-center gap-1 transition-colors duration-200"
                  style={{ color: '#E8836A' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = '#E8836A'}
                >
                  View All {user.matchesCount}+ <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {todayMatches.map(p => <ProfileCard key={p.id} profile={p} />)}
              </div>
            </section>

            {/* New Interests Received */}
            {user.newInterests > 0 && (
              <section>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="section-tag">Waiting for You</span>
                    <h2 className="section-title-light flex items-center gap-3">
                      People Interested in You
                      <span className="text-sm font-body font-bold px-2.5 py-1 rounded-full"
                        style={{ background: '#E8836A', color: '#0a0a2e' }}>
                        {user.newInterests} New
                      </span>
                    </h2>
                  </div>
                  <Link to="/interests" className="font-body text-sm flex items-center gap-1" style={{ color: '#E8836A' }}>
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {profiles.slice(0, user.newInterests).map(p => (
                    <div key={p.id} className="space-y-2">
                      <ProfileCard profile={p} />
                      <div className="flex gap-2 px-1">
                        <button className="flex-1 py-2 rounded-full font-body text-xs font-semibold"
                          style={{ background: '#000080', color: 'white' }}>
                          <Heart className="w-3 h-3 inline mr-1" />Accept
                        </button>
                        <button className="flex-1 py-2 rounded-full font-body text-xs font-semibold"
                          style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Recently Viewed */}
            {recentlyViewed.length > 0 && (
              <section>
                <div className="mb-6">
                  <span className="section-tag">Pick Up Where You Left Off</span>
                  <h2 className="section-title-light">Recently Viewed</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {recentlyViewed.map(p => <ProfileCard key={p.id} profile={p} />)}
                </div>
              </section>
            )}

            {/* Saved */}
            {interestedIn.length > 0 && (
              <section>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="section-tag">Your Shortlist</span>
                    <h2 className="section-title-light">Saved Profiles</h2>
                  </div>
                  <Link to="/saved" className="font-body text-sm flex items-center gap-1" style={{ color: '#E8836A' }}>
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {interestedIn.map(p => <ProfileCard key={p.id} profile={p} />)}
                </div>
              </section>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <div className="space-y-6">
            <ProfileCompletion user={user} />
            {user.membershipPlan === 'free' && <MembershipNudge />}
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Home() {
  const { user } = useAuth()
  if (user) return <HomeDashboard user={user} />
  return <HomeLanding />
}
