import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span className="made-with">
          Designed & built with React · Three.js · Framer Motion
        </span>
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {' · '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  )
}
