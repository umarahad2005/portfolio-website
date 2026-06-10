import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { featuredProjects, moreProjects, profile } from '../data/content.js'
import { ExternalIcon, GitHubIcon } from './Icons.jsx'

function ProjectLinks({ github, live }) {
  return (
    <div className="links">
      {github && (
        <a className="icon-btn" href={github} target="_blank" rel="noreferrer" aria-label="GitHub repository">
          <GitHubIcon />
        </a>
      )}
      {live && (
        <a className="icon-btn" href={live} target="_blank" rel="noreferrer" aria-label="Live site">
          <ExternalIcon />
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="03 · Work"
          title={
            <>
              Things I&apos;ve <span className="gradient-text">built & shipped</span>
            </>
          }
          sub="Four flagship products — agentic AI, offline-first mobile, and live SaaS — plus a bench of experiments across the stack."
        />

        <div className="featured-grid">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name} delay={0.07 * i}>
              <TiltCard className="project-card glass">
                <div className="top-row">
                  <span className="glyph">{p.glyph}</span>
                  <ProjectLinks github={p.github} live={p.live} />
                </div>
                <div className="badge-row">
                  {p.badges.map((b, j) => (
                    <span key={b} className={`tag-badge ${j % 2 ? 'alt' : ''}`}>
                      {b}
                    </span>
                  ))}
                </div>
                <h3>{p.name}</h3>
                <div className="tagline">{p.tagline}</div>
                <p className="desc">{p.desc}</p>
                <div className="tech-row">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="more-grid">
          {moreProjects.map((p, i) => (
            <Reveal key={p.name} delay={0.05 * i}>
              <div className="mini-card glass">
                <div className="mini-top">
                  <span className="folder">🗂️</span>
                  <ProjectLinks github={p.github} live={p.live} />
                </div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div className="tech-row">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-footer" delay={0.1}>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon /> &nbsp;More on GitHub →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
