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
      className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-[0_20px_70px_-40px_rgba(0,0,0,0.55)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_90px_-42px_rgba(0,0,0,0.55)]"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      <div className="p-7">
        <h3 className="text-xl font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {project.impact}
        </p>

        <Link
          className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition group-hover:gap-3"
          href={`/projetos/${project.slug}`}
        >
          Ver mais detalhes
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
