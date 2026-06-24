import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Matches from './pages/Matches'
import ProfileDetails from './pages/ProfileDetails'
import SuccessStoriesPage from './pages/SuccessStories'
import Membership from './pages/Membership'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import MyProfile from './pages/MyProfile'
import Interests from './pages/Interests'
import SavedProfiles from './pages/SavedProfiles'
import { useAuth } from './context/AuthContext'

const dashboardRoutes = ['/dashboard', '/my-profile', '/interests', '/saved', '/matches', '/profile', '/membership']

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const { user } = useAuth()
  const isDash = (!!user && dashboardRoutes.some(r => pathname.startsWith(r))) || pathname === '/login' || pathname === '/register'
  const heroRoutes = ['/', '/about', '/contact', '/success-stories', '/membership', '/login', '/register']
  const isHero = heroRoutes.includes(pathname)
  return (
    <>
      <ScrollToTop />
      {!isDash && <Navbar />}
      <div className={!isDash && !isHero ? 'has-navbar' : ''}>
        <Routes>
          {/* Public */}
          <Route path="/"                element={<Home />} />
          <Route path="/login"           element={<Login />} />
          <Route path="/register"        element={<Register />} />
          <Route path="/about"           element={<About />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/membership"      element={<Membership />} />
          {/* Protected */}
          <Route path="/dashboard"   element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/matches"     element={<ProtectedRoute><Matches /></ProtectedRoute>} />
          <Route path="/profile/:id" element={<ProtectedRoute><ProfileDetails /></ProtectedRoute>} />
          <Route path="/my-profile"  element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
          <Route path="/interests"   element={<ProtectedRoute><Interests /></ProtectedRoute>} />
          <Route path="/saved"       element={<ProtectedRoute><SavedProfiles /></ProtectedRoute>} />
        </Routes>
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
