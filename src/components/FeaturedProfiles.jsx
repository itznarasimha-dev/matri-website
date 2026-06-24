import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { profiles } from '../data/profiles'
import { ProfileCard } from './ProfileCard'
import { useReveal } from '../useReveal'

export default function FeaturedProfiles() {
  const ref       = useReveal()
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="reveal flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="section-tag" style={{ color: '#2338B0' }}>Fresh This Week</span>
            <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#1A1F36' }}>
              Meet Today's <em className="not-italic" style={{ color: '#2338B0' }}>Matches</em>
            </h2>
            <p className="font-body text-sm mt-2" style={{ color: '#6B7280' }}>Fresh profiles, verified this week</p>
          </div>
          <div className="flex gap-3">
            {[ChevronLeft, ChevronRight].map((Icon, idx) => (
              <button key={idx} onClick={() => scroll(idx === 0 ? -1 : 1)}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid #E2E5F0', color: '#2338B0', background: 'white' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2338B0'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#2338B0' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#2338B0'; e.currentTarget.style.borderColor = '#E2E5F0' }}>
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto hide-scrollbar pb-2"
          style={{ scrollSnapType: 'x mandatory' }}>
          {profiles.map((p, i) => (
            <div key={p.id} className="flex-shrink-0 w-[280px] md:w-[300px] reveal"
              style={{ scrollSnapAlign: 'start', animationDelay: `${i * 0.1}s` }}>
              <ProfileCard profile={p} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/matches" className="btn-primary">View All 2,00,000+ Profiles →</Link>
        </div>
      </div>
    </section>
  )
}
