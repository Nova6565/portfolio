# Codex Master Prompt — Build Mohamed Adel's Portfolio

Build a complete, polished, production-quality personal portfolio website from scratch. Do not stop at a plan, wireframe, or skeleton. Implement it, run it, test it, fix issues, and leave it ready to use locally.

## Inputs in this handoff

Before coding, inspect:

- `00_START_HERE.md`
- `02_LINKS_AND_CONTACT.md`
- `03_PORTFOLIO_CONTENT.md`
- `04_ASSET_INVENTORY.md`
- `05_OPTIONAL_MISSING_ASSETS.md`
- everything under `assets/`

Use `03_PORTFOLIO_CONTENT.md` as the factual source of truth. Do not fabricate information or create fake screenshots.

## Project and objective

- Repository/project name: `Mohamed-Adel-Portfolio`
- Person: Mohamed Adel Mahmoud
- Positioning: AI/ML Engineer / Applied AI Engineer
- Location: Cairo, Egypt
- Audience: AI/ML recruiters, engineering hiring managers, graduate programs, AI startups, and technology companies
- Environment for v1: localhost only

Within roughly ten seconds, a visitor should understand who Mohamed is, that he specializes in AI/ML, that he builds end-to-end AI systems, that PharmaSafe is his flagship project, and that he has measurable results, credentials, and engineering experience.

## Technology

Use current stable versions available in the environment:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Motion for React / Framer Motion
- Lucide React where useful
- `next/font`
- `next/image`

Do not add a backend, authentication, database, API keys, fake contact service, or AI chatbot. Keep the structure clean enough to add a future `/api/chat` route and portfolio-assistant component without displaying a disabled chatbot now.

The project must work with:

```bash
npm install
npm run dev
```

## Design direction

Create a distinctive combination of:

- classic old-money elegance
- modern technology portfolio
- premium editorial design
- smooth, technically impressive motion

The goal is **a luxury editorial website for an AI engineer**, not a generic student/developer template.

Use a warm, refined palette built around:

- warm ivory `#F4EFE6`
- parchment `#E8DFD2`
- beige `#D6C4AD`
- taupe `#A58F78`
- walnut `#705441`
- deep brown `#49372B`
- espresso `#241C16`
- charcoal brown `#1D1916`
- antique gold/brass `#B08D57`
- optional muted olive `#71725C`, very sparingly

Adjust exact shades for harmony, readability, and WCAG contrast. Avoid making every section brown. Prefer one superb warm editorial theme over a weak dark/light toggle.

Use a premium serif and modern sans-serif pairing, preferably Cormorant Garamond for editorial headings and Manrope for body/UI. Let typography, spacing, whitespace, hairline borders, subtle grain, numbered sections, and restrained brass rules carry the visual identity.

Do not use cyberpunk, Matrix aesthetics, neon green, excessive blue glow, fake terminal UI, cheesy circuit boards, random floating tech logos, giant gradients, or excessive glassmorphism.

## Motion system

Animations are important, but the page must remain calm and immediately usable. Use premium easing and performant transforms for:

- hero headline word/mask reveal
- staggered copy and CTA entrances
- profile-image clip reveal and very subtle parallax
- scroll-triggered section reveals
- editorial section-heading masks
- project image/title hover interactions
- animated navigation state and scroll progress
- restrained stat counters
- certificate hover transitions and accessible modal
- CTA arrow movement
- tasteful page transitions
- subtle cursor-aware effects on desktop only, if they improve the design

Respect `prefers-reduced-motion`. No information may depend on animation. Avoid scroll hijacking, lag, motion overload, or anything that feels like a gaming site.

## Required information architecture

Create a polished homepage and a dedicated PharmaSafe route at `/projects/pharmasafe`.

Homepage sections:

1. Sticky navigation
2. Hero
3. About and quick facts
4. Flagship PharmaSafe feature
5. Selected projects
6. Experience
7. Education
8. Skills
9. Certifications
10. Achievements
11. Contact
12. Minimal footer

Navigation items may be Home, About, Work, Experience, Skills, Certifications, and Contact. Use `Mohamed Adel` or a tasteful `MA` monogram. The nav should change subtly after scrolling and have an elegant mobile menu.

## Hero

Create an exceptional asymmetric/split desktop hero using the supplied graduation portrait as a premium editorial element—not a circular LinkedIn avatar. Do not heavily alter it, generate a replacement, or crop Mohamed's face awkwardly.

Include:

- Mohamed Adel Mahmoud
- AI/ML Engineer · Applied AI
- “Building intelligent systems from models to real-world products.”
- concise supporting copy based on the supplied content
- Cairo, Egypt
- a restrained “Open to AI/ML opportunities” status
- View My Work
- Download Resume
- GitHub, LinkedIn, and email links from `02_LINKS_AND_CONTACT.md`

Do not display a phone number.

## About

Explain naturally that Mohamed is an AASTMT Computer Science graduate focused on practical end-to-end AI systems spanning ML, Generative AI, NLP, computer vision, RAG, knowledge graphs, APIs, cloud services, and application integration. Emphasize turning models into useful, explainable products without presenting him as a senior engineer.

Display quick facts elegantly:

- B.Sc. Computer Science — AASTMT
- GPA — 3.54
- Graduated — 2026
- Graduation Project — A+
- Location — Cairo, Egypt

## Flagship project: PharmaSafe

Make PharmaSafe the visual centerpiece and give it significantly more space than other projects. The homepage feature should communicate the core value, four capabilities, key metrics, technology stack, GitHub link, and an `Explore Case Study` CTA.

Use the genuine PharmaSafe OCR presentation, PDF, montage, and rendered slide images under `assets/projects/pharmasafe/`. Select the strongest slides or crop within those genuine visuals as appropriate for the case study. These assets document the actual OCR pipeline; do not present them as screenshots of unrelated PharmaSafe features. You may also create abstract decorative elements inspired by medication nodes, graph relationships, interaction paths, and evidence lines, but never present decoration as actual application UI.

Build `/projects/pharmasafe` as a real case study with:

1. Case-study hero
2. The problem
3. Platform overview
4. System architecture
5. Drug-drug interaction engine
6. Patient-aware drug substitution
7. Static digital twin
8. Prescription OCR
9. Technology stack
10. Metrics and evaluation
11. Engineering challenges
12. Learning/impact
13. GitHub CTA

Create the architecture visualization with responsive SVG or HTML/CSS. A correct conceptual flow is:

Patient or Pharmacist → Web/Mobile Interface → FastAPI → Medication Safety Services → DDI Engine / Substitution Engine / Static Digital Twin / OCR → DrugBank/Neo4j, DDInter, PubMedBERT, and supporting services.

Use the exact facts and metrics in `03_PORTFOLIO_CONTENT.md` rather than inventing anything.

## Other selected projects

Use the four projects listed after PharmaSafe in `03_PORTFOLIO_CONTENT.md`:

1. Intelligent Malware Analysis Platform
2. RAG Document Q&A Assistant
3. Brain Tumor Detection System
4. Disaster Damage Assessment from Satellite Images

Do not render four identical icon rectangles. Use an editorial/asymmetric layout with project numbering `01` through `05`, image-led or alternating compositions, animated metadata, useful technology tags, and measured results. PharmaSafe is `01` and visibly the flagship. Use the real RAG interface screenshot under `assets/projects/rag/` and the strongest genuine disaster-damage visuals under `assets/projects/disaster-damage/`. There is no verified Brain Tumor or Malware screenshot in this handoff, so use honest abstract/editorial treatment for those cards.

Only add repository buttons for exact URLs present in `02_LINKS_AND_CONTACT.md`. Do not invent a repository for Malware Analysis.

## Experience, education, skills, credentials, achievements

Render the supplied experience as an elegant timeline/editorial list without inventing responsibilities. Make education concise but visually important. Present skills by category rather than as a noisy logo wall.

Create a curated credential gallery using the real images under `assets/certificates/`. Cards with an image must open an accessible high-resolution modal/lightbox with keyboard focus handling, Escape-to-close, click-outside close, a visible close control, proper alt text, and preserved proportions. Credentials without supplied images may appear as text-only items; never fake previews.

Use the full certification and achievement inventories from `03_PORTFOLIO_CONTENT.md`. Do not expose certificate numbers prominently.

## Resume and contact

Copy `assets/resume/CV_MohamedAdel.pdf` into an organized public asset location without modifying it. The resume CTA must open it in a new tab and offer a clearly labeled download action.

The closing section should feel elegant and personal, such as “Let's build something intelligent.” Include email, GitHub, LinkedIn, and Cairo, Egypt. Use `mailto:`; do not add a fake form backend. Do not include the phone number.

## Asset organization

Preserve the originals in this handoff. Copy needed files into a web-safe structure such as:

```text
public/assets/
  profile/
  projects/pharmasafe/
  projects/rag/
  projects/brain-tumor/
  projects/disaster-damage/
  certificates/
  resume/
```

All current filenames are already web-safe. Use `next/image` for raster images where appropriate and preserve certificate proportions.

## Engineering structure

Prefer maintainable, data-driven code:

```text
app/
  page.tsx
  layout.tsx
  globals.css
  projects/pharmasafe/page.tsx
components/
  layout/
  navigation/
  hero/
  about/
  projects/
  experience/
  skills/
  certifications/
  achievements/
  contact/
  ui/
  motion/
data/
  projects.ts
  certifications.ts
  experience.ts
  skills.ts
public/assets/
```

Reusable components may include `SectionHeading`, `AnimatedText`, `ProjectCard`, `ProjectMetric`, `TechTag`, `CertificateCard`, `CertificateModal`, `TimelineItem`, `Stat`, and `SocialLink`. Avoid unnecessary abstraction.

## Responsive, accessible, and performant behavior

Make the layout genuinely designed—not merely stacked—at approximately 375, 430, 768, 1024, 1440, and 1920 px. Ensure no horizontal overflow, sensible image crops, a working mobile menu, and mobile-safe certificate modals.

Use semantic HTML, correct heading order, alt text, keyboard access, visible focus states, accessible controls, and sufficient color contrast. Optimize fonts, images, motion, bundle size, and layout stability. Lazy-load below-the-fold images and avoid large dependencies for minor effects.

## SEO

Add excellent metadata:

- Title: `Mohamed Adel Mahmoud | AI/ML Engineer`
- Description: `AI/ML Engineer and Computer Science graduate building applied AI systems across Generative AI, RAG, computer vision, NLP, backend APIs, knowledge graphs, and cloud technologies.`

Add Open Graph metadata and a tasteful `MA` monogram favicon if no custom logo is supplied.

## Content integrity

Use concise, confident, concrete writing: built, designed, implemented, evaluated, integrated, and achieved. Avoid empty buzzwords and labels such as “visionary,” “AI wizard,” “ninja,” “10x engineer,” or “senior engineer.”

Never fabricate employers, client work, testimonials, project users, revenue, professional experience, deployments, URLs, metrics, live demos, or credential images. Do not use lorem ipsum.

## README and final QA

Create a useful repository README covering the project, stack, local setup, structure, data/content organization, asset replacement, adding projects/certificates, and the future AI portfolio assistant.

Before finishing:

- run the application
- fix build, TypeScript, and practical lint issues
- test navigation and anchors
- test every external link
- test the resume open/download action
- test the certificate modal using keyboard and mouse
- test `/projects/pharmasafe`
- inspect desktop and mobile layouts
- verify no horizontal overflow
- verify reduced-motion behavior
- check alt text, missing imports, browser-console errors, and 404 asset paths

Make reasonable minor design decisions independently. Prioritize visual quality, professional credibility, project storytelling, responsiveness, smooth interaction, accessibility, performance, and maintainability—in that order—before extra gimmicks.

The finished result should feel like **an AI engineer's portfolio designed by a premium digital studio with a classic editorial aesthetic**, not a common React student template.
