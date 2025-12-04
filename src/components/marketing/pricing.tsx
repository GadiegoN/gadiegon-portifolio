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
    <section id="precos" className="py-24 container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold text-foreground"
      >
        Preços
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
      >
        Opções simples e transparentes para diferentes tipos de projetos.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 border border-border rounded-xl bg-background shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {plan.title}
            </h3>
            <p className="text-primary font-medium mt-2">{plan.price}</p>

            <p className="text-sm text-muted-foreground mt-4">
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

      <p className="text-center text-muted-foreground text-sm mt-10">
        *O valor final pode variar conforme as necessidades do projeto.
      </p>
    </section>
  );
}
