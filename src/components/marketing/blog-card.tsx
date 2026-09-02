"use client";

import { Article } from "@/types/blog";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import { formatBlogDate } from "@/lib/format-date";

interface Props {
  article: Article;
}

export function BlogCard({ article }: Props) {
  const locale = useLocale();
  const formattedDate = formatBlogDate(article.publishedAt, locale);
  const isEn = locale.toLowerCase().startsWith("en");

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-border hover:shadow-md"
    >
      <div>
        <span className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {article.category}
        </span>

        <h3 className="mt-3 text-lg font-bold text-foreground transition group-hover:text-primary">
          {article.title}
        </h3>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {article.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={13} className="text-primary" />
          {formattedDate}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-primary transition group-hover:translate-x-1">
          {isEn ? "Read" : "Ler"} <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
