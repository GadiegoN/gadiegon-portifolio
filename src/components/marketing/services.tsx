"use client";

import { motion } from "framer-motion";
import { Layout, FileText, Gauge, RefreshCcw, Wrench } from "lucide-react";

const services = [
  {
    title: "Criação de sites simples e diretos ao ponto",
    description:
      "Sites claros, objetivos e fáceis de navegar, feitos sob medida para o seu negócio.",
    icon: Layout,
  },
  {
    title: "Páginas para apresentar seu trabalho de forma clara",
    description:
      "Estruturo a informação de forma organizada para que seu cliente entenda rapidamente o que você faz.",
    icon: FileText,
  },
  {
    title: "Melhorias de velocidade e navegação",
    description:
      "Otimização para deixar seu site mais rápido e oferecer uma experiência mais leve para o usuário.",
    icon: Gauge,
  },
  {
    title: "Atualização de layout e conteúdo de sites antigos",
    description:
      "Dou uma nova cara ao seu site sem complicação, mantendo tudo atual e mais moderno.",
    icon: RefreshCcw,
  },
  {
    title: "Ajustes, correções e melhorias gerais no seu site",
    description:
      "Correção de erros, pequenos ajustes e melhorias pontuais conforme a sua necessidade.",
    icon: Wrench,
  },
];

export function Services() {
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
          O que fazemos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          Serviços diretos e práticos para ajudar seu negócio a ter uma presença
          online mais clara e eficiente.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
