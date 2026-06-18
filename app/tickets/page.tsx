"use client";

import PricingComponent from "@/components/Pricing";
import { motion } from "framer-motion";

export default function TicketsPage() {
  return (
    <div className="pt-[140px] pb-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 px-6 lg:px-8"
        >
          <div className="tag-lime mb-6 mx-auto">REGISTRATION</div>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-white mb-6">
            Get Your <span className="gradient-text">Tickets</span>
          </h1>
          <p className="text-xl text-[#A1A1AA]">
            Join 5,000+ technology leaders. Select the experience that fits you best.
            Early bird pricing available for a limited time.
          </p>
        </motion.div>

        <div className="-mt-20">
          <PricingComponent />
        </div>
      </div>
    </div>
  );
}
