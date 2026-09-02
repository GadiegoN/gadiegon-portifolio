import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { articles } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { formatBlogDate } from "@/lib/format-date";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Artigo não encontrado" };

  return {
    title: `${article.title} | Gadiego Nogueira`,
    description: article.description,
  };
}

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

  const locale = await getLocale();
  const formattedDate = formatBlogDate(article.publishedAt, locale);
  const isEn = locale.toLowerCase().startsWith("en");

  return (
    <article id="topo" className="container mx-auto max-w-4xl px-6 py-20 md:py-24">
      <Link href="/blog" className="inline-block mb-10">
        <Button variant="outline" size="sm" className="gap-2">
          <ArrowLeft size={16} />
          {isEn ? "Back to Articles" : "Voltar para os Artigos"}
        </Button>
      </Link>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          <Tag size={13} />
          {article.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar size={13} />
          {formattedDate}
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl leading-tight">
        {article.title}
      </h1>

      <p className="mt-4 text-base text-muted-foreground leading-relaxed md:text-lg border-b border-border/60 pb-8">
        {article.description}
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
        <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {article.content}
        </Markdown>
      </div>

      <div className="mt-16 pt-8 border-t border-border/60 flex justify-between items-center">
        <Link href="/blog">
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft size={16} />
            {isEn ? "Back to Blog" : "Voltar para o Blog"}
          </Button>
        </Link>
        <a
          href="#topo"
          className="text-xs text-muted-foreground hover:text-foreground transition"
        >
          {isEn ? "Back to top ↑" : "Voltar ao topo ↑"}
        </a>
      </div>
    </article>
  );
}
