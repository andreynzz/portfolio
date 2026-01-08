"use client";

import { EducationTimeline } from "@/src/data/content";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function EducationPage() {
    const tEdu = useTranslations('Education');
    const tCrd = useTranslations('StickyCard');

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors"
            >
                <h3 className="text-2xl mb-6 italic font-playfair-display text-[#FFC107]">{tCrd('journey')}</h3>
                
                <div className="space-y-0 border-l-2 border-white/10 ml-2">
                    {EducationTimeline.slice().map((edu, index) => (
                        <div key={index} className="relative pl-8 pb-8 last:pb-0">
                            {index > 0 ? (
                                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-gray-500"></div>
                            ) : (
                                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-[#FFC107] shadow-[0_0_10px_rgba(255,193,7,0.5)]"></div>
                            )}
                            {/* Título do curso traduzido */}
                            <h4 className="text-white font-bold text-lg">{tEdu(`${edu.translationKey}.degree`)}</h4>
                            <p className="text-white/60 text-sm mb-1">{edu.institution} • {edu.period}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}