import React, { useState } from 'react'
import './Contact.css'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-page container">
      <h2>Contact / Adhésion</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p>Vous souhaitez nous rejoindre ou nous écrire ? Laissez-nous un message.</p>
          <p className="org-name">Éclat d’Or « Saint Pierre Canisius »</p>
          <div className="info-cards">
            <div className="info-card"><FaMapMarkerAlt /> Paroisse Sts Martyrs de l’Uganda – Tokoin, BP 8024</div>
            <div className="info-card"><FaEnvelope /> meclatdor1@yahoo.fr / eclatdortokoin@gmail.com</div>
            <div className="info-card"><FaPhoneAlt /> +228 22 21 43 44 / +228 91 58 09 57 / +228 92 26 39 22</div>
          </div>
        </div>

        <div className="contact-form">
          {submitted ? (
            <div className="thanks">Merci pour votre message. Nous vous répondrons prochainement.</div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="fields">
                <input name="name" placeholder="Nom" value={form.name} onChange={onChange} required />
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
                <textarea name="message" placeholder="Message" value={form.message} onChange={onChange} rows={6} required />
                <button className="btn" type="submit"><FaPaperPlane /> Envoyer</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact

