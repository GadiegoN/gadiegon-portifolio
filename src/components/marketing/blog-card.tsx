import { Article } from "@/types/blog";
import Link from "next/link";

interface Props {
  article: Article;
}

export function BlogCard({ article }: Props) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-primary"
    >
      <span className="text-sm text-primary">{article.category}</span>

      <h3 className="mt-3 text-xl font-semibold group-hover:text-primary">
        {article.title}
      </h3>

      <p className="mt-4 line-clamp-3 text-muted-foreground">
        {article.description}
      </p>

      <div className="mt-6 text-sm text-muted-foreground">
        {article.publishedAt}
      </div>
    </Link>
  );
}
