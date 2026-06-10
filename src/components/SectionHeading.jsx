import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, sub }) {
  return (
    <Reveal className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  )
}
