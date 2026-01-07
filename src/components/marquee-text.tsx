import { motion } from "framer-motion";

export function MarqueeText({ text }: { text: string }) {
  // Duplicamos o conteúdo várias vezes para garantir que cobre ecrãs grandes
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap w-full mask-linear-gradient">
      <motion.div 
        className="flex text-4xl font-bold text-white/10 uppercase font-playfair-display select-none"
        // Anima até -50% assumindo que o conteúdo visual é duplicado perfeitamente em dois blocos
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {/* Bloco 1 */}
        <div className="flex shrink-0">
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
        </div>
        {/* Bloco 2 (Cópia exata para o loop seamless) */}
        <div className="flex shrink-0">
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
        </div>
      </motion.div>
    </div>
  )
}