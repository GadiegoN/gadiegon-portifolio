"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Download,
  Smartphone,
  Check,
  Github,
  Star,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { GitHubRepo } from "@/lib/github";

interface ProjectsSectionProps {
  githubProjects?: GitHubRepo[];
}

export function ProjectsSection({
  githubProjects = [],
}: ProjectsSectionProps) {
  const t = useTranslations("Projects");
  const showupFeatures = t.raw("showup.features") as string[];

  return (
    <section id="projetos" className="py-20 md:py-28 border-t border-border/60">
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

        {/* Projeto em Destaque Principal: ShowUp */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition hover:border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 md:p-10">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <Smartphone size={13} />
                    {t("featured_badge")}
                  </span>
                  <span className="rounded-md border border-border/80 bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {t("featured_type")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {t("showup.title")}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t("showup.summary")}
                </p>

                <div className="mt-5 space-y-2 rounded-xl bg-muted/30 p-4 text-xs sm:text-sm">
                  <p className="text-foreground">
                    <strong>{t("problem_label")}</strong> {t("showup.problem")}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>{t("participation_label")}</strong>{" "}
                    {t("showup.participation")}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {t("features_label")}
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 text-xs text-muted-foreground">
                    {showupFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-1.5">
                        <Check size={14} className="mt-0.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border/60">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {[
                    "React Native",
                    "TypeScript",
                    "SQLite",
                    "Supabase",
                    "Offline-First",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/70 bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm" className="gap-2 font-medium">
                    <a href="/apk/app-release.apk" download>
                      <Download size={15} />
                      {t("btn_download_apk")}
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/projetos/showup">{t("btn_details")}</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Imagem do ShowUp */}
            <div className="relative min-h-64 lg:min-h-full rounded-2xl overflow-hidden border border-border/60 bg-muted/20 lg:col-span-5 flex items-center justify-center">
              <Image
                src="/projects/showup.png"
                alt="ShowUp App"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Projetos Dinâmicos do GitHub */}
        {githubProjects.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2">
                <Github size={18} className="text-primary" />
                <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {t("github_section_title")}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("github_section_desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {githubProjects.map((repo) => (
                <div
                  key={repo.id}
                  className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition hover:border-border hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <Code2 size={14} />
                        <span>{repo.language || "Código"}</span>
                      </div>
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star size={12} className="text-amber-500 fill-amber-500" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-foreground line-clamp-1">
                      {repo.formattedTitle}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {repo.description ||
                        "Repositório de código com arquitetura moderna e boas práticas de desenvolvimento."}
                    </p>

                    {repo.topics.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="rounded bg-muted/70 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 border-t border-border/50 pt-4 flex items-center justify-between gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
                    >
                      <Github size={14} />
                      <span>{t("github_code_btn")}</span>
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition hover:underline"
                      >
                        <span>{t("github_demo_btn")}</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
