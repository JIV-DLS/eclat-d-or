import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaMusic } from 'react-icons/fa'
import './Events.css'

const events = [
  {
    id: 1,
    date: '2025-08-15',
    title: "Fête de l'Assomption",
    location: 'Cathédrale de Lomé',
    time: '10:00 - 12:00',
    type: 'Liturgie'
  },
  {
    id: 2,
    date: '2025-09-22',
    title: 'Concert de la Rentrée',
    location: "Auditorium de l'Université de Lomé",
    time: '18:00 - 20:00',
    type: 'Concert'
  },
  {
    id: 3,
    date: '2025-11-12',
    title: 'Festival de Musique Sacrée',
    location: 'Lomé',
    time: 'Toute la journée',
    type: 'Festival'
  }
]

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })
}

const Events = () => {
  return (
    <section className="events-page container">
      <div className="events-hero">
        <div>
          <h2>Événements</h2>
          <p>Agenda, concerts, répétitions et activités à venir.</p>
        </div>
        <div className="rehearsal-chip"><FaMusic /> Répétitions chaque samedi — 16h</div>
      </div>

      <div className="events-layout">
        <div className="events-list">
          {events.map((e) => (
            <div key={e.id} className="event-card">
              <div className="event-date-badge">
                <span className="day">{formatDate(e.date).split(' ')[0]}</span>
                <span className="month">{formatDate(e.date).split(' ')[1]}</span>
              </div>
              <div className="event-body">
                <h3>{e.title}</h3>
                <div className="event-meta">
                  <span><FaCalendarAlt /> {new Date(e.date).toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long' })}</span>
                  <span><FaClock /> {e.time}</span>
                  <span><FaMapMarkerAlt /> {e.location}</span>
                </div>
                <div className="event-actions">
                  <button className="btn">Détails</button>
                  <button className="btn btn-outline">Ajouter au calendrier</button>
                </div>
              </div>
              <div className="event-type">{e.type}</div>
            </div>
          ))}
        </div>
        <aside className="events-aside">
          <div className="aside-card">
            <h4>Rendez-vous réguliers</h4>
            <ul>
              <li><strong>Répétition</strong> — chaque samedi à 16h</li>
              <li><strong>Messe mensuelle</strong> — 1er dimanche du mois</li>
            </ul>
          </div>
          <div className="aside-card">
            <h4>Nous inviter</h4>
            <p>Vous souhaitez nous accueillir pour un concert ou une célébration ?</p>
            <a className="btn" href="/contact">Faire une demande</a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Events

