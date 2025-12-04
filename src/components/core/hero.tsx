"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto"
        >
          Desenvolvemos sistemas profissionais, rápidos e feitos sob medida para
          o seu negócio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Design limpo, boa performance e comunicação clara do começo ao fim.
          Sem complicação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button asChild size="lg">
            <Link
              href="https://wa.me/5534984081905?text=Ol%C3%A1,%20quero%20um%20or%C3%A7amento!"
              target="_blank"
            >
              Quero um orçamento agora
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href="#projetos">Ver projetos</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
