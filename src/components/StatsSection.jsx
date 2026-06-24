import { useCountUp } from '../useReveal'

const stats = [
  { value: 200000, label: 'Registered Members', suffix: '+' },
  { value: 98,     label: 'Profiles Verified',  suffix: '%' },
  { value: 4800,   label: 'Marriages',           suffix: '+' },
  { value: 15,     label: 'Years of Trust',      suffix: '+' },
]

function StatItem({ stat }) {
  const ref = useCountUp(stat.value)
  return (
    <div className="text-center px-4 sm:px-8 py-2">
      <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-none mb-1"
        style={{ fontWeight: 700, letterSpacing: '-0.03em' }}>
        <span ref={ref}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <div style={{ fontWeight: 500, fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 6 }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-6 sm:py-8" style={{ background: '#000080' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20">
          {stats.map(s => (
            <div key={s.label} className="py-4 sm:py-6">
              <StatItem stat={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
