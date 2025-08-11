import React from 'react'
import './News.css'
import { FaArrowRight } from 'react-icons/fa'

const News = () => {
  return (
    <section className="news-page container">
      <h2>Actualités</h2>
      <div className="news-grid">
        <article className="news-card">
          <div className="news-badge">Annonce</div>
          <h3>Bienvenue sur notre nouveau site</h3>
          <p>Découvrez nos activités, notre agenda et revivez nos meilleurs moments en images.</p>
          <a className="news-link" href="#">Lire la suite <FaArrowRight /></a>
        </article>
        <article className="news-card">
          <div className="news-badge">Événement</div>
          <h3>Concert de la Rentrée</h3>
          <p>Nous préparons un grand concert de rentrée. Restez à l'écoute pour les détails.</p>
          <a className="news-link" href="#">Lire la suite <FaArrowRight /></a>
        </article>
      </div>
    </section>
  )
}

export default News

