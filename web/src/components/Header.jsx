import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo-eclatdor.jpg'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path) => (location.pathname === path ? 'active' : '')

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">
              <img className="logo-img" src={logo} alt="Logo Éclat d'Or" />
            </div>
            <div>
              <h1>Éclat d'Or</h1>
              <p className="motto">Doux et humble de coeur</p>
            </div>
          </Link>
        </div>

        <div className="header-actions">
          <ThemeToggle />
        </div>

        {!isMenuOpen && (
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="drawer-close" aria-label="Fermer le menu" onClick={closeMenu}>×</button>
          <ul>
            <li>
              <Link className={isActive('/')} to="/" onClick={closeMenu}>
                Accueil
              </Link>
            </li>
            <li>
              <Link className={isActive('/about')} to="/about" onClick={closeMenu}>
                À propos
              </Link>
            </li>
            <li>
              <Link className={isActive('/events')} to="/events" onClick={closeMenu}>
                Événements
              </Link>
            </li>
            <li>
              <Link className={isActive('/media')} to="/media" onClick={closeMenu}>
                Médias
              </Link>
            </li>
            <li>
              <Link className={isActive('/news')} to="/news" onClick={closeMenu}>
                Actualités
              </Link>
            </li>
            <li>
              <Link className={isActive('/contact')} to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-menu-footer">
            <ThemeToggle />
            <span className="theme-label">Thème</span>
          </div>
        </nav>
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu} />}
      </div>
    </header>
  )
}

export default Header

