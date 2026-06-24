import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import LotusIcon from './LotusIcon'

const quickLinks = [
  { to: '/',               label: 'Home' },
  { to: '/matches',        label: 'Find Partner' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/membership',     label: 'Membership' },
  { to: '/about',          label: 'About' },
]

const support = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/contact', label: 'FAQ' },
  { to: '#',        label: 'Privacy Policy' },
  { to: '#',        label: 'Terms of Service' },
  { to: '#',        label: 'Grievance' },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.404 18.627 0 12 0 5.372 0 0 5.404 0 12.073c0 6.025 4.388 11.02 10.125 11.928V15.57H7.078v-3.497h3.047V9.322c0-3.006 1.791-4.666 4.532-4.666 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.492 0-1.956.927-1.956 1.877v2.353h3.328l-.532 3.497h-2.796v8.431C19.612 23.093 24 18.098 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1A2A8F' }} className="relative overflow-hidden">
      {/* Gold gradient top border */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />

      {/* Rangoli watermark */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none select-none"
        style={{ opacity: 0.05 }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          {[0,30,60,90,120,150].map((r,i) => (
            <g key={i} transform={`rotate(${r} 100 100)`}>
              <ellipse cx="100" cy="60" rx="8" ry="20" fill="#D4A017" />
              <ellipse cx="100" cy="140" rx="8" ry="20" fill="#D4A017" />
            </g>
          ))}
          <circle cx="100" cy="100" r="12" fill="#D4A017" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                <LotusIcon size={20} color="white" />
              </div>
              <div>
                <span className="block font-telugu text-[9px] text-gold tracking-wide">మంగళాయం</span>
                <span className="font-brand text-xl text-primary font-bold" style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '0.02em' }}>Mangalayam</span>
              </div>
            </Link>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              Connecting Telugu hearts across India and NRI communities with trust, tradition, and technology.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white text-sm font-semibold mb-5 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-white text-sm font-semibold mb-5 tracking-wide uppercase">Support</h4>
            <ul className="space-y-3">
              {support.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white text-sm font-semibold mb-5 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: 'Banjara Hills, Hyderabad, Telangana 500034' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: Mail,  text: 'support@mangalayam.com' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/50">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="font-body text-xs text-white/30">
            © 2025 Mangalayam. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30 flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for Telugu Families
          </p>
        </div>
      </div>
    </footer>
  )
}
