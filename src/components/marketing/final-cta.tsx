"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Calendar, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 container mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-foreground"
      >
        Pronto para ter um site profissional feito sob medida para você?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 text-muted-foreground max-w-xl mx-auto"
      >
        Me envie uma mensagem — respondo em poucos minutos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
      >
        <Button asChild size="lg">
          <Link
            href="https://wa.me/5534984081905?text=Ol%C3%A1,%20quero%20falar%20sobre%20um%20site!"
            target="_blank"
            className="flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Falar pelo WhatsApp
          </Link>
        </Button>

        <Button variant="outline" asChild size="lg">
          <a
            href="mailto:ngadiego@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail size={20} />
            Enviar email
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
