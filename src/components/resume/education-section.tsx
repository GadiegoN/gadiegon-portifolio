"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function EducationSection() {
  const t = useTranslations("Education");

  return (
    <section id="formacao" className="py-20 md:py-28 border-t border-border/60">
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

        <div className="mt-12">
          <div className="rounded-2xl border border-border/80 bg-card p-6 md:p-8 shadow-xs transition hover:border-border">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <span className="inline-block rounded-md bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5">
                    {t("status")}
                  </span>
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                    {t("degree")}
                  </h3>
                  <p className="mt-1 text-base font-medium text-foreground/80">
                    {t("institution")}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:flex-col sm:items-end text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 font-medium text-foreground/90">
                  <Calendar size={15} className="text-primary" />
                  {t("completed")}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs">
                  <MapPin size={14} />
                  {t("location")}
                </span>
              </div>
            </div>

            <p className="mt-6 border-t border-border/50 pt-5 text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
