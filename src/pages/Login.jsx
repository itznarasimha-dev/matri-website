import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import Toast from '../components/Toast'
import LotusIcon from '../components/LotusIcon'
import { useAuth } from '../context/AuthContext'

const mockUser = {
  id: 1,
  name: 'Priya Sharma',
  age: 26,
  gender: 'female',
  location: 'Hyderabad',
  profession: 'Software Engineer',
  photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
  membershipPlan: 'free',
  profileComplete: 72,
  matchesCount: 47,
  newInterests: 3,
  savedProfiles: [2, 4, 6],
  viewedProfiles: [1, 3, 5],
}

const successAvatars = [
  { photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', name: 'Sravani, 26' },
  { photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', name: 'Naveen, 29' },
  { photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&q=80', name: 'Divya, 24' },
]

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm]         = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [toast, setToast]       = useState(null)

  if (user) return <Navigate to="/dashboard" replace />

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setToast({ message: 'Please fill in all fields.', type: 'error' })
      return
    }
    login(mockUser)
    setToast({ message: 'Signed in successfully! Welcome back.', type: 'success' })
    setTimeout(() => navigate('/dashboard'), 800)
  }

  return (
    <main className="min-h-[calc(100vh-80px)] flex" style={{ background: '#2C1654' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Left visual */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col items-center justify-center px-12 text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?w=1200&q=90')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(44,22,84,0.50) 0%, rgba(61,31,107,0.42) 100%)' }} />
        {/* Floating lotus background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <LotusIcon size={400} color="#D4A017" />
        </div>

        <div className="relative z-10">
          <span className="font-display text-8xl leading-none" style={{ color: 'rgba(212,160,23,0.4)' }}>"</span>
          <p className="font-display italic text-white text-3xl leading-relaxed -mt-6 mb-8">
            A thousand blessings begin<br />with one step
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              {successAvatars.map(a => (
                <div key={a.name} className="flex flex-col items-center gap-1">
                  <img src={a.photo} alt={a.name} className="w-12 h-12 rounded-full object-cover" style={{ border: '2px solid rgba(212,160,23,0.4)' }} />
                  <span className="font-body text-[10px]" style={{ color: '#D4A017' }}>{a.name}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Join them today — 2 lakh+ happy members</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }} />
      </div>

      {/* Right form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#7B2FBE', boxShadow: '0 4px 12px rgba(123,47,190,0.4)' }}>
              <LotusIcon size={18} color="white" />
            </div>
            <div>
              <span className="block font-telugu text-[9px]" style={{ color: '#D4A017' }}>మంగళాయం</span>
              <span style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.02em', fontSize: '1.25rem', fontWeight: 700, color: '#7B2FBE' }}>Mangalayam</span>
            </div>
          </Link>

          <h1 className="font-heading text-white text-3xl font-bold mb-1">Welcome Back</h1>
          <p className="font-body text-sm mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Sign in to continue your journey.{' '}
            <Link to="/register" className="transition-colors duration-200" style={{ color: '#7B2FBE' }}
              onMouseEnter={e => { e.target.style.color = '#D4A017' }}
              onMouseLeave={e => { e.target.style.color = '#7B2FBE' }}
            >
              New here? Register Free
            </Link>
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="font-body text-xs font-medium block mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="you@email.com"
                className="input-box w-full"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(212,160,23,0.2)', color: 'white' }}
              />
            </div>
            <div>
              <label className="font-body text-xs font-medium block mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Enter your password"
                  className="input-box w-full pr-12"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(212,160,23,0.2)', color: 'white' }}
                />
                <button type="button" onClick={() => setShowPass(s => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#D4A017' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer font-body" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <input type="checkbox" style={{ accentColor: '#7B2FBE' }} className="w-3.5 h-3.5" />
                Remember me
              </label>
              <a href="#" className="font-body transition-colors duration-200" style={{ color: '#7B2FBE' }}>Forgot Password?</a>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-base">Sign In →</button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>or continue with</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[{ label: 'Google', color: '#DB4437' }, { label: 'Facebook', color: '#4267B2' }].map(({ label, color }) => (
              <button key={label}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-body text-sm transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
