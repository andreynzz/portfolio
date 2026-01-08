import { useState } from "react"; 
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
    
    // Estado para controlar se o mouse está em cima
    const [isHovered, setIsHovered] = useState(false);

    const params = useParams();
    const locale = params.locale;

    const toggleLanguage = () => {
        const nextLocale = locale === 'pt' ? 'en' : 'pt';
        router.replace({pathname}, {locale: nextLocale});
    };

    return (
        <header>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full mx-auto mb-8 flex gap-3 justify-between items-center relative z-50"
            >
                <div></div>

                {/* Container da Nav interativa */}
                <motion.nav 
                    className="flex items-center justify-center text-white/60 font-medium text-sm bg-white/5 backdrop-blur-md rounded-full px-6 py-2 border border-white/10 cursor-pointer overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    // Eventos para Mouse e Clique
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setIsHovered(!isHovered)} // Para funcionar no mobile ao clicar
                    layout // Anima a mudança de largura automaticamente
                >
                    <AnimatePresence mode="wait">
                        {!isHovered ? (
                            // ESTADO INICIAL
                            <motion.span
                                key="label"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="uppercase tracking-widest text-xs"
                            >
                                Menu
                            </motion.span>
                        ) : (
                            // ESTADO HOVER
                            <motion.ul 
                                key="list"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex gap-6 whitespace-nowrap"
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

                <button 
                    onClick={toggleLanguage} 
                    className="group relative flex items-center justify-center cursor-pointer"
                    title={`Mudar para ${locale === 'pt' ? 'Inglês' : 'Português'}`}
                >
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Language className="w-6 h-6 text-white/60 hover:text-[#FFC107] transition-colors cursor-pointer relative z-10" />
                    <span className="absolute -bottom-4 text-[10px] text-white/40 font-mono uppercase tracking-widest">
                        {locale === 'pt' ? 'PT' : 'EN'}
                    </span>
                </button>
            </motion.div>
        </header>
    )
}