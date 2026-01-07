import { usePathname, useRouter } from "@/src/i18n/routing";
import { motion } from "framer-motion";
import { Language } from "iconoir-react";
import { useLocale } from "next-intl";

export default function Header() {
    const locale = useLocale(); // Pega o idioma atual ('pt' ou 'en')
    const router = useRouter();
    const pathname = usePathname();

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
                className="w-full mx-auto mb-8 flex gap-3 justify-end"
            >
                <button 
                    onClick={toggleLanguage} 
                    className="group relative flex items-center justify-center cursor-pointer"
                    title={`Mudar para ${locale === 'pt' ? 'Inglês' : 'Português'}`}
                >
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Language className="w-6 h-6 text-white/60 hover:text-[#FFC107] transition-colors cursor-pointer relative z-10" />
                    <span className="absolute -bottom-4 text-[10px] text-white/40 font-mono">
                        {locale.toUpperCase()}
                    </span>
                </button>
            </motion.div>
        </header>
    )
}