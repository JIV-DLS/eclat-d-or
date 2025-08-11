import React, { useEffect, useState } from 'react'
import { FaImages, FaVideo, FaHeadphones } from 'react-icons/fa'
import './Media.css'

const Media = () => {
  const [tab, setTab] = useState('photos')
  const tabs = [
    { key: 'photos', label: 'Photos', icon: <FaImages /> },
    { key: 'videos', label: 'Vidéos', icon: <FaVideo /> },
    { key: 'audios', label: 'Audios', icon: <FaHeadphones /> }
  ]

  const videoUrls = [
    // TikTok video posts only
    'https://www.tiktok.com/@mcct_eclat_dor_officiel/video/7459085528978296069',
    'https://www.tiktok.com/@mcct_eclat_dor_officiel/video/7433538900716539141',
    'https://www.tiktok.com/@mcct_eclat_dor_officiel/video/7455243782821317894',

  ]

  const extractTikTokId = (url) => {
    const match = url.match(/video\/(\d+)/)
    return match ? match[1] : null
  }

  useEffect(() => {
    if (tab !== 'videos') return
    // Load TikTok embed script once
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]')
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://www.tiktok.com/embed.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [tab])

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

      {tab === 'videos' ? (
        <div className="media-grid video-embeds">
          {videoUrls.map((url, i) => {
            const id = extractTikTokId(url)
            if (!id) return null
            return (
              <div key={i} className="media-tile" style={{ padding: 8 }}>
                <blockquote className="tiktok-embed" cite={url} data-video-id={id} style={{ maxWidth: '605px', minWidth: '325px' }}>
                  <section>
                    <a href={url} target="_blank" rel="noreferrer">Voir la vidéo TikTok</a>
                  </section>
                </blockquote>
              </div>
            )
          })}
        </div>
      ) : (
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
      )}
    </section>
  )
}

export default Media

