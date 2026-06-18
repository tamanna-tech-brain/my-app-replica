"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";
import { FAQ_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/cn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="faq" className="section-border bg-black section-y">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <NotchBadge borderColor="border-[#70e1f5]" className="mb-6">
            Faq&apos;s
          </NotchBadge>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Most Asked Questions
          </h2>
          <p className="mt-5 text-[#8a8a8a]">
            Get fast answers to your most common questions. Also, if you have any questions and need live support?
          </p>
          <div className="mt-8 flex justify-center">
            <SplitButton href="/contact" variant="purple">
              Get Support
            </SplitButton>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q} className={cn("faq-item", open && "faq-item-open")}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className={cn("font-semibold", open ? "text-white" : "text-[#8a8a8a]")}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform",
                      open ? "rotate-180 text-[#d9ff3f]" : "text-[#8a8a8a]"
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
                      <p className="px-6 pb-5 text-[#8a8a8a] leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
