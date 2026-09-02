"use client";

import { useState } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { certificates } from "@/data/certificates";
import { Button } from "@/components/ui/button";
import { formatCertificateDate } from "@/lib/format-date";

export function EducationSection() {
  const t = useTranslations("Education");
  const locale = useLocale();
  const isEn = locale.toLowerCase().startsWith("en");

  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  const issuers = ["all", "Rocketseat", "Udemy", "Outros"];

  const filteredCertificates = certificates.filter((cert) => {
    if (filter === "all") return true;
    if (filter === "Rocketseat") return cert.issuer === "Rocketseat";
    if (filter === "Udemy") return cert.issuer === "Udemy";
    if (filter === "Outros")
      return cert.issuer !== "Rocketseat" && cert.issuer !== "Udemy";
    return true;
  });

  const displayedCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, 6);

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

        {/* Formação Acadêmica Principal */}
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

        {/* Certificações e Cursos */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Award size={20} className="text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                {isEn ? "Courses & Certificates" : "Cursos & Certificados"}
              </h3>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {certificates.length}
              </span>
            </div>

            {/* Filtros de Plataforma */}
            <div className="flex flex-wrap gap-1.5">
              {issuers.map((item) => {
                let label = item;
                if (item === "all")
                  label = isEn
                    ? `All (${certificates.length})`
                    : `Todos (${certificates.length})`;
                if (item === "Outros" && isEn) label = "Others";

                return (
                  <button
                    key={item}
                    onClick={() => {
                      setFilter(item);
                      setShowAll(false);
                    }}
                    className={`rounded-lg px-3 py-1 text-xs font-medium transition cursor-pointer ${
                      filter === item
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "border border-border/80 bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayedCertificates.map((cert, index) => (
              <div
                key={`${cert.title}-${index}`}
                className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition hover:border-border hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                      {cert.issuer}
                    </span>
                    <span className="text-muted-foreground font-mono text-[11px]">
                      {formatCertificateDate(cert.date, locale)}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-foreground leading-snug mt-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-primary transition hover:underline"
                    >
                      <span>{isEn ? "View credential" : "Ver credencial"}</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={13} />
                      {isEn ? "Completed" : "Concluído"}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredCertificates.length > 6 && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAll(!showAll)}
                className="gap-2 text-xs"
              >
                {showAll ? (
                  <>
                    {isEn ? "Show less" : "Mostrar menos"}
                    <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    {isEn
                      ? `View all certificates (${filteredCertificates.length})`
                      : `Ver todos os certificados (${filteredCertificates.length})`}
                    <ChevronDown size={14} />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
