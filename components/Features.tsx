"use client";

import { Cpu, Users, Wrench, Mic } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Cpu,
    title: "AI Innovation",
    description:
      "Explore cutting-edge breakthroughs in artificial intelligence and machine learning with leaders driving the next wave.",
    color: "#7C3AED",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with 5,000+ industry leaders, founders, and makers through curated networking sessions and lounges.",
    color: "#D946EF",
  },
  {
    icon: Wrench,
    title: "Workshops",
    description:
      "Hands-on sessions with world-class experts building the next generation of digital products and platforms.",
    color: "#D7FF3F",
  },
  {
    icon: Mic,
    title: "Live Sessions",
    description:
      "Watch live demos, product launches, and lightning talks from the most innovative companies on the planet.",
    color: "#FF6A00",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as any, stiffness: 150, damping: 18 },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative z-10 section-border">
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
            What to{" "}
            <span className="gradient-text">Expect</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Four pillars of an unforgettable conference experience.
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              variants={item}
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group p-8 md:p-10 bg-[#0E0E0E] border border-[#252525] rounded-3xl transition-all duration-400 hover:border-[#333] cursor-default"
              id={`feature-${feature.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${feature.color}12`,
                  border: `1px solid ${feature.color}25`,
                }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
