"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 py-14">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:px-8">
        <p className="text-lg font-semibold text-foreground">
          © {new Date().getFullYear()} Gadiego Nogueira
        </p>

        <p className="max-w-md text-sm text-muted-foreground">
          Desenvolvemos sistemas profissionais, rápidos e feitos sob medida para
          o seu negócio.
        </p>

        <div className="mt-4 flex items-center gap-6">
          <Link
            href="https://github.com/gadiegon"
            target="_blank"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Github size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/gadiegon/"
            target="_blank"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Linkedin size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/gadiego_front/"
            target="_blank"
            className="text-muted-foreground transition hover:text-primary"
          >
            <Instagram size={22} />
          </Link>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Feito com ❤ por Gadiego Nogueira
        </p>
      </div>
    </footer>
  );
}
