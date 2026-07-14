export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  publishedAt: string;
  featured: boolean;
  tags: string[];
}
