"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import { GALLERY_IMAGES } from "@/lib/site-data";
import { cn } from "@/lib/cn";

const SHAPES = ["gallery-step", "gallery-oval", "gallery-blob", "gallery-step"] as const;

export default function EventGallery() {
  return (
    <section id="gallery" className="section-border bg-[#151515] section-y">
      <Container>
        <div className="mb-14">
          <NotchBadge borderColor="border-[#70e1f5]" className="mb-6">
            Event gallery
          </NotchBadge>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            An Inspiring Event for <span className="gradient-text">Makers</span>
          </h2>
        </div>

        <div className="-mx-5 flex gap-5 overflow-x-auto px-5 pb-4 md:gap-8">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              whileHover={{ y: -8 }}
              className={cn(
                "relative shrink-0 overflow-hidden",
                SHAPES[i % SHAPES.length],
                i === 0 ? "h-[360px] w-[300px] md:h-[420px] md:w-[360px]" : "h-[280px] w-[240px] md:h-[340px] md:w-[280px]"
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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
