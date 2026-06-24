import { useState } from 'react'
import { Check, X, Zap, Shield, Crown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import DashLayout from '../components/DashLayout'

const plans = [
  {
    name: 'Free', icon: <Shield size={22} color="#6B7280" />, iconBg: '#F3F4F6',
    monthly: '₹0', yearly: '₹0', period: 'Forever',
    color: '#6B7280', border: '#E8EBF5', bg: '#fff',
    features: ['Create profile', 'Browse 20 profiles/day', 'Send 5 interests/month', 'Basic search filters', null, null, null],
  },
  {
    name: 'Premium', icon: <Zap size={22} color="#2338B0" />, iconBg: '#EEF1FF',
    monthly: '₹999', yearly: '₹799', period: 'per month',
    color: '#2338B0', border: '#2338B0', bg: '#fff', highlight: true, badge: 'Most Popular',
    features: ['Everything in Free', 'Unlimited browsing', 'Send unlimited interests', 'Advanced filters', 'View contact details', 'Chat with matches', null],
  },
  {
    name: 'Premium Plus', icon: <Crown size={22} color="#B45309" />, iconBg: '#FEF3C7',
    monthly: '₹2,499', yearly: '₹1,999', period: 'per month',
    color: '#B45309', border: '#FDE68A', bg: '#FFFBEB', badge: 'Best Value',
    features: ['Everything in Premium', 'Priority profile boost', 'Dedicated matchmaker', 'Verified badge', 'Parent login access', 'NRI match support', 'WhatsApp support'],
  },
]

const features = ['Create profile', 'Browse profiles', 'Send interests', 'Search filters', 'View contacts', 'Chat feature', 'Priority boost']

const testimonials = [
  { name: 'Ramya, 27', quote: 'Premium was worth every rupee. Found my match in 3 weeks!' },
  { name: 'Kiran, 30', quote: 'The relationship manager was incredibly helpful and patient.' },
  { name: 'Suresh, 32', quote: 'NRI support team guided us through the entire process seamlessly.' },
]

function MembershipContent({ yearly, setYearly }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Header */}
      <div style={{ background: '#fff', borderRadius: 16, padding: '18px 22px', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 26, color: '#1A1F36', margin: 0 }}>Membership Plans</h1>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, color: '#9CA3AF', margin: 0 }}>Upgrade to find your match faster. No hidden charges.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#F0F2F8', borderRadius: 10, padding: 4 }}>
          {[['Monthly', false], ['Yearly', true]].map(([label, val]) => (
            <button key={label} onClick={() => setYearly(val)}
              style={{ padding: '7px 16px', borderRadius: 8, fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.15s',
                background: yearly === val ? '#2338B0' : 'transparent',
                color: yearly === val ? 'white' : '#6B7280' }}>
              {label} {val && <span style={{ fontSize: 10, marginLeft: 4, background: '#FEF3C7', color: '#B45309', padding: '1px 5px', borderRadius: 5, fontWeight: 700 }}>-20%</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Plan cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {plans.map(plan => (
          <div key={plan.name}
            onMouseEnter={e => { if (!plan.highlight) e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { if (!plan.highlight) e.currentTarget.style.transform = 'translateY(0)' }}
            style={{ background: plan.bg, borderRadius: 16, padding: 24, border: `2px solid ${plan.highlight ? plan.color : plan.border}`, position: 'relative', boxShadow: plan.highlight ? '0 8px 32px rgba(35,56,176,0.18)' : '0 1px 12px rgba(35,56,176,0.07)', transform: plan.highlight ? 'translateY(-6px)' : 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}>
            {plan.badge && (
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, background: plan.color, color: plan.name === 'Premium' ? 'white' : '#1F2937', whiteSpace: 'nowrap' }}>{plan.badge}</div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: plan.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{plan.icon}</div>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 18, color: '#111827' }}>{plan.name}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#9CA3AF' }}>{plan.period}</div>
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 32, color: plan.color }}>{yearly ? plan.yearly : plan.monthly}</span>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#9CA3AF', marginLeft: 4 }}>/mo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              {plan.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {f ? <Check size={14} color={plan.color} /> : <X size={14} color="#D1D5DB" />}
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: f ? '#374151' : '#D1D5DB' }}>{f || features[i]}</span>
                </div>
              ))}
            </div>
            <button
              style={{ display: 'block', width: '100%', textAlign: 'center', padding: '10px', borderRadius: 10, fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 13, cursor: 'pointer', transition: 'opacity 0.15s',
                background: plan.highlight ? plan.color : 'transparent',
                color: plan.highlight ? 'white' : plan.color,
                border: `2px solid ${plan.color}`,
                boxShadow: plan.highlight ? '0 4px 16px rgba(35,56,176,0.25)' : 'none' }}>
              {plan.name === 'Free' ? 'Current Plan' : 'Upgrade Now'}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5' }}>
        <div style={{ padding: '14px 22px', background: 'linear-gradient(135deg,#2338B0,#3D52C8)' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: 18, color: 'white' }}>Feature Comparison</span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Outfit, sans-serif', fontSize: 13 }}>
            <thead>
              <tr style={{ background: '#F8F9FF' }}>
                <th style={{ textAlign: 'left', padding: '12px 22px', color: '#6B7280', fontWeight: 600 }}>Feature</th>
                {plans.map(p => <th key={p.name} style={{ padding: '12px 22px', color: p.color, fontWeight: 700 }}>{p.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr key={feat} style={{ borderTop: '1px solid #E8EBF5', background: i % 2 === 0 ? 'white' : '#FAFBFF' }}>
                  <td style={{ padding: '11px 22px', color: '#374151' }}>{feat}</td>
                  {plans.map(p => (
                    <td key={p.name} style={{ padding: '11px 22px', textAlign: 'center' }}>
                      {p.features[i] ? <Check size={15} color={p.color} style={{ margin: '0 auto' }} /> : <X size={15} color="#D1D5DB" style={{ margin: '0 auto' }} />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        {testimonials.map(t => (
          <div key={t.name} style={{ background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 1px 12px rgba(35,56,176,0.07)', border: '1px solid #E8EBF5', borderLeft: '4px solid #2338B0' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 15, color: '#374151', lineHeight: 1.6, marginBottom: 10 }}>"{t.quote}"</p>
            <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 600, color: '#2338B0' }}>— {t.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default function Membership() {
  const { user } = useAuth()
  const [yearly, setYearly] = useState(false)

  if (user) {
    return (
      <DashLayout>
        <MembershipContent yearly={yearly} setYearly={setYearly} />
      </DashLayout>
    )
  }

  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <MembershipContent yearly={yearly} setYearly={setYearly} />
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: '#6B7280', marginBottom: 12 }}>
            Ready to find your match?
          </p>
          <Link to="/register" className="btn-primary text-base px-10 py-4">Register Free →</Link>
        </div>
      </div>
    </main>
  )
}
