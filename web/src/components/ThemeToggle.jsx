import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const STORAGE_KEY = 'theme'

function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const t = getPreferredTheme()
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <button
      type="button"
      aria-label="Basculer le thème"
      onClick={toggle}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,0.35)',
        color: 'var(--white)',
        background: 'transparent',
        cursor: 'pointer'
      }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggle

