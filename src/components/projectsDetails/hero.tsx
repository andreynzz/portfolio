import { ProjectItem } from "@/src/types/project.type";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero({ project }: { project: ProjectItem }) {
    const t = useTranslations('Projects');

    return (
        <div className="relative h-125 md:h-150 w-full group overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                    src={project.image || '/404_file_not_found.jpg'}
                    alt={t(`${project.id}.title`)}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 1200px"
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-[#171717] via-[#171717]/80 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-[#171717]/90 via-transparent to-transparent opacity-80" />

            {/* Conteúdo do Hero */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 pb-20 md:pb-32">
                <div className="max-w-3xl space-y-6">
                    {/* Metadados Superiores */}
                    <div className="flex flex-wrap items-center gap-3 animate-fade-in-up">
                         <span className="px-3 py-1.5 rounded-lg bg-[#FFC107] text-black text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,193,7,0.3)]">
                            {t(`${project.id}.role`)}
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                        <span className="text-zinc-300 text-sm font-medium tracking-wide border border-white/10 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md">
                            {t(`${project.id}.status`)}
                        </span>
                    </div>

                    {/* Título Grande */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-lg">
                        {t(`${project.id}.title`)}
                    </h1>
                </div>
            </div>
        </div>
    );
}