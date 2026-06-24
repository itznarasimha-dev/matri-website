import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Heart, ArrowRight } from 'lucide-react'
import LotusIcon from './LotusIcon'

const navLinks = [
  { to: '/',                label: 'Home' },
  { to: '/matches',         label: 'Find Partner' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/membership',      label: 'Membership' },
  { to: '/about',           label: 'About Us' },
  { to: '/contact',         label: 'Contact' },
]

const legalLinks = [
  { to: '#', label: 'Privacy Policy' },
  { to: '#', label: 'Terms of Service' },
  { to: '#', label: 'Grievance' },
  { to: '/contact', label: 'FAQ' },
]

const socials = [
  {
    label: 'Instagram', href: '#',
    icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500',
  },
  {
    label: 'Facebook', href: '#',
    icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.404 18.627 0 12 0 5.372 0 0 5.404 0 12.073c0 6.025 4.388 11.02 10.125 11.928V15.57H7.078v-3.497h3.047V9.322c0-3.006 1.791-4.666 4.532-4.666 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.492 0-1.956.927-1.956 1.877v2.353h3.328l-.532 3.497h-2.796v8.431C19.612 23.093 24 18.098 24 12.073z"/></svg>,
    color: 'hover:bg-blue-600',
  },
  {
    label: 'YouTube', href: '#',
    icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
    color: 'hover:bg-red-600',
  },
  {
    label: 'WhatsApp', href: 'https://wa.me/919876543210',
    icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    color: 'hover:bg-green-600',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0A0E1A' }}>

      {/* Accent top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #E8836A 30%, #2338B0 70%, transparent 100%)' }} />

      {/* Subtle background glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(35,56,176,0.08) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-10 right-10 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(232,131,106,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-5">

        {/* ── Main row ── */}
        <div className="grid grid-cols-12 gap-8 mb-8">

          {/* Brand — 4 cols */}
          <div className="col-span-12 md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-3 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #2338B0, #E8836A)' }}>
                <LotusIcon size={16} color="white" />
              </div>
              <div>
                <span className="block font-telugu" style={{ fontSize: '8px', color: '#E8836A', letterSpacing: '0.08em' }}>మంగళాయం</span>
                <span className="font-heading font-bold text-white" style={{ fontSize: '1.1rem', fontFamily: '"Playfair Display", serif', letterSpacing: '0.02em' }}>Mangalayam</span>
              </div>
            </Link>

            <p className="font-body text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.38)', maxWidth: 260 }}>
              Trusted Telugu matrimony platform connecting hearts across India & NRI communities.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${s.color}`}
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links — 2 cols */}
          <div className="col-span-6 md:col-span-2">
            <p className="font-body font-semibold text-white mb-3" style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Explore</p>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to}
                    className="font-body text-xs flex items-center gap-1 group transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#E8836A'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                  >
                    <ArrowRight className="w-2.5 h-2.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-150" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal — 2 cols */}
          <div className="col-span-6 md:col-span-2">
            <p className="font-body font-semibold text-white mb-3" style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Legal</p>
            <ul className="space-y-2">
              {legalLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.to}
                    className="font-body text-xs transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.38)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#E8836A'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.38)'}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter — 4 cols */}
          <div className="col-span-12 md:col-span-4">
            <p className="font-body font-semibold text-white mb-3" style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get in Touch</p>
            <ul className="space-y-2 mb-4">
              {[
                { icon: Phone, text: '+91 98765 43210' },
                { icon: Mail,  text: 'support@mangalayam.com' },
                { icon: MapPin,text: 'Banjara Hills, Hyderabad' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="w-3 h-3 shrink-0" style={{ color: '#E8836A' }} />
                  <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter pill */}
            <div className="flex gap-0 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent font-body text-xs text-white placeholder-white/30 px-3 py-2 outline-none"
              />
              <button
                className="px-3 py-2 font-body text-xs font-semibold transition-all duration-200 shrink-0"
                style={{ background: 'linear-gradient(135deg, #2338B0, #E8836A)', color: 'white' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-body" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
            © 2025 Mangalayam. All rights reserved.
          </p>
          <p className="font-body flex items-center gap-1" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
            Made with <Heart className="w-2.5 h-2.5 fill-current" style={{ color: '#E8836A' }} /> for Telugu Families
          </p>
        </div>

      </div>
    </footer>
  )
}
