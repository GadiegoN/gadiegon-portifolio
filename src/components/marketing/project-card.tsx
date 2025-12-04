"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition"
    >
      <div className="relative w-full h-56">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mt-2">{project.impact}</p>

        <Link
          className="inline-flex items-center gap-2 mt-4 text-primary hover:underline font-medium"
          href={`/projetos/${project.slug}`}
        >
          Ver mais detalhes
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
