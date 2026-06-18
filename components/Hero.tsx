"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as any, stiffness: 150, damping: 20 },
  },
};

const SPEAKERS_PREVIEW = [
  { name: "Speaker 1", img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300&h=400&auto=format&fit=crop" },
  { name: "Speaker 2", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&auto=format&fit=crop" },
  { name: "Speaker 3", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&auto=format&fit=crop" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-[90px] overflow-hidden"
      id="hero-section"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Large floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left orb - purple/pink */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(217, 70, 239, 0.1) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Right orb - orange/pink */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-[5%] right-[-15%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 106, 0, 0.2) 0%, rgba(217, 70, 239, 0.1) 40%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Bottom center glow */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(215, 255, 63, 0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Purple dotted pattern element */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[15%] w-32 h-32 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7C3AED 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Floating neon shapes */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[8%] w-16 h-16 border border-[#7C3AED]/30 rounded-lg rotate-45 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[25%] right-[10%] w-12 h-12 border border-[#D946EF]/25 rounded-full hidden lg:block"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Massive "SUMMIT 2026" headline */}
          <motion.div variants={fadeUp} className="mb-8 w-full overflow-visible">
            <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[220px] font-black tracking-tighter leading-[0.85] text-white select-none whitespace-nowrap">
              <span className="block">SUMMIT</span>
              <span className="block gradient-text">2026</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed mb-10"
          >
            Join 5,000+ visionaries, creators, and technology leaders for the
            definitive event shaping the future of innovation.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeUp} className="mb-16">
            <Link
              href="/tickets"
              className="btn-purple text-base md:text-lg px-10 py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 group"
              id="hero-register"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stacked Speaker Image Cards */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center w-full max-w-md h-[200px] md:h-[280px]"
          >
            {SPEAKERS_PREVIEW.map((speaker, i) => {
              const offsets = [
                { x: -80, y: 10, rotate: -8 },
                { x: 0, y: -15, rotate: 0 },
                { x: 80, y: 10, rotate: 8 },
              ];
              return (
                <motion.div
                  key={i}
                  animate={{
                    y: [offsets[i].y, offsets[i].y - 10, offsets[i].y],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="absolute w-[120px] h-[160px] md:w-[160px] md:h-[220px] rounded-2xl overflow-hidden border-2 border-[#252525] shadow-2xl shadow-black/50"
                  style={{
                    transform: `translateX(${offsets[i].x}px) rotate(${offsets[i].rotate}deg)`,
                    zIndex: i === 1 ? 3 : i === 0 ? 1 : 2,
                  }}
                >
                  <Image
                    src={speaker.img}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#252525]" />
    </section>
  );
}
