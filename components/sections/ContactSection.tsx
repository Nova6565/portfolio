import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brass">Contact</p>
            <h2 className="serif text-balance text-6xl font-semibold leading-[0.92] text-ink md:text-8xl">
              Let&apos;s build something intelligent.
            </h2>
          </div>
          <div className="rounded-sm border border-walnut/15 bg-parchment/65 p-6 shadow-line">
            <p className="text-pretty text-lg leading-8 text-walnut">
              Mohamed is open to AI/ML engineering opportunities, applied AI roles, graduate programs, and teams building practical intelligent products.
            </p>
            <div className="mt-7 grid gap-3">
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center justify-between gap-4 border-b border-walnut/15 py-3 font-semibold text-ink">
                <span className="inline-flex items-center gap-3">
                  <Mail size={18} />
                  {profile.email}
                </span>
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between gap-4 border-b border-walnut/15 py-3 font-semibold text-ink">
                <span className="inline-flex items-center gap-3">
                  <Github size={18} />
                  github.com/Nova6565
                </span>
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between gap-4 border-b border-walnut/15 py-3 font-semibold text-ink">
                <span className="inline-flex items-center gap-3">
                  <Linkedin size={18} />
                  LinkedIn
                </span>
                <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <p className="inline-flex items-center gap-3 py-3 font-semibold text-ink">
                <MapPin size={18} />
                {profile.location}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-walnut/25 bg-ivory px-5 text-sm font-bold uppercase tracking-[0.16em] text-ink hover:border-brass hover:text-brass"
              >
                Open Resume
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-espresso px-5 text-sm font-bold uppercase tracking-[0.16em] text-ivory hover:bg-walnut"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
