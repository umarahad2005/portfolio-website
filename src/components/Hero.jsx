import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, stats } from '../data/content.js'
import Counter from './Counter.jsx'

const HeroScene = lazy(() => import('./HeroScene.jsx'))

function useTypewriter(words, typeMs = 65, holdMs = 1800) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const word = words[index % words.length]
    let i = 0
    let timer
    let cancelled = false

    const type = () => {
      if (cancelled) return
      if (i <= word.length) {
        setText(word.slice(0, i))
        i += 1
        timer = setTimeout(type, typeMs)
      } else {
        timer = setTimeout(erase, holdMs)
      }
    }

    const erase = () => {
      if (cancelled) return
      if (i >= 0) {
        setText(word.slice(0, i))
        i -= 1
        timer = setTimeout(erase, 28)
      } else {
        setIndex((v) => v + 1)
      }
    }

    type()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [index, words, typeMs, holdMs])

  return text
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.21, 0.6, 0.35, 1] },
  }),
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.span className="hero-eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="dot" /> Open to internships & freelance — {profile.location}
          </motion.span>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.12}>
            Hi, I&apos;m{' '}
            <span className="gradient-text">Umar Ahad Usmani</span>
          </motion.h1>

          <motion.div className="role-line" variants={fadeUp} initial="hidden" animate="show" custom={0.24}>
            <span>{role}</span>
            <span className="caret" />
          </motion.div>

          <motion.p className="lede" variants={fadeUp} initial="hidden" animate="show" custom={0.36}>
            I build <strong>agentic, production-grade AI products</strong> — from
            multi-agent service orchestrators to offline-first mobile apps —
            with the MERN stack, Gemini, LangChain, Flutter and FastAPI.
          </motion.p>

          <motion.div className="hero-ctas" variants={fadeUp} initial="hidden" animate="show" custom={0.48}>
            <a className="btn btn-primary" href="#projects">
              View my work <span aria-hidden>→</span>
            </a>
            <a className="btn btn-ghost" href={profile.resume} download>
              Download résumé
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp} initial="hidden" animate="show" custom={0.6}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">
                  <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
                </div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <div className="mouse" />
        scroll
      </div>
    </section>
  )
}
