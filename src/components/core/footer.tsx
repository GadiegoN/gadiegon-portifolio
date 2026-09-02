"use client";

import Image from "next/image";
import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const tFooter = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/70 py-12 bg-background">
      <div className="container mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:px-8">
        <div className="flex flex-col items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="GN Logo"
            width={34}
            height={34}
            className="rounded-xl shadow-xs opacity-90 transition hover:opacity-100"
          />
          <p className="text-base font-bold tracking-tight text-foreground">
            {tFooter("fullName")}
          </p>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
            {tFooter("description")}
          </p>
        </div>

        {/* Links de navegação */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-muted-foreground">
          <a href="#sobre" className="transition hover:text-foreground">
            {tHeader("nav_about")}
          </a>
          <a href="#experiencia" className="transition hover:text-foreground">
            {tHeader("nav_experience")}
          </a>
          <a href="#projetos" className="transition hover:text-foreground">
            {tHeader("nav_projects")}
          </a>
          <a href="#competencias" className="transition hover:text-foreground">
            {tHeader("nav_skills")}
          </a>
          <a href="#formacao" className="transition hover:text-foreground">
            {tHeader("nav_education")}
          </a>
          <a href="#contato" className="transition hover:text-foreground">
            {tHeader("nav_contact")}
          </a>
          <a href="/curriculum/curriculo_gjn.pdf" download className="text-primary hover:underline">
            {tFooter("download_pdf")}
          </a>
        </div>

        {/* Ícones sociais */}
        <div className="flex items-center gap-5 pt-2">
          <a
            href="https://github.com/GadiegoN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/gadiegon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://wa.me/5534984081905?text=Ol%C3%A1%20Gadiego!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground transition hover:text-primary"
          >
            <MessageCircle size={20} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="inline-flex items-center justify-center text-muted-foreground transition hover:text-foreground ml-2 cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <p className="text-[11px] text-muted-foreground/80">
          {tFooter("copyright", { year: new Date().getFullYear().toString() })}
        </p>
      </div>
    </footer>
  );
}
