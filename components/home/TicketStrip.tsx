import Link from "next/link";
import Container from "@/components/ui/Container";
import { TICKET_STRIP } from "@/lib/site-data";

export default function TicketStrip() {
  return (
    <section id="ticket" className="section-border bg-[#151515] py-16 md:py-20">
      <Container>
        <div className="flex justify-center">
          <Link
            href={TICKET_STRIP.href}
            className="ticket-strip block w-full max-w-md px-8 py-10 text-center transition-transform hover:-translate-y-1"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8a8a8a]">
              {TICKET_STRIP.label}
            </p>
            <p className="text-4xl font-extrabold text-[#d9ff3f] md:text-5xl">{TICKET_STRIP.dates}</p>
            <p className="mt-2 text-xl font-bold text-white md:text-2xl">{TICKET_STRIP.month}</p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
