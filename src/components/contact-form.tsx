'use client';

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const t = useTranslations('contactPage.form');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    // Variantes para animação de entrada dos itens
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 100 }
        }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-2xl mx-auto p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/40 relative overflow-hidden"
        >
            {/* Efeito de brilho sutil no background que segue o foco (opcional/decorativo) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FFC107] to-transparent opacity-20" />

            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-white to-white/70">
                {t('title')}
            </motion.h2>

            <form action="https://formspree.io/f/your-form-id" method="POST" className="flex flex-col gap-6">
                
                {/* Campo Nome */}
                <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focusedField === 'name' ? 'text-[#FFC107]' : 'text-white/60'}`}>
                        {t('name')}
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        required 
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-[#FFC107]/50 transition-all duration-300"
                    />
                </motion.div>

                {/* Campo Email */}
                <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focusedField === 'email' ? 'text-[#FFC107]' : 'text-white/60'}`}>
                        {t('email')}
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-[#FFC107]/50 transition-all duration-300"
                    />
                </motion.div>

                {/* Campo Assunto */}
                <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focusedField === 'subject' ? 'text-[#FFC107]' : 'text-white/60'}`}>
                        {t('subject')}
                    </label>
                    <input 
                        type="text" 
                        name="subject" 
                        required 
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-[#FFC107]/50 transition-all duration-300"
                    />
                </motion.div>

                {/* Campo Mensagem */}
                <motion.div variants={itemVariants} className="relative">
                    <label className={`block text-sm font-medium transition-colors duration-300 ${focusedField === 'message' ? 'text-[#FFC107]' : 'text-white/60'}`}>
                        {t('message')}
                    </label>
                    <textarea
                        name="message"
                        rows={5}
                        required
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:bg-white/10 focus:border-[#FFC107]/50 transition-all duration-300 resize-none"
                    ></textarea>
                </motion.div>

                {/* Botão de Envio */}
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(255, 193, 7, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-4 px-8 py-4 bg-linear-to-r from-[#FFC107] to-[#FFD54F] text-black font-bold rounded-xl hover:from-[#FFB300] hover:to-[#FFCA28] transition-all duration-300 shadow-lg"
                >
                    {t('send')}
                </motion.button>
            </form>
        </motion.div>
    );
}