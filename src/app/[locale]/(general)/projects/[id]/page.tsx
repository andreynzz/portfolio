"use client";

import Description from "@/src/components/projectsDetails/description";
import Hero from "@/src/components/projectsDetails/hero";
import SidebarTags from "@/src/components/projectsDetails/sidebarTags";
import { PROJECTS } from "@/src/data/content";
import { Link } from "@/src/i18n/routing";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { ArrowLeft } from "iconoir-react";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailsPage({ params }: Props) {
  const { id } = use(params);
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) notFound();
  const tDetails = useTranslations('ProjectDetails');

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen selection:bg-[#FFC107]/30"
      >
        {/* Container Principal */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Navegação Superior Limpa */}
          <nav className="mb-8 pl-2">
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-3 text-zinc-400 hover:text-[#FFC107] transition-colors duration-300"
            >
              <div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:border-[#FFC107]/20 group-hover:bg-[#FFC107]/10 transition-all">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <span className="text-sm font-medium tracking-wide">{tDetails('back')}</span>
            </Link>
          </nav>

          <article className="bg-[#171717] rounded-4xl border border-white/5 overflow-hidden shadow-2xl shadow-black/50">
            {/* Hero Section */}
            <Hero project={project} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 p-8 md:p-4 relative z-10 -mt-10 md:-mt-20">
              <div className="lg:col-span-8 space-y-8">
                 <Description project={project} />
              </div>
              
              <div className="lg:col-span-4">
                 <SidebarTags project={project} />
              </div>
            </div>
          </article>
        </div>
      </m.div>
    </LazyMotion>
  );
}