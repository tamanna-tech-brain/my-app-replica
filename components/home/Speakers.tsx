"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { SPEAKERS } from "@/lib/site-data";
import "swiper/css";

function SpeakerCard({ speaker }: { speaker: (typeof SPEAKERS)[number] }) {
  return (
    <Link href={`/speakers/${speaker.id}`} className="group block h-full">
      <motion.article
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.35 }}
        className="speaker-lime-bg h-full overflow-hidden rounded-[28px] border border-white/10"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 80vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>
        <div className="px-5 pb-6 pt-4">
          <h3 className="text-lg font-bold text-[#f5f5f5] md:text-xl">{speaker.name}</h3>
          <p className="mt-1 text-sm font-medium text-[#d9ff3f]">{speaker.role}</p>
        </div>
      </motion.article>
    </Link>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="section-border section-y">
      <Container>
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-4">Speakers</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#f5f5f5] md:text-5xl lg:text-7xl">
            Our Speakers
          </h2>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {SPEAKERS.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        <div className="md:hidden">
          <Swiper spaceBetween={14} slidesPerView={1.15} className="!overflow-visible">
            {SPEAKERS.map((speaker) => (
              <SwiperSlide key={speaker.id}>
                <SpeakerCard speaker={speaker} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
