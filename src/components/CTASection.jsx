import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'

export default function CTASection() {
  const ref = useReveal()

  return (
    <section className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A2A8F 0%, #2338B0 50%, #3D52C8 100%)' }}>
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      {/* Rose glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,131,106,0.12) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="section-tag mb-4 block" style={{ color: '#E8836A' }}>
          Your Journey Begins Here
        </span>

        <h2 className="font-display font-bold text-white mb-6 leading-tight"
          style={{ fontSize: 'clamp(2.5rem,6vw,4rem)' }}>
          Begin Your Search for the{' '}
          <em className="not-italic" style={{ color: '#E8836A' }}>Right Match</em>{' '}
          Today
        </h2>

        <p className="font-body text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Join 2 lakh Telugu families who trust Mangalayam to find their life partner.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/register"
            className="inline-flex items-center justify-center gap-2 bg-white font-body font-semibold text-base px-10 py-4 rounded-full tracking-[0.08em] transition-all duration-200 select-none hover:-translate-y-1"
            style={{ color: '#2338B0', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            Register Free
          </Link>
          <Link to="/membership"
            className="inline-flex items-center justify-center gap-2 border-2 border-amber-400 font-body font-semibold text-base px-10 py-4 rounded-full tracking-[0.08em] transition-all duration-200 select-none hover:-translate-y-1"
            style={{ color: '#E8836A', borderColor: '#E8836A' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E8836A'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E8836A' }}>
            View Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
