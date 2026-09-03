"use client";

import { ArrowUpRight, Github, Maximize2, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { MediaLightboxTrigger } from "@/components/ui/MediaLightbox";
import { Metric } from "@/components/ui/Metric";
import { TechTag } from "@/components/ui/TechTag";
import { pharmasafeAppScreenshots, pharmasafeCapabilities, pharmasafeMetrics, pharmasafeStack, projects } from "@/data/projects";

const pharmasafe = projects[0];

export function PharmaSafeFeature() {
  return (
    <section id="work" className="py-24">
      <div className="container-shell">
        <Reveal className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brass">Flagship Project 01</p>
            <h2 className="serif text-balance text-5xl font-semibold leading-[0.92] text-ink md:text-7xl">
              PharmaSafe
            </h2>
          </div>
          <p className="max-w-xl text-pretty text-lg leading-8 text-walnut">{pharmasafe.summary}</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="relative overflow-hidden rounded-sm border border-walnut/15 bg-espresso p-3 shadow-editorial">
            <MediaLightboxTrigger
              media={{
                title: "PharmaSafe Medicine Safety Check",
                eyebrow: "Real app screen",
                caption: pharmasafe.image!.caption,
                image: pharmasafe.image!
              }}
              className="project-media-button group/media block w-full overflow-hidden rounded-sm"
            >
              <span className="relative block">
                <Image
                  src={pharmasafe.image!.src}
                  alt={pharmasafe.image!.alt}
                  width={pharmasafe.image!.width}
                  height={pharmasafe.image!.height}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="project-media-image aspect-[1.23/1] w-full rounded-sm object-contain"
                />
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-espresso/88 text-ivory">
                  <Maximize2 size={16} />
                </span>
              </span>
            </MediaLightboxTrigger>
            <div className="pointer-events-none absolute bottom-6 left-6 max-w-xs border border-ivory/15 bg-espresso/88 p-5 text-ivory backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">Real app screen</p>
              <p className="mt-2 text-sm leading-6 text-ivory/80">
                DrugBank is the core medication knowledge source behind PharmaSafe drug information and interaction evidence.
              </p>
            </div>
          </Reveal>

          <div className="grid content-between gap-6">
            <Reveal className="rounded-sm border border-walnut/15 bg-ivory/75 p-6 shadow-line">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass">{pharmasafe.label}</p>
              <h3 className="serif mt-3 text-4xl font-semibold text-ink">{pharmasafe.subtitle}</h3>
              <div className="mt-6 grid gap-4">
                {pharmasafeCapabilities.map((capability) => (
                  <p key={capability} className="border-l border-brass/45 pl-4 text-sm leading-7 text-walnut">
                    {capability}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="grid gap-4 rounded-sm border border-walnut/15 bg-parchment/60 p-6 shadow-line sm:grid-cols-2">
              {pharmasafeMetrics.slice(0, 4).map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </Reveal>

            <Reveal className="flex flex-wrap gap-2">
              {pharmasafeStack.slice(0, 9).map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </Reveal>

            <Reveal className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/pharmasafe"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-espresso px-5 text-sm font-bold uppercase tracking-[0.16em] text-ivory hover:bg-walnut"
              >
                Explore Case Study
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://github.com/Nova6565/PharmaSafe"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-walnut/25 bg-ivory/75 px-5 text-sm font-bold uppercase tracking-[0.16em] text-ink hover:border-brass hover:text-brass"
              >
                <Github size={17} />
                GitHub
              </a>
              <Link
                href="/projects/pharmasafe#platform-demo"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-walnut/25 bg-ivory/75 px-5 text-sm font-bold uppercase tracking-[0.16em] text-ink hover:border-brass hover:text-brass"
              >
                <PlayCircle size={17} />
                Watch Demo
              </Link>
            </Reveal>

            <Reveal className="grid grid-cols-3 gap-3">
              {pharmasafeAppScreenshots.slice(3, 6).map((screenshot) => (
                <MediaLightboxTrigger
                  key={screenshot.id}
                  media={{
                    title: screenshot.title,
                    eyebrow: screenshot.feature,
                    caption: screenshot.description,
                    image: screenshot
                  }}
                  className="project-media-button block overflow-hidden rounded-sm border border-walnut/15 bg-parchment"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="(min-width: 1024px) 10vw, 28vw"
                    className="project-media-image aspect-[4/3] w-full object-contain object-top"
                  />
                </MediaLightboxTrigger>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
