import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'
import loveBg from '../assets/love background.jpg'

export default function CTASection() {
  const ref = useReveal()

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${loveBg})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />


      <div ref={ref} className="reveal relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="section-tag mb-3 block" style={{ color: '#1A1F36', textShadow: '0 1px 3px rgba(255,255,255,0.8)' }}>
          Your Journey Begins Here
        </span>
        <h2 className="font-display font-bold mb-4 leading-tight"
          style={{ fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', color: '#1A1F36', textShadow: '0 2px 8px rgba(255,255,255,0.6)' }}>
          Begin Your Search for the{' '}
          <em className="not-italic" style={{ color: '#000080' }}>Right Match</em>{' '}
          Today
        </h2>
        <p className="font-body text-sm mb-6 max-w-xl mx-auto" style={{ color: '#1A1F36', fontWeight: 500, textShadow: '0 1px 4px rgba(255,255,255,0.7)' }}>
          Join 2 lakh Indian families who trust Mangalayam to find their life partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/register"
            className="inline-flex items-center justify-center gap-2 bg-white font-body font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full tracking-[0.08em] transition-all duration-200 select-none hover:-translate-y-1"
            style={{ color: '#000080', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            Register Free
          </Link>
          <Link to="/membership"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full tracking-[0.08em] transition-all duration-200 select-none hover:-translate-y-1"
            style={{ color: '#1A1F36', border: '2px solid #1A1F36' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1A1F36'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1A1F36' }}>
            View Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
