"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { FAQ_ITEMS } from "@/lib/site-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-border section-y">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="section-label mb-4">Faq&apos;s</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#f5f5f5] md:text-5xl">
            Most Asked Questions
          </h2>
          <p className="mt-5 text-[#8a8a8a]">
            Get fast answers to your most common questions. Also, if you have any questions and need live support?
          </p>
          <Link href="/contact" className="btn-lime mt-8">
            Get Support
          </Link>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  open ? "border-[#8b3dff]/35 bg-white/[0.02]" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className={`font-semibold ${open ? "text-[#f5f5f5]" : "text-[#8a8a8a]"}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180 text-[#d9ff3f]" : "text-[#8a8a8a]"}`}
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
