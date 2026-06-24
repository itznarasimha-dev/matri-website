import { Link } from 'react-router-dom'
import { MapPin, Briefcase } from 'lucide-react'

export function ProfileCard({ profile }) {
  return (
    <Link to={`/profile/${profile.id}`} className="block group">
      <div
        className="rounded-2xl overflow-hidden transition-all duration-300 bg-white"
        style={{
          border: '1px solid #E2E5F0',
          boxShadow: '0 2px 16px rgba(35,56,176,0.07)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#2338B0'
          e.currentTarget.style.transform = 'translateY(-10px)'
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(35,56,176,0.14)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#E2E5F0'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 16px rgba(35,56,176,0.07)'
        }}
      >
        {/* Photo */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(26,31,54,0.55) 0%, transparent 55%)' }} />
          {/* Match badge */}
          <div className="absolute top-3 right-3 text-xs font-body font-bold px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.92)', color: '#2338B0', border: '1px solid rgba(35,56,176,0.2)' }}>
            {profile.score}% Match
          </div>
          {/* Slide-up View Profile */}
          <div className="profile-card-overlay px-4 pb-3">
            <span className="block text-center py-2.5 rounded-full font-body font-semibold text-sm text-white"
              style={{ background: '#2338B0' }}>
              View Profile
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-4 py-4">
          <h3 className="font-heading font-semibold text-lg leading-snug mb-1" style={{ color: '#1A1F36' }}>
            {profile.name}, {profile.age}
          </h3>
          <div className="flex items-center gap-1 mb-1">
            <MapPin className="w-3 h-3 shrink-0" style={{ color: '#2338B0' }} />
            <span className="font-body text-xs font-medium" style={{ color: '#2338B0' }}>{profile.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-3 h-3 shrink-0" style={{ color: '#9CA3AF' }} />
            <span className="font-body text-xs" style={{ color: '#9CA3AF' }}>{profile.profession}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
