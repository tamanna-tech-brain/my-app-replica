"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";
import { HERO } from "@/lib/site-data";
import { cn } from "@/lib/cn";

const PILL_POS = [
  "top-[6%] left-[2%]",
  "top-[40%] -right-[4%]",
  "bottom-[8%] left-[20%]",
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#151515] pt-[var(--nav-h)]">
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#ff4500]/30 via-[#ff1cc8]/15 to-transparent blur-[100px]" />
      <div className="absolute bottom-[18%] left-[28%] h-48 w-64 dots-grid opacity-40" />

      <Container className="relative z-10 pt-12 pb-10 md:pt-16">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <NotchBadge borderColor="border-[#70e1f5]" className="mb-8">
              <MapPin className="h-3.5 w-3.5 text-[#70e1f5]" />
              {HERO.location}
            </NotchBadge>

            <h1 className="hero-title text-white">
              {HERO.title}
              <br />
              <span className="text-white">{HERO.subtitle}</span>
            </h1>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5 lg:pb-4">
            <p className="max-w-sm text-base leading-relaxed text-[#a1a1aa] md:text-lg">
              {HERO.description}
            </p>
            <SplitButton href={HERO.ctaHref} variant="purple">
              {HERO.cta}
            </SplitButton>
          </div>
        </div>

        <div className="relative mt-12 min-h-[380px] md:mt-16 md:min-h-[520px]">
          <div className="hidden md:block absolute bottom-0 left-0 z-10 h-[260px] w-[55%]">
            {HERO.previewImages.map((src, i) => (
              <motion.div
                key={src}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 h-[200px] w-[130px] overflow-hidden border border-white/10 md:h-[230px] md:w-[145px]"
                style={{ left: `${i * 68}px`, transform: `rotate(${i % 2 === 0 ? -5 : 5}deg)`, zIndex: i }}
              >
                <Image src={src} alt="" fill className="object-cover grayscale" sizes="145px" />
              </motion.div>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[400px] md:absolute md:right-0 md:top-0 md:mx-0 md:max-w-[480px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-[#1a1030]">
              <Image
                src={HERO.heroImage}
                alt="Summit speaker"
                fill
                priority
                className="object-cover object-top grayscale"
                sizes="(max-width:768px) 90vw, 480px"
              />
              <div className="absolute inset-0 bg-[#7e3bed]/35 mix-blend-color" />
            </div>

            {HERO.datePills.map((pill, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                  "date-pill absolute z-20 hidden sm:flex",
                  `date-pill-${pill.tone}`,
                  PILL_POS[i]
                )}
                style={{ transform: `rotate(${pill.rotate}deg)` }}
              >
                <span className="text-2xl md:text-3xl">{pill.dates}</span>
                <span className="mt-1 text-sm font-semibold">{pill.month}</span>
                <span className="text-xs opacity-75">{pill.year}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 overflow-x-auto pb-2 sm:hidden">
            {HERO.datePills.map((pill, i) => (
              <div
                key={i}
                className={cn("date-pill shrink-0", `date-pill-${pill.tone}`)}
                style={{ transform: `rotate(${pill.rotate}deg)` }}
              >
                <span className="text-xl">{pill.dates}</span>
                <span className="mt-1 text-xs font-semibold">{pill.month}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="section-border" />
    </section>
  );
}
