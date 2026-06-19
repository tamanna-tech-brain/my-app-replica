"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { ABOUT_STATS } from "@/lib/site-data";
import { cn } from "@/lib/cn";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * p));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutSummit() {
  return (
    <section id="about-summit" className="section-border bg-[#151515] section-y">
      <Container>
        <div className="mb-10 flex gap-6">
          <Link href="/about" className="text-sm text-[#8a8a8a] hover:text-white">
            About
          </Link>
          <Link href="/agenda" className="text-sm text-[#8a8a8a] hover:text-white">
            Agenda
          </Link>
        </div>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          The Definitive AI Relevant Summit
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "stat-pill",
                stat.tone === "cyan" && "stat-pill-cyan",
                stat.tone === "lime" && "stat-pill-lime",
                stat.tone === "white" && "stat-pill-white"
              )}
            >
              <p className="text-5xl font-extrabold md:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium leading-snug md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
