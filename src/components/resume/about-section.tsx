"use client";

import { Code2, Workflow, ShieldCheck, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");

  const highlights = [
    {
      icon: Code2,
      title: t("card1_title"),
      description: t("card1_desc"),
    },
    {
      icon: Workflow,
      title: t("card2_title"),
      description: t("card2_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("card3_title"),
      description: t("card3_desc"),
    },
    {
      icon: Layers,
      title: t("card4_title"),
      description: t("card4_desc"),
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 border-t border-border/60">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {t("tag")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-border/70 bg-card/50 p-6 transition hover:border-border hover:bg-card hover:shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
