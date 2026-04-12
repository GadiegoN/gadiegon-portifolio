"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const links = [
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Processo", href: "#processo" },
    { name: "Preços", href: "#precos" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-foreground transition hover:opacity-80"
        >
          Gadiego Nogueira
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {link.name}
            </a>
          ))}

          <Button asChild size="sm">
            <Link
              href="https://wa.me/5534984081905?text=Ol%C3%A1,%20quero%20falar%20sobre%20um%20site!"
              target="_blank"
            >
              WhatsApp
            </Link>
          </Button>

          <ModeToggle />
        </nav>

        <button
          className="text-muted-foreground transition hover:text-foreground md:hidden"
          onClick={toggleMenu}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {link.name}
              </a>
            ))}

            <Button asChild size="sm" className="mt-2">
              <Link
                href="https://wa.me/5534984081905?text=Ol%C3%A1,%20quero%20falar%20sobre%20um%20site!"
                target="_blank"
              >
                WhatsApp
              </Link>
            </Button>
          </nav>
          <div className="flex items-center justify-center border-b-2 py-6">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
