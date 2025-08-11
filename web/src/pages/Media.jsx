import React, { useState } from 'react'
import { FaImages, FaVideo, FaHeadphones } from 'react-icons/fa'
import './Media.css'

const Media = () => {
  const [tab, setTab] = useState('photos')
  const tabs = [
    { key: 'photos', label: 'Photos', icon: <FaImages /> },
    { key: 'videos', label: 'Vidéos', icon: <FaVideo /> },
    { key: 'audios', label: 'Audios', icon: <FaHeadphones /> }
  ]

  return (
    <section className="media-page container">
      <div className="media-header">
        <div>
          <h2>Médias</h2>
          <p>Photos, vidéos et enregistrements audio.</p>
        </div>
        <div className="media-tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className={`media-tab ${tab === t.key ? 'active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="media-grid">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="media-tile">
            <div className="media-thumb" />
            <div className="media-meta">
              <span className="media-title">Titre {i + 1}</span>
              <span className="media-kind">{tab}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Media

