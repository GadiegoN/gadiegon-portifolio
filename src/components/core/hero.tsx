"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroBackground } from "./hero-background";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 text-center md:px-8">
        <div className="mx-auto max-w-4xl rounded-4xl border border-border/70 bg-background/70 px-6 py-14 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-12 md:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-4xl font-bold leading-[1.05] text-foreground md:text-6xl"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-xl"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link
                href="https://wa.me/5534984081905?text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento!"
                target="_blank"
              >
                {t("btn_budgets")}
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="#projetos">{t("btn_projects")}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
