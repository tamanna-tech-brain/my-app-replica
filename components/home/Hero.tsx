"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { HERO } from "@/lib/site-data";
import { cn } from "@/lib/cn";

const PILL_POSITIONS = [
  "top-[8%] left-[4%] md:top-[10%] md:left-[8%]",
  "top-[38%] right-[6%] md:top-[42%] md:right-[10%]",
  "bottom-[12%] left-[18%] md:bottom-[14%] md:left-[24%]",
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[var(--nav-h)]">
      <div className="absolute inset-0 dots-grid opacity-15 pointer-events-none" />
      <div className="absolute top-[12%] -left-24 h-72 w-72 rounded-full bg-[#8b3dff]/20 blur-[90px]" />
      <div className="absolute top-[20%] -right-24 h-80 w-80 rounded-full bg-[#ff1cc8]/15 blur-[100px]" />

      <Container className="relative z-10 pt-10 pb-8 md:pt-14 md:pb-10">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#8a8a8a]">
              <MapPin className="h-4 w-4 text-[#d9ff3f]" />
              {HERO.location}
            </div>
            <h1 className="hero-title text-[#f5f5f5]">{HERO.title}</h1>
            <p className="hero-subtitle mt-2 text-[#f5f5f5]">{HERO.subtitle}</p>
          </div>

          <div className="flex flex-col justify-center gap-8 lg:col-span-5 lg:pt-16">
            <p className="max-w-md text-lg leading-relaxed text-[#8a8a8a] md:text-xl">
              {HERO.description}
            </p>
            <Link href={HERO.ctaHref} className="btn-lime w-fit text-base">
              {HERO.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Visual block: speaker image + preview cards + date pills ON the UI */}
        <div className="relative mt-10 md:mt-14 min-h-[420px] md:min-h-[560px]">
          <div className="grid items-end gap-6 lg:grid-cols-12">
            <div className="relative z-10 hidden h-[280px] md:flex md:col-span-4 lg:col-span-5">
              {HERO.previewImages.map((src, i) => (
                <motion.div
                  key={src}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className="absolute bottom-0 h-[200px] w-[130px] overflow-hidden rounded-2xl border border-white/10 md:h-[240px] md:w-[150px]"
                  style={{
                    left: `${i * 72}px`,
                    transform: `rotate(${i % 2 === 0 ? -6 : 6}deg)`,
                    zIndex: i,
                  }}
                >
                  <Image src={src} alt="" fill className="object-cover grayscale" sizes="150px" />
                </motion.div>
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-[420px] lg:col-span-7 lg:col-start-6 lg:max-w-[520px] lg:ml-auto">
              <div className="stepped-frame relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src={HERO.heroImage}
                  alt="Summit speaker"
                  fill
                  priority
                  className="object-cover grayscale"
                  sizes="(max-width:768px) 90vw, 520px"
                />
                <div className="absolute inset-0 bg-[#8b3dff]/35 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              </div>

              {HERO.datePills.map((pill, i) => (
                <motion.div
                  key={`${pill.tone}-${i}`}
                  animate={{ y: [0, -10, 0], rotate: [pill.rotate, pill.rotate + 2, pill.rotate] }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={cn(
                    "date-pill absolute z-20 hidden sm:flex",
                    `date-pill-${pill.tone}`,
                    PILL_POSITIONS[i]
                  )}
                >
                  <span className="text-2xl md:text-3xl">{pill.dates}</span>
                  <span className="mt-1 text-sm font-semibold">{pill.month}</span>
                  <span className="mt-0.5 text-xs opacity-80">{pill.year}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile date pills row — on the hero UI, not off to the side */}
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2 sm:hidden">
            {HERO.datePills.map((pill, i) => (
              <div
                key={`mobile-${pill.tone}-${i}`}
                className={cn("date-pill shrink-0 date-pill-" + pill.tone, "px-5 py-4")}
                style={{ transform: `rotate(${pill.rotate}deg)` }}
              >
                <span className="text-xl">{pill.dates}</span>
                <span className="mt-1 text-xs font-semibold">{pill.month}</span>
                <span className="text-[10px] opacity-80">{pill.year}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="section-border" />
    </section>
  );
}
