import { ProjectItem } from "@/src/types/project.type";
import { ArrowUpRight, Github } from "iconoir-react";
import { useTranslations } from "next-intl";

export default function Description({ project }: { project: ProjectItem }) {
    const tDetails = useTranslations('ProjectDetails');
    const t = useTranslations('Projects');
    
    return (
        <div className="bg-[#171717] border border-white/5 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
            {/* Detalhe Decorativo de Fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <section className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#FFC107] rounded-full block" />
                    {tDetails('about')}
                </h2>
                
                <p className="text-zinc-300 leading-8 text-lg font-light tracking-wide whitespace-pre-line">
                    {t(`${project.id}.description`)}
                </p>
            </section>

            <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent my-10" />

            {/* Botões de Ação Modernizados */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                {project.url && project.url !== "#" && (
                    <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-1 inline-flex justify-center items-center gap-3 bg-[#FFC107] text-black px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-[#FFD54F] transition-all shadow-[0_0_20px_rgba(255,193,7,0.15)] hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:-translate-y-1"
                    >
                        {tDetails('visit')}
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </a>
                )}
                
                {project.githubUrl && project.githubUrl !== "#" && (
                    <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-1 inline-flex justify-center items-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
                    >
                        <Github className="w-5 h-5" />
                        <span>{tDetails('view_code')}</span>
                    </a>
                )}
            </div>
        </div>
    )
}