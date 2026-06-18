"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TicketPricing() {
  const passes = [
    {
      name: "Online Pass",
      price: "$199",
      description: "Full virtual access to all sessions and networking.",
      features: [
        "Live streaming of all keynotes",
        "Virtual workshops & sessions",
        "Access to digital resources",
        "On-demand recordings for 90 days",
        "Virtual networking lounge",
      ]
    },
    {
      name: "In-Person Pass",
      price: "$899",
      description: "The complete premium summit experience in San Francisco.",
      isPopular: true,
      features: [
        "Everything in Online Pass",
        "Physical conference access",
        "Exclusive in-person networking",
        "VIP workshop entry",
        "Catered meals & after-party access",
        "Swag bag & printed resources",
      ]
    }
  ];

  return (
    <section id="tickets" className="py-24 relative overflow-hidden">
      
      {/* ── Localized Animated Ticket Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(94,234,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 100%)",
          }}
        />
        {/* Glowing Accent Ring */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-violet/20 opacity-30"
          style={{ boxShadow: "inset 0 0 50px rgba(139,92,246,0.1), 0 0 50px rgba(139,92,246,0.1)" }}
        />
        {/* Subtle AI Symbols */}
        {['⌘', 'λ', '⚡', '01'].map((sym, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 20, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i }}
            className="absolute font-mono font-bold text-4xl text-brand-blue"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
          >
            {sym}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Select Your <span className="text-brand-blue">Ticket</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-xl mx-auto">
            Choose the experience that fits your schedule. Space is limited for the in-person event, so book early.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {passes.map((pass, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              key={idx} 
              className={`relative card rounded-[2.5rem] p-8 md:p-12 transition-all duration-300 glass-pop ${
                pass.isPopular ? "border-brand-blue/30 shadow-brand-blue/10" : "bg-[#0f1117]/80 backdrop-blur-sm"
              }`}
            >
              {pass.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg shadow-brand-blue/25">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">{pass.name}</h3>
                <p className="text-[var(--muted)] h-12">{pass.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">{pass.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {pass.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-brand-blue/10 text-brand-blue">
                      <Check className="w-3 h-3 font-bold" />
                    </div>
                    <span className="text-[var(--muted)]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/tickets" 
                className={`w-full py-4 rounded-full flex items-center justify-center gap-2 font-semibold transition-all group overflow-hidden relative ${
                  pass.isPopular 
                    ? "btn-primary" 
                    : "btn-secondary"
                }`}
              >
                <span className="relative z-10">{pass.isPopular ? "Buy Ticket" : "Register Now"}</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
                {pass.isPopular && (
                   <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Architecting the Intelligent Age CTA */}
      <div className="mt-32 max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center border border-white/10 group">
          {/* Live animated background */}
          <div className="absolute inset-0 bg-zinc-900 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity z-0 group-hover:scale-105 transition-transform duration-1000 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 via-brand-purple/20 to-transparent z-0"></div>
          <div className="absolute inset-0 z-0 backdrop-blur-[2px]"></div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet">Intelligent Age</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light mb-10">
              Join industry leaders driving the next wave of technology.
            </p>
            <Link href="/tickets" className="relative group overflow-hidden px-10 py-5 rounded-full btn-primary text-lg font-bold shadow-[0_0_30px_rgba(94,234,212,0.4)] transition-all hover:-translate-y-1">
              <span className="relative z-10">Secure Your Spot</span>
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
