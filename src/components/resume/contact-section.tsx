"use client";

import { Linkedin, Github, MessageCircle, FileDown, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  const contactMethods = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/gadiegon",
      href: "https://linkedin.com/in/gadiegon",
      icon: Linkedin,
      actionLabel: t("action_linkedin"),
      isExternal: true,
    },
    {
      label: "GitHub",
      value: "github.com/GadiegoN",
      href: "https://github.com/GadiegoN",
      icon: Github,
      actionLabel: t("action_github"),
      isExternal: true,
    },
    {
      label: "WhatsApp",
      value: "(34) 98408-1905",
      href: "https://wa.me/5534984081905?text=Ol%C3%A1%20Gadiego!",
      icon: MessageCircle,
      actionLabel: t("action_whatsapp"),
      isExternal: true,
    },
    {
      label: "Currículo / Resume (PDF)",
      value: "curriculo_gadiego_nogueira.pdf",
      href: "/curriculum/curriculo_gjn.pdf",
      icon: FileDown,
      actionLabel: t("action_cv"),
      isDownload: true,
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-border/60 bg-muted/20">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {t("tag")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("description")}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            <span>{t("location")}</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
          {contactMethods.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                download={item.isDownload ? "curriculo_gadiego_nogueira.pdf" : undefined}
                className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition hover:border-primary/50 hover:shadow-sm"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate max-w-52">
                      {item.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs font-medium text-primary">
                  <span>{item.actionLabel}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
