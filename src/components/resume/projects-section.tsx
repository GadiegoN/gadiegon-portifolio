"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Download, Smartphone, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations("Projects");

  const showupFeatures = t.raw("showup.features") as string[];

  const secondaryProjects = [
    {
      slug: "snackfy",
      title: t("snackfy.title"),
      category: t("snackfy.category"),
      summary: t("snackfy.summary"),
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      image: "/projects/snackfy.png",
      url: "https://snackfy.vercel.app/",
    },
    {
      slug: "guide-city",
      title: t("guide_city.title"),
      category: t("guide_city.category"),
      summary: t("guide_city.summary"),
      technologies: ["Next.js", "React", "Tailwind CSS"],
      image: "/projects/guide-city.png",
      url: "https://guide-city.vercel.app/",
    },
    {
      slug: "futpro",
      title: t("futpro.title"),
      category: t("futpro.category"),
      summary: t("futpro.summary"),
      technologies: ["Next.js", "React", "Tailwind CSS"],
      image: "/projects/futpro.png",
      url: "https://fut-pro-plum.vercel.app/",
    },
    {
      slug: "saas-agenda",
      title: t("saas_agenda.title"),
      category: t("saas_agenda.category"),
      summary: t("saas_agenda.summary"),
      technologies: ["Next.js", "React", "Tailwind CSS"],
      image: "/projects/saas-agenda.png",
      url: "https://saas-agenda.vercel.app/",
    },
    {
      slug: "organize-birthday",
      title: t("organize_birthday.title"),
      category: t("organize_birthday.category"),
      summary: t("organize_birthday.summary"),
      technologies: ["Next.js", "React", "CSS"],
      image: "/projects/organize-birthday.png",
      url: "https://organize-birthday.vercel.app/",
    },
  ];

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
                    <strong>{t("participation_label")}</strong> {t("showup.participation")}
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
                  {["React Native", "TypeScript", "SQLite", "Supabase", "Offline-First"].map((tech) => (
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
                    <Link href="/projetos/showup">
                      {t("btn_details")}
                    </Link>
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

        {/* Demais Projetos */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition hover:border-border hover:shadow-sm"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden rounded-xl border border-border/60 bg-muted/20 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-102"
                  />
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
                  <Globe size={13} className="text-primary" />
                  <span>{project.category}</span>
                </div>

                <h4 className="text-lg font-bold text-foreground">
                  {project.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div className="mt-5 border-t border-border/50 pt-4">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-muted/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition hover:underline"
                  >
                    {t("btn_visit")}
                    <ExternalLink size={13} />
                  </a>
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="text-xs text-muted-foreground transition hover:text-foreground"
                  >
                    {t("link_details")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
