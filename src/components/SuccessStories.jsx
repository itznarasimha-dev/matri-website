import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useReveal } from '../useReveal'

const couples = [
  {
    names: 'Kiran & Swathi', date: 'March 2023', location: 'Hyderabad',
    photo1: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    photo2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote: '"Found our perfect match within a week on Mangalayam."',
  },
  {
    names: 'Rahul & Priya', date: 'January 2024', location: 'USA & Bangalore',
    photo1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    photo2: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    quote: '"The verified profiles gave our families complete confidence."',
  },
  {
    names: 'Arjun & Kavya', date: 'June 2023', location: 'Vijayawada',
    photo1: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80',
    photo2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    quote: '"95% compatibility score — it was absolutely accurate!"',
  },
]

export default function SuccessStories() {
  const headRef = useReveal()

  return (
    <section className="py-16 md:py-28" style={{ background: '#F0F4FF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="reveal text-center mb-14">
          <span className="section-tag" style={{ color: '#2338B0' }}>Marriages Made on Mangalayam</span>
          <h2 className="section-title">Over 4,800 couples.<br />Countless blessings.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {couples.map((c, i) => (
            <div key={c.names}
              className="reveal rounded-2xl p-7 text-center bg-white transition-all duration-300"
              style={{ transitionDelay: `${i * 120}ms`, border: '1px solid #E2E5F0', boxShadow: '0 2px 16px rgba(35,56,176,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2338B0'; e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(35,56,176,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,56,176,0.06)' }}
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <img src={c.photo1} alt="" className="w-16 h-16 rounded-full object-cover object-top"
                  style={{ border: '2px solid rgba(35,56,176,0.25)' }} />
                <Heart className="w-5 h-5" style={{ color: '#2338B0', fill: '#2338B0', animation: 'heartBeat 3s ease-in-out infinite' }} />
                <img src={c.photo2} alt="" className="w-16 h-16 rounded-full object-cover object-top"
                  style={{ border: '2px solid rgba(35,56,176,0.25)' }} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-1" style={{ color: '#1A1F36' }}>{c.names}</h3>
              <p className="font-body text-xs mb-4 font-semibold" style={{ color: '#2338B0' }}>{c.date} · {c.location}</p>
              <p className="font-display italic text-base leading-relaxed mb-5" style={{ color: '#6B7280' }}>{c.quote}</p>
              <Link to="/success-stories"
                className="font-body text-sm font-semibold transition-colors duration-200"
                style={{ color: '#2338B0', borderBottom: '1px solid rgba(35,56,176,0.3)' }}
                onMouseEnter={e => { e.target.style.color = '#F8B500'; e.target.style.borderColor = '#F8B500' }}
                onMouseLeave={e => { e.target.style.color = '#2338B0'; e.target.style.borderColor = 'rgba(35,56,176,0.3)' }}
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
