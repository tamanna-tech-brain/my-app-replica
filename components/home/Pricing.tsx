import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import { PRICING_PLANS } from "@/lib/site-data";

export default function Pricing() {
  return (
    <section id="pricing" className="section-border section-y">
      <Container>
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-4">Tickets Pricing</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#f5f5f5] md:text-5xl lg:text-7xl">
            Selected Your Tickets
          </h2>
        </div>

        <div className="grid max-w-5xl gap-6 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[28px] border p-8 md:p-10 ${
                plan.featured
                  ? "border-[#8b3dff]/30 bg-gradient-to-b from-[#8b3dff]/12 to-[#111]"
                  : "border-white/10 bg-[#111]"
              }`}
            >
              <h3 className="text-2xl font-bold text-[#f5f5f5]">{plan.name}</h3>
              <p className="mt-6 text-5xl font-extrabold text-[#f5f5f5]">{plan.price}</p>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#8a8a8a]">Includes</p>
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#8a8a8a]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d9ff3f]/15 text-[#d9ff3f]">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/tickets" className="btn-lime mt-10 w-full">
                Reserve Ticket
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
