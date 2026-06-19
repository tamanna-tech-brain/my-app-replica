"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import { GALLERY_IMAGES } from "@/lib/site-data";
import { cn } from "@/lib/cn";

const SHAPES = ["gallery-step", "gallery-oval", "gallery-blob", "gallery-step"] as const;

export default function EventGallery() {
  /* Double the images for a seamless infinite marquee */
  const doubled = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section id="gallery" className="section-border relative bg-[#151515] section-y overflow-hidden">
      {/* Decorative gradient shapes - bottom left */}
      <div className="absolute bottom-0 left-0 z-0 h-[320px] w-[200px]">
        <div className="gradient-decor absolute bottom-0 left-0 h-[180px] w-[80px] rotate-[-20deg] opacity-90" />
        <div className="gradient-decor absolute bottom-[60px] left-[40px] h-[140px] w-[60px] rotate-[-10deg] opacity-80" />
        <div className="gradient-decor absolute bottom-[100px] left-[80px] h-[120px] w-[50px] rotate-[5deg] opacity-70" />
      </div>

      <Container className="relative z-10">
        <div className="mb-14">
          <NotchBadge borderColor="border-[#c6ff34]" className="mb-6">
            Event gallery
          </NotchBadge>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            An Inspiring Event for <span className="gradient-text">Makers</span>
          </h2>
        </div>
      </Container>

      {/* Marquee row */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 md:gap-8"
        >
          {doubled.map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className={cn(
                "relative shrink-0 overflow-hidden",
                SHAPES[i % SHAPES.length],
                i % 4 === 0
                  ? "h-[360px] w-[300px] md:h-[420px] md:w-[360px]"
                  : "h-[280px] w-[240px] md:h-[340px] md:w-[280px]"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover grayscale"
                sizes="360px"
              />
              <div className="absolute inset-0 bg-[#7e3bed]/40 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
