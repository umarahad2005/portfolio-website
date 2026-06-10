import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { education, profile, skillGroups } from '../data/content.js'

const facts = [
  { k: 'Based in', v: profile.location },
  { k: 'Studying', v: 'BS Computer Science · Riphah' },
  { k: 'CGPA', v: '3.75 / 4.00' },
  { k: 'Focus', v: 'Agentic AI · Full-Stack · Mobile' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading
          eyebrow="01 · About"
          title={
            <>
              Engineering <span className="gradient-text">AI products</span>,
              <br />
              not just demos.
            </>
          }
        />

        <div className="about-grid">
          <Reveal>
            <TiltCard className="about-photo glass">
              <img src="/assets/umar.jpg" alt={profile.fullName} loading="lazy" />
              <div className="badge">
                <span className="name">{profile.name}</span>
                <span className="loc">📍 Lahore</span>
              </div>
            </TiltCard>
          </Reveal>

          <div className="about-copy">
            <Reveal delay={0.1}>
              <p>
                I&apos;m a Computer Science undergraduate at{' '}
                <strong>{education.school.split(' ·')[0]}</strong> (CGPA 3.75) who
                ships real software, not just coursework. Over the last two years
                I&apos;ve taken four AI products from idea to production —
                a multi-agent service orchestrator, an offline-first productivity
                app, a skills-recognition protocol built at an MIT hackathon, and
                a live SaaS with its own Chrome extension.
              </p>
              <p>
                My sweet spot is the place where <strong>generative AI meets
                full-stack engineering</strong>: agent orchestration with Gemini
                ADK and LangChain, production auth and APIs with Node and
                FastAPI, and polished interfaces in React and Flutter.
              </p>
              <p>
                Outside the editor, I lead Marketing & Outreach for the{' '}
                <strong>AWS Cloud Club at Riphah</strong>, where I&apos;ve helped run
                10+ workshops bringing cloud computing to 100+ students.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="about-facts">
              {facts.map((f) => (
                <div className="fact" key={f.k}>
                  <div className="k">{f.k}</div>
                  <div className="v">{f.v}</div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.24} className="skills-block">
              <h3>Toolbox</h3>
              {skillGroups.map((g) => (
                <div className="skill-group" key={g.name}>
                  <div className="group-name">{g.name}</div>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
