"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const currentLocale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (locale: "pt-BR" | "en") => {
    if (locale === currentLocale) return;

    // Persist language in cookie (read by next-intl request.ts)
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    if (typeof window !== "undefined") {
      localStorage.setItem("language", locale);
    }

    // Refresh server components with new translation strings
    router.refresh();
  };

  const isEnglish = currentLocale.toLowerCase().startsWith("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1.5 px-2.5 text-xs font-semibold"
          aria-label="Selecionar idioma / Select language"
        >
          <Globe size={14} className="text-primary" />
          <span>{isEnglish ? "EN" : "PT"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-32 text-xs">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("pt-BR")}
          className={`flex items-center justify-between cursor-pointer ${
            !isEnglish ? "font-bold text-primary" : ""
          }`}
        >
          <span>Português (BR)</span>
          {!isEnglish && <span>✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className={`flex items-center justify-between cursor-pointer ${
            isEnglish ? "font-bold text-primary" : ""
          }`}
        >
          <span>English (US)</span>
          {isEnglish && <span>✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
