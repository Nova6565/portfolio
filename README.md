# Mohamed Adel Portfolio

A polished local-first portfolio website for Mohamed Adel Mahmoud, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and `next/font`.

The site presents Mohamed as an AI/ML Engineer and Applied AI Engineer, with PharmaSafe as the flagship case study and only verified claims, links, and visual assets from the handoff package.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run lint
npm run build
```

## Pages

- `/` - full portfolio homepage with hero, about, PharmaSafe feature, selected projects, experience, education, skills, certifications, achievements, contact, and footer.
- `/projects/pharmasafe` - dedicated PharmaSafe case study with system architecture, core capabilities, OCR evidence, technology stack, metrics, and repository CTA.
- `/projects/pharmasafe#platform-demo` - responsive native-video demo section using the real supplied MP4 with metadata-only preloading.

## Project Structure

```text
app/
  page.tsx
  layout.tsx
  globals.css
  projects/pharmasafe/page.tsx
components/
  hero/
  layout/
  motion/
  sections/
  ui/
data/
  certifications.ts
  experience.ts
  projects.ts
  site.ts
  skills.ts
public/assets/
  certificates/
  profile/
  projects/
  resume/
```

## Content And Assets

Portfolio facts live in `data/`. Source handoff documents remain in the project root, and original files remain under `assets/`.

Website-ready copies live under `public/assets/`. Certificates are data-driven in `data/certifications.ts`; every certificate image opens in an accessible modal/lightbox. Project content and metrics are managed in `data/projects.ts`, and every selected project image opens in the same accessible preview.

PharmaSafe application screenshots and the demo video live under `public/assets/projects/pharmasafe/demo-screenshots/`. Public copies were renamed descriptively from the timestamped source screenshots after visual inspection.

To add or replace a certificate:

1. Add the image to `public/assets/certificates/`.
2. Add or update the matching object in `data/certifications.ts`.
3. Include accurate title, issuer, dimensions, and alt text.

To add or replace project visuals:

1. Add the file under the matching `public/assets/projects/...` folder.
2. Update the project entry in `data/projects.ts`.
3. Do not label decorative work as a genuine screenshot.

## Deferred Work

The AI portfolio chatbot is intentionally not implemented in this version. The structure is ready for a future component and API route, but no disabled chatbot UI or fake backend is shown.

## Current Asset Gaps

Verified real project visuals are present for PharmaSafe, Intelligent Malware Analysis, Brain Tumor Detection, RAG Document Q&A, Disaster Damage Assessment, and VeggieVision. No public Malware Analysis repository URL was supplied, so that card intentionally omits a GitHub button.
