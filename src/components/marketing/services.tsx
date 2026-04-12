"use client";

import { motion } from "framer-motion";
import { Layout, FileText, Gauge, RefreshCcw, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

const services = [
  { icon: Layout },
  { icon: FileText },
  { icon: Gauge },
  { icon: RefreshCcw },
  { icon: Wrench },
];

export function Services() {
  const t = useTranslations("Services");

  return (
    <section id="servicos" className="relative w-full py-28 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
        >
          {t("subtitle")}
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-border/80 bg-card/90 p-7 shadow-[0_16px_50px_-36px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_26px_70px_-36px_rgba(0,0,0,0.45)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {t(`items.${index}.title`)}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {t(`items.${index}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
