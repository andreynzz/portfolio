"use client";

import { useState, useEffect } from "react"; 
import { usePathname, useRouter } from "@/src/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "iconoir-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('header');
    
    // Estado para controlar hover (desktop) ou click (mobile)
    const [isHovered, setIsHovered] = useState(false);

    // Bloqueia o scroll apenas no mobile quando aberto
    useEffect(() => {
        if (isHovered && window.innerWidth < 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isHovered]);

    const params = useParams();
    const locale = params.locale;

    const toggleLanguage = () => {
        const nextLocale = locale === 'pt' ? 'en' : 'pt';
        router.replace({pathname}, {locale: nextLocale});
    };

    return (
        <header>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full mx-auto my-4 flex gap-3 justify-between items-center relative z-50"
            >
                {/* Elemento vazio para balancear o justify-between (se necessário) */}
                <div className="w-10"></div>

                {/* Wrapper para segurar o espaço no layout quando o filho virar 'fixed' no mobile */}
                <div className="relative h-10 flex justify-center items-center">
                    <motion.nav 
                        // Removemos 'transition-all' para evitar conflito com 'layout'
                        className={`flex items-center justify-center text-white/60 font-medium text-sm cursor-pointer overflow-hidden
                            ${isHovered 
                                ? 'fixed inset-0 z-100 bg-[#0a0a0a] flex-col gap-8 md:gap-0 md:relative md:inset-auto md:bg-white/5 md:backdrop-blur-md md:rounded-full md:border md:border-white/10 md:px-6 md:py-2 md:flex-row' 
                                : 'relative bg-white/5 backdrop-blur-md rounded-full border border-white/10 px-6 py-2'
                            }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        // Configuração da animação de layout para ser suave (spring) e sem 'flicker'
                        transition={{ 
                            layout: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        // Eventos
                        onMouseEnter={() => {
                            if (typeof window !== 'undefined' && window.innerWidth >= 768) setIsHovered(true);
                        }}
                        onMouseLeave={() => {
                            if (typeof window !== 'undefined' && window.innerWidth >= 768) setIsHovered(false);
                        }}
                        onClick={() => setIsHovered(!isHovered)}
                        layout // Ativa a mágica de morfismo do Framer Motion
                    >
                        <AnimatePresence mode="wait">
                            {!isHovered ? (
                                // ESTADO FECHADO
                                <motion.span
                                    key="label"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                    className="uppercase tracking-widest text-xs"
                                >
                                    Menu
                                </motion.span>
                            ) : (
                                // ESTADO ABERTO
                                <motion.ul 
                                    key="list"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                                    exit={{ opacity: 0, y: -10, transition: { duration: 0.1 } }}
                                    className="flex flex-col md:flex-row gap-8 md:gap-6 items-center text-center whitespace-nowrap text-xl md:text-sm"
                                >
                                    <li>
                                        <Link href="/" className="hover:text-[#FFC107] transition-colors">
                                            {t('home')}
                                        </Link>
                                    </li>
                                    <li>
                                        <a href={`/${locale}/projects`} className="hover:text-[#FFC107] transition-colors">
                                            {t('projects')}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`/${locale}/experience`} className="hover:text-[#FFC107] transition-colors">
                                            {t('experience')}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`/${locale}/education`} className="hover:text-[#FFC107] transition-colors">
                                            {t('education')}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`/${locale}/stack`} className="hover:text-[#FFC107] transition-colors">
                                            {t('stack')}
                                        </a>
                                    </li>
                                    <li>
                                        <Link href={`/${locale}/contact-form`} className="hover:text-[#FFC107] transition-colors">
                                            {t('contact')}
                                        </Link>
                                    </li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </motion.nav>
                </div>

                <button 
                    onClick={toggleLanguage} 
                    className="group relative flex items-center justify-center cursor-pointer w-10 h-10"
                    title={`Mudar para ${locale === 'pt' ? 'Inglês' : 'Português'}`}
                >
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Language className="w-6 h-6 text-white/60 hover:text-[#FFC107] transition-colors cursor-pointer relative z-10" />
                    <span className="absolute -bottom-4 text-[10px] text-white/40 font-mono uppercase tracking-widest">
                        {locale === 'pt' ? 'EN' : 'PT'}
                    </span>
                </button>
            </motion.div>
        </header>
    )
}