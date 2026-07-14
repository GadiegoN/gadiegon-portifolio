import { Article } from "@/types/blog";
import { BlogCard } from "./blog-card";

interface Props {
  articles: Article[];
}

export function BlogGrid({ articles }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <BlogCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
