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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-foreground hover:opacity-80 transition"
        >
          Gadiego Nogueira
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition"
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
          className="md:hidden text-muted-foreground hover:text-foreground transition"
          onClick={toggleMenu}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition"
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
          <div className="flex py-6 justify-center items-center border-b-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
