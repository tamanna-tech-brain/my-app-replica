"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="pt-[140px] pb-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="tag-lime mb-6 mx-auto">GET IN TOUCH</div>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-white mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
            Have questions about the event, sponsorship opportunities, or press
            inquiries? We&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#7C3AED]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Venue Location
                  </h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    Moscone Center<br />
                    747 Howard St<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#D946EF]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Email Us
                  </h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    General: info@config.dev<br />
                    Sponsors: partners@config.dev
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#D7FF3F]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Call Us
                  </h3>
                  <p className="text-[#A1A1AA] leading-relaxed">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am-5pm PT
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract Map Box */}
            <div className="w-full h-[300px] rounded-3xl bg-[#0E0E0E] border border-[#252525] relative overflow-hidden group">
              {/* Fake abstract map lines */}
              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237C3AED' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-[#7C3AED] rounded-full shadow-[0_0_20px_#7C3AED] relative">
                  <div className="absolute inset-0 bg-[#7C3AED] rounded-full animate-ping opacity-75" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-[#0E0E0E] border border-[#252525] p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-10 bg-[#0E0E0E]/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" as any, damping: 12, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] mb-6"
                    >
                      <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#A1A1AA]">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#A1A1AA]">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-[#252525] text-white focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#A1A1AA]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-[#252525] text-white focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#A1A1AA]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-[#252525] text-white focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#A1A1AA]">
                    Subject
                  </label>
                  <select
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-[#252525] text-white focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sponsor">Sponsorship</option>
                    <option value="press">Press & Media</option>
                    <option value="support">Ticket Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#A1A1AA]">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-[#252525] text-white focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-purple py-4 rounded-xl font-bold flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
                    Send Message
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSubmitting
                        ? "opacity-0"
                        : "group-hover:translate-x-1 opacity-100"
                    }`}
                  />
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </motion.div>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
