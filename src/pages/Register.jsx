import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { Eye, EyeOff, Check } from 'lucide-react'
import Toast from '../components/Toast'
import LotusIcon from '../components/LotusIcon'
import { useAuth } from '../context/AuthContext'

const steps = ['Basic Info', 'Personal Details', 'Preferences']

const inputClass = "w-full px-4 py-3.5 rounded-xl font-body text-sm text-dark focus:outline-none transition-colors duration-200"
const inputStyle = { border: '1px solid #E8D5B0', background: 'white' }
const focusStyle = { borderColor: '#7B2FBE' }

function SelectInput({ k, form, update, label, opts }) {
  return (
    <div>
      <label className="font-body text-xs font-medium block mb-1.5 text-muted">{label}</label>
      <select
        value={form[k]}
        onChange={e => update(k, e.target.value)}
        className={inputClass}
        style={{ ...inputStyle }}
        onFocus={e => Object.assign(e.target.style, focusStyle)}
        onBlur={e => Object.assign(e.target.style, inputStyle)}
      >
        <option value="">Select {label}</option>
        {opts.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}

function TextInput({ k, form, update, label, type = 'text' }) {
  return (
    <div>
      <label className="font-body text-xs font-medium block mb-1.5 text-muted">{label}</label>
      <input
        type={type}
        value={form[k]}
        onChange={e => update(k, e.target.value)}
        placeholder={label}
        className={inputClass}
        style={{ ...inputStyle }}
        onFocus={e => Object.assign(e.target.style, focusStyle)}
        onBlur={e => Object.assign(e.target.style, inputStyle)}
      />
    </div>
  )
}

export default function Register() {
  const { user, login } = useAuth()
  const [step, setStep]       = useState(0)
  const [showPass, setShowPass] = useState(false)
  const [toast, setToast]     = useState(null)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    profileFor: 'self', name: '', email: '', phone: '', password: '',
    dob: '', gender: '', height: '', caste: '', religion: 'Hindu',
    education: '', profession: '', location: '',
    lookingFor: '', ageMin: '22', ageMax: '30',
  })
  const navigate = useNavigate()

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  if (user) return <Navigate to="/dashboard" replace />

  return (
    <main className="min-h-screen flex items-center justify-center py-12 sm:py-16 px-4" style={{ background: '#F5ECD7' }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Success overlay */}
      {success && (
        <div className="success-overlay">
          <div style={{ animation: 'float 2s ease-in-out infinite' }}>
            <LotusIcon size={80} color="#D4A017" animate />
          </div>
          <h2 className="font-display text-white text-4xl font-bold mt-6 mb-3">Your journey has begun!</h2>
          <p className="font-body text-white/60 text-lg mb-8">🪷 Welcome to Mangalayam</p>
          <button
            onClick={() => navigate('/matches')}
            className="btn-primary text-base px-10 py-4"
          >
            Explore Matches →
          </button>
        </div>
      )}

      <div className="w-full max-w-xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 justify-center mb-8">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#7B2FBE' }}>
            <LotusIcon size={18} color="white" />
          </div>
          <div>
            <span className="block font-telugu text-[9px]" style={{ color: '#D4A017' }}>మంగళాయం</span>
            <span style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '0.02em', fontSize: '1.25rem', fontWeight: 700, color: '#7B2FBE' }}>Mangalayam</span>
          </div>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card" style={{ border: '1px solid #E8D5B0' }}>
          <h1 className="font-heading text-dark text-3xl font-bold mb-1">Create Profile</h1>
          <p className="font-body text-sm text-muted mb-6">
            Already registered?{' '}
            <Link to="/login" style={{ color: '#7B2FBE' }} className="font-semibold hover:underline">Sign in</Link>
          </p>

          {/* Progress */}
          <div className="flex gap-3 mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={
                      i < step
                        ? { background: '#D4A017', color: '#2C1654' }
                        : i === step
                        ? { background: '#7B2FBE', color: 'white' }
                        : { background: '#E8D5B0', color: '#8B7355' }
                    }
                  >
                    {i < step ? <Check className="w-3 h-3" /> : i + 1}
                  </div>
                </div>
                <div
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ background: i <= step ? '#7B2FBE' : '#E8D5B0' }}
                />
                <div className="font-body text-[10px] mt-1" style={{ color: i === step ? '#7B2FBE' : '#8B7355', fontWeight: i === step ? 600 : 400 }}>
                  {s}
                </div>
              </div>
            ))}
          </div>

          {/* Step 0 */}
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <label className="font-body text-xs font-medium block mb-2 text-muted">Profile For</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { val: 'self',     label: 'Myself',     emoji: '👤' },
                    { val: 'son',      label: 'My Son',     emoji: '👦' },
                    { val: 'daughter', label: 'My Daughter', emoji: '👧' },
                    { val: 'relative', label: 'Relative',   emoji: '👨‍👩‍👧' },
                  ].map(({ val, label, emoji }) => (
                    <button
                      key={val}
                      onClick={() => update('profileFor', val)}
                      className="py-3 px-2 rounded-xl font-body text-xs font-medium text-center transition-all duration-200 flex flex-col items-center gap-1"
                      style={
                        form.profileFor === val
                          ? { background: 'rgba(123,47,190,0.08)', border: '2px solid #7B2FBE', color: '#7B2FBE' }
                          : { border: '1px solid #E8D5B0', color: '#8B7355' }
                      }
                    >
                      <span className="text-lg">{emoji}</span>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <TextInput k="name"  label="Full Name" form={form} update={update} />
              <TextInput k="email" label="Email Address" type="email" form={form} update={update} />
              <TextInput k="phone" label="Mobile Number" type="tel" form={form} update={update} />
              <div>
                <label className="font-body text-xs font-medium block mb-1.5 text-muted">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={form.password}
                    onChange={e => update('password', e.target.value)}
                    placeholder="Create password"
                    className={`${inputClass} pr-12`}
                    style={inputStyle}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(s => !s)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-body text-xs font-medium block mb-1.5 text-muted">Date of Birth</label>
                  <input
                    type="date" value={form.dob} onChange={e => update('dob', e.target.value)}
                    className={inputClass} style={inputStyle}
                  />
                </div>
              <SelectInput k="gender" label="Gender" opts={['Male', 'Female']} form={form} update={update} />
              </div>
              <SelectInput k="education" label="Highest Education" opts={['B.Tech','M.Tech','MBBS','MBA','CA','B.Sc','M.Sc','Other']} form={form} update={update} />
              <SelectInput k="caste" label="Caste" opts={['Reddy','Kamma','Brahmin','Kapu','Vaishya','Yadav','Other']} form={form} update={update} />
              <SelectInput k="location" label="Current Location" opts={['Hyderabad','Vijayawada','Visakhapatnam','Bangalore','Chennai','USA','UK','Other']} form={form} update={update} />
              <TextInput k="profession" label="Profession (e.g. Software Engineer)" form={form} update={update} />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="font-body text-xs font-medium block mb-2 text-muted">Looking For</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Bride', 'Groom'].map(v => (
                    <button
                      key={v}
                      onClick={() => update('lookingFor', v)}
                      className="py-3 rounded-xl font-body text-sm font-semibold transition-all duration-200"
                      style={
                        form.lookingFor === v
                          ? { background: '#7B2FBE', color: 'white' }
                          : { border: '1px solid #E8D5B0', color: '#8B7355' }
                      }
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-body text-xs font-medium block mb-1.5 text-muted">Preferred Age Range</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number" value={form.ageMin} onChange={e => update('ageMin', e.target.value)}
                    min={18} max={60} placeholder="Min Age"
                    className={inputClass} style={inputStyle}
                  />
                  <input
                    type="number" value={form.ageMax} onChange={e => update('ageMax', e.target.value)}
                    min={18} max={60} placeholder="Max Age"
                    className={inputClass} style={inputStyle}
                  />
                </div>
              </div>
              <div
                className="rounded-2xl p-4 font-body text-sm"
                style={{ background: 'rgba(123,47,190,0.04)', border: '1px solid rgba(123,47,190,0.12)', color: '#8B7355' }}
              >
                <div className="font-semibold text-dark mb-1">🎉 Almost done!</div>
                Complete your profile after registration to get the best matches.
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="btn-outline-crimson flex-1 py-3.5">
                Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                onClick={() => {
                  if (step === 0 && (!form.name || !form.email || !form.phone || !form.password)) {
                    setToast({ message: 'Please fill all required fields.', type: 'error' })
                    return
                  }
                  setStep(s => s + 1)
                }}
                className="btn-primary flex-1 py-3.5"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={() => {
                  login({
                    id: Date.now(),
                    name: form.name || 'New Member',
                    age: form.dob ? new Date().getFullYear() - new Date(form.dob).getFullYear() : 25,
                    gender: form.gender?.toLowerCase() || 'female',
                    location: form.location || 'India',
                    profession: form.profession || '',
                    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
                    membershipPlan: 'free',
                    profileComplete: 45,
                    matchesCount: 12,
                    newInterests: 0,
                    savedProfiles: [],
                    viewedProfiles: [],
                  })
                  setSuccess(true)
                  setTimeout(() => navigate('/dashboard'), 2500)
                }}
                className="btn-gold flex-1 py-3.5 text-base"
              >
                Create My Profile 🪷
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
