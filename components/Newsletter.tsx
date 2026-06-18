"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative z-10 section-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
            Stay in the{" "}
            <span className="gradient-text">Loop</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] leading-relaxed mb-10">
            Subscribe to our newsletter and be the first to know about speaker
            announcements, early bird tickets, and exclusive updates.
          </p>

          {/* Input + Button */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-2xl bg-white/[0.03] border border-[#252525] text-white placeholder:text-[#555] focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all text-base"
            />
            <button
              type="submit"
              className="btn-purple px-8 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold group shrink-0"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-xs text-[#555] mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
