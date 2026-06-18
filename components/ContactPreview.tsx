"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPreview() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Let&apos;s build the <br />
              <span className="text-brand-blue">future together</span>
            </h2>
            <p className="text-lg text-[var(--muted)]">
              Have questions about the summit, sponsorships, or ticketing? Our dedicated support team is here to help you navigate your journey.
            </p>
            <div className="mt-8 space-y-4 text-zinc-300">
              <p><strong className="text-white">Location:</strong> San Francisco, CA, USA & Online</p>
              <p><strong className="text-white">Support:</strong> <a href="mailto:info@config.info" className="text-brand-blue hover:underline">info@config.info</a></p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[var(--muted)]">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl" placeholder="Jane Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[var(--muted)]">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--muted)]">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl" placeholder="How can we help?" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--muted)]">Short Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl" placeholder="Write your message here..."></textarea>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <button 
                  type="button"
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-1 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${agreed ? "bg-brand-blue border-brand-blue" : "border-zinc-600 bg-transparent"}`}
                >
                  {agreed && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                </button>
                <span className="text-sm text-[var(--muted)]">
                  I accept the privacy policy and consent to receiving communications regarding the summit.
                </span>
              </div>
              <button 
                type="submit"
                className="w-full mt-6 py-4 rounded-xl btn-primary text-white font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden relative"
                disabled={!agreed}
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
