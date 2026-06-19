"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import { PRICING_PLANS } from "@/lib/site-data";

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-1">
      <path
        d="M8 0L9.6 6.4L16 8L9.6 9.6L8 16L6.4 9.6L0 8L6.4 6.4L8 0Z"
        fill="#7e3bed"
      />
    </svg>
  );
}

export default function Pricing({ hideHeader }: { hideHeader?: boolean }) {
  return (
    <section id="pricing" className="section-border bg-[#151515] section-y">
      <Container>
        {!hideHeader && (
          <div className="mb-14 text-center">
            <NotchBadge borderColor="border-[#70e1f5]" className="mb-6">
              Tickets Pricing
            </NotchBadge>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
              Selected Your Tickets
            </h2>
          </div>
        )}

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <article key={plan.name} className="ticket-card">
              <h3 className="text-xl font-bold md:text-2xl">{plan.name}</h3>
              <p className="mt-6 text-5xl font-extrabold text-[#7e3bed] md:text-7xl">{plan.price}</p>

              <div className="ticket-includes-line">
                <span className="text-lg font-bold">Includes</span>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-[#333] md:text-lg">
                    <StarIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/tickets"
                className="btn-gradient mt-10"
              >
                Reserve Ticket
                <ArrowRight className="h-5 w-5" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
