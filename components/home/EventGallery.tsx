"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { GALLERY_IMAGES } from "@/lib/site-data";

export default function EventGallery() {
  return (
    <section id="gallery" className="section-border section-y">
      <Container>
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-4">Event gallery</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#f5f5f5] md:text-5xl lg:text-6xl">
            An Inspiring Event for <span className="gradient-text">Makers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-[24px] border border-white/10 ${
                i === 0 ? "col-span-2 row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[420px]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes={i === 0 ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 50vw, 25vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 to-transparent" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
