import { aboutCopy, quickFacts } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="border-y border-walnut/15 bg-parchment/55 py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="Practical AI, built as usable systems."
          copy="Mohamed's work sits where model quality, product behavior, and engineering constraints meet."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal className="max-w-3xl">
            <p className="serif text-pretty text-4xl font-medium leading-tight text-ink md:text-5xl">{aboutCopy}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {quickFacts.map((fact, index) => (
              <Reveal
                key={fact.label}
                delay={index * 0.04}
                className="rounded-sm border border-walnut/15 bg-ivory/70 p-5 shadow-line"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{fact.label}</p>
                <p className="serif mt-3 text-3xl font-semibold leading-none text-ink">{fact.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
