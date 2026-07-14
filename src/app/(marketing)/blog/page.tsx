import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { articles } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { BlogGrid } from "@/components/marketing/blog-grid";

export default function BlogPage() {
  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <section className="container mx-auto max-w-7xl px-6 py-24">
      <Link href="/">
        <Button variant="outline" className="mb-10 flex items-center gap-2">
          <ArrowLeft size={18} />
          Voltar para a Home
        </Button>
      </Link>

      <div className="max-w-3xl">
        <span className="text-sm font-medium text-primary">Blog</span>

        <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
          Artigos
        </h1>

        <p className="mt-5 text-lg text-muted-foreground">
          Conteúdos sobre desenvolvimento web, Inteligência Artificial,
          arquitetura de software, carreira, Next.js, React, C# e tecnologia.
        </p>
      </div>

      <div className="mt-16">
        <BlogGrid articles={sortedArticles} />
      </div>
    </section>
  );
}
