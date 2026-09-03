import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, copy, align = "left", tone = "light" }: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-ivory" : "text-ink";
  const copyColor = tone === "dark" ? "text-ivory/76" : "text-walnut";

  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12 grid min-w-0 gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end"
      }
    >
      <div className="min-w-0">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">{eyebrow}</p>
        <h2 className={`serif max-w-full break-words text-balance text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-6xl ${titleColor}`}>
          {title}
        </h2>
      </div>
      {copy ? (
        <p className={`max-w-[19.5rem] text-pretty text-base leading-8 sm:max-w-2xl md:text-lg ${copyColor}`}>
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}
