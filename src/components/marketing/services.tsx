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
    <section id="servicos" className="relative w-full py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-foreground"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="p-6 rounded-xl border border-border bg-background/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`items.${index}.title`)}
                </h3>

                <p className="text-sm text-muted-foreground">
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
