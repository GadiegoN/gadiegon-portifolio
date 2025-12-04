import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="py-24 container mx-auto px-6 max-w-4xl">
      <Link href="/" className="inline-block mb-8">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft size={18} />
          Voltar para a Home
        </Button>
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        {project.title}
      </h1>

      <p className="mt-2 text-muted-foreground">{project.impact}</p>

      <div className="relative w-full h-72 md:h-96 mt-10 rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-8 text-foreground">{project.description}</p>

      <ul className="mt-6 list-disc list-inside text-muted-foreground">
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <a
        href={project.url}
        target="_blank"
        className="inline-block mt-10 text-primary hover:underline font-medium"
      >
        Visitar site →
      </a>
    </section>
  );
}
