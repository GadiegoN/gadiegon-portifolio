"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectGrid } from "./project-grid";

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-foreground"
        >
          Projetos recentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          Alguns trabalhos que desenvolvi com foco em simplicidade, clareza e
          boa experiência de uso.
        </motion.p>

        <div className="mt-16">
          <ProjectGrid />
        </div>

        {/* <div className="text-center mt-10">
          <Link href="/projetos" className="text-primary hover:underline">
            Ver todos os projetos →
          </Link>
        </div> */}
      </div>
    </section>
  );
}
