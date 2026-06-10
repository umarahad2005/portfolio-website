import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo">
          umar<span className="gradient-text">.dev</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href={profile.resume} download>
          Résumé
        </a>

        <button
          className={`nav-burger ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * navLinks.length }}
              className="gradient-text"
            >
              Résumé ↓
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
