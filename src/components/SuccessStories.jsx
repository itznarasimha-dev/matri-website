import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useReveal, useRevealStagger } from '../useReveal'
import girlProfile1 from '../assets/girl profile 1.jpg'
import girlProfile2 from '../assets/girl profile 2.jpg'
import girlProfile3 from '../assets/girl profile 3.jpg'
import boyProfile1 from '../assets/boy profile.jpg'
import boyProfile2 from '../assets/boy profile 2.jpg'
import boyProfile3 from '../assets/boy profile 3.jpg'

const couples = [
  {
    names: 'Kiran & Swathi', date: 'March 2023', location: 'Hyderabad',
    photo1: girlProfile1, photo2: boyProfile1,
    quote: '"Found our perfect match within a week on Mangalayam."',
  },
  {
    names: 'Rahul & Priya', date: 'January 2024', location: 'USA & Bangalore',
    photo1: girlProfile2, photo2: boyProfile2,
    quote: '"The verified profiles gave our families complete confidence."',
  },
  {
    names: 'Arjun & Kavya', date: 'June 2023', location: 'Vijayawada',
    photo1: girlProfile3, photo2: boyProfile3,
    quote: '"95% compatibility score — it was absolutely accurate!"',
  },
]

export default function SuccessStories() {
  const headRef  = useReveal()
  const cardRefs = useRevealStagger(couples.length)

  return (
    <section className="py-10 sm:py-14 lg:py-16" style={{ background: '#F0F4FF' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={headRef} className="reveal text-center mb-8 sm:mb-10">
          <span className="section-tag" style={{ color: '#000080' }}>Marriages Made on Mangalayam</span>
          <h2 style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#1A1F36', lineHeight: 1.2, letterSpacing: '-0.02em', marginTop: 4 }}>
            Over 4,800 couples.
            <span style={{ fontWeight: 400, fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: '#6B7280', display: 'block', marginTop: 4 }}>Countless blessings.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {couples.map((c, i) => (
            <div key={c.names}
              ref={el => cardRefs.current[i] = el}
              data-idx={i}
              className="reveal rounded-xl p-5 text-center bg-white transition-all duration-300"
              style={{ border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(0,0,128,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#000080'; e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,128,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,128,0.06)' }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={c.photo1} alt="" className="w-12 h-12 rounded-full object-cover object-top"
                  style={{ border: '2px solid rgba(0,0,128,0.2)' }} />
                <Heart className="w-4 h-4 shrink-0" style={{ color: '#000080', fill: '#000080', animation: 'heartBeat 3s ease-in-out infinite' }} />
                <img src={c.photo2} alt="" className="w-12 h-12 rounded-full object-cover object-top"
                  style={{ border: '2px solid rgba(0,0,128,0.2)' }} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.1rem', color: '#1A1F36', letterSpacing: '-0.01em', marginBottom: 3 }}>{c.names}</h3>
              <p style={{ fontSize: '0.8rem', fontWeight: 500, color: '#000080', marginBottom: 8 }}>{c.date} · {c.location}</p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.6, marginBottom: 14 }}>{c.quote}</p>
              <Link to="/success-stories"
                className="font-body text-sm font-semibold transition-colors duration-200"
                style={{ color: '#000080', borderBottom: '1px solid rgba(0,0,128,0.3)' }}
                onMouseEnter={e => { e.target.style.color = '#E8836A'; e.target.style.borderColor = '#E8836A' }}
                onMouseLeave={e => { e.target.style.color = '#000080'; e.target.style.borderColor = 'rgba(0,0,128,0.3)' }}
              >
                Read Their Story →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/success-stories" className="btn-primary">See All Success Stories →</Link>
        </div>
      </div>
    </section>
  )
}
