"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import { SPEAKERS } from "@/lib/site-data";
import "swiper/css";

function SpeakerCard({
  speaker,
  textAbove,
}: {
  speaker: (typeof SPEAKERS)[number];
  textAbove: boolean;
}) {
  const nameBlock = (
    <>
      <h3 className="text-lg font-bold text-white md:text-xl">{speaker.name}</h3>
      <p className="mt-1 text-sm text-[#8a8a8a]">{speaker.role}</p>
    </>
  );

  return (
    <Link href={`/speakers/${speaker.id}`} className="group block">
      {textAbove && <div className="mb-4 text-center md:mb-5">{nameBlock}</div>}
      <div className="step-corner relative mx-auto aspect-square w-full max-w-[280px] border border-white/10 p-3">
        <div className="speaker-step-bg relative h-full w-full p-4">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover object-top grayscale transition-transform duration-500 group-hover:scale-105"
              sizes="280px"
            />
          </div>
        </div>
      </div>
      {!textAbove && <div className="mt-4 text-center md:mt-5">{nameBlock}</div>}
    </Link>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="section-border bg-black section-y">
      <Container>
        <div className="mb-14 text-center">
          <NotchBadge borderColor="border-[#d9ff3f]" className="mb-6">
            Speakers
          </NotchBadge>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Our Speakers</h2>
        </div>

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard key={speaker.id} speaker={speaker} textAbove={i < 3} />
          ))}
        </div>

        <div className="md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.15} className="!overflow-visible">
            {SPEAKERS.map((speaker, i) => (
              <SwiperSlide key={speaker.id}>
                <SpeakerCard speaker={speaker} textAbove={i % 2 === 0} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
