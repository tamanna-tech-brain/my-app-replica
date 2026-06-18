"use client";

import { Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import { SESSIONS } from "@/lib/site-data";

function SessionRow({ session }: { session: (typeof SESSIONS)[number] }) {
  return (
    <article className="grid gap-8 border-t border-white/10 py-12 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-3">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a8a8a]">{session.label}</p>
        <div className="mt-6 flex items-center gap-5">
          <div className="session-arc flex shrink-0 items-center justify-center">
            <span className="relative z-10 text-3xl font-extrabold text-[#8b3dff]">{session.dayNum}</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8a8a8a]">{session.month}</p>
            <p className="mt-2 text-sm font-semibold text-[#d9ff3f]">{session.weekday}</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-9">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <NotchBadge borderColor="border-[#8b3dff]/50" className="text-[#a1a1aa]">
            <Clock className="h-3.5 w-3.5 text-[#8b3dff]" />
            {session.time}
          </NotchBadge>
        </div>

        <h3 className="text-2xl font-bold leading-tight text-white md:text-4xl">{session.title}</h3>
        <p className="mt-4 max-w-2xl text-[#8a8a8a] leading-relaxed">{session.description}</p>

        <ul className="mt-6 space-y-2">
          {session.bullets.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#8a8a8a]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9ff3f]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Agenda() {
  return (
    <section id="agenda" className="section-border bg-black section-y">
      <Container>
        <div className="mb-14 text-center">
          <NotchBadge borderColor="border-[#70e1f5]" className="mb-6">
            schedule
          </NotchBadge>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Build, Learn and Connect
          </h2>
        </div>

        <div className="max-w-5xl">
          {SESSIONS.map((session) => (
            <SessionRow key={session.id} session={session} />
          ))}
        </div>
      </Container>
    </section>
  );
}
