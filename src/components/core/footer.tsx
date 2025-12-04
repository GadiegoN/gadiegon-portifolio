"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6 text-center">
        <p className="text-foreground font-semibold text-lg">
          © {new Date().getFullYear()} Gadiego Nogueira
        </p>

        <p className="text-muted-foreground text-sm max-w-md">
          Desenvolvemos sistemas profissionais, rápidos e feitos sob medida para
          o seu negócio.
        </p>

        <div className="flex items-center gap-6 mt-4">
          <Link
            href="https://github.com/gadiegon"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Github size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/gadiegon/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Linkedin size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/gadiego_front/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Instagram size={22} />
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Feito com ❤️ por Gadiego Nogueira
        </p>
      </div>
    </footer>
  );
}
