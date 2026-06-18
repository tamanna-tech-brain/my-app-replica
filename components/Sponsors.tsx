"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SPONSORS = [
  "Logoipsum",
  "TechNova",
  "LightAI",
  "Kanba",
  "NeuralNet",
  "CloudScale",
  "DataFlow",
  "CreativeAI",
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative z-10 section-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white mb-8">
            Official Elite{" "}
            <span className="gradient-text">Sponsor</span>
          </h2>

          <Link
            href="/sponsors"
            className="inline-flex items-center justify-center gap-2 btn-purple text-base px-8 py-4 rounded-2xl group"
          >
            Become a Sponsor
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Sponsor Grid - 2 rows x 4 columns */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#2A2A2A] rounded-3xl overflow-hidden"
        >
          {SPONSORS.map((sponsor, idx) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring" as any,
                    stiffness: 200,
                    damping: 18,
                  },
                },
              }}
              key={idx}
              className={`h-[140px] md:h-[200px] flex items-center justify-center p-6 transition-all duration-400 hover:bg-white/[0.03] cursor-pointer group
                ${idx % 4 !== 3 ? "md:border-r border-[#2A2A2A]" : ""}
                ${idx % 2 !== 1 ? "border-r md:border-r-0 border-[#2A2A2A]" : ""}
                ${idx < 4 ? "border-b border-[#2A2A2A]" : ""}
              `}
            >
              <span className="text-lg md:text-xl font-bold text-white/20 group-hover:text-[#7C3AED] transition-colors duration-400 uppercase tracking-[0.15em] text-center">
                {sponsor}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
