"use client";

import { SOFT_SKILLS_KEYS, TECH_SKILLS } from "@/src/data/content";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Stack() {
    const tSoftSkills = useTranslations('SoftSkills');
    return (
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#FFC107]/30 transition-colors"
            >
                <h3 className="text-2xl mb-6 italic font-playfair-display text-[#FFC107]">Stack</h3>
                
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
        </>
    )
}