import { motion, Variants } from "framer-motion";
import React from "react";

// Tipagem mais limpa
interface ServiceGlassCardProps {
  title: string;
  icon: React.ReactNode;
  index: number;
}

// Variantes de animação (Separação de lógica e view)
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + (i * 0.1),
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -8, // Levanta levemente o card
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.4)",
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
    }
  }
};

export function ServiceGlassCard({ title, icon, index }: ServiceGlassCardProps) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="
                group relative
                flex flex-col items-center justify-center text-center gap-4 p-6
                aspect-square rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-lg shadow-black/5
                cursor-pointer
                will-change-transform
            "
        >
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

            <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">
                {icon}
            </div>
            
            <h4 className="text-lg font-playfair-display text-white group-hover:text-white transition-colors">
                {title}
            </h4>
        </motion.div>
    );
}