import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card glass">
            <div className="eyebrow">05 · Contact</div>
            <h2>
              Let&apos;s build something{' '}
              <span className="gradient-text">worth shipping.</span>
            </h2>
            <p>
              I&apos;m open to internships, freelance work and ambitious
              collaborations — especially anything involving agentic AI.
              My inbox is always open.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <MailIcon /> &nbsp;Say hello
              </a>
              <a className="btn btn-ghost" href={profile.resume} download>
                Download résumé
              </a>
            </div>
            <div className="contact-socials">
              <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon />
              </a>
              <a className="icon-btn" href={`tel:${profile.phone.replaceAll('-', '')}`} aria-label="Phone">
                <PhoneIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
