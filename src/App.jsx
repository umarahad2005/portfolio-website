import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { marqueeTech } from './data/content.js'

function BackgroundFX() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
        document.documentElement.style.setProperty('--my', `${e.clientY}px`)
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="bg-fx">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
        <div className="noise" />
      </div>
      <div className="spotlight" />
    </>
  )
}

function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech]
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee">
        {items.map((t, i) => (
          <span className="item" key={`${t}-${i}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
