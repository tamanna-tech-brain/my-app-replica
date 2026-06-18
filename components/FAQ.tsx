"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is Config 2026?",
    a: "Config 2026 is the definitive event for technology leaders, makers, and innovators to discuss and shape the future of artificial intelligence."
  },
  {
    q: "When and where is it happening?",
    a: "The summit takes place on July 26 - 27, 2026, physically in San Francisco, CA, USA, and globally via our online interactive streaming platform."
  },
  {
    q: "Who should attend?",
    a: "Founders, software engineers, AI researchers, product managers, designers, and anyone building products in the AI-first era."
  },
  {
    q: "Are online tickets available?",
    a: "Yes! We offer a dedicated Online Pass that grants you access to all keynotes, virtual workshops, and digital resources."
  },
  {
    q: "Will recordings be available?",
    a: "Absolutely. All sessions are recorded and made available to ticket holders for 90 days after the event concludes."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Most Asked <span className="text-brand-blue">Questions</span>
          </h2>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-bold transition-all bg-brand-violet hover:bg-[#7c3aed] shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Get Support
          </Link>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="space-y-4"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as any, stiffness: 200, damping: 20 } }
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(94, 234, 212, 0.15)" }}
                key={idx} 
                className={`card rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-brand-blue/50 shadow-lg shadow-brand-blue/20" : ""
                }`}
              >
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className={`text-lg font-semibold ${isOpen ? "text-brand-blue" : "text-white"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[var(--muted)] transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-blue" : ""}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 overflow-hidden"
                    >
                      <p className="text-[var(--muted)] pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
