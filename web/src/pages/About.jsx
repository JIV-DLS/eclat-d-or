import React from 'react'
import { FaRegStar, FaHandsHelping, FaDove } from 'react-icons/fa'
import './About.css'
import logo from '../assets/logo-eclatdor.jpg'

const About = () => {
  return (
    <section className="about container">
      <div className="about-grid">
        <div className="about-content">
          <h2>À propos</h2>
          <p>
            La Chorale Éclat d'Or est une chorale catholique basée à Lomé, Togo. Nous
            partageons la foi à travers le chant liturgique et les concerts spirituels.
          </p>

          <div className="motto-card">
            <img src={logo} alt="Logo Éclat d'Or" />
            <div>
              <h3>Notre devise</h3>
              <p className="motto-text">« Doux et humble de coeur »</p>
            </div>
          </div>
        </div>

        <div className="values-content">
          <h3>Nos valeurs</h3>
          <div className="values-cards">
            <div className="value-card">
              <div className="value-icon gold"><FaRegStar /></div>
              <h4>L'or du Christ</h4>
              <p>Excellence et pureté au service de la liturgie et du prochain.</p>
            </div>
            <div className="value-card">
              <div className="value-icon blue"><FaHandsHelping /></div>
              <h4>Sagesse et Humilité</h4>
              <p>Avancer ensemble avec bienveillance et esprit de service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon white"><FaDove /></div>
              <h4>Pureté et Paix</h4>
              <p>Témoigner de la paix du Christ dans nos chants et nos actions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

