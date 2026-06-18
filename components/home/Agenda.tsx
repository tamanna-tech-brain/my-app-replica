"use client";

import { Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/ui/Container";
import { SESSIONS } from "@/lib/site-data";
import "swiper/css";

function SessionCard({ session }: { session: (typeof SESSIONS)[number] }) {
  return (
    <article className="flex h-full min-h-[420px] flex-col rounded-[28px] border border-white/10 bg-[#111] p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a8a8a]">{session.label}</p>

      <div className="mt-6 flex items-start gap-5">
        <div>
          <p className="text-5xl font-extrabold leading-none text-[#8b3dff] md:text-6xl">{session.dayNum}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-[#8a8a8a]">{session.month}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#d9ff3f]">{session.weekday}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[#8a8a8a]">
            <Clock className="h-3.5 w-3.5" />
            {session.time}
          </p>
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-bold leading-tight text-[#f5f5f5] md:text-3xl">{session.title}</h3>
      <p className="mt-4 text-[#8a8a8a] leading-relaxed">{session.description}</p>

      <ul className="mt-6 space-y-2">
        {session.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#8a8a8a]">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9ff3f]" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Agenda() {
  return (
    <section id="agenda" className="section-border section-y">
      <Container>
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-4">schedule</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#f5f5f5] md:text-5xl lg:text-6xl">
            Build, Learn and Connect
          </h2>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {SESSIONS.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>

        <div className="lg:hidden">
          <Swiper spaceBetween={14} slidesPerView={1.05} className="!overflow-visible">
            {SESSIONS.map((session) => (
              <SwiperSlide key={session.id}>
                <SessionCard session={session} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
