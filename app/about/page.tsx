"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TEAM = [
  {
    name: "Alex Rivera",
    role: "Event Director",
    img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Jordan Smith",
    role: "Head of Operations",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Casey Lin",
    role: "Curator",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Taylor Reed",
    role: "Community Lead",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&auto=format&fit=crop",
  },
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

const STATS = [
  { value: 5000, suffix: "+", label: "Attendees" },
  { value: 120, suffix: "+", label: "Speakers" },
  { value: 75, suffix: "+", label: "Sessions" },
  { value: 50, suffix: "+", label: "Partners" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="pt-[140px] pb-24 min-h-screen" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-24 md:mb-32"
        >
          <div className="tag-lime mb-6 mx-auto">ABOUT US</div>
          <h1 className="text-6xl md:text-[80px] lg:text-[100px] font-black tracking-tight text-white leading-[1.1] mb-8">
            Shaping the <span className="gradient-text">Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#A1A1AA] leading-relaxed">
            Config Summit is the definitive global gathering for technology
            leaders, visionaries, and makers who are building tomorrow&apos;s
            world today.
          </p>
        </motion.div>

        {/* Parallax Image Block */}
        <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative border border-[#252525] mb-24 md:mb-32">
          <motion.div
            style={{ y: parallaxY }}
            className="absolute -inset-[10%] w-[120%] h-[120%]"
          >
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&auto=format&fit=crop"
              alt="Conference Audience"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/50" />
          </motion.div>
        </div>

        {/* Story, Mission, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-24 md:mb-32">
          {[
            {
              title: "Our Story",
              text: "Founded in 2020, Config started as a small meetup for makers. Today, it has grown into a global movement connecting thousands of professionals across industries.",
            },
            {
              title: "Our Mission",
              text: "To democratize access to cutting-edge technology insights and foster a collaborative environment where innovation can thrive without boundaries.",
            },
            {
              title: "Our Vision",
              text: "We envision a future where technology serves humanity better, built by a diverse community of creators united by shared knowledge and purpose.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-[#252525] hover:border-[#333] transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#252525] rounded-3xl overflow-hidden mb-24 md:mb-32"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-12 px-4
                ${i !== 3 ? "md:border-r border-[#252525]" : ""}
                ${i % 2 === 0 ? "border-r md:border-r-0 border-[#252525]" : ""}
                ${i < 2 ? "border-b md:border-b-0 border-[#252525]" : ""}
                hover:bg-white/[0.02] transition-colors duration-300`}
            >
              <span className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm uppercase tracking-wider text-[#7C3AED] font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Team Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
              The passionate individuals working behind the scenes to make Config
              an unforgettable experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden border border-[#252525] aspect-[3/4] cursor-pointer"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#7C3AED] text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
