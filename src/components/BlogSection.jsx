import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'

const posts = [
  {
    category: 'Wedding Tips',
    date: 'March 12, 2025',
    title: '7 Telugu Wedding Rituals Every Couple Should Know',
    excerpt: 'From Mangalasnanam to Saptapadi — a guide to the sacred ceremonies that make Telugu weddings truly special.',
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
  },
  {
    category: 'Astrology',
    date: 'February 28, 2025',
    title: 'How Horoscope Compatibility Works in Telugu Matrimony',
    excerpt: 'Understanding Rashi, Nakshatra matching, and why our Vedic compatibility score is trusted by 2 lakh families.',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    category: 'NRI Advice',
    date: 'February 10, 2025',
    title: 'Finding a Telugu Partner as an NRI: A Complete Guide',
    excerpt: 'Tips on bridging the distance, managing time zones, and building trust when searching from abroad.',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80',
  },
]

export default function BlogSection() {
  const headRef = useReveal()

  return (
    <section className="py-16 md:py-28" style={{ background: '#F0F4FF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="reveal text-center mb-12">
          <span className="section-tag" style={{ color: '#2338B0' }}>Latest Articles</span>
          <h2 className="section-title">From the Mangalayam Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <article key={p.title}
              className="bg-white rounded-2xl overflow-hidden group transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms`, boxShadow: '0 2px 16px rgba(35,56,176,0.07)', border: '1px solid #E2E5F0',
                opacity: 0, transform: 'translateY(24px)', animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s forwards` }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 16px 40px rgba(35,56,176,0.14)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#2338B0' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,56,176,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E5F0' }}
            >
              <div className="h-48 overflow-hidden">
                <img src={p.photo} alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: '#2338B0' }}>{p.category}</span>
                  <span className="font-body text-xs" style={{ color: '#9CA3AF' }}>{p.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg leading-snug mb-2 transition-colors duration-200 group-hover:text-primary"
                  style={{ color: '#1A1F36', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4"
                  style={{ color: '#6B7280', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {p.excerpt}
                </p>
                <Link to="#" className="font-body text-sm font-semibold transition-colors duration-200"
                  style={{ color: '#2338B0', borderBottom: '1px solid rgba(35,56,176,0.3)' }}>
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
