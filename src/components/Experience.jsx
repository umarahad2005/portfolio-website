import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { education, experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="02 · Journey"
          title={
            <>
              Experience & <span className="gradient-text">leadership</span>
            </>
          }
        />

        <div className="exp-grid">
          <div className="timeline">
            {experience.map((e, i) => (
              <Reveal key={e.title} delay={0.08 * i} className="timeline-item">
                <div className="when">{e.when}</div>
                <h3>{e.title}</h3>
                <div className="org">{e.org}</div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="edu-card glass">
              <div className="edu-label">Education</div>
              <h3>{education.degree}</h3>
              <div className="school">
                {education.school} · {education.when}
              </div>
              <span className="gpa">{education.gpa}</span>
              <p className="coursework">{education.coursework}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
