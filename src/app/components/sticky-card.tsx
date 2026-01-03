import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail } from "iconoir-react";
import { SocialBtn } from "./social-btn";
import Image from "next/image";
import { EducationTimeline } from "@/src/data/content";

export function StickyCard() {
    const experienceYears = new Date().getFullYear() - 2023;
    return (
        <aside className="lg:col-span-4 lg:top-6 self-start flex flex-col gap-4">
            {/* Card Profile */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between grow hover:border-[#FFC107]/30 transition-colors shadow-2xl shadow-black/20"
            >
                <div>
                    <Image
                        src="/profile.jpg"
                        alt="Andrey da Hora"
                        width={400}
                        height={400}
                        quality={100}
                        className="w-full rounded-2xl mb-6 object-cover border border-white/20"
                    />
                    <h1 className="text-5xl lg:text-6xl font-normal leading-tight mb-4 italic font-playfair-display text-[#FFC107]">
                        Andrey <br/> da Hora.
                    </h1>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                        Desenvolvedor Fullstack e Designer apaixonado por criar experiências digitais imersivas e performáticas.
                    </p>
                </div>

                <div className="mt-12 space-y-6">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="flex items-center gap-3 text-xs text-[#FFC107] font-medium border border-[#FFC107]/30 p-3 rounded-xl bg-[#FFC107]/10 w-fit">
                            <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC107] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC107]"></span>
                            </span>
                            DISPONÍVEL
                        </div>
                    </div>
                <div className="flex justify-between mx-10 gap-4">
                    <SocialBtn icon={<Github />} href="https://github.com/drey-dev" label="GitHub Profile" />
                    <SocialBtn icon={<Linkedin />} href="https://www.linkedin.com/in/andreydahorapirola/" label="LinkedIn Profile" />
                    <SocialBtn icon={<Mail />} href="mailto:andrey.dhorapirola@gmail.com" label="Send Email" />
                </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex justify-between items-center hover:bg-white/10 transition-colors"
            >
                <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Localização</p>
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-white/60"/>
                        <span className="text-lg">Brasil</span>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Experiência</p>
                    <span className="text-xl italic font-playfair-display">+{experienceYears} Anos</span>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors"
            >
                <h3 className="text-2xl mb-6 italic font-playfair-display text-[#FFC107]">Jornada Educacional</h3>
                
                <div className="space-y-0 border-l-2 border-white/10 ml-2">
                    {EducationTimeline.slice().map((edu, index) => (
                        <div key={index} className="relative pl-8 pb-8 last:pb-0">
                            {index > 0 ? (
                                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-gray-500"></div>
                            ) : (
                                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-[#FFC107] shadow-[0_0_10px_rgba(255,193,7,0.5)]"></div>
                            )}
                            <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
                            <p className="text-white/60 text-sm mb-1">{edu.institution} • {edu.period}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </aside>
    );
}