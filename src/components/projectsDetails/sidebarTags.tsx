import { ProjectItem } from "@/src/types/project.type";
import { useTranslations } from "next-intl";
import { Code, Cpu } from "iconoir-react"; // Sugestão de ícones decorativos

export default function SidebarTags({ project }: { project: ProjectItem }) {
    const tDetails = useTranslations('ProjectDetails');
    const tags = project.tags;

    return (
        <aside className="h-full">
            <div className="sticky top-8 space-y-6">
                {/* Tech Stack Card */}
                <div className="bg-[#171717]/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-white/5 rounded-lg text-[#FFC107]">
                            <Code className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm uppercase tracking-[0.15em] text-white/50 font-bold">
                            {tDetails('tech_stack')}
                        </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5">
                        {tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-3.5 py-1.5 bg-zinc-900/50 border border-white/10 rounded-lg text-sm text-zinc-400 hover:text-[#FFC107] hover:border-[#FFC107]/30 transition-all cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bloco Opcional Extra (Placeholder para simular layout completo) */}
                <div className="p-6 rounded-3xl border border-white/5 bg-linear-to-br from-white/5 to-transparent">
                   <div className="flex items-center gap-2 mb-2 text-zinc-500">
                        <Cpu className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase">{tDetails('plataform')}</span>
                   </div>
                   <p className="text-white font-medium">Web / Mobile Responsive</p>
                </div>
            </div>
        </aside>
    )
}