"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MY_APPROACH } from "../data/content";
import { UserScan, Code, Flash } from "iconoir-react"; // Ícones adequados

export default function ApproachSection() {
  const t = useTranslations('Approach');

  // Mapa de ícones
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user': return <UserScan className="w-8 h-8 text-[#FFC107]" />;
      case 'code': return <Code className="w-8 h-8 text-[#FFC107]" />;
      case 'fast': return <Flash className="w-8 h-8 text-[#FFC107]" />;
      default: return <Code className="w-8 h-8 text-[#FFC107]" />;
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MY_APPROACH.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className="mb-6 p-3 bg-[#FFC107]/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                 {getIcon(item.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {t(`${item.translationKey}.title`)}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {t(`${item.translationKey}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}