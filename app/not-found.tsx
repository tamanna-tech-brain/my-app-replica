"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#070707]">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
          style={{ background: "#7C3AED" }}
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
          style={{ background: "#D946EF" }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 mb-4 select-none">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Page Not <span className="gradient-text">Found</span>
          </h2>
          <p className="text-xl text-[#A1A1AA] max-w-md mx-auto mb-10">
            Looks like this page got lost in the void. Let&apos;s get you back to the conference.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 btn-purple px-8 py-4 rounded-xl font-bold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Home
          </Link>
        </motion.div>

        {/* Floating Abstract Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-20 h-20 border-2 border-[#7C3AED]/30 rounded-xl rotate-12 hidden md:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] left-[10%] w-16 h-16 border-2 border-[#D946EF]/30 rounded-full hidden md:block"
        />
      </div>
    </div>
  );
}
