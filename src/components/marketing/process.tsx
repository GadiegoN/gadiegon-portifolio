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
    <section id="processo" className="py-24 container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold text-foreground"
      >
        Como funciona trabalhar conosco
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
      >
        Um processo simples, direto e transparente do início ao fim.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 border border-border rounded-xl bg-background shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Icon size={22} />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
