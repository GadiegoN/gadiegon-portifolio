import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { articles } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { BlogGrid } from "@/components/marketing/blog-grid";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Artigos & Conteúdos | Gadiego Nogueira",
  description:
    "Artigos e insights sobre desenvolvimento front-end, mobile, arquitetura de software, inteligência artificial e carreira em tecnologia.",
};

export default async function BlogPage() {
  const locale = await getLocale();
  const isEn = locale.toLowerCase().startsWith("en");

  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <section className="container mx-auto max-w-5xl px-6 py-20 md:py-28">
      <Link href="/" className="inline-block mb-10">
        <Button variant="outline" size="sm" className="gap-2">
          <ArrowLeft size={16} />
          {isEn ? "Back to Home" : "Voltar para o Início"}
        </Button>
      </Link>

      <div className="flex flex-col gap-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
          <BookOpen size={14} />
          {isEn ? "Publications" : "Publicações"}
        </span>

        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          {isEn ? "Articles & Insights" : "Artigos & Conhecimento"}
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">
          {isEn
            ? "Technical articles and perspectives on modern front-end, React/Next.js ecosystem, artificial intelligence, architecture, and engineering career."
            : "Reflexões e artigos técnicos sobre desenvolvimento web, ecossistema React/Next.js, inteligência artificial, arquitetura e carreira."}
        </p>
      </div>

      <div className="mt-14">
        <BlogGrid articles={sortedArticles} />
      </div>
    </section>
  );
}
