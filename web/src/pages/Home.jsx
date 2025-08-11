import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar, FaHandsHelping, FaDove } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>Bienvenue à la Chorale <span className="gradient-text">Éclat d'Or</span></h2>
          <p>Une communauté chantant la gloire de Dieu avec douceur et humilité</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn">Découvrir notre histoire</Link>
            <Link to="/events" className="btn-outline">Voir nos événements</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}8eab8114726c7b9ed59819b5fc88c99b~tplv-tiktokx-cropcenter-1080-1080.jpeg`} alt="Le Mouvement Chrétiens Catholique de Tokoin Éclat d'Or" />
        </div>
      </section>
      
      <section className="values">
        <div className="section-header">
          <h2>Nos Valeurs Fondamentales</h2>
          <p>Inspirées par notre foi et notre devise</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon gold"><FaRegStar /></div>
            <h3>L'or du Christ</h3>
            <p>Refléter la gloire et la pureté du Christ à travers notre chant et notre témoignage.</p>
          </div>
          <div className="value-card">
            <div className="value-icon blue"><FaHandsHelping /></div>
            <h3>Sagesse et Humilité</h3>
            <p>Chercher la sagesse divine et pratiquer l'humilité dans toutes nos actions.</p>
          </div>
          <div className="value-card">
            <div className="value-icon white"><FaDove /></div>
            <h3>Pureté et Paix</h3>
            <p>Promouvoir la paix et la pureté de cœur dans notre communauté et au-delà.</p>
          </div>
        </div>
      </section>
      
      <section className="upcoming-events">
        <div className="section-header section-header-row">
          <h2>Événements à Venir</h2>
          <Link to="/events" className="view-all">Voir tout</Link>
        </div>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <span className="day">15</span>
              <span className="month">Août</span>
            </div>
            <div className="event-info">
              <h3>Fête de l'Assomption</h3>
              <p>Messe solennelle à la Cathédrale de Lomé</p>
              <span className="event-time">10:00 - 12:00</span>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date">
              <span className="day">22</span>
              <span className="month">Sep</span>
            </div>
            <div className="event-info">
              <h3>Concert de la Rentrée</h3>
              <p>Auditorium de l'Université de Lomé</p>
              <span className="event-time">18:00 - 20:00</span>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date">
              <span className="day">12</span>
              <span className="month">Nov</span>
            </div>
            <div className="event-info">
              <h3>Festival de Musique Sacrée</h3>
              <p>Participation au festival national</p>
              <span className="event-time">Toute la journée</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="gallery-preview">
        <div className="section-header section-header-row">
          <h2>Moment Partagés</h2>
          <Link to="/media" className="view-all">Voir la galerie</Link>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
        </div>
      </section>
      
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Restez informés</h2>
          <p>Inscrivez-vous à notre newsletter pour recevoir nos actualités et invitations</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Votre email" required />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home

