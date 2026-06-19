"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import Pricing from "@/components/home/Pricing";
import { TICKETS_FAQ } from "@/lib/site-data";
import { cn } from "@/lib/cn";

export default function TicketsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="bg-[#151515] pt-[calc(var(--nav-h)+48px)] pb-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <NotchBadge borderColor="border-[#c6ff34]" className="mb-6">
              Tickets Pricing
            </NotchBadge>
            <h1 className="page-hero-title text-white">Choose Your Tickets</h1>
          </div>
        </Container>
      </section>

      <Pricing hideHeader />

      <section className="section-border bg-[#151515] section-y">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <NotchBadge borderColor="border-[#66f7ff]" className="mb-6">
              Faq&apos;s
            </NotchBadge>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {TICKETS_FAQ.map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={item.q} className={cn("faq-item", open && "faq-item-open")}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className={cn("font-semibold", open ? "text-white" : "text-[#a6a6a6]")}>
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform",
                        open ? "rotate-180 text-[#c6ff34]" : "text-[#a6a6a6]"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 leading-relaxed text-[#a6a6a6]">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
