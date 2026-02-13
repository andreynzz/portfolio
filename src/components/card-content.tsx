import { ProjectProps } from "@/src/types/project.type";
import { ArrowUpRight } from "iconoir-react";
import Image from "next/image"; 
import { useTranslations } from "next-intl";

export function CardContent({ project }: { project: ProjectProps['project'] }) {
  const t = useTranslations('Projects');

  return (
    <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#FFC107]/50 transition-all duration-500 flex flex-col h-full min-h-75">
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-linear-to-br from-amber-900/30 to-yellow-900/30 group-hover:scale-105 transition-transform duration-700" />
         <Image 
            src={project.image || '/404_file_not_found.jpg'} 
            alt={t(`${project.id}.title`)} 
            fill 
            className="object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
         /> 
      </div>
      
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />     

      <div className="p-6 flex flex-col justify-between h-full relative z-20">
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-2">
            {Array.isArray(project.tags) ? (
              project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="px-2 py-1 rounded-md border border-white/10 text-[10px] font-medium uppercase tracking-wider bg-black/40 backdrop-blur-sm text-white/70">
                  {tag}
                </span>
              ))
            ) : null}
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FFC107] group-hover:text-black transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
        </div>
        
        <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {/* Traduções dinâmicas baseadas no ID */}
            <h3 className="text-2xl mb-2 font-playfair-display text-white group-hover:text-[#FFC107] transition-colors">
                {t(`${project.id}.title`)}
            </h3>
            <p className="text-white/60 text-xs leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
                {t(`${project.id}.description`)}
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-white/40">
                {t(`${project.id}.role`)}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-[#FFC107]">
                Status: {t(`${project.id}.status`)}
            </p>
        </div>
      </div>
    </div>
  );
}