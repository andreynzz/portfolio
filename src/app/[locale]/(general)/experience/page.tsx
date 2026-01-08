"use client";

import { motion } from 'framer-motion';
import { professionalExperience } from '@/src/data/content';
import { Suitcase, Calendar } from 'iconoir-react';
import { useTranslations } from 'next-intl';

export default function ProfessionalExperience() {
    const t = useTranslations('Experience');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
                <Suitcase className="text-[#FFC107] w-6 h-6" />
                <h2 className="text-3xl text-[#FFC107] font-bold font-playfair-display italic">
                    {t('title')}
                </h2>
            </div>

            <motion.div 
                className="space-y-8 relative border-l-2 border-white/10 ml-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
            >
                {professionalExperience.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="relative pl-8 group"
                    >
                        <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-[#1a1a1a] border-2 border-[#FFC107] group-hover:bg-[#FFC107] transition-colors shadow-[0_0_10px_rgba(255,193,7,0.3)]"></div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <div>
                                {/* Busca o Cargo traduzido usando a chave de tradução */}
                                <h3 className="text-xl font-bold text-white group-hover:text-[#FFC107] transition-colors">
                                    {t(`${exp.translationKey}.role`)}
                                </h3>
                                <span className="text-lg text-white/80 font-medium">
                                    {exp.company}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-2 sm:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                <Calendar className="w-3 h-3 text-[#FFC107]" />
                                <span className="text-xs font-mono text-white/60 whitespace-nowrap">
                                    {t(`${exp.translationKey}.period`)}
                                </span>
                            </div>
                        </div>

                        <ul className="mt-4 space-y-2">
                            {/* Cria um array baseado no número de responsabilidades para iterar */}
                            {Array.from({ length: exp.responsibilityCount }).map((_, i) => (
                                <li key={i} className="flex items-start text-white/70 text-sm leading-relaxed hover:text-white/90 transition-colors">
                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-white/20 rounded-full shrink-0" />
                                    {/* Busca res1, res2, res3... */}
                                    {t(`${exp.translationKey}.res${i + 1}`)}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}