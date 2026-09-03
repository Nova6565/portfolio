import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, FileText, Github, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { Reveal } from "@/components/motion/Reveal";
import { MediaLightboxTrigger } from "@/components/ui/MediaLightbox";
import { Metric } from "@/components/ui/Metric";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import {
  pharmasafeCapabilities,
  pharmasafeAppScreenshots,
  pharmasafeCaseStudyImages,
  pharmasafeDemoVideo,
  pharmasafeMetrics,
  pharmasafeStack,
  projects,
  type PharmaSafeAppScreenshot
} from "@/data/projects";

export const metadata: Metadata = {
  title: "PharmaSafe Case Study | Mohamed Adel Mahmoud",
  description:
    "Case study for PharmaSafe, an AI-powered medication safety platform combining DDI analysis, substitution, static digital twin modeling, prescription OCR, and explainable safety reporting."
};

type CaseSection = {
  title: string;
  screenshotId: PharmaSafeAppScreenshot["id"];
  copy: string;
};

const sections: CaseSection[] = [
  {
    title: "The problem",
    screenshotId: "high-risk-result",
    copy:
      "Medication safety depends on scattered evidence, patient context, and pharmacist review. PharmaSafe was designed to bring interaction checks, substitution reasoning, OCR, and explainable reporting into one end-to-end workflow."
  },
  {
    title: "Platform overview",
    screenshotId: "dashboard",
    copy:
      "The platform combines web/mobile interfaces with FastAPI services for drug-drug interaction analysis, patient-aware alternatives, static digital twin comparison, handwritten prescription OCR, and explainable output."
  },
  {
    title: "Drug-drug interaction engine",
    screenshotId: "pharmacist-ddi-findings",
    copy:
      "DrugBank is PharmaSafe's primary and most important data source: the core medication knowledge source behind drug information and interaction evidence. DDInter supplements the interaction dataset, while PubMedBERT is used as a fallback when structured evidence is insufficient."
  },
  {
    title: "Patient-aware drug substitution",
    screenshotId: "substitution-summary",
    copy:
      "Substitution logic filters and ranks potentially safer alternatives against the patient's current medication profile and available interaction evidence for pharmacist review."
  },
  {
    title: "Static digital twin",
    screenshotId: "static-digital-twin",
    copy:
      "The static digital twin models the patient's current medication state, compares original and substituted regimens, and generates explainable safety reports."
  },
  {
    title: "Prescription OCR",
    screenshotId: "ocr-review",
    copy:
      "The OCR subsystem converts handwritten medication information into structured fields through YOLO11n ROI detection, TrOCR recognition, and domain-aware pharmaceutical-name correction."
  },
  {
    title: "Engineering challenges",
    screenshotId: "manual-simulation",
    copy:
      "The project required connecting heterogeneous medical data, fallback NLP reasoning, OCR uncertainty, patient-specific context, and explainability into interfaces usable by pharmacists and patients."
  },
  {
    title: "Learning and impact",
    screenshotId: "alternative-evidence",
    copy:
      "PharmaSafe shows Mohamed's ability to integrate models, APIs, graph data, medical NLP, computer vision, and explainability into a coherent applied AI product."
  }
];

function Architecture() {
  const nodes = [
    "Patient or Pharmacist",
    "Web / Mobile Interface",
    "FastAPI",
    "Medication Safety Services",
    "DDI Engine",
    "Substitution Engine",
    "Static Digital Twin",
    "OCR",
    "DrugBank / Neo4j primary knowledge source",
    "DDInter supplementary interactions",
    "PubMedBERT fallback model",
    "Supporting Services"
  ];

  return (
    <div className="overflow-hidden rounded-sm border border-ivory/12 bg-espresso p-5 text-ivory shadow-editorial">
      <div className="grid gap-3 md:grid-cols-4">
        {nodes.slice(0, 4).map((node, index) => (
          <div key={node} className="relative rounded-sm border border-brass/30 bg-ivory/[0.06] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brass">0{index + 1}</p>
            <p className="serif mt-2 text-2xl font-semibold leading-tight">{node}</p>
          </div>
        ))}
      </div>
      <div className="my-5 h-px bg-gradient-to-r from-transparent via-brass/70 to-transparent" aria-hidden="true" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.slice(4, 8).map((node) => (
          <div key={node} className="rounded-sm border border-ivory/12 bg-graphite p-4">
            <p className="text-sm font-semibold text-ivory/88">{node}</p>
          </div>
        ))}
      </div>
      <div className="my-5 h-px bg-gradient-to-r from-transparent via-brass/70 to-transparent" aria-hidden="true" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.slice(8).map((node) => (
          <div key={node} className="rounded-sm border border-ivory/12 bg-signal/30 p-4">
            <p className="text-sm font-semibold text-ivory/88">{node}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PharmaSafePage() {
  const pharmasafe = projects[0];
  const screenshotById = new Map(pharmasafeAppScreenshots.map((screenshot) => [screenshot.id, screenshot]));

  return (
    <>
      <Navigation />
      <main>
        <section className="container-shell pb-20 pt-32 sm:pt-36">
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-walnut hover:text-ink"
          >
            <ArrowLeft size={17} />
            Back to Work
          </Link>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brass">Case Study · A+ Graduation Project</p>
              <h1 className="serif text-balance text-5xl font-semibold leading-[0.92] text-ink sm:text-6xl md:text-8xl">PharmaSafe</h1>
              <p className="mt-6 max-w-[19.5rem] text-pretty text-base leading-7 text-walnut sm:max-w-2xl sm:text-xl sm:leading-9">
                {pharmasafe.summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/Nova6565/PharmaSafe"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full max-w-[21rem] items-center justify-center gap-3 rounded-full bg-espresso px-5 text-xs font-bold uppercase tracking-[0.16em] text-ivory hover:bg-walnut sm:w-auto sm:max-w-none sm:text-sm"
                >
                  <Github size={17} />
                  GitHub
                </a>
                <a
                  href="/assets/projects/pharmasafe/PharmaSafe_OCR_Presentation.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full max-w-[21rem] items-center justify-center gap-3 rounded-full border border-walnut/25 bg-ivory/75 px-5 text-xs font-bold uppercase tracking-[0.16em] text-ink hover:border-brass hover:text-brass sm:w-auto sm:max-w-none sm:text-sm"
                >
                  <FileText size={17} />
                  OCR Deck PDF
                </a>
              </div>
            </Reveal>

            <Reveal className="overflow-hidden rounded-sm border border-walnut/15 bg-espresso p-3 shadow-editorial">
              <MediaLightboxTrigger
                media={{
                  title: "PharmaSafe Medicine Safety Check",
                  eyebrow: "Case study hero",
                  caption: pharmasafe.image!.caption,
                  image: pharmasafe.image!
                }}
                className="project-media-button block w-full overflow-hidden rounded-sm"
              >
                <span className="relative block">
                  <Image
                    src={pharmasafe.image!.src}
                    alt={pharmasafe.image!.alt}
                    width={pharmasafe.image!.width}
                    height={pharmasafe.image!.height}
                    priority
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="project-media-image aspect-[1.23/1] w-full rounded-sm object-contain"
                  />
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-espresso/88 text-ivory">
                    <Maximize2 size={16} />
                  </span>
                </span>
              </MediaLightboxTrigger>
            </Reveal>
          </div>
        </section>

        <section id="platform-demo" className="border-y border-walnut/15 bg-espresso py-24 text-ivory">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Platform Demo"
              title="A full recorded walkthrough of the real PharmaSafe application."
              copy={pharmasafeDemoVideo.description}
              tone="dark"
            />
            <Reveal className="overflow-hidden rounded-sm border border-ivory/15 bg-black shadow-editorial">
              <video
                controls
                playsInline
                preload="metadata"
                poster={pharmasafeDemoVideo.poster}
                aria-label={pharmasafeDemoVideo.title}
                aria-describedby="platform-demo-description"
                className="h-auto max-h-[78vh] w-full bg-black"
              >
                <source src={pharmasafeDemoVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Reveal>
            <p id="platform-demo-description" className="mt-4 max-w-3xl text-sm leading-7 text-ivory/72">
              The video is loaded with native controls, inline playback support, and metadata-only preloading to avoid pulling the full file before a visitor chooses to watch it.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Product Gallery"
              title="Genuine PharmaSafe application screens."
              copy="Newly supplied screenshots from the real application, grouped by identifiable feature and kept separate from the OCR presentation slides."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {pharmasafeAppScreenshots.map((screenshot, index) => (
                <Reveal
                  key={screenshot.id}
                  delay={index * 0.025}
                  className={index === 0 || index === 1 ? "md:col-span-2" : undefined}
                >
                  <figure className="overflow-hidden rounded-sm border border-walnut/15 bg-ivory/75 shadow-line">
                    <div className="bg-espresso p-2">
                      <MediaLightboxTrigger
                        media={{
                          title: screenshot.title,
                          eyebrow: screenshot.feature,
                          caption: screenshot.description,
                          image: screenshot
                        }}
                        className="project-media-button block w-full overflow-hidden rounded-sm"
                      >
                        <span className="relative block">
                          <Image
                            src={screenshot.src}
                            alt={screenshot.alt}
                            width={screenshot.width}
                            height={screenshot.height}
                            sizes={index === 0 || index === 1 ? "100vw" : "(min-width: 768px) 48vw, 100vw"}
                            className="project-media-image h-auto w-full rounded-sm object-contain"
                          />
                          <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-espresso/88 text-ivory">
                            <Maximize2 size={16} />
                          </span>
                        </span>
                      </MediaLightboxTrigger>
                    </div>
                    <figcaption className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass">{screenshot.feature}</p>
                      <h3 className="serif mt-2 text-3xl font-semibold text-ink">{screenshot.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-walnut">{screenshot.description}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-walnut/15 bg-parchment/55 py-20">
          <div className="container-shell">
            <SectionHeading
              eyebrow="System Architecture"
              title="From patient context to medication safety services."
              copy="Conceptual flow based on the supplied project facts and required case-study architecture."
            />
            <Architecture />
          </div>
        </section>

        <section className="py-24">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
              <Reveal className="lg:sticky lg:top-28 lg:self-start">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brass">System Narrative</p>
                <h2 className="serif text-balance text-5xl font-semibold leading-[0.95] text-ink md:text-6xl">
                  Medication safety as an integrated AI workflow.
                </h2>
              </Reveal>
              <div className="grid gap-6">
                {sections.map((section, index) => (
                  <Reveal
                    key={section.title}
                    className="rounded-sm border border-walnut/15 bg-ivory/75 p-6 shadow-line"
                    delay={index * 0.03}
                  >
                    <div className="grid gap-6 xl:grid-cols-[0.86fr_1fr] xl:items-center">
                      <div>
                        <p className="serif text-4xl font-semibold text-brass">{String(index + 1).padStart(2, "0")}</p>
                        <h3 className="serif mt-3 text-4xl font-semibold leading-tight text-ink">{section.title}</h3>
                        <p className="mt-4 text-pretty text-base leading-8 text-walnut">{section.copy}</p>
                      </div>
                      {section.screenshotId ? (
                        <figure className="overflow-hidden rounded-sm border border-walnut/15 bg-espresso p-2">
                          {(() => {
                            const screenshot = screenshotById.get(section.screenshotId);
                            if (!screenshot) return null;
                            return (
                              <>
                                <MediaLightboxTrigger
                                  media={{
                                    title: screenshot.title,
                                    eyebrow: screenshot.feature,
                                    caption: screenshot.description,
                                    image: screenshot
                                  }}
                                  className="project-media-button block w-full overflow-hidden rounded-sm"
                                >
                                  <span className="relative block">
                                    <Image
                                      src={screenshot.src}
                                      alt={screenshot.alt}
                                      width={screenshot.width}
                                      height={screenshot.height}
                                      sizes="(min-width: 1280px) 42vw, 100vw"
                                      className="project-media-image h-auto w-full rounded-sm object-contain"
                                    />
                                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-espresso/88 text-ivory">
                                      <Maximize2 size={16} />
                                    </span>
                                  </span>
                                </MediaLightboxTrigger>
                                <figcaption className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/70">
                                  {screenshot.feature}
                                </figcaption>
                              </>
                            );
                          })()}
                        </figure>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-walnut/15 bg-ivory/70 py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="OCR Evidence"
              title="Genuine PharmaSafe slides, used as project evidence."
              copy="These visuals document the OCR subsystem specifically: detection, recognition, correction, integration, and evaluation."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {pharmasafeCaseStudyImages.map((image, index) => (
                <Reveal
                  key={image.src}
                  delay={index * 0.035}
                  className={index === 1 ? "md:col-span-2" : undefined}
                >
                  <div className="overflow-hidden rounded-sm border border-walnut/15 bg-espresso p-2 shadow-line">
                    <MediaLightboxTrigger
                      media={{
                        title: image.alt,
                        eyebrow: "OCR evidence",
                        caption: "Genuine PharmaSafe OCR presentation slide supplied with the project assets.",
                        image
                      }}
                      className="project-media-button block w-full overflow-hidden rounded-sm"
                    >
                      <span className="relative block">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes={index === 1 ? "100vw" : "(min-width: 768px) 48vw, 100vw"}
                          className="project-media-image aspect-video w-full rounded-sm object-contain"
                        />
                        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-espresso/88 text-ivory">
                          <Maximize2 size={16} />
                        </span>
                      </span>
                    </MediaLightboxTrigger>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brass">Technology Stack</p>
              <h2 className="serif text-balance text-5xl font-semibold leading-[0.95] text-ink md:text-6xl">
                Models, APIs, graph data, and interfaces working together.
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {pharmasafeStack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </Reveal>
            <Reveal className="grid gap-5 rounded-sm border border-walnut/15 bg-parchment/60 p-6 shadow-line sm:grid-cols-2">
              <div className="sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brass">Metrics and Evaluation</p>
              </div>
              {pharmasafeMetrics.map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-y border-walnut/15 bg-graphite py-24 text-ivory">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Core Capabilities"
              title="Four product pillars behind PharmaSafe."
              tone="dark"
            />
            <div className="grid gap-5 md:grid-cols-2">
              {pharmasafeCapabilities.map((capability, index) => (
                <Reveal key={capability} delay={index * 0.04} className="rounded-sm border border-ivory/12 bg-ivory/[0.06] p-6">
                  <p className="serif text-4xl font-semibold text-brass">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-4 text-pretty text-lg leading-8 text-ivory/82">{capability}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container-shell">
            <Reveal className="rounded-sm border border-walnut/15 bg-espresso p-8 text-ivory shadow-editorial md:p-12">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brass">Repository</p>
              <h2 className="serif text-balance text-5xl font-semibold leading-[0.95] md:text-7xl">
                Explore the PharmaSafe codebase.
              </h2>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-ivory/76">
                The supplied public repository is linked directly. No live demo URL was supplied in the handoff.
              </p>
              <a
                href="https://github.com/Nova6565/PharmaSafe"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ivory px-6 text-sm font-bold uppercase tracking-[0.16em] text-espresso hover:bg-parchment"
              >
                Open GitHub
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
