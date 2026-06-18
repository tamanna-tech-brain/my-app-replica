"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, MapPin } from "lucide-react";

const AGENDA_DAYS = [
  {
    id: "day-1",
    label: "Day 1",
    date: "July 26, 2026",
    sessions: [
      {
        id: "s1",
        time: "09:00 AM - 10:00 AM",
        title: "Registration & Breakfast",
        speaker: "Config Team",
        location: "Main Lobby",
        description: "Pick up your badge, grab a coffee, and meet your fellow attendees before the keynote.",
        type: "Networking",
      },
      {
        id: "s2",
        time: "10:00 AM - 11:30 AM",
        title: "Opening Keynote: The State of AI",
        speaker: "Carlos Mendoza",
        location: "Main Stage",
        description: "An overview of the current AI landscape and where the industry is heading in the next 5 years.",
        type: "Keynote",
      },
      {
        id: "s3",
        time: "12:00 PM - 01:00 PM",
        title: "Designing for the AI-First Era",
        speaker: "Didier Hilhorst",
        location: "Stage B",
        description: "How product designers need to adapt their processes for AI-driven interfaces and autonomous systems.",
        type: "Design",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "July 27, 2026",
    sessions: [
      {
        id: "s4",
        time: "09:30 AM - 10:30 AM",
        title: "From Data to Decisions",
        speaker: "Jenna Park",
        location: "Main Stage",
        description: "Deep dive into data infrastructure required to build real-time AI applications at scale.",
        type: "Engineering",
      },
      {
        id: "s5",
        time: "11:00 AM - 12:30 PM",
        title: "Ethical AI Design Panel",
        speaker: "Doug Gulgowski & Panel",
        location: "Stage C",
        description: "A panel discussion on establishing standards for AI safety, bias reduction, and fairness.",
        type: "Panel",
      },
    ],
  },
];

export default function AgendaPage() {
  const [activeDay, setActiveDay] = useState("day-1");
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const toggleSession = (id: string) => {
    setExpandedSession(expandedSession === id ? null : id);
  };

  const activeDayData = AGENDA_DAYS.find((d) => d.id === activeDay);

  return (
    <div className="pt-[140px] pb-24 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag-lime mb-6 mx-auto">SCHEDULE</div>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-white mb-6">
            Event <span className="gradient-text">Agenda</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
            Plan your conference experience. Two days packed with keynotes,
            panels, workshops, and networking.
          </p>
        </motion.div>

        {/* Day Toggle */}
        <div className="flex gap-0 border border-[#252525] rounded-2xl overflow-hidden mb-12 max-w-md mx-auto">
          {AGENDA_DAYS.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`flex-1 py-4 px-6 text-center transition-all duration-300 font-bold ${
                activeDay === day.id
                  ? "bg-white text-black"
                  : "bg-[#0E0E0E] text-[#A1A1AA] hover:bg-white/5 hover:text-white"
              } ${day.id === "day-1" ? "border-r border-[#252525]" : ""}`}
            >
              {day.label}
              <span className="block text-xs font-normal opacity-70 mt-1">
                {day.date}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative pl-4 md:pl-0">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[20px] md:left-[30%] top-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#D946EF] to-transparent"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {activeDayData?.sessions.map((session, i) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[16px] md:left-[calc(30%-4px)] top-[28px] w-2 h-2 rounded-full bg-[#D7FF3F] shadow-[0_0_10px_#D7FF3F] z-10" />

                  {/* Left: Time */}
                  <div className="md:w-[30%] shrink-0 pl-12 md:pl-0 md:pr-12 md:text-right pt-5">
                    <span className="text-[#A1A1AA] font-mono text-sm tracking-wider">
                      {session.time}
                    </span>
                  </div>

                  {/* Right: Card */}
                  <div className="w-full md:w-[70%] pl-10 md:pl-0">
                    <div
                      className={`border border-[#252525] rounded-2xl bg-[#0E0E0E] transition-all duration-300 overflow-hidden cursor-pointer ${
                        expandedSession === session.id
                          ? "border-[#7C3AED]/50 shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                          : "hover:border-[#333] hover:bg-white/[0.02]"
                      }`}
                      onClick={() => toggleSession(session.id)}
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="inline-block px-2.5 py-1 rounded bg-white/5 text-[#D946EF] text-xs font-bold uppercase tracking-wider mb-3">
                              {session.type}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">
                              {session.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-[#A1A1AA]">
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" /> {session.speaker}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" /> {session.location}
                              </span>
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              rotate: expandedSession === session.id ? 180 : 0,
                            }}
                            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#A1A1AA]"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedSession === session.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-[#252525] mt-2">
                              <p className="text-[#A1A1AA] leading-relaxed">
                                {session.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
