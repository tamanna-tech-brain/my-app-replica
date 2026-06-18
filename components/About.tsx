"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const STATS = [
  { value: 5000, suffix: "+", label: "Attendees" },
  { value: 120, suffix: "+", label: "Speakers" },
  { value: 75, suffix: "+", label: "Sessions" },
  { value: 50, suffix: "+", label: "Partners" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-10 section-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* 50/50 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-[#252525]">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1000&auto=format&fit=crop"
                alt="Event Overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative floating element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 backdrop-blur-sm hidden lg:block"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7C3AED] mb-5">
              About the Event
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
              Two days of{" "}
              <span className="gradient-text">transformative</span>{" "}
              experiences
            </h2>
            <p className="text-lg text-[#A1A1AA] leading-relaxed mb-10">
              Config Summit 2026 brings together the brightest minds in
              technology for an immersive conference experience designed to
              inspire, educate, and connect. From keynote talks to hands-on
              workshops, every moment is crafted for impact.
            </p>

            {/* Statistics Grid - Count Up */}
            <div className="grid grid-cols-2 gap-0 border border-[#252525] rounded-2xl overflow-hidden">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center py-8 px-4
                    ${i % 2 === 0 ? "border-r border-[#252525]" : ""}
                    ${i < 2 ? "border-b border-[#252525]" : ""}
                    hover:bg-white/[0.02] transition-colors duration-300`}
                >
                  <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-[#A1A1AA] font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
