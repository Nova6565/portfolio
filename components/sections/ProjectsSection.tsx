import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { projects } from "@/data/projects";

function AbstractProjectMark({ id }: { id: string }) {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-sm border border-walnut/15 bg-graphite text-ivory shadow-line">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(176,141,87,0.18),transparent_42%),linear-gradient(90deg,rgba(244,239,230,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(244,239,230,0.08)_1px,transparent_1px)] bg-[length:auto,44px_44px,44px_44px]" />
      <div className="relative flex h-full min-h-72 flex-col justify-between p-7">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass">
          {id === "malware-analysis" ? "Risk analysis" : "Medical imaging"}
        </p>
        <div aria-hidden="true" className="grid grid-cols-5 gap-2">
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className={`h-10 border border-ivory/12 ${
                (id === "malware-analysis" ? index % 4 === 0 : index === 7 || index === 12)
                  ? "bg-brass/45"
                  : "bg-ivory/5"
              }`}
            />
          ))}
        </div>
        <p className="max-w-xs text-sm leading-6 text-ivory/72">
          Abstract editorial treatment because no verified project screenshot was supplied.
        </p>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const secondaryProjects = projects.slice(1);

  return (
    <section className="border-y border-walnut/15 bg-ivory/65 py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Applied systems across security, retrieval, medical imaging, and disaster response."
          copy="Only verified assets and supplied repositories are used. Where screenshots are unavailable, the presentation stays explicitly editorial."
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
                  <div className="overflow-hidden rounded-sm border border-walnut/15 bg-parchment shadow-line">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                ) : (
                  <AbstractProjectMark id={project.id} />
                )}
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
