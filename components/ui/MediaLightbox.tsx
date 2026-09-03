"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";

export type LightboxMedia = {
  title: string;
  eyebrow?: string;
  caption?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

function MediaLightbox({ media, onClose }: { media: LightboxMedia; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = Array.from(
          document.querySelectorAll<HTMLElement>("[data-media-lightbox] button, [data-media-lightbox] a")
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
      data-media-lightbox
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={media.caption ? descriptionId : undefined}
        className="max-h-[92vh] w-full max-w-6xl overflow-auto rounded-sm border border-ivory/20 bg-ivory p-4 shadow-editorial"
        initial={{ y: 26, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 18, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            {media.eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">{media.eyebrow}</p>
            ) : null}
            <h3 id={titleId} className="serif mt-1 text-3xl font-semibold text-ink">
              {media.title}
            </h3>
            {media.caption ? (
              <p id={descriptionId} className="mt-2 max-w-3xl text-sm leading-6 text-walnut">
                {media.caption}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            ref={closeRef}
            onClick={onClose}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClose();
              }
            }}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-walnut/20 text-ink hover:border-brass hover:text-brass"
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>
        </div>
        <div className="overflow-hidden rounded-sm border border-walnut/15 bg-parchment">
          <Image
            src={media.image.src}
            alt={media.image.alt}
            width={media.image.width}
            height={media.image.height}
            sizes="100vw"
            className="mx-auto h-auto max-h-[72vh] w-auto max-w-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MediaLightboxTrigger({
  media,
  children,
  className,
  ariaLabel
}: {
  media: LightboxMedia;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setActive(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setActive(true);
          }
        }}
        className={className}
        aria-label={ariaLabel ?? `Open image preview for ${media.title}`}
      >
        {children}
      </button>
      <AnimatePresence>{active ? <MediaLightbox media={media} onClose={() => setActive(false)} /> : null}</AnimatePresence>
    </>
  );
}
