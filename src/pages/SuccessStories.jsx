import { Heart, MapPin, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'
import { useCountUp } from '../useReveal'
import CTASection from '../components/CTASection'

const stories = [
  {
    names: 'Kiran & Swathi',
    married: 'March 2023',
    location: 'Hyderabad',
    photo: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    story: 'We both joined Mangalayam without much hope. But within a week, Kiran sent an interest and I noticed his genuine profile. After 4 months of conversations and family meetings, we got married in a beautiful Telugu ceremony in Hyderabad.',
    pull: '"Within a week we knew — Mangalayam found us our home."',
    timeline: ['Matched on Mangalayam', 'First phone call after 1 week', 'Met families after 2 months', 'Engagement ceremony', 'Grand wedding in Hyderabad'],
  },
  {
    names: 'Rahul & Priya',
    married: 'January 2024',
    location: 'USA & Bangalore',
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    story: 'Being an NRI in the US, I was worried about finding a Telugu partner who understood my dual culture. Priya from Bangalore was perfect. The verified profile system gave my parents complete confidence to proceed.',
    pull: '"The verified profiles gave our families complete confidence."',
    timeline: ['Profiles matched', 'Video call introduction', 'Visited India to meet', 'Families gave blessings', 'Dream wedding in Bangalore'],
  },
  {
    names: 'Arjun & Kavya',
    married: 'June 2023',
    location: 'Vijayawada',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    story: 'Our parents registered us and within 3 weeks found each other on Mangalayam. The compatibility score was 95% and it was absolutely accurate! We are living proof that this platform works.',
    pull: '"95% compatibility score — it was absolutely accurate!"',
    timeline: ['Parents registered profiles', '95% compatibility match', 'Families met in Vijayawada', 'Traditional engagement', 'Beautiful wedding'],
  },
  {
    names: 'Venkat & Deepika',
    married: 'October 2023',
    location: 'Visakhapatnam',
    photo: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80',
    story: "I found Deepika's profile and was impressed by her dedication to her career while maintaining Telugu cultural values. We connected instantly and the rest is history.",
    pull: '"Telugu values, modern outlook — she was everything I hoped for."',
    timeline: ['Found each other online', 'Regular conversations', 'Beach meeting in Vizag', 'Parents approved', 'Destination wedding'],
  },
]

const timelineYears = [
  { year: '2018', count: 40,   note: 'Platform launched' },
  { year: '2019', count: 250,  note: '1,000 profiles milestone' },
  { year: '2020', count: 480,  note: 'Expanded to NRI communities' },
  { year: '2021', count: 900,  note: 'Premium plans launched' },
  { year: '2022', count: 2100, note: '5,000 marriage milestone' },
  { year: '2023', count: 3600, note: 'AI matching introduced' },
  { year: '2024', count: 4800, note: '50,000 members strong' },
]

function StoryCard({ s, i }) {
  const ref = useReveal()
  const isEven = i % 2 === 0

  return (
    <div ref={ref} className={`reveal grid lg:grid-cols-2 gap-10 items-center`}>
      {/* Photo — alternates side */}
      <div style={{ order: isEven ? 0 : 1 }}>
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
          <img src={s.photo} alt={s.names} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,22,84,0.7) 0%, transparent 50%)' }} />
          <div className="absolute bottom-5 left-5">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-4 h-4 fill-primary" style={{ color: '#000080', animation: 'heartBeat 3s ease-in-out infinite' }} />
              <span className="font-display text-white text-xl font-bold">{s.names}</span>
            </div>
            <div className="flex gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{s.married}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{s.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div style={{ order: isEven ? 1 : 0 }}>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
          "{s.story}"
        </p>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 500, lineHeight: 1.6, color: '#000080', marginBottom: 24 }}>{s.pull}</p>

        {/* Timeline */}
        <div className="relative pl-6 space-y-3" style={{ borderLeft: '2px solid rgba(212,160,23,0.2)' }}>
          {s.timeline.map((t, j) => (
            <div key={j} className="relative">
              <div
                className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full"
                style={{ background: '#000080', border: '2px solid #e8e8f0' }}
              />
              <p className="font-body text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineYear({ y }) {
  const countRef = useCountUp(y.count)
  return (
    <div
      className="flex-shrink-0 text-center px-6 py-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 cursor-default"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,160,23,0.1)', minWidth: '120px' }}
    >
      <div className="font-body text-xs font-bold mb-1" style={{ color: '#D4A017' }}>{y.year}</div>
      <div className="font-mono font-bold text-white text-xl">
        <span ref={countRef}>0</span>+
      </div>
      <div className="font-body text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{y.note}</div>
    </div>
  )
}

export default function SuccessStoriesPage() {
  const heroCountRef = useCountUp(4800)
  const headRef = useReveal()

  return (
    <main className="min-h-screen" style={{ background: '#2C1654' }}>
      {/* Hero */}
      <div
        className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1722952934708-749c22eb2e58?w=1920&q=90')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(44,22,84,0.55) 0%, rgba(44,22,84,0.30) 50%, rgba(44,22,84,0.50) 100%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <span className="font-body text-xs text-white font-semibold uppercase tracking-[0.15em]">
              <span ref={heroCountRef}>0</span>+ Families United
            </span>
          </div>
          <h1
            style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 800, fontSize: 'clamp(3rem, 7vw, 5rem)', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 16 }}
          >
            Love Stories That Inspire
          </h1>
          <p className="font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Every match is a story of trust, tradition, and love
          </p>
        </div>
      </div>

      {/* Stories */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16 sm:space-y-24">
        {stories.map((s, i) => <StoryCard key={i} s={s} i={i} />)}
      </div>

      {/* Love Timeline */}
      <div ref={headRef} className="reveal max-w-7xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="text-center mb-8">
          <span className="section-tag">Love Timeline</span>
          <h2 className="section-title-light">Our Journey of Unions</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 justify-start lg:justify-center">
          {timelineYears.map(y => <TimelineYear key={y.year} y={y} />)}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.15, marginTop: 6 }}>Be Our Next Success Story</h2>
        <Link to="/register" className="btn-primary text-base px-10 py-4">
          Register Free →
        </Link>
      </div>

      <CTASection />
    </main>
  )
}
