import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import './ThemeToggle.css'

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
    <button type="button" aria-label="Basculer le thème" onClick={toggle} className="theme-toggle">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggle

