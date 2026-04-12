"use client";

import { motion } from "framer-motion";
import { ProjectGrid } from "./project-grid";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-28 md:py-32">
      <div className="container mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-card/70 px-6 py-14 shadow-[0_24px_90px_-50px_rgba(0,0,0,0.45)] md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Projetos recentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Alguns trabalhos que desenvolvi com foco em simplicidade, clareza e
          boa experiência de uso.
        </motion.p>

        <div className="mt-16">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
