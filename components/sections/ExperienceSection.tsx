import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Training and practice shaped around product-minded AI engineering."
        />
        <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr]">
          <div className="grid gap-6">
            {experience.map((item, index) => (
              <Reveal
                key={`${item.title}-${item.organization}`}
                delay={index * 0.05}
                className="grid gap-4 border-t border-walnut/15 pt-6 sm:grid-cols-[0.32fr_1fr]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">{item.dates}</p>
                <div>
                  <h3 className="serif text-4xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-graphite">{item.organization}</p>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-walnut">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="rounded-sm border border-walnut/15 bg-espresso p-8 text-ivory shadow-editorial">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brass">Education</p>
            <h3 className="serif mt-5 text-4xl font-semibold leading-tight">{education.degree}</h3>
            <p className="mt-4 text-base leading-8 text-ivory/78">{education.school}</p>
            <div className="mt-8 grid gap-3">
              {education.details.map((detail) => (
                <p key={detail} className="border-l border-brass/55 pl-4 text-sm font-semibold text-ivory/84">
                  {detail}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
