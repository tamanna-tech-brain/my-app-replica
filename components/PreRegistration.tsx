"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PreRegistration() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-8 md:p-10 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-2 text-white">Pre-Registration</h3>
          <p className="text-sm text-[var(--muted)] mb-6">Secure your spot for Config 2026. Fill out your prerequisites below.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--muted)]">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl" placeholder="Jane Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--muted)]">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--muted)]">Country</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl" placeholder="United States" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[var(--muted)]">LinkedIn Profile</label>
                <input type="url" className="w-full px-4 py-3 rounded-xl" placeholder="https://linkedin.com/in/janedoe" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-[var(--muted)]">Attendance Type</label>
              <select className="w-full px-4 py-3 rounded-xl appearance-none bg-zinc-800 text-white">
                <option value="in-person">In-Person (San Francisco)</option>
                <option value="online">Online / Virtual</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full mt-6 py-4 rounded-xl bg-brand-violet hover:bg-[#7c3aed] text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-[1.02] group overflow-hidden relative"
            >
              <span className="relative z-10">Reserve Ticket</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
