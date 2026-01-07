import { usePathname, useRouter } from "@/src/i18n/routing";
import { motion } from "framer-motion";
import { Language } from "iconoir-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('header');

    // Pegue os parâmetros da URL
    const params = useParams();
    // O "locale" virá daqui (ex: 'pt', 'en')
    const locale = params.locale;

    // Função para alternar o idioma
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
                className="w-full mx-auto mb-8 flex gap-3 justify-between items-center"
            >
                <div></div>
                <motion.nav 
                    className="flex gap-6 text-white/60 font-medium text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/" className="hover:text-[#FFC107] transition-colors">
                                {t('home')}
                            </Link>
                        </li>
                        <li><a href="#projects" className="hover:text-[#FFC107] transition-colors">{t('projects')}</a></li>
                        <li><a href="#experience" className="hover:text-[#FFC107] transition-colors">{t('experience')}</a></li>
                        <li><a href="#stack" className="hover:text-[#FFC107] transition-colors">{t('stack')}</a></li>
                        <li>
                            <Link href={`/${locale}/contact-form`} className="hover:text-[#FFC107] transition-colors">
                                {t('contact')}
                            </Link>
                        </li>
                    </ul>
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