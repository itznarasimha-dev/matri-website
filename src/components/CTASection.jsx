import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'

export default function CTASection() {
  const ref = useReveal()

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1600&q=85)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,128,0.82)' }} />

      <div ref={ref} className="reveal relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="section-tag mb-3 block" style={{ color: '#E8836A' }}>
          Your Journey Begins Here
        </span>
        <h2 className="font-display font-bold text-white mb-4 leading-tight"
          style={{ fontSize: 'clamp(1.5rem,3.5vw,2.4rem)' }}>
          Begin Your Search for the{' '}
          <em className="not-italic" style={{ color: '#E8836A' }}>Right Match</em>{' '}
          Today
        </h2>
        <p className="font-body text-sm mb-6 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Join 2 lakh Telugu families who trust Mangalayam to find their life partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/register"
            className="inline-flex items-center justify-center gap-2 bg-white font-body font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full tracking-[0.08em] transition-all duration-200 select-none hover:-translate-y-1"
            style={{ color: '#000080', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            Register Free
          </Link>
          <Link to="/membership"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full tracking-[0.08em] transition-all duration-200 select-none hover:-translate-y-1"
            style={{ color: '#E8836A', border: '2px solid #E8836A' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E8836A'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E8836A' }}>
            View Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
