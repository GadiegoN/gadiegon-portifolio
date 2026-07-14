"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { articles } from "@/data/blog";
import { BlogGrid } from "./blog-grid";

export function BlogSection() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="artigos" className="py-28 md:py-32">
      <div className="container mx-auto max-w-7xl rounded-4xl border border-border/70 bg-card/70 px-6 py-14 shadow-[0_24px_90px_-50px_rgba(0,0,0,0.45)] md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Últimos artigos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          Conteúdos sobre desenvolvimento, Inteligência Artificial, arquitetura,
          carreira e tecnologia.
        </motion.p>

        <div className="mt-16">
          <BlogGrid articles={featuredArticles} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/blog"
            className="rounded-xl border border-border bg-background px-6 py-3 font-medium transition hover:bg-accent"
          >
            Ver todos os artigos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
