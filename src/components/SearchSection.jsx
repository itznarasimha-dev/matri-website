import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useReveal } from '../useReveal'

const miniPlans = [
  { name: 'Free',         price: '₹0',        active: false },
  { name: 'Premium',      price: '₹999/mo',   active: true  },
  { name: 'Premium Plus', price: '₹2,499/mo', active: false },
]

const bullets = [
  'Unlimited profile views',
  'Direct contact sharing',
  'Dedicated relationship manager',
]

export default function MembershipTeaser() {
  const ref = useReveal()

  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: '#000080' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <h2 className="font-display font-bold text-white italic leading-tight mb-4"
              style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)' }}>
              Find Your Match Faster<br />with Premium
            </h2>
            <ul className="space-y-2 mb-6">
              {bullets.map(b => (
                <li key={b} className="flex items-center gap-3 font-body text-sm text-white">
                  <Check className="w-4 h-4 shrink-0" style={{ color: '#E8836A' }} />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/membership"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-7 py-3 rounded-full font-body font-semibold text-sm tracking-[0.08em] transition-all duration-200 select-none hover:bg-white hover:text-primary">
              See All Plans →
            </Link>
          </div>

          <div className="flex flex-col gap-3 max-w-sm w-full mx-auto lg:mx-0">
            {miniPlans.map(plan => (
              <div key={plan.name}
                className="flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-200"
                style={
                  plan.active
                    ? { background: 'white', border: '2px solid #E8836A', transform: 'scale(1.03)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }
                    : { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }
                }
              >
                <span className="font-heading font-semibold text-base"
                  style={{ color: plan.active ? '#000080' : 'rgba(255,255,255,0.8)' }}>
                  {plan.name}
                </span>
                <span className="font-mono font-bold text-lg"
                  style={{ color: plan.active ? '#1A1F36' : 'rgba(255,255,255,0.6)' }}>
                  {plan.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
