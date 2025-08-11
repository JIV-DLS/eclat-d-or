import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Éclat d'Or</h3>
          <p>Chorale Catholique</p>
          <p className="motto">Doux et humble de coeur</p>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/events">Événements</Link></li>
            <li><Link to="/media">Médias</Link></li>
            <li><Link to="/news">Actualités</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Lomé, Togo</p>
          <p>Email: contact@eclatdor.tg</p>
          <p>Téléphone: +228 XX XX XX XX</p>
        </div>
        
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/eklador/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@mcct_eclat_dor_officiel" target="_blank" rel="noreferrer" aria-label="TikTok"><SiTiktok /></a>
            <a href="https://www.youtube.com/@eclatdor8491" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chorale Éclat d'Or - Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer

