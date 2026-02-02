"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-neutral-950">
      {/* Camada de Textura (Noise Real) */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] contrast-150 brightness-100"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      ></div>
      <motion.div 
        animate={{ 
          x: [0, 80, -40, 0], 
          y: [0, -60, 40, 0], 
          scale: [1, 1.1, 0.9, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[5%] w-125 h-125 bg-amber-600/20 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -60, 30, 0], 
          y: [0, 100, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-150 h-150 bg-yellow-900/15 rounded-full blur-[150px]" 
      />

      {/* Overlay de Vinheta para foco central */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
    </div>
  );
}