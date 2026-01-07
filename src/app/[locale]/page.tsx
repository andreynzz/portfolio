'use client';

import { motion } from 'framer-motion';
import { GlassProjectCard } from '../components/glass-project-card';
import { MarqueeText } from '../components/marquee-text';
import { StickyCard } from '../components/sticky-card';
import { PROJECTS, TECH_SKILLS, SOFT_SKILLS_KEYS } from '@/src/data/content';
import ProfessionalExperience from '../components/professional-experience';
import Header from '../components/header';
import { useTranslations } from 'next-intl';

export default function Home() {
  const tSoftSkills = useTranslations('SoftSkills');
  const tHome = useTranslations('HomePage'); // Para traduzir "Stack Tecnológico" se quiser
  const tFooter = useTranslations('footer');

  return (
    <main className="relative min-h-screen bg-[#121212] text-[#F5F5F5] p-4 md:p-6 font-mono selection:bg-[#FFC107] selection:text-black overflow-x-hidden">
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

      <Header />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        <StickyCard />

        <div className="lg:col-span-8 flex flex-col gap-4 pb-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 overflow-hidden flex items-center h-24 relative select-none"
          >
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#121212] to-transparent z-10 pointer-events-none"/>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#121212] to-transparent z-10 pointer-events-none"/>
            
            <MarqueeText text="CREATIVE DEV • UI/UX DESIGN • NEXT.JS • MOTION • NEST.JS •" />
          </motion.div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            {PROJECTS.map((project, i) => (
              <GlassProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
                className={i === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0 ? "md:col-span-2" : ""}
              />
            ))}
          </section>

          <ProfessionalExperience />

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#FFC107]/30 transition-colors"
          >
            <h3 className="text-2xl mb-6 italic font-playfair-display text-[#FFC107]">{tHome('stack')}</h3>
            
            <div className="flex flex-col gap-6">
                {/* Tech Skills */}
                <div>
                    <h4 className="text-sm text-white/40 uppercase mb-3 tracking-widest">Tech</h4>
                    <div className="flex flex-wrap gap-2">
                        {TECH_SKILLS.map((skill, i) => (
                            <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-xs text-white/70 hover:bg-[#FFC107] hover:text-black hover:border-[#FFC107] transition-all duration-300 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h4 className="text-sm text-white/40 uppercase mb-3 tracking-widest">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                        {SOFT_SKILLS_KEYS.map((key, i) => (
                            <span key={i} className="px-4 py-2 border border-blue-500/30 text-blue-200 rounded-full text-xs hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default">
                                {tSoftSkills(key)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

          </motion.div>
        </div>
      </div>
      <footer className="py-8 text-center text-white/20 text-xs flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} Portfolio. Andrey da Hora Pirola.</p>
        <p>{tFooter('text')}</p>
      </footer>
    </main>
  );
}