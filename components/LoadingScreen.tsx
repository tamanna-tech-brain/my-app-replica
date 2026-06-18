"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 12 + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 500);
      }
      setProgress(currentProgress);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070707]"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(124,58,237,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED, #D946EF, #FF6A00)",
              }}
            >
              <span className="text-white text-3xl font-black">C</span>
            </motion.div>

            <div className="w-48 h-[2px] bg-[#252525] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#FF6A00]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            <motion.div
              className="text-[#A1A1AA] text-xs mt-6 font-mono tracking-[0.2em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Loading Config
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
