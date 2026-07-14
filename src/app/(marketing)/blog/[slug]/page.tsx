import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

import { articles } from "@/data/blog";
import { Button } from "@/components/ui/button";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="container mx-auto max-w-4xl px-6 py-24">
      <Link href="/blog">
        <Button variant="outline" className="mb-8 flex items-center gap-2">
          <ArrowLeft size={18} />
          Voltar para o Blog
        </Button>
      </Link>

      <span className="text-sm text-primary">{article.category}</span>

      <h1 className="mt-3 text-4xl font-bold">{article.title}</h1>

      <p className="mt-4 text-muted-foreground">{article.description}</p>

      <p className="mt-3 text-sm text-muted-foreground">
        {article.publishedAt}
      </p>

      <article className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
        <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {article.content}
        </Markdown>
      </article>
    </section>
  );
}
