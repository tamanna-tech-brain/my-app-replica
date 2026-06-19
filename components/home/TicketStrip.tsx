"use client";

import Link from "next/link";
import { Timer } from "lucide-react";
import Container from "@/components/ui/Container";
import { TICKET_STRIP } from "@/lib/site-data";

export default function TicketStrip() {
  return (
    <section id="ticket" className="section-border bg-[#151515] py-16 md:py-24">
      <Container>
        <div className="flex justify-center">
          <Link
            href={TICKET_STRIP.href}
            className="pink-ticket group relative block w-full max-w-lg transition-transform hover:-translate-y-1"
          >
            {/* Stopwatch icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-black/20">
              <Timer className="h-7 w-7 text-black" />
            </div>

            {/* Ticket content */}
            <div className="flex flex-col items-center flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">
                Ticket ✦ Ticket
              </p>
              <p className="mt-1 text-4xl font-extrabold text-black md:text-5xl">
                {TICKET_STRIP.dates}
              </p>
              <p className="mt-1 text-lg font-bold text-black/70 md:text-xl">
                {TICKET_STRIP.month}
              </p>
            </div>
          </Link>
        </div>

        {/* Dot grid decoration below ticket */}
        <div className="mx-auto mt-6 flex justify-center">
          <div className="dots-grid h-8 w-64 opacity-60" />
        </div>
      </Container>
    </section>
  );
}
