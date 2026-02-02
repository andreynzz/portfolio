"use client";

import React from "react";
import { useTranslations } from 'next-intl';
import { StickyCard } from "../components/sticky-card";

export default function MainLayout({children}: {children: React.ReactNode}) {
    const tFooter = useTranslations('footer');
    return (
        <main className="relative min-h-screen text-[#F5F5F5] p-4 md:p-6 font-mono selection:bg-[#FFC107] selection:text-black overflow-x-hidden">

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                <StickyCard />

                <div className="lg:col-span-8 flex flex-col gap-4 pb-10">

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