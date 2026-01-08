"use client";

import React from "react";
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from "../components/header";
import { StickyCard } from "../components/sticky-card";
import { MarqueeText } from "../components/marquee-text";

export default function MainLayout({children}: {children: React.ReactNode}) {
    const tFooter = useTranslations('footer');
    return (
        <main className="relative min-h-screen bg-[#121212] text-[#F5F5F5] p-4 md:p-6 font-mono selection:bg-[#FFC107] selection:text-black overflow-x-hidden">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div 
                animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-amber-600/10 rounded-full blur-[120px]" 
                />
                <motion.div 
                animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-yellow-700/10 rounded-full blur-[100px]" 
                />
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            </div>

            <Header />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                <StickyCard />

                <div className="lg:col-span-8 flex flex-col gap-4 pb-10">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 overflow-hidden flex items-center h-24 relative select-none"
                >
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#121212] to-transparent z-10 pointer-events-none"/>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#121212] to-transparent z-10 pointer-events-none"/>
                    
                    <MarqueeText text="CREATIVE DEV • UI/UX DESIGN • NEXT.JS • MOTION • NEST.JS •" />
                </motion.div>

                {children}
                </div>
            </div>
            <footer className="py-8 text-center text-white/20 text-xs flex flex-col items-center gap-2">
                <p>© {new Date().getFullYear()} Portfolio. Andrey da Hora Pirola.</p>
                <p>{tFooter('text')}</p>
            </footer>
        </main>
    )
}