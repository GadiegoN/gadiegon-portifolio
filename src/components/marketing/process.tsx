"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileCheck, Rocket, Clock, Wrench } from "lucide-react";

const steps = [
  {
    title: "Você me explica o que precisa",
    description: "Pode ser uma mensagem rápida pelo WhatsApp mesmo.",
    icon: ClipboardList,
  },
  {
    title: "Enviamos o orçamento no mesmo dia",
    description: "Tudo claro, direto e sem complicação.",
    icon: FileCheck,
  },
  {
    title: "Aprovou? Começamos imediatamente",
    description: "Nada de enrolação ou burocracia.",
    icon: Rocket,
  },
  {
    title: "Entrega rápida (3 a 7 dias)",
    description: "Sempre mantendo você atualizado durante o processo.",
    icon: Clock,
  },
  {
    title: "Ajustes e suporte incluídos",
    description:
      "Se precisar de algum ajuste depois da entrega, podemos ajudar.",
    icon: Wrench,
  },
];

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="container mx-auto max-w-7xl px-6 py-28 md:px-8 md:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-foreground md:text-4xl"
      >
        Como funciona trabalhar conosco
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
      >
        Um processo simples, direto e transparente do início ao fim.
      </motion.p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border/80 bg-card p-7 shadow-[0_16px_55px_-38px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={22} />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
