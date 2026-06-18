"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    caption: "Opening Keynote",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop",
    caption: "Panel Discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494112-071dcb849766?w=800&auto=format&fit=crop",
    caption: "Workshops & Demos",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
    caption: "Networking Lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&auto=format&fit=crop",
    caption: "Conference Hall",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop",
    caption: "Lightning Talks",
  },
];

export default function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY[0] | null>(null);

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            An Inspiring Event for <span className="text-brand-blue">Makers</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Glimpses from our past summits where ideas transform into reality.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY.map((item, i) => (
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as any, stiffness: 200, damping: 18 } }
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              key={i} 
              onClick={() => setSelectedImage(item)}
              className="relative group rounded-2xl overflow-hidden card border border-white/5 hover:border-brand-blue/30 cursor-pointer transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] bg-zinc-800">
                <Image 
                  src={item.src} 
                  alt={item.caption} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold text-lg">{item.caption}</p>
                <p className="text-white/50 text-sm font-mono mt-1">Config 2025</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring" as any, duration: 0.5, bounce: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage.src} alt={selectedImage.caption} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white text-2xl font-bold">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
