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
  { q: 'How does the compatibility score work?', a: 'Our algorithm analyzes values, lifestyle, education, family background, and preferences to generate a match percentage.' },
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
              <a href="https://wa.me/919876543210"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-body font-semibold py-3 rounded-full text-sm transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E2E5F0', boxShadow: '0 2px 12px rgba(0,0,128,0.06)' }}>
              <h3 className="font-heading font-bold mb-3" style={{ color: '#1A1F36' }}>Working Hours</h3>
              <div className="space-y-1 font-body text-sm" style={{ color: '#6B7280' }}>
                <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 5:00 PM</p>
                <p className="font-semibold" style={{ color: '#000080' }}>WhatsApp: 24/7</p>
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
