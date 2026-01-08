"use client";

import { GlassProjectCard } from "@/src/components/glass-project-card";
import { PROJECTS } from "@/src/data/content";

export default function Projects() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            {PROJECTS.map((project, i) => (
                <GlassProjectCard 
                    key={project.id} 
                    project={project} 
                    index={i} 
                    className={i === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0 ? "md:col-span-2" : ""}
                />
            ))}
        </section>
    )
}