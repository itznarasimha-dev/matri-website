import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

const Home             = lazy(() => import('./pages/Home'))
const Matches          = lazy(() => import('./pages/Matches'))
const ProfileDetails   = lazy(() => import('./pages/ProfileDetails'))
const SuccessStoriesPage = lazy(() => import('./pages/SuccessStories'))
const Membership       = lazy(() => import('./pages/Membership'))
const About            = lazy(() => import('./pages/About'))
const Contact          = lazy(() => import('./pages/Contact'))
const Login            = lazy(() => import('./pages/Login'))
const Register         = lazy(() => import('./pages/Register'))
const Dashboard        = lazy(() => import('./pages/Dashboard'))
const MyProfile        = lazy(() => import('./pages/MyProfile'))
const Interests        = lazy(() => import('./pages/Interests'))
const SavedProfiles    = lazy(() => import('./pages/SavedProfiles'))
const VisionMission    = lazy(() => import('./pages/VisionMission'))
const PrivacyPolicy    = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.PrivacyPolicy })))
const TermsOfService   = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.TermsOfService })))
const Grievance        = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.Grievance })))
const FAQ              = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.FAQ })))
const dashboardRoutes = ['/dashboard', '/my-profile', '/interests', '/saved', '/matches', '/profile', '/membership']

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F0F2F8' }}>
      <div style={{ width: 36, height: 36, border: '3px solid #E8EBF5', borderTop: '3px solid #000080', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}

function Layout() {
  const { pathname } = useLocation()
  const { user } = useAuth()
  const isDash = (!!user && dashboardRoutes.some(r => pathname.startsWith(r))) || pathname === '/login' || pathname === '/register'
  const heroRoutes = ['/', '/about', '/contact', '/success-stories', '/membership', '/login', '/register', '/vision-mission', '/privacy-policy', '/terms-of-service', '/grievance', '/faq']
  const isHero = heroRoutes.includes(pathname)
  return (
    <>
      <ScrollToTop />
      {!isDash && <Navbar />}
      <div className={!isDash && !isHero ? 'has-navbar' : ''}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/login"           element={<Login />} />
            <Route path="/register"        element={<Register />} />
            <Route path="/about"           element={<About />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/vision-mission"    element={<VisionMission />} />
            <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
            <Route path="/terms-of-service"  element={<TermsOfService />} />
            <Route path="/grievance"         element={<Grievance />} />
            <Route path="/faq"               element={<FAQ />} />
            <Route path="/membership"      element={<Membership />} />
            <Route path="/dashboard"   element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/matches"     element={<ProtectedRoute><Matches /></ProtectedRoute>} />
            <Route path="/profile/:id" element={<ProtectedRoute><ProfileDetails /></ProtectedRoute>} />
            <Route path="/my-profile"  element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
            <Route path="/interests"   element={<ProtectedRoute><Interests /></ProtectedRoute>} />
            <Route path="/saved"       element={<ProtectedRoute><SavedProfiles /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </div>
      {!isDash && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
