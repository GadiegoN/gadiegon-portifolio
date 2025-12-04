"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold text-foreground"
      >
        O que dizem sobre nosso trabalho
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-4 text-center text-muted-foreground max-w-xl mx-auto"
      >
        Depoimentos de pessoas com quem já colaboramos e que destacam nosso
        estilo de trabalho.
      </motion.p>

      <div className="relative mt-16">
        <Carousel className="w-10/12 max-w-3xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="px-4">
                <div className="p-8 border border-border rounded-xl bg-background shadow-sm">
                  <p className="text-lg text-foreground leading-relaxed">
                    “{t.quote}”
                  </p>

                  <div className="flex items-center gap-3 mt-6">
                    <Avatar>
                      <AvatarFallback className="bg-foreground text-background">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>

                    <p className="font-medium text-primary">{t.author}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
