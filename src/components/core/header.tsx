"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, FileDown } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { LanguageToggle } from "../language-toggle";
import { useTranslations } from "next-intl";

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Header");

  const toggleMenu = () => setOpen(!open);

  const links = [
    { name: t("nav_about"), href: "/#sobre" },
    { name: t("nav_experience"), href: "/#experiencia" },
    { name: t("nav_projects"), href: "/#projetos" },
    { name: t("nav_skills"), href: "/#competencias" },
    { name: t("nav_education"), href: "/#formacao" },
    { name: t("nav_blog"), href: "/blog" },
    { name: t("nav_contact"), href: "/#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground transition hover:opacity-85"
        >
          <Image
            src="/icon.png"
            alt="GN Logo"
            width={28}
            height={28}
            className="rounded-lg shadow-xs"
            priority
          />
          <span>Gadiego Nogueira</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {link.name}
            </a>
          ))}

          <Button asChild size="sm" variant="outline" className="gap-2 text-xs font-semibold">
            <a href="/curriculum/curriculo_gjn.pdf" download="curriculo_gadiego_nogueira.pdf">
              <FileDown size={15} />
              {t("download_cv")}
            </a>
          </Button>

          <LanguageToggle />
          <ModeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ModeToggle />
          <button
            className="p-2 text-muted-foreground transition hover:text-foreground"
            onClick={toggleMenu}
            aria-label="Abrir menu de navegação"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 px-6 py-5 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground transition hover:text-foreground"
              >
                {link.name}
              </a>
            ))}

            <Button asChild size="sm" variant="default" className="mt-2 w-full gap-2">
              <a href="/curriculum/curriculo_gjn.pdf" download="curriculo_gadiego_nogueira.pdf">
                <FileDown size={16} />
                {t("download_cv")}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
