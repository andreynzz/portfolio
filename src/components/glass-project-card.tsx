import { motion } from "framer-motion";
import { Link } from "@/src/i18n/routing"; // Importante: Link do seu roteamento i18n
import { CardContent } from "./card-content";
import { ProjectProps } from "@/src/types/project.type";

export function GlassProjectCard({ project, index, className = "" }: ProjectProps) {
    return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`h-full ${className}`}
        >
            <Link href={`/projects/${project.id}`} className="block h-full cursor-pointer">
              <CardContent project={project} />
            </Link>
        </motion.div>
    )
}