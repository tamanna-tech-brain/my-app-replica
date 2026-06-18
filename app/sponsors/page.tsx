"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SPONSORS_ELITE = [
  "Logoipsum",
  "TechNova",
  "LightAI",
  "Kanba",
  "NeuralNet",
  "CloudScale",
  "DataFlow",
  "CreativeAI",
];

const MARQUEE_SPONSORS = [
  "Acme Corp",
  "GlobalTech",
  "InnovateAI",
  "FutureStack",
  "DataPulse",
  "Synthesis Labs",
  "QuantumLeap",
  "NextGen",
];

export default function SponsorsPage() {
  return (
    <div className="pt-[140px] pb-24 min-h-screen overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="tag-lime mb-6 mx-auto">PARTNERS</div>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-white mb-6">
            Our <span className="gradient-text">Sponsors</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] mb-8">
            Config Summit is made possible by the generous support of the most
            innovative companies in technology.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 btn-purple px-8 py-4 rounded-xl font-bold group"
          >
            Become a Sponsor
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Elite Sponsors Grid */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold text-center text-white mb-10 tracking-widest uppercase">
            Elite Partners
          </h2>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#2A2A2A] rounded-3xl overflow-hidden"
          >
            {SPONSORS_ELITE.map((sponsor, idx) => (
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
                className={`h-[180px] md:h-[240px] flex items-center justify-center p-6 transition-all duration-400 hover:bg-white/[0.03] hover:shadow-[inset_0_0_50px_rgba(124,58,237,0.1)] cursor-pointer group relative overflow-hidden
                  ${idx % 4 !== 3 ? "md:border-r border-[#2A2A2A]" : ""}
                  ${
                    idx % 2 !== 1
                      ? "border-r md:border-r-0 border-[#2A2A2A]"
                      : ""
                  }
                  ${idx < 4 ? "border-b border-[#2A2A2A]" : ""}
                `}
              >
                {/* Glow behind text on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <span className="text-xl md:text-3xl font-bold text-white/20 group-hover:text-[#7C3AED] group-hover:scale-110 transition-all duration-400 uppercase tracking-[0.15em] text-center relative z-10">
                  {sponsor}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative mb-24">
          <h2 className="text-lg font-bold text-center text-[#A1A1AA] mb-10 tracking-widest uppercase">
            Ecosystem Partners
          </h2>
          
          <div className="flex overflow-hidden whitespace-nowrap mask-edges">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className="flex items-center"
            >
              {[...MARQUEE_SPONSORS, ...MARQUEE_SPONSORS].map((sponsor, i) => (
                <div
                  key={i}
                  className="mx-12 md:mx-24 text-2xl md:text-4xl font-bold text-white/10 uppercase tracking-widest hover:text-white/40 transition-colors cursor-pointer"
                >
                  {sponsor}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
