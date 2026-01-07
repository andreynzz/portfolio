'use client';

import { motion, easeInOut } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Definição da curva SVG para o efeito "líquido/arte"
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: easeInOut }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: easeInOut, delay: 0.3 }
    }
  };

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.2 }} // Delay controla quanto tempo fica na tela
      className="fixed left-0 w-full h-screen z-9999 flex items-center justify-center bg-[#121212]" // Usando sua cor dark do globals.css
    >
      {/* Conteúdo da Splash Screen */}
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center z-10 text-white">
        {/* Aqui animamos o texto ou logo */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-playfair-display italic"
        >
          Andrey Pirola
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-[#FFC107] font-jetbrains-mono text-sm"
        >
          PORTFOLIO &copy; {new Date().getFullYear()}
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ duration: 2, ease: easeInOut, delay: 0.5 }}
          className="mt-8 h-1 bg-[#FFC107] rounded-full"
        ></motion.div>
      </div>

      {/* A Curva SVG que cria o efeito de "puxar" a tela */}
      <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#121212]">
        <motion.path 
          variants={curve} 
          initial="initial" 
          animate="exit" 
        ></motion.path>
      </svg>
    </motion.div>
  );
}