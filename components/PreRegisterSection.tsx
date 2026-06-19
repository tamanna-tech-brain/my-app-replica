"use client";

import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";

const PERKS = [
  "Priority access to early-bird tickets",
  "Exclusive speaker lineup updates",
  "Limited workshop seat notifications",
  "Special partner offers",
];

export default function PreRegisterSection() {
  return (
    <section className="section-border bg-[#151515] section-y">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="page-hero-title text-white">Pre-Register for AI Event</h2>
          <p className="mt-5 text-[#a6a6a6]">
            Be the first to receive ticket releases, speaker announcements, and exclusive updates.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold text-white">Why Pre-Register?</p>
            <ul className="space-y-3">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-[#a6a6a6]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6ff34]" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0f0019] p-6 md:p-8">
            <NotchBadge borderColor="border-[#66f7ff]" className="mb-6">
              Pre-Registration Form
            </NotchBadge>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full rounded-xl px-4 py-3.5 text-sm" />
              <input type="email" placeholder="Email Address" className="w-full rounded-xl px-4 py-3.5 text-sm" />
              <select className="w-full rounded-xl px-4 py-3.5 text-sm">
                <option>In-Person Pass</option>
                <option>Online Pass</option>
              </select>
              <SplitButton href="/tickets" variant="lime" fullWidth className="justify-center">
                Reserve Ticket
              </SplitButton>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
