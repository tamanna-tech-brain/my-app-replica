"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SPEAKERS = [
  {
    name: "Carlos Mendoza",
    role: "VP of AI Research",
    company: "TechNova",
    img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Didier Hilhorst",
    role: "Chief Design Officer",
    company: "CreativeAI",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Jenna Park",
    role: "Lead Product Architect",
    company: "DataFlow",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&auto=format&fit=crop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as any, stiffness: 150, damping: 18 },
  },
};

export default function Speakers() {
  return (
    <section id="speakers" className="relative z-10 section-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white">
            Featured{" "}
            <span className="gradient-text">Speakers</span>
          </h2>
        </motion.div>

        {/* 3-Column Speaker Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SPEAKERS.map((speaker, idx) => (
            <motion.div
              variants={cardItem}
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-[#0E0E0E] border border-[#262626] rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#7C3AED]/50 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]">
                {/* Portrait */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={speaker.img}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-80" />
                </div>

                {/* Info */}
                <div className="p-6 -mt-8 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-[#7C3AED] font-medium mb-0.5">
                    {speaker.role}
                  </p>
                  <p className="text-sm text-[#A1A1AA]">{speaker.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
