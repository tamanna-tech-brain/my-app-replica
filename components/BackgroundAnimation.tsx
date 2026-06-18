"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SYMBOLS = [
  "{ }", "</> ", "λ", "∫", "∑", "∞", "Δ", "≈", "⌘", "⊕",
  "01", "AI", "ML", "⚡", "◈", "⬡", "✦", "⊗", "∇", "π",
];

function useStableParticles(count: number) {
  const ref = useRef<
    {
      id: number; isGlyph: boolean; symbol: string;
      x: number; y: number; dx: number; dy: number;
      opacity: number; size: number; color: string; speed: number;
    }[]
  >([]);

  if (ref.current.length === 0) {
    ref.current = Array.from({ length: count }, (_, i) => {
      const isGlyph = i % 3 !== 0;
      return {
        id: i,
        isGlyph,
        symbol: SYMBOLS[i % SYMBOLS.length],
        x: (i * 37.3) % 100,
        y: (i * 61.8) % 100,
        dx: (i % 5) - 2,
        dy: (i % 3) - 1,
        opacity: isGlyph ? 0.07 + (i % 5) * 0.018 : 0.25 + (i % 4) * 0.12,
        size: isGlyph ? 0.6 + (i % 4) * 0.22 : 3 + (i % 5) * 2.5,
        color: i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#5eead4" : "#818cf8",
        speed: 18 + (i % 7) * 6,
      };
    });
  }
  return ref.current;
}

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const particles = useStableParticles(45);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* ── Deep base gradient ── */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #0d0d1a 0%, #09090b 60%, #0a0512 100%)",
      }} />

      {/* ── Animated aurora blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.35, 1], x: [0, 60, 0], y: [0, -40, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{ width: 800, height: 800, top: "-10%", left: "-10%", background: "radial-gradient(circle, #5eead4 0%, transparent 70%)", filter: "blur(90px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -60, 0], y: [0, 50, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute rounded-full"
        style={{ width: 700, height: 700, top: "20%", right: "-8%", background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], x: [0, 40, -30, 0], y: [0, -30, 40, 0], opacity: [0.12, 0.20, 0.12] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute rounded-full"
        style={{ width: 650, height: 650, bottom: "5%", left: "30%", background: "radial-gradient(circle, #eab308 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute rounded-full"
        style={{ width: 500, height: 500, top: "55%", left: "5%", background: "radial-gradient(circle, #2dd4bf 0%, transparent 70%)", filter: "blur(90px)" }}
      />

      {/* ── Floating particles / glyphs ── */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
            animate={{
              x: [`${p.x}vw`, `${(p.x + p.dx * 8 + 100) % 100}vw`, `${(p.x - p.dx * 5 + 100) % 100}vw`, `${p.x}vw`],
              y: [`${p.y}vh`, `${(p.y + p.dy * 10 + 100) % 100}vh`, `${(p.y - p.dy * 7 + 100) % 100}vh`, `${p.y}vh`],
              opacity: [0, p.opacity, p.opacity * 0.6, p.opacity, 0],
              rotate: p.isGlyph ? [0, p.dx * 60, -p.dy * 40, 0] : [0],
              scale: [0.7, 1, 0.85, 1, 0.7],
            }}
            transition={{ duration: p.speed, repeat: Infinity, ease: "linear", delay: (p.id * 0.4) % 8 }}
            className="absolute select-none"
            style={
              p.isGlyph
                ? {
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: `${p.size}rem`,
                    color: p.color,
                    textShadow: `0 0 20px ${p.color}88, 0 0 40px ${p.color}44`,
                    letterSpacing: "0.05em",
                  }
                : {
                    width: p.size,
                    height: p.size,
                    borderRadius: "50%",
                    background: p.color,
                    boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}55`,
                  }
            }
          >
            {p.isGlyph ? p.symbol : ""}
          </motion.div>
        ))}
      </div>

      {/* ── Subtle grid lines ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(94,234,212,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* ── Top edge glow line ── */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #5eead455, #8b5cf655, #5eead455, transparent)" }} />

      {/* ── Scan line overlay for depth ── */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 8 }}
        className="absolute left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, rgba(94,234,212,0.025) 50%, transparent)", zIndex: 1 }}
      />
    </div>
  );
}
