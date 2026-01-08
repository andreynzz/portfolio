'use client';

import { motion } from 'framer-motion';
import ContactForm from '../../../components/contact-form';

export default function ContactPage() {
  return (
    <>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="w-full"
        >
          <ContactForm />
        </motion.div>

      </div>
    </>
  );
}