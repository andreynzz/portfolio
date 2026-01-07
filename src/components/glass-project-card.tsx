import { motion } from "framer-motion";
import Link from "next/link";
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
          {project.url ? (
            <Link href={project.url} target="_blank" className="block h-full">
              <CardContent project={project} />
            </Link>
          ) : (
            <CardContent project={project} />
          )}
        </motion.div>
    )
}