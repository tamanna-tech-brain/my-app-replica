"use client";

import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const DAYS = [
  {
    label: "Day 1",
    date: "July 26",
    sessions: [
      {
        id: 0,
        time: "10:00 AM",
        title: "Opening Keynote: The State of AI",
        speaker: "Carlos Mendoza",
        tag: "Keynote",
        tagColor: "#7C3AED",
        duration: "90 min",
      },
      {
        id: 1,
        time: "12:00 PM",
        title: "Designing for the AI-First Era",
        speaker: "Didier Hilhorst",
        tag: "Design",
        tagColor: "#D946EF",
        duration: "60 min",
      },
      {
        id: 2,
        time: "2:30 PM",
        title: "Workshop: Building with LLMs",
        speaker: "Jenna Park",
        tag: "Workshop",
        tagColor: "#D7FF3F",
        duration: "120 min",
      },
    ],
  },
  {
    label: "Day 2",
    date: "July 27",
    sessions: [
      {
        id: 3,
        time: "9:30 AM",
        title: "From Data to Decisions: AI in Action",
        speaker: "Doug Gulgowski",
        tag: "Talk",
        tagColor: "#FF6A00",
        duration: "60 min",
      },
      {
        id: 4,
        time: "11:30 AM",
        title: "Scaling AI Infrastructure",
        speaker: "Samantha Lee",
        tag: "Engineering",
        tagColor: "#7C3AED",
        duration: "90 min",
      },
      {
        id: 5,
        time: "3:00 PM",
        title: "Closing Panel: The Next Decade",
        speaker: "All Speakers",
        tag: "Panel",
        tagColor: "#D946EF",
        duration: "60 min",
      },
    ],
  },
];

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="agenda" className="relative z-10 section-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Visual Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[40%] shrink-0"
          >
            <div className="tag-lime mb-6">SCHEDULE</div>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white mb-6 leading-tight">
              Build, Learn{" "}
              <span className="gradient-text">&amp; Connect</span>
            </h2>
            <p className="text-lg text-[#A1A1AA] leading-relaxed mb-10">
              Two days packed with keynotes, panels, workshops, and networking
              opportunities designed for makers.
            </p>

            {/* Visual block / Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#252525] hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop"
                alt="Conference"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-transparent" />
              {/* Floating decoration */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl bg-[#0E0E0E]/80 backdrop-blur-md border border-[#252525]"
              >
                <p className="text-sm font-bold text-white">120+ Sessions</p>
                <p className="text-xs text-[#A1A1AA]">Across 2 Days</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Agenda Cards */}
          <div className="w-full lg:w-[60%]">
            {/* Day Toggle */}
            <div
              className="flex gap-0 border border-[#252525] rounded-xl overflow-hidden mb-8"
              id="agenda-day-toggle"
            >
              {DAYS.map((day, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`flex-1 px-6 py-4 text-sm font-bold transition-all duration-300 ${
                    activeDay === i
                      ? "bg-white text-black"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  } ${i === 0 ? "border-r border-[#252525]" : ""}`}
                >
                  {day.label} — {day.date}
                </button>
              ))}
            </div>

            {/* Sessions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {DAYS[activeDay].sessions.map((session, i) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group border border-[#2A2A2A] rounded-2xl p-5 md:p-6 transition-all duration-400 hover:border-[#7C3AED]/40 hover:bg-white/[0.02] cursor-default"
                    id={`agenda-session-${session.id}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Time */}
                      <div className="flex items-center gap-2 md:w-[130px] shrink-0">
                        <Clock className="w-4 h-4 text-[#555]" />
                        <span className="text-sm font-mono text-[#A1A1AA]">
                          {session.time}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {session.title}
                        </h3>
                        <p className="text-sm text-[#A1A1AA]">
                          {session.speaker} · {session.duration}
                        </p>
                      </div>

                      {/* Tag */}
                      <div
                        className="self-start md:self-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0"
                        style={{
                          color: session.tagColor,
                          background: `${session.tagColor}12`,
                          border: `1px solid ${session.tagColor}30`,
                        }}
                      >
                        {session.tag}
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="hidden md:block w-5 h-5 text-[#333] group-hover:text-[#A1A1AA] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
