import { motion } from "framer-motion";
import { Link } from "@/src/i18n/routing"; 
import { CardContent } from "./card-content";
import { ProjectProps } from "@/src/types/project.type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function GlassProjectCard({ project, index, className = "" }: ProjectProps) {
    return (
        <motion.div
          layout // animação de reordenação
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className={`h-full w-full ${className}`}
        >
            <Link href={`/projects/${project.id}`} className="block h-full cursor-pointer">
              <CardContent project={project} />
            </Link>
        </motion.div>
    )
}