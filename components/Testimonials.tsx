"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Config 2026 was a transformative experience. The sessions were incredibly insightful and the networking opportunities were unmatched. I left feeling inspired and connected.",
    name: "Sarah Chen",
    role: "CTO",
    company: "FutureStack",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&auto=format&fit=crop",
  },
  {
    quote:
      "The caliber of speakers and the depth of the workshops made this the best tech conference I've ever attended. Already counting down to next year.",
    name: "Marcus Rivera",
    role: "VP of Engineering",
    company: "DataPulse",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&auto=format&fit=crop",
  },
  {
    quote:
      "What sets Config apart is the genuine focus on community. Every interaction, every session, every moment felt curated for maximum impact.",
    name: "Elena Kowalski",
    role: "Founder & CEO",
    company: "Synthesis Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as any, stiffness: 150, damping: 18 },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 section-border">
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
            What People{" "}
            <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* 3 Testimonial Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              variants={item}
              key={i}
              whileHover={{ y: -8 }}
              className="group p-8 bg-[#0E0E0E] border border-[#252525] rounded-3xl transition-all duration-400 hover:border-[#333]"
            >
              {/* Quote */}
              <div className="mb-8">
                <svg
                  className="w-10 h-10 text-[#7C3AED]/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base md:text-lg text-[#A1A1AA] leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#252525]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#A1A1AA]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
