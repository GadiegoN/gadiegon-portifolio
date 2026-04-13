"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Projeto inicial",
    price: "a partir de R$ 600",
    description:
      "Estrutura enxuta para páginas, interfaces ou fluxos menores, com foco em clareza e boa apresentação.",
    features: [
      "Escopo mais direto",
      "Interface organizada",
      "Responsividade",
    ],
  },
  {
    title: "Projeto intermediário",
    price: "a partir de R$ 1.200",
    description:
      "Solução com mais profundidade para projetos que exigem mais telas, organização de conteúdo ou fluxo de uso mais completo.",
    features: [
      "Mais estrutura funcional",
      "Design mais refinado",
      "Boa performance",
      "Responsividade",
    ],
  },
  {
    title: "Projeto mais completo",
    price: "a partir de R$ 1.800",
    description:
      "Projetos com maior complexidade visual ou funcional, pensados para demandas que envolvem mais partes do produto.",
    features: [
      "Escopo mais amplo",
      "Fluxos mais completos",
      "Layout bem resolvido",
      "Responsividade",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="precos"
      className="container mx-auto max-w-7xl px-6 py-28 md:px-8 md:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-foreground md:text-4xl"
      >
        Preços
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground"
      >
        Faixas de investimento para diferentes níveis de escopo e complexidade.
      </motion.p>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-[1.75rem] border border-border/80 bg-card p-7 shadow-[0_16px_55px_-38px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:border-primary/30"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {plan.title}
            </h3>
            <p className="mt-2 font-medium text-primary">{plan.price}</p>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {plan.description}
            </p>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        *O valor final pode variar conforme as necessidades do projeto.
      </p>
    </section>
  );
}
