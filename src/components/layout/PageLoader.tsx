"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#030014]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="relative h-14 w-14"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-violet-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-1 rounded-full border-2 border-transparent border-t-cyan-400 border-r-violet-400"
                animate={{ rotate: -360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.p
              className="font-display text-sm font-semibold tracking-[0.35em] text-zinc-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              LOADING
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
