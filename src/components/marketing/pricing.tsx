"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Landing page",
    price: "a partir de R$ 600",
    description:
      "Página única para apresentar seu produto, serviço ou campanha com clareza.",
    features: ["Design personalizado", "Conteúdo organizado", "Responsividade"],
  },
  {
    title: "Site institucional",
    price: "a partir de R$ 1.200",
    description:
      "Site profissional e direto ao ponto, ideal para pequenos negócios.",
    features: [
      "Até 4 páginas",
      "Design profissional",
      "Boa performance",
      "Responsividade",
    ],
  },
  {
    title: "Loja virtual simples",
    price: "a partir de R$ 1.800",
    description:
      "Loja básica para vendas online, com estrutura clara e fácil de usar.",
    features: [
      "Página de produtos",
      "Carrinho simples",
      "Layout limpo",
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
        Opções simples e transparentes para diferentes tipos de projetos.
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
