import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail, Whatsapp } from "iconoir-react";
import { SocialBtn } from "./social-btn";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function StickyCard() {
    const experienceYears = new Date().getFullYear() - 2023;
    const tCrd = useTranslations('StickyCard');
    
    return (
        <aside className="hidden lg:col-span-4 lg:top-6 self-start md:flex flex-col gap-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between grow hover:border-[#FFC107]/30 transition-colors shadow-2xl shadow-black/20"
            >
               <div>
                    <Image
                        src="/profile2.jpg"
                        alt="Andrey da Hora"
                        width={400}
                        height={400}
                        className="w-full rounded-2xl mb-6 object-cover border border-white/20"
                    />
                    <h1 className="text-5xl lg:text-6xl font-normal leading-tight mb-4 italic font-playfair-display text-[#FFC107]">
                        Andrey <br/> da Hora.
                    </h1>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                        {tCrd('summary')}
                    </p>
                </div>

                <div className="mt-12 space-y-6">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="flex items-center gap-3 text-xs text-[#FFC107] font-medium border border-[#FFC107]/30 p-3 rounded-xl bg-[#FFC107]/10 w-fit">
                            <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC107] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC107]"></span>
                            </span>
                            {tCrd('opentowork' )}
                        </div>
                    </div>
                    <div className="flex justify-between mx-10 gap-4">
                        <SocialBtn icon={<Github />} href="https://github.com/drey-dev" label="GitHub Profile" />
                        <SocialBtn icon={<Linkedin />} href="https://www.linkedin.com/in/andreydahorapirola/" label="LinkedIn Profile" />
                        <SocialBtn icon={<Mail />} href="mailto:andrey.dhorapirola@gmail.com" label="Send Email" />
                        <SocialBtn icon={<Whatsapp />} href="https://wa.me/5511947530995" label="WhatsApp Chat" />
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
                    <p className="text-xs text-white/60 uppercase tracking-widest mb-1 font-medium">
                        {tCrd('location')}
                    </p>
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-white/60"/>
                        <span className="text-lg">Brasil</span>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{tCrd('experience')}</p>
                    <span className="text-xl italic font-playfair-display">+{experienceYears} {tCrd('years')}</span>
                </div>
            </motion.div>
        </aside>
    );
}