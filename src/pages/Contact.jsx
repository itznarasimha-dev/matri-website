import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from 'lucide-react'
import { useReveal } from '../useReveal'
import Toast from '../components/Toast'

import haldiBg from '../assets/haldi background.jpg'
import contact2Bg from '../assets/contact 2 background.jpg'

const faqs = [
  { q: 'Is Mangalayam free to use?',            a: 'Yes! Basic membership is completely free. You can browse profiles and send limited interests. Premium plans unlock full features.' },
  { q: 'How are profiles verified?',             a: 'Upload a government-issued ID during registration. Our team verifies it within 24 hours and adds the verified badge to your profile.' },
  { q: 'Can NRI members join?',                  a: 'Absolutely. We have dedicated NRI support for families in USA, UK, Australia, Canada, Gulf, and more.' },
  { q: 'Is my information safe?',                a: 'Your contact information is only shared with members you approve. We use encryption to protect all your data.' },
  { q: 'Can I hide my profile temporarily?',     a: 'Yes, you can pause your profile visibility anytime from account settings without losing your data.' },
  { q: 'How does the compatibility score work?', a: 'Our system analyzes values, lifestyle, education, family background, and preferences to generate a meaningful match percentage.' },
]

function FloatingInput({ label, type = 'text', value, onChange, required, rows }) {
  const [focused, setFocused] = useState(false)
  const isUp = focused || value
  const Tag  = rows ? 'textarea' : 'input'
  return (
    <div className="relative">
      <label className="absolute font-body text-sm transition-all duration-200 pointer-events-none"
        style={{ top: isUp ? '-18px' : '12px', fontSize: isUp ? '11px' : '14px', color: focused ? '#000080' : '#6B7280', left: 0 }}>
        {label}
      </label>
      <Tag type={type} value={value} onChange={onChange} required={required} rows={rows}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="input-field"
        style={focused ? { borderColor: '#000080' } : {}}
      />
    </div>
  )
}

export default function Contact() {
  const ref = useReveal()
  const [open, setOpen]   = useState(null)
  const [form, setForm]   = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [toast, setToast] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setToast({ message: "Message sent! We'll get back to you within 24 hours.", type: 'success' })
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="min-h-screen" style={{ background: '#F0F2F8' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Hero */}
      <div className="pt-32 sm:pt-36 pb-16 sm:pb-24 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${haldiBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          minHeight: '55vh',
        }}>
        <div className="relative z-10 px-4">
          <span className="section-tag" style={{ color: '#1A1F36', textShadow: '0 1px 4px rgba(255,255,255,0.6)', fontWeight: 700 }}>Get In Touch</span>
          <h1 className="font-display font-bold mt-2 mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#1A1F36', textShadow: '0 2px 12px rgba(255,255,255,0.6)' }}>
            We're Here For You
          </h1>
          <p className="font-body text-sm max-w-md mx-auto" style={{ color: '#1A1F36', fontWeight: 600, textShadow: '0 1px 6px rgba(255,255,255,0.6)' }}>
            Have questions? Our team is happy to help you find your match.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-14 sm:mb-20">

          {/* Form */}
          <div className="rounded-3xl p-6 sm:p-8" style={{ background: '#FFFFFF', border: '1px solid #E2E5F0', boxShadow: '0 4px 24px rgba(0,0,128,0.08)' }}>
            <h2 className="font-heading text-xl sm:text-2xl font-bold mb-6 sm:mb-8" style={{ color: '#1A1F36' }}>Send a Message</h2>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#DCFCE7' }}>
                  <MessageCircle className="w-8 h-8" style={{ color: '#16A34A' }} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2" style={{ color: '#1A1F36' }}>Message Sent!</h3>
                <p className="font-body text-sm mb-4" style={{ color: '#6B7280' }}>We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-outline-crimson text-sm px-6 py-2.5">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { key: 'name',  label: 'Full Name',     type: 'text' },
                  { key: 'email', label: 'Email Address', type: 'email' },
                  { key: 'phone', label: 'Phone Number',  type: 'tel' },
                ].map(({ key, label, type }) => (
                  <FloatingInput key={key} label={label} type={type} value={form[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} required />
                ))}
                <FloatingInput label="Message" value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required rows={4} />
                <button type="submit" className="btn-primary w-full py-4 text-base">Send Message →</button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-3xl p-8" style={{ background: '#FFFFFF', border: '1px solid #E2E5F0', boxShadow: '0 4px 24px rgba(0,0,128,0.08)' }}>
              <h2 className="font-heading text-xl font-bold mb-6" style={{ color: '#1A1F36' }}>Contact Details</h2>
              <div className="space-y-5">
                {[
                  { icon: Phone,  label: 'Phone',  value: '+91 98765 43210' },
                  { icon: Mail,   label: 'Email',  value: 'support@mangalayam.com' },
                  { icon: MapPin, label: 'Office', value: 'Banjara Hills, Hyderabad, Telangana 500034' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0,0,128,0.08)' }}>
                      <Icon className="w-5 h-5" style={{ color: '#000080' }} />
                    </div>
                    <div>
                      <div className="font-body text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#9CA3AF' }}>{label}</div>
                      <div className="font-body text-sm" style={{ color: '#1A1F36' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="mailto:helpdesk@mangalayam.com"
                className="mt-6 w-full flex items-center justify-center gap-2 text-white font-body font-semibold py-3 rounded-full text-sm transition-all duration-200"
                style={{ background: '#000080' }}
                onMouseEnter={e => e.currentTarget.style.background = '#1a1aad'}
                onMouseLeave={e => e.currentTarget.style.background = '#000080'}
              >
                <MessageCircle className="w-4 h-4" />
                Contact Helpdesk
              </a>
            </div>

            <div className="rounded-2xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E2E5F0', boxShadow: '0 2px 12px rgba(0,0,128,0.06)' }}>
              <h3 className="font-heading font-bold mb-3" style={{ color: '#1A1F36' }}>Working Hours</h3>
              <div className="space-y-1 font-body text-sm" style={{ color: '#6B7280' }}>
                <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 5:00 PM</p>
                <p className="font-semibold" style={{ color: '#000080' }}>Helpline: 24/7 Available</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FAQs */}
      <div style={{ backgroundImage: `url(${contact2Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 24px 80px' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: open === i ? '1px solid rgba(255,255,255,0.6)' : '1px solid rgba(255,255,255,0.3)', boxShadow: open === i ? '0 8px 32px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.08)' }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-heading font-semibold text-sm" style={{ color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 ml-3 transition-transform duration-300"
                    style={{ color: '#fff', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                <div style={{ 
                  maxHeight: open === i ? '300px' : '0', 
                  opacity: open === i ? 1 : 0,
                  overflow: 'hidden', 
                  transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease'
                }}>
                  <div className="px-5 pb-5 font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
