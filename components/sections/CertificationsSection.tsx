"use client";

import { Maximize2 } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaLightboxTrigger } from "@/components/ui/MediaLightbox";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Credential evidence, kept visible and verifiable."
          copy="Every certificate shown here is backed by a genuine image in the current asset folder."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <Reveal
              as="article"
              key={certificate.title}
              delay={index * 0.025}
              className="group rounded-sm border border-walnut/15 bg-ivory/75 p-4 shadow-line transition-colors hover:border-brass/70"
            >
              <MediaLightboxTrigger
                media={{
                  title: certificate.title,
                  eyebrow: certificate.issuer,
                  caption: certificate.detail,
                  image: certificate.image
                }}
                className="block w-full text-left"
                ariaLabel={`Open certificate image for ${certificate.title}`}
              >
                <span className="relative block aspect-[4/3] overflow-hidden rounded-sm border border-walnut/10 bg-parchment">
                  <Image
                    src={certificate.image.src}
                    alt={certificate.image.alt}
                    width={certificate.image.width}
                    height={certificate.image.height}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-espresso/88 text-ivory">
                    <Maximize2 size={16} />
                  </span>
                </span>
                <span className="mt-4 block text-xs font-bold uppercase tracking-[0.2em] text-brass">
                  {certificate.issuer}
                </span>
                <span className="serif mt-2 block text-2xl font-semibold leading-tight text-ink">{certificate.title}</span>
                {certificate.detail ? <span className="mt-2 block text-sm text-walnut">{certificate.detail}</span> : null}
              </MediaLightboxTrigger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
