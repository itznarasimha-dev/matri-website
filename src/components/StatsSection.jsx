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
      <div className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-none mb-1">
        <span ref={ref}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <div className="font-body text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] font-semibold mt-2"
        style={{ color: 'rgba(255,255,255,0.7)' }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-8 sm:py-10" style={{ background: '#2338B0' }}>
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
