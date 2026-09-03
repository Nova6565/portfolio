"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/site";

export function Hero() {
  const words = profile.headline.split(" ");

  return (
    <section id="home" className="container-shell min-h-screen pb-20 pt-32 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <motion.p
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-walnut/20 bg-parchment/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-graphite"
            initial={false}
          >
            <span className="h-2 w-2 rounded-full bg-signal" />
            {profile.status}
          </motion.p>

          <motion.h1
            className="serif max-w-[11ch] text-balance text-4xl font-semibold leading-[0.95] text-ink sm:max-w-[10ch] sm:text-6xl lg:text-7xl xl:text-8xl"
            initial={false}
          >
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-3 inline-block overflow-hidden">
                <span className="inline-block">
                  {word}
                </span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            className="mt-8 max-w-2xl"
            initial={false}
          >
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brass">{profile.name}</p>
            <p className="mt-3 text-xl font-semibold text-graphite">{profile.role}</p>
            <p className="mt-5 max-w-[19.5rem] text-pretty text-base leading-7 text-walnut sm:max-w-2xl sm:text-lg sm:leading-8">
              {profile.intro}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-graphite">
              <MapPin size={17} />
              {profile.location}
            </p>
          </motion.div>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={false}
          >
            <Link
              href="/#work"
              className="group inline-flex min-h-12 w-full max-w-[21rem] items-center justify-center gap-3 rounded-full bg-espresso px-5 text-xs font-bold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-walnut sm:w-auto sm:max-w-none sm:px-6 sm:text-sm sm:tracking-[0.18em]"
            >
              View My Work
              <ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={18} />
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex min-h-12 w-full max-w-[21rem] items-center justify-center gap-3 rounded-full border border-walnut/25 bg-ivory/75 px-5 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-brass hover:text-brass sm:w-auto sm:max-w-none sm:px-6 sm:text-sm sm:tracking-[0.18em]"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={false}
          >
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-walnut hover:text-ink">
              <Github size={17} /> GitHub
            </a>
            <span className="h-1 w-1 rounded-full bg-brass" />
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-walnut hover:text-ink">
              <Linkedin size={17} /> LinkedIn
            </a>
            <span className="h-1 w-1 rounded-full bg-brass" />
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-walnut hover:text-ink">
              <Mail size={17} /> Email
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px] min-w-0"
          initial={false}
        >
          <div className="absolute -left-5 top-10 h-full w-full border border-brass/50" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-sm bg-parchment shadow-editorial">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={profile.portrait.width}
              height={profile.portrait.height}
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 w-52 border border-ivory/60 bg-espresso p-5 text-ivory shadow-editorial">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass">Flagship</p>
            <p className="serif mt-2 text-3xl font-semibold leading-none">PharmaSafe</p>
            <p className="mt-3 text-sm leading-6 text-ivory/72">A+ medication-safety platform.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
