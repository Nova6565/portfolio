import { Award } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/site";

export function AchievementsSection() {
  return (
    <section className="border-y border-walnut/15 bg-graphite py-24 text-ivory">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognized work, competitions, and academic project results."
          copy="A concise record of supplied achievements without inflated titles or invented claims."
          tone="dark"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Reveal
              key={achievement}
              delay={index * 0.04}
              className="flex gap-4 rounded-sm border border-ivory/12 bg-ivory/[0.06] p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brass/45 text-brass">
                <Award size={18} />
              </span>
              <p className="text-pretty text-base font-semibold leading-7 text-ivory/86">{achievement}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
