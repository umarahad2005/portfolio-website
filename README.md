# Umar Ahad Usmani — Portfolio

Personal portfolio of **Umar Ahad Usmani**, Full-Stack AI Engineer.
Live at [umarahadusmani.vercel.app](https://umarahadusmani.vercel.app).

## Stack

- **Vite + React 19** — fast dev server and optimized production builds
- **react-three-fiber + drei** — real-time 3D glossy hero (liquid-chrome blob, glossy ring, iridescent satellites, local Lightformer studio environment — no runtime CDN fetches)
- **Framer Motion** — scroll reveals, lightbox, typewriter hero, scroll progress
- Custom glassmorphism design system in plain CSS (no UI framework)

## Performance notes

- 3D canvas is lazy-loaded (`React.lazy`) and code-split into its own chunk
- DPR capped (1.75 desktop / 1.5 mobile) with `AdaptiveDpr` degradation
- Sparkles disabled on mobile; tilt/spotlight effects disabled on touch devices
- Certificate images compressed to JPG and lazy-loaded
- Honors `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Structure

```
public/
  assets/umar.jpg          # profile photo
  certs/*.jpg              # 11 certificate images
  Umar_Ahad_Usmani_Resume.pdf
src/
  data/content.js          # all portfolio content in one place
  components/              # Hero (3D), About, Experience, Projects, Certificates, Contact…
```

To update content (projects, certificates, experience), edit `src/data/content.js` only.
