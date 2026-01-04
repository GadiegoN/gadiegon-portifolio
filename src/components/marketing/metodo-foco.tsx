"use client";

import { motion } from "framer-motion";
import { Target, Layers, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const items = [
  {
    title: "Clareza antes da execução",
    description:
      "Transforme ideias vagas em instruções objetivas antes de delegar ou usar IA.",
    icon: Target,
  },
  {
    title: "Estrutura simples e replicável",
    description:
      "Um método mental que funciona para textos, código, design e decisões.",
    icon: Layers,
  },
  {
    title: "Critério claro de sucesso",
    description:
      "Pare de revisar infinitamente. Saiba exatamente quando algo está pronto.",
    icon: CheckCircle,
  },
];

export function MetodoFocoSection() {
  const t = useTranslations("MetodoFoco");

  const items = [0, 1, 2];

  useEffect(() => {
    if (document.getElementById("hotmart-widget")) return;

    const script = document.createElement("script");
    script.id = "hotmart-widget";
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
    document.head.appendChild(link);
  }, []);

  return (
    <section id="metodo-foco" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center text-3xl md:text-4xl font-bold text-foreground">
          {t("title")}
        </motion.h2>

        <motion.p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          {t("subtitle")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((_, index) => {
            const Icon = [Target, Layers, CheckCircle][index];

            return (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition"
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

        <div className="mt-16 flex justify-center">
          <a
            href="https://pay.hotmart.com/B103654113H?checkoutMode=2"
            className="hotmart-fb hotmart__button-checkout"
          >
            <img
              src="https://static.hotmart.com/img/btn-buy-green.png"
              alt={t("cta_alt")}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
