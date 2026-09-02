"use client";

import { useState } from "react";
import {
  Linkedin,
  Github,
  MessageCircle,
  FileDown,
  MapPin,
  Copy,
  Check,
  Send,
  Loader2,
  Mail,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const t = useTranslations("Contact");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailAddress = "ngadiego@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      toast.success(t("copy_email_success"), {
        description: emailAddress,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Não foi possível copiar o e-mail.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(t("form_success_title"), {
          description: t("form_success_desc"),
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(t("form_error_title"), {
          description: t("form_error_desc"),
        });
      }
    } catch {
      toast.error(t("form_error_title"), {
        description: t("form_error_desc"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      label: "Currículo Oficial (PDF)",
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

          {/* Botão Rápido de Copiar E-mail */}
          <div className="mt-2 flex justify-center">
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 text-xs font-medium text-foreground transition hover:border-primary hover:bg-card shadow-xs cursor-pointer"
            >
              <Mail size={14} className="text-primary" />
              <span>{emailAddress}</span>
              <span className="ml-1 border-l border-border pl-2 text-muted-foreground">
                {copied ? (
                  <span className="flex items-center gap-1 text-emerald-500">
                    <Check size={13} />
                    Copiado!
                  </span>
                ) : (
                  <span className="flex items-center gap-1 hover:text-primary">
                    <Copy size={13} />
                    {t("copy_email_btn")}
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Formulário Direto de Contato */}
          <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-foreground mb-1">
              Envie uma mensagem
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Preencha os campos abaixo para iniciar uma conversa direta comigo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  {t("form_name_label")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("form_name_placeholder")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  {t("form_email_label")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("form_email_placeholder")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1.5">
                  {t("form_message_label")}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={t("form_message_placeholder")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t("form_sending_btn")}
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    {t("form_submit_btn")}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Métodos de Contato & Redes */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactMethods.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  download={
                    item.isDownload
                      ? "curriculo_gadiego_nogueira.pdf"
                      : undefined
                  }
                  className="group flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-xs transition hover:border-primary/50 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground">
                        {item.label}
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-mono truncate max-w-44">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-primary transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
