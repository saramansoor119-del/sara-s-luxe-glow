import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-hero"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-primary shadow-glow animate-glow-pulse flex items-center justify-center">
              <span className="font-display text-3xl text-primary-foreground">S</span>
            </div>
            <p className="font-display text-xl text-foreground/80">Sara's BeautyMart</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
