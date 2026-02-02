"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-amber-600/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-yellow-700/10 rounded-full blur-[100px]" 
      />
      <div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
    </div>
  );
}