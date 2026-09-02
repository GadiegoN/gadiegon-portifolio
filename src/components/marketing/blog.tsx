"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { articles } from "@/data/blog";
import { BlogGrid } from "./blog-grid";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogSection() {
  const t = useTranslations("Blog");
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const featuredArticles = sortedArticles.slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28 border-t border-border/60 bg-muted/10">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
            <BookOpen size={14} />
            {t("tag")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12">
          <BlogGrid articles={featuredArticles} />
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/blog">
              {t("view_all")}
              <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
