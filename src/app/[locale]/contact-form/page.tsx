'use client';

import { motion } from 'framer-motion';
import Header from '../../../components/header';
import ContactForm from '../../../components/contact-form';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-[#F5F5F5] p-4 md:p-6 font-mono selection:bg-[#FFC107] selection:text-black overflow-x-hidden">
      
      {/* --- BACKGROUND (Copiado da sua Home para consistência) --- */}
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
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      {/* Header Fixo */}
      <Header />

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="w-full"
        >
            {/* Aqui entra o seu componente de formulário existente */}
            <ContactForm />
        </motion.div>

      </div>
    </main>
  );
}