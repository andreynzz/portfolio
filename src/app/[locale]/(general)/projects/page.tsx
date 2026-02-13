"use client";

import { useState } from "react";
import { GlassProjectCard } from "@/src/components/glass-project-card";
import { CATEGORIES, CATEGORY_MAP, PROJECTS } from "@/src/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { FilterList } from "iconoir-react";
import { CategoryId } from "@/src/data/interfaces";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

    const filteredProjects = PROJECTS.filter(project => {
        if (activeCategory === 'all') return true;

        const searchTags = CATEGORY_MAP[activeCategory] || [activeCategory];
        
        return project.tags.some(tag => 
            searchTags.some(target => tag.toUpperCase().includes(target.toUpperCase()))
        );
    });

    return (
        <section className="flex flex-col gap-8 min-h-screen">
            
            {/* Cabeçalho da Secção com Filtros */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-white/60 px-2">
                    <FilterList className="w-5 h-5 text-[#FFC107]" />
                    <span className="text-sm font-mono uppercase tracking-widest">Filtrar por:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                                activeCategory === cat.id
                                    ? "bg-[#FFC107] text-black border-[#FFC107] shadow-[0_0_15px_rgba(255,193,7,0.4)]"
                                    : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grelha de Projetos (Bento Grid) */}
            <motion.div 
                layout 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px] md:auto-rows-[350px]"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => {
                        const isLarge = activeCategory === 'all' && (index === 0 || index === 3);
                        
                        return (
                            <GlassProjectCard 
                                key={project.id} 
                                project={project} 
                                index={index} 
                                className={isLarge ? "md:col-span-2" : "md:col-span-1"}
                            />
                        );
                    })}
                </AnimatePresence>
                
                {filteredProjects.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="col-span-full py-20 text-center text-white/40 italic font-playfair-display text-xl border border-white/5 rounded-3xl bg-white/5"
                    >
                        Nenhum projeto encontrado nesta categoria. Verifique o <a href="https://github.com/andreynzz" className="text-[#FFC107] hover:underline transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>.
                    </motion.div>
                )}
            </motion.div>
        </section>
    )
}