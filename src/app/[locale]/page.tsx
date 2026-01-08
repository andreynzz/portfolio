"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight, Whatsapp, Download } from "iconoir-react";
import Header from "@/src/components/header";
import { SocialBtn } from "@/src/components/social-btn";
import { useParams } from "next/navigation";
import ApproachSection from "@/src/components/approach-section";

export default function Home() {
  const tHero = useTranslations('HomePage.HeroPage');
  const params = useParams();
  const locale = params.locale;

  // Variáveis de animação para entrada suave (padrão do seu projeto)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative min-h-screen text-[#F5F5F5] p-4 md:p-6 font-mono overflow-x-hidden">
        <Header />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-center mt-20"
        >
          {/* Saudação pequena estilo 'code' */}
          <motion.div variants={itemVariants} className="mb-4">
             <span className="px-3 py-1 rounded-full border border-[#FFC107]/30 text-[#FFC107] text-xs font-mono bg-[#FFC107]/5">
               👋 {tHero('greeting')}
             </span>
          </motion.div>

          {/* Nome e Título Principal */}
          <motion.h1 
            variants={itemVariants}
            className="flex flex-col justify-center items-center text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            {tHero('name')}
            <span className="font-playfair-display italic text-[#FFC107]">
              {tHero('role')}
            </span>
          </motion.h1>

          {/* Pequena Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 text-balance font-sans"
          >
            {tHero('description')}
          </motion.p>

          {/* Botões de Ação */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <Link 
              href={`/${locale}/projects`} 
              className="group flex items-center gap-2 bg-[#FFC107] text-black px-6 py-3 rounded-full font-medium hover:bg-[#FFC107]/90 transition-all"
            >
              {tHero('viewProjects')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href={`/${locale}/contact-form`} 
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              {tHero('contactMe')}
            </Link>
            <a 
              href="/Andrey_Pirola_FullStack_Developer.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Andrey_Pirola_CV.pdf" // Nome que será salvo no PC da pessoa
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              {tHero('downloadCV')}
            </a>
          </motion.div>

          {/* Links Sociais (Rodapé do Hero) */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 text-white/40">
            <SocialBtn icon={<Github />} href="https://github.com/drey-dev" label="GitHub Profile" />
            <SocialBtn icon={<Linkedin />} href="https://www.linkedin.com/in/andreydahorapirola/" label="LinkedIn Profile" />
            <SocialBtn icon={<Mail />} href="mailto:andrey.dhorapirola@gmail.com" label="Send Email" />
            <SocialBtn icon={<Whatsapp />} href="https://wa.me/5511947530995" label="WhatsApp Chat" />
          </motion.div>
        </motion.div>

        {/* Seção de Metodologia / Como eu trabalho */}
        <ApproachSection />
    </div>    
  );
}