"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, type Certification } from "@/data/certifications";

function CertificateModal({
  certificate,
  onClose
}: {
  certificate: Certification;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = Array.from(
          document.querySelectorAll<HTMLElement>(
            "[data-certificate-modal] button, [data-certificate-modal] a"
          )
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center bg-espresso/86 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
      data-certificate-modal
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
        className="max-h-[92vh] w-full max-w-6xl overflow-auto rounded-sm border border-ivory/20 bg-ivory p-4 shadow-editorial"
        initial={{ y: 26, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{certificate.issuer}</p>
            <h3 id="certificate-modal-title" className="serif mt-1 text-3xl font-semibold text-ink">
              {certificate.title}
            </h3>
          </div>
          <button
            type="button"
            ref={closeRef}
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-walnut/20 text-ink hover:border-brass hover:text-brass"
            aria-label="Close certificate preview"
          >
            <X size={20} />
          </button>
        </div>
        <div className="overflow-hidden rounded-sm border border-walnut/15 bg-parchment">
          <Image
            src={certificate.image.src}
            alt={certificate.image.alt}
            width={certificate.image.width}
            height={certificate.image.height}
            sizes="100vw"
            className="mx-auto h-auto max-h-[72vh] w-auto max-w-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CertificationsSection() {
  const [active, setActive] = useState<Certification | null>(null);

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
              <button
                type="button"
                onClick={() => setActive(certificate)}
                className="block w-full text-left"
                aria-label={`Open certificate image for ${certificate.title}`}
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
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>{active ? <CertificateModal certificate={active} onClose={() => setActive(null)} /> : null}</AnimatePresence>
    </section>
  );
}
