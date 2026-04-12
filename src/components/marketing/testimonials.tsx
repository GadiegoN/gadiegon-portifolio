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
    <section
      id="depoimentos"
      className="container mx-auto max-w-7xl px-6 py-28 md:px-8 md:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-foreground md:text-4xl"
      >
        O que dizem sobre nosso trabalho
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
      >
        Depoimentos de pessoas com quem já colaboramos e que destacam nosso
        estilo de trabalho.
      </motion.p>

      <div className="relative mt-16">
        <Carousel className="mx-auto w-full max-w-4xl">
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="px-4">
                <div className="rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-[0_18px_70px_-42px_rgba(0,0,0,0.55)] md:p-10">
                  <p className="text-lg leading-relaxed text-foreground md:text-xl">
                    “{t.quote}”
                  </p>

                  <div className="mt-6 flex items-center gap-3">
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
