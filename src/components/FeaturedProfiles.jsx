import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { profiles } from '../data/profiles'
import { ProfileCard } from './ProfileCard'
import { useReveal, useRevealStagger } from '../useReveal'

export default function FeaturedProfiles() {
  const ref      = useReveal()
  const scrollRef = useRef(null)
  const cardRefs  = useRevealStagger(profiles.length)

  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="py-10 sm:py-14" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="reveal flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div>
            <span className="section-tag" style={{ color: '#2338B0' }}>Fresh This Week</span>
            <h2 className="font-display font-bold leading-tight"
              style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#1A1F36' }}>
              Meet Today's <em className="not-italic" style={{ color: '#2338B0' }}>Matches</em>
            </h2>
            <p className="font-body text-sm mt-1" style={{ color: '#6B7280' }}>Fresh profiles, verified this week</p>
          </div>
          <div className="flex gap-2">
            {[ChevronLeft, ChevronRight].map((Icon, idx) => (
              <button key={idx} onClick={() => scroll(idx === 0 ? -1 : 1)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid #E2E5F0', color: '#2338B0', background: 'white' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2338B0'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#2338B0' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#2338B0'; e.currentTarget.style.borderColor = '#E2E5F0' }}>
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto hide-scrollbar pb-2"
          style={{ scrollSnapType: 'x mandatory' }}>
          {profiles.map((p, i) => (
            <div key={p.id}
              ref={el => cardRefs.current[i] = el}
              data-idx={i}
              className="flex-shrink-0 w-[220px] sm:w-[260px] reveal"
              style={{ scrollSnapAlign: 'start' }}>
              <ProfileCard profile={p} />
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/matches" className="btn-primary">View All 2,00,000+ Profiles →</Link>
        </div>
      </div>
    </section>
  )
}
