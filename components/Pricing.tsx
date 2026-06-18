"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PRICING = [
  {
    name: "Standard",
    price: "$299",
    description: "Full virtual access to all keynotes, sessions, and recordings.",
    features: [
      "Live streaming all sessions",
      "Virtual networking lounge",
      "On-demand recordings (90 days)",
      "Digital conference materials",
      "Community Discord access",
    ],
  },
  {
    name: "Pro",
    price: "$799",
    description: "The complete in-person summit experience with premium perks.",
    featured: true,
    features: [
      "Everything in Standard",
      "In-person conference access",
      "VIP workshop entry",
      "Exclusive networking events",
      "Catered meals & after-party",
      "Priority seating",
    ],
  },
  {
    name: "VIP",
    price: "$1,499",
    description: "Ultimate experience with backstage access and 1:1 speaker time.",
    features: [
      "Everything in Pro",
      "Backstage speaker meet & greet",
      "1:1 mentorship session",
      "VIP lounge access",
      "Exclusive VIP dinner",
      "Lifetime recording access",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as any, stiffness: 150, damping: 18 },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 section-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-6">
            Choose Your{" "}
            <span className="gradient-text">Pass</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Select the experience that fits you best. Early bird pricing
            available for a limited time.
          </p>
        </motion.div>

        {/* 3 Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PRICING.map((plan, i) => (
            <motion.div
              variants={item}
              key={i}
              whileHover={{ y: -8 }}
              className={`relative p-8 md:p-10 rounded-3xl border transition-all duration-400 ${
                plan.featured
                  ? "bg-gradient-to-b from-[#7C3AED]/15 to-[#0E0E0E] border-[#7C3AED]/40 shadow-[0_0_60px_rgba(124,58,237,0.1)]"
                  : "bg-[#0E0E0E] border-[#252525] hover:border-[#333]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7C3AED] text-white text-xs font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#A1A1AA] mb-6 h-10">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-black text-white">
                    {plan.price}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.featured
                          ? "bg-[#7C3AED]/20 text-[#7C3AED]"
                          : "bg-white/5 text-[#A1A1AA]"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-[#A1A1AA]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/tickets"
                className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all duration-300 group ${
                  plan.featured
                    ? "btn-gradient"
                    : "btn-ghost"
                }`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
