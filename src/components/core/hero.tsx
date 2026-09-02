"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./hero-background";
import { Github, Linkedin, MapPin, ArrowRight, FileDown, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <HeroBackground />

      <div className="container mx-auto flex max-w-5xl items-center px-6 py-20 md:py-28 text-center md:px-8">
        <div className="mx-auto w-full rounded-3xl border border-border/80 bg-background/85 px-6 py-12 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.25)] backdrop-blur-lg md:px-14 md:py-16">
          {/* Avatar Monograma GN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 flex justify-center"
          >
            <div className="relative rounded-2xl border border-primary/25 bg-card/80 p-1.5 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] backdrop-blur-md">
              <Image
                src="/icon.png"
                alt="Gadiego Nogueira (GN)"
                width={56}
                height={56}
                className="rounded-xl"
                priority
              />
            </div>
          </motion.div>

          {/* Tag de Localização e Disponibilidade */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground">
              <MapPin size={13} className="text-primary" />
              {t("location")}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {t("availability")}
            </span>
          </motion.div>

          {/* Nome */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg font-semibold tracking-wide text-primary uppercase md:text-xl"
          >
            {t("fullName")}
          </motion.h2>

          {/* Headline Profissional */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:leading-[1.15]"
          >
            {t("headline")}
          </motion.h1>

          {/* Resumo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto gap-2 shadow-sm font-semibold">
              <a href="#experiencia">
                {t("cta_experience")}
                <ArrowRight size={16} />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              <a href="#contato">
                <MessageSquare size={16} />
                {t("cta_contact")}
              </a>
            </Button>
          </motion.div>

          {/* Links Sociais e Currículo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-border/50 text-sm text-muted-foreground"
          >
            <a
              href="https://linkedin.com/in/gadiegon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 px-3 py-1.5 transition hover:border-foreground/30 hover:text-foreground"
            >
              <Linkedin size={15} className="text-primary" />
              <span>{t("link_linkedin")}</span>
            </a>

            <a
              href="https://github.com/GadiegoN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 px-3 py-1.5 transition hover:border-foreground/30 hover:text-foreground"
            >
              <Github size={15} className="text-primary" />
              <span>{t("link_github")}</span>
            </a>

            <a
              href="/curriculum/curriculo_gjn.pdf"
              download="curriculo_gadiego_nogueira.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 px-3 py-1.5 transition hover:border-foreground/30 hover:text-foreground"
            >
              <FileDown size={15} className="text-primary" />
              <span>{t("link_download_cv")}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
