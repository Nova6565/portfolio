"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Download, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/site";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-brass" style={{ scaleX }} />
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-ivory/88 shadow-line backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="container-shell flex h-20 items-center justify-between">
          <Link href="/#home" className="group flex items-center gap-3" aria-label="Mohamed Adel home">
            <span className="grid h-11 w-11 place-items-center rounded-sm border border-brass/60 bg-espresso text-sm font-bold tracking-[0.2em] text-ivory shadow-editorial">
              MA
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-ink sm:inline">
              Mohamed Adel
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-[0.22em] text-walnut transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-walnut/20 bg-ivory/70 text-ink transition-colors hover:border-brass hover:text-brass"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-walnut/20 bg-ivory/70 text-ink transition-colors hover:border-brass hover:text-brass"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Mohamed"
              className="grid h-10 w-10 place-items-center rounded-full border border-walnut/20 bg-ivory/70 text-ink transition-colors hover:border-brass hover:text-brass"
            >
              <Mail size={17} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              download
              className="ml-2 inline-flex h-10 items-center gap-2 rounded-full bg-espresso px-4 text-xs font-bold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-walnut"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-walnut/25 bg-ivory/80 text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-30 bg-espresso px-6 pb-8 pt-28 text-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="grid gap-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="serif block border-b border-ivory/15 py-4 text-4xl font-semibold"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-ivory/20 px-4 py-2">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-ivory/20 px-4 py-2">
                  LinkedIn
                </a>
                <a href={`mailto:${profile.email}`} className="rounded-full border border-ivory/20 px-4 py-2">
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
