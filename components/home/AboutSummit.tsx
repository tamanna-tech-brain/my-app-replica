"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { ABOUT_STATS } from "@/lib/site-data";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSummit() {
  return (
    <section id="about-summit" className="section-border section-y">
      <Container>
        <div className="mb-10 flex flex-wrap items-center gap-5">
          <Link href="/about" className="text-sm font-medium text-[#8a8a8a] transition-colors hover:text-[#d9ff3f]">
            About
          </Link>
          <Link href="/agenda" className="text-sm font-medium text-[#8a8a8a] transition-colors hover:text-[#d9ff3f]">
            Agenda
          </Link>
        </div>

        <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-5xl lg:text-6xl">
          The Definitive AI Relevant Summit
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-extrabold tracking-tight text-[#f5f5f5] md:text-6xl lg:text-7xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#8a8a8a] md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
