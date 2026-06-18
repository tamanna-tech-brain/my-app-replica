"use client";

import { motion } from "framer-motion";

const TAG_COLORS = [
  { from: "from-brand-blue/20", to: "to-brand-violet/20", border: "border-brand-blue/30", text: "text-brand-blue" },
  { from: "from-brand-violet/20", to: "to-brand-pink/20", border: "border-brand-violet/30", text: "text-brand-violet" },
  { from: "from-emerald-500/20", to: "to-brand-blue/20", border: "border-emerald-500/30", text: "text-emerald-400" },
  { from: "from-brand-yellow/20", to: "to-orange-500/20", border: "border-brand-yellow/30", text: "text-brand-yellow" },
  { from: "from-brand-pink/20", to: "to-red-500/20", border: "border-brand-pink/30", text: "text-brand-pink" },
];

export default function CodeQuoteBanner() {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 p-12 md:p-16">

          {/* Live animated background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#0c0e18]"></div>
            {/* Moving gradient mesh */}
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-brand-violet mix-blend-screen blur-[100px]"
            />
            <motion.div
              animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-brand-blue mix-blend-screen blur-[100px]"
            />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Code brackets decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-6 mb-8"
            >
              <span className="text-6xl md:text-8xl font-mono font-bold text-brand-blue/30 select-none">{`{`}</span>
              <div className="flex flex-col items-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-sm md:text-base font-mono text-brand-blue uppercase tracking-[0.3em] mb-3"
                >
                  &lt;Config 2026 /&gt;
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl"
                >
                  Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet">Innovation</span> Meets Intelligence
                </motion.h2>
              </div>
              <span className="text-6xl md:text-8xl font-mono font-bold text-brand-violet/30 select-none">{`}`}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Two days of transformative sessions, hands-on workshops, and unparalleled networking opportunities with the brightest minds in AI.
            </motion.p>

            {/* Animated code-like decorative elements with live backgrounds */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
            >
              {[
                "[ AI-Driven ]",
                "{ Real-Time }",
                "( Open-Source )",
                "< Scalable />",
                "/* Ethical */",
              ].map((tag, i) => {
                const color = TAG_COLORS[i];
                return (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className={`relative px-5 py-2.5 rounded-xl border ${color.border} font-mono text-sm ${color.text} hover:border-opacity-60 transition-all duration-300 cursor-default overflow-hidden`}
                  >
                    {/* Animated gradient background inside each tag */}
                    <motion.span
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color.from} ${color.to} opacity-60`}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    />
                    {/* Shimmer sweep */}
                    <motion.span
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{ backgroundPosition: ["-100% 0%", "200% 0%"] }}
                      transition={{
                        duration: 2.5 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />
                    <span className="relative z-10 font-semibold">{tag}</span>
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
