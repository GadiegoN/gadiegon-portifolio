"use client";

import { Calendar, Building2, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface ExperienceRawItem {
  role: string;
  company: string;
  period: string;
  typeKey: string;
  responsibilities: string[];
}

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const items = t.raw("items") as ExperienceRawItem[];

  return (
    <section id="experiencia" className="py-20 md:py-28 border-t border-border/60 bg-muted/20">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {t("tag")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {items.map((exp) => (
            <div
              key={`${exp.role}-${exp.period}`}
              className="relative rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-xs transition hover:border-border hover:shadow-sm"
            >
              {/* Header do Card */}
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="rounded-md border border-border/80 bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {t(exp.typeKey)}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 text-foreground/90">
                      <Building2 size={16} className="text-primary" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <Calendar size={15} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsabilidades */}
              <div className="mt-6 border-t border-border/50 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("responsibilities_label")}
                </p>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {exp.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary/80"
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
