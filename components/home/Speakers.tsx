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
      <h3 className="text-lg font-bold text-white md:text-xl lg:text-2xl">{speaker.name}</h3>
      <p className="mt-1 text-sm text-[#8a8a8a] md:text-base">{speaker.role}</p>
    </>
  );

  return (
    <Link href={`/speakers/${speaker.id}`} className="group block">
      {textAbove && <div className="mb-4 text-center md:mb-5">{nameBlock}</div>}
      <div className="speaker-step-bg relative mx-auto aspect-[4/5] w-full overflow-hidden">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover object-top grayscale transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 80vw, 33vw"
        />
      </div>
      {!textAbove && <div className="mt-4 text-center md:mt-5">{nameBlock}</div>}
    </Link>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="section-border bg-[#151515] section-y">
      <Container>
        <div className="mb-14 text-center">
          <NotchBadge borderColor="border-[#66f7ff]" className="mb-6">
            Speakers
          </NotchBadge>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-7xl">Our Speakers</h2>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3 lg:gap-8">
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
