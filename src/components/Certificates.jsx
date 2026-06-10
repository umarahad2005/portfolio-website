import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { certificates } from '../data/content.js'
import { ExternalIcon } from './Icons.jsx'

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="certificates">
      <div className="container">
        <SectionHeading
          eyebrow="04 · Credentials"
          title={
            <>
              Certifications & <span className="gradient-text">recognition</span>
            </>
          }
          sub="11 verified credentials across generative AI, data science, problem solving and global hackathons — from IBM, Vanderbilt, Anthropic, Google, HackerRank and MIT's Hack-Nation."
        />

        <div className="cert-grid">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={0.04 * i}>
              <div
                className="cert-card glass"
                onClick={() => setSelected(c)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(c)}
              >
                <div className="thumb">
                  <img src={c.img} alt={c.title} loading="lazy" />
                  <div className="zoom">View certificate</div>
                </div>
                <div className="meta">
                  <div className="issuer">{c.issuer}</div>
                  <h4>{c.title}</h4>
                  <div className="date">{c.date}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <button className="close-btn" onClick={() => setSelected(null)} aria-label="Close">
              ✕
            </button>
            <motion.img
              src={selected.img}
              alt={selected.title}
              initial={{ scale: 0.92, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 10 }}
              transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="lb-meta" onClick={(e) => e.stopPropagation()}>
              <div className="issuer">{selected.issuer}</div>
              <h4>{selected.title}</h4>
              {selected.verify && (
                <div className="lb-actions">
                  <a
                    className="btn btn-ghost"
                    href={selected.verify}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalIcon /> &nbsp;Verify credential
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
