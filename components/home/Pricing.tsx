import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";
import { PRICING_PLANS } from "@/lib/site-data";

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

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <article key={plan.name} className="ticket-card">
              <h3 className="text-xl font-bold md:text-2xl">{plan.name}</h3>
              <p className="mt-6 text-5xl font-extrabold text-[#7e3bed] md:text-6xl">{plan.price}</p>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#8a8a8a]">Includes</p>
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#4a4a4a]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/10 text-[#7c3aed]">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <SplitButton href="/tickets" variant="purple" fullWidth className="mt-10 justify-center">
                Reserve Ticket
              </SplitButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
