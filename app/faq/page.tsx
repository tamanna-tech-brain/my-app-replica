"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "When and where is Config Summit 2026?",
    answer: "Config Summit 2026 will be held on July 26-27, 2026 at the Moscone Center in San Francisco, CA. Virtual attendance is also available for all sessions.",
  },
  {
    question: "Are tickets refundable?",
    answer: "Yes, tickets are fully refundable up to 30 days before the event. After that, you can transfer your ticket to another person or roll it over to next year's event.",
  },
  {
    question: "Will the sessions be recorded?",
    answer: "All keynotes and main stage sessions will be recorded and made available to all attendees within 48 hours. VIP ticket holders get lifetime access to all recordings, including workshops.",
  },
  {
    question: "Is there a code of conduct?",
    answer: "Absolutely. We are committed to providing a safe and welcoming environment for everyone. All attendees, speakers, and sponsors must adhere to our strict Code of Conduct.",
  },
  {
    question: "Are there opportunities to speak?",
    answer: "The Call for Speakers for 2026 is currently closed. However, you can sign up for our newsletter to be notified when the 2027 CFP opens.",
  },
  {
    question: "Do you offer student or startup discounts?",
    answer: "Yes, we have a limited number of discounted tickets available for full-time students and early-stage bootstrapped startups. Please email info@config.dev with your details to apply.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-[140px] pb-24 min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="tag-lime mb-6 mx-auto">SUPPORT</div>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-white mb-6">
            Common <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-[#A1A1AA]">
            Everything you need to know about the event. Can&apos;t find what
            you&apos;re looking for? Reach out to our support team.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`border rounded-2xl bg-[#0E0E0E] transition-colors duration-300 ${
                openIndex === i ? "border-[#7C3AED]/50" : "border-[#252525]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left gap-6 group"
              >
                <span
                  className={`text-lg font-bold transition-colors ${
                    openIndex === i
                      ? "text-white"
                      : "text-[#A1A1AA] group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ type: "spring" as any, stiffness: 200, damping: 20 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === i
                      ? "bg-[#7C3AED] text-white shadow-[0_0_15px_#7C3AED]"
                      : "bg-white/5 text-[#A1A1AA] group-hover:bg-white/10 group-hover:text-white"
                  }`}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-[#A1A1AA] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
