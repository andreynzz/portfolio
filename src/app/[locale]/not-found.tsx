"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home } from "iconoir-react";
import { usePathname } from "next/navigation";
import Header from "@/src/components/header";

export default function NotFound() {
    const t = useTranslations('NotFoundPage');
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'pt';

    return (
        <div className="relative min-h-screen text-[#F5F5F5] p-4 md:p-6 font-mono overflow-x-hidden">
            <Header />    
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    {/* Efeito de Glow atrás do número */}
                    <div className="absolute inset-0 bg-[#FFC107] blur-[100px] opacity-20 rounded-full" />
                    
                    {/* Ícone Animado */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="flex justify-center mb-6"
                    >
                        <Image 
                            src="/404.gif" 
                            width={100} 
                            height={100} 
                            alt="Anime meme image" 
                            unoptimized
                            className="w-24 h-24 rounded-md text-[#FFC107]"
                        />
                    </motion.div>

                    {/* Texto 404 Gigante */}
                    <h1 className="text-8xl font-bold text-white mb-2 font-mono tracking-tighter">
                        4<span className="text-[#FFC107]">0</span>4
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-md mx-auto"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">
                        {t('title')}
                    </h2>
                    
                    <p className="text-white/60 mb-8 leading-relaxed">
                        {t('description')}
                    </p>

                    <Link 
                        href={`/${locale}`}
                        className="inline-flex items-center gap-2 bg-[#FFC107] text-black px-8 py-3 rounded-full font-bold hover:bg-[#FFC107]/90 transition-all hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        {t('button')}
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}