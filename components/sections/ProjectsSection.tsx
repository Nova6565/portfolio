"use client";

import { ArrowUpRight, Github, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { MediaLightboxTrigger } from "@/components/ui/MediaLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const secondaryProjects = projects.slice(1);

  return (
    <section className="border-y border-walnut/15 bg-ivory/65 py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Applied systems across security, retrieval, medical imaging, food AI, and disaster response."
          copy="Only verified assets and supplied repositories are used. Each project image opens into an accessible evidence preview."
        />
        <div className="grid gap-8">
          {secondaryProjects.map((project, index) => (
            <Reveal
              key={project.id}
              className="grid gap-7 border-t border-walnut/15 pt-8 lg:grid-cols-[0.72fr_1fr]"
              delay={index * 0.04}
            >
              <div>
                {project.image ? (
                  <figure className="rounded-sm border border-walnut/15 bg-ivory/80 p-2 shadow-line">
                    <MediaLightboxTrigger
                      media={{
                        title: project.title,
                        eyebrow: project.subtitle,
                        caption: project.image.caption,
                        image: project.image
                      }}
                      className="project-media-button group/media block w-full overflow-hidden rounded-sm border border-walnut/15 bg-parchment text-left"
                    >
                      <span className="relative block p-2">
                        <Image
                          src={project.image.src}
                          alt={project.image.alt}
                          width={project.image.width}
                          height={project.image.height}
                          sizes="(min-width: 1024px) 42vw, 100vw"
                          className="project-media-image aspect-[16/10] w-full object-contain"
                        />
                        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-espresso/88 text-ivory">
                          <Maximize2 size={16} />
                        </span>
                        <span className="absolute bottom-4 left-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 bg-espresso/88 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ivory backdrop-blur">
                          <span className="project-media-title truncate">{project.title}</span>
                          <ArrowUpRight size={14} className="project-media-icon shrink-0" />
                        </span>
                      </span>
                    </MediaLightboxTrigger>
                    {project.image.caption ? (
                      <figcaption className="px-2 pt-3 text-xs leading-5 text-walnut">{project.image.caption}</figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </div>
              <div className="grid content-center gap-5">
                <p className="serif text-5xl font-semibold text-brass">{project.number}</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-walnut">{project.subtitle}</p>
                  <h3 className="serif mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
                    {project.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-pretty text-base leading-8 text-walnut">{project.summary}</p>
                {project.label ? (
                  <p className="w-fit border border-brass/45 bg-parchment/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-walnut">
                    {project.label}
                  </p>
                ) : null}
                <dl className="grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="border-l border-brass/45 pl-4">
                      <dt className="serif text-3xl font-semibold text-ink">{metric.value}</dt>
                      <dd className="text-xs font-bold uppercase tracking-[0.18em] text-walnut">{metric.label}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ink hover:text-brass"
                  >
                    <Github size={17} />
                    Repository
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
