"use client";

import { Code, Server, ClipboardList, Users } from "lucide-react";
import { useTranslations } from "next-intl";

interface SkillCategory {
  title: string;
  description: string;
  icon: typeof Code;
  skills: string[];
}

export function SkillsSection() {
  const t = useTranslations("Skills");

  const skillCategories: SkillCategory[] = [
    {
      title: t("cat1_title"),
      description: t("cat1_desc"),
      icon: Code,
      skills: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "SQLite",
        "Supabase",
        "Git & GitHub",
        "REST APIs",
      ],
    },
    {
      title: t("cat2_title"),
      description: t("cat2_desc"),
      icon: Server,
      skills: [
        "Análise de Sistemas",
        "Manutenção Preventiva e Corretiva",
        "Diagnóstico e Resolução de Problemas",
        "Suporte e Atendimento a Usuários",
        "Versionamento e Ambientes de Deploy",
        "Arquitetura Offline-First",
      ],
    },
    {
      title: t("cat3_title"),
      description: t("cat3_desc"),
      icon: ClipboardList,
      skills: [
        "Organização de Processos",
        "Acompanhamento de Compras Públicas",
        "Gestão e Acompanhamento de Contratos",
        "Relacionamento com Fornecedores",
        "Controle de Documentos e Prazos",
        "Controle Operacional de Demandas",
      ],
    },
    {
      title: t("cat4_title"),
      description: t("cat4_desc"),
      icon: Users,
      skills: [
        "Trabalho em Equipe",
        "Atendimento ao Público",
        "Resolução Prática de Problemas",
        "Facilidade com Novas Tecnologias",
        "Comunicação Clara e Direta",
        "Organização e Responsabilidade",
      ],
    },
  ];

  return (
    <section id="competencias" className="py-20 md:py-28 border-t border-border/60 bg-muted/20">
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-xs transition hover:border-border hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/80 bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground/90 transition hover:border-primary/40 hover:bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
