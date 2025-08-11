import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
// Placeholders for routes to be added next
import About from './pages/About'
import Events from './pages/Events'
import Media from './pages/Media'
import News from './pages/News'
import Contact from './pages/Contact'
import './App.css'

function App() {
  // Use Vite's resolved base as router basename (ensures correct paths on GitHub Pages)
  const base = import.meta.env.BASE_URL || '/'
  const basename = base.endsWith('/') ? base.slice(0, -1) : base
  return (
    <Router basename={basename}>
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  )
}

function MainContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <main className={`main ${isHome ? 'main--home' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/media" element={<Media />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
