import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import Toast from '../components/Toast'
import LotusIcon from '../components/LotusIcon'
import { useAuth } from '../context/AuthContext'
import loginBg from '../assets/login page background.jpg'
import girlProfile1 from '../assets/girl profile 1.jpg'
import girlProfile2 from '../assets/girl profile 2.jpg'
import boyProfile1 from '../assets/boy profile.jpg'

const mockUser = {
  id: 1,
  name: 'Priya Sharma',
  age: 26,
  gender: 'female',
  location: 'Hyderabad',
  profession: 'Software Engineer',
  photo: girlProfile1,
  membershipPlan: 'free',
  profileComplete: 72,
  matchesCount: 47,
  newInterests: 3,
  savedProfiles: [2, 4, 6],
  viewedProfiles: [1, 3, 5],
}

const successAvatars = [
  { photo: girlProfile1, name: 'Sravani, 26' },
  { photo: boyProfile1,  name: 'Naveen, 29' },
  { photo: girlProfile2, name: 'Divya, 24' },
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
    <main className="min-h-screen flex" style={{ background: '#F5F0EB' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Left visual */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col items-center justify-center px-12 text-center"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10">
          <span className="font-display text-8xl leading-none" style={{ color: 'rgba(255,255,255,0.6)', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>"</span>
          <p className="font-display italic text-white text-3xl leading-relaxed -mt-6 mb-8" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
            A thousand blessings begin<br />with one step
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              {successAvatars.map(a => (
                <div key={a.name} className="flex flex-col items-center gap-1">
                  <img src={a.photo} alt={a.name} className="w-12 h-12 rounded-full object-cover" style={{ border: '2px solid rgba(255,255,255,0.6)' }} />
                  <span className="font-body text-[11px] font-semibold" style={{ color: '#fff', textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>{a.name}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm font-semibold" style={{ color: '#fff', textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>Join them today — 2 lakh+ happy members</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #E8836A, transparent)' }} />
      </div>

      {/* Right form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16" style={{ background: '#F5F0EB' }}>
        <div className="w-full max-w-md mx-auto">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <LotusIcon size={34} color="#E8836A" />
            <span style={{ letterSpacing: '0.02em', fontSize: '1.25rem', fontWeight: 700, color: '#000080' }}>Mangalayam</span>
          </Link>

          <h1 className="font-heading text-3xl font-bold mb-1" style={{ color: '#1A1F36' }}>Welcome Back</h1>
          <p className="font-body text-sm mb-8" style={{ color: '#6B7280' }}>
            Sign in to continue your journey.{' '}
            <Link to="/register" className="transition-colors duration-200" style={{ color: '#E8836A' }}
              onMouseEnter={e => { e.target.style.color = 'white' }}
              onMouseLeave={e => { e.target.style.color = '#E8836A' }}
            >
              New here? Register Free
            </Link>
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="font-body text-xs font-medium block mb-1.5" style={{ color: '#6B7280' }}>Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="you@email.com"
                className="input-box w-full"
                style={{ background: 'white', borderColor: '#E2E5F0', color: '#1A1F36' }}
              />
            </div>
            <div>
              <label className="font-body text-xs font-medium block mb-1.5" style={{ color: '#6B7280' }}>Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Enter your password"
                  className="input-box w-full pr-12"
                  style={{ background: 'white', borderColor: '#E2E5F0', color: '#1A1F36' }}
                />
                <button type="button" onClick={() => setShowPass(s => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-200"
                  style={{ color: '#9CA3AF' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#E8836A' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF' }}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer font-body" style={{ color: '#6B7280' }}>
                <input type="checkbox" style={{ accentColor: '#000080' }} className="w-3.5 h-3.5" />
                Remember me
              </label>
              <a href="#" className="font-body transition-colors duration-200" style={{ color: '#E8836A' }}>Forgot Password?</a>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-base">Sign In →</button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: '#E2E5F0' }} />
            <span className="font-body text-xs" style={{ color: '#9CA3AF' }}>or continue with</span>
            <div className="flex-1 h-px" style={{ background: '#E2E5F0' }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[{ label: 'Google', color: '#DB4437' }, { label: 'Facebook', color: '#4267B2' }].map(({ label, color }) => (
              <button key={label}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-body text-sm transition-all duration-200"
                style={{ border: '1px solid #E2E5F0', color: '#6B7280', background: 'white' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = '#1A1F36' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.color = '#6B7280' }}
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
