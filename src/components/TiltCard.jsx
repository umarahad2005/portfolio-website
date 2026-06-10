import { useRef } from 'react'

/* Pointer-driven 3D tilt with a moving glare highlight.
   Pure transforms — no layout work, cheap on the GPU. */
export default function TiltCard({ children, className = '', max = 7 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * max * 2}deg) rotateX(${(0.5 - py) * max * 2}deg)`
    el.style.setProperty('--gx', `${px * 100}%`)
    el.style.setProperty('--gy', `${py * 100}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.18s ease-out' }}
    >
      {children}
      <span className="glare" />
    </div>
  )
}
