import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-walnut/15 bg-parchment/55 py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A compact toolkit for taking AI from experiment to product."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.04}
              className="rounded-sm border border-walnut/15 bg-ivory/75 p-6 shadow-line"
            >
              <h3 className="serif text-3xl font-semibold text-ink">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-walnut/18 bg-parchment/70 px-3 py-2 text-sm font-semibold text-graphite"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
