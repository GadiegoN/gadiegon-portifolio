export interface GitHubRepo {
  id: number;
  name: string;
  formattedTitle: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
}

export interface GitHubContribution {
  date: string;
  count: number;
  level: number;
}

function formatRepoTitle(name: string): string {
  return name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/GadiegoN/repos?sort=updated&per_page=50",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "gadiegon-portfolio",
        },
        next: { revalidate: 3600 }, // Cache revalidado a cada 1 hora
      },
    );

    if (!res.ok) {
      console.error("Erro ao buscar repositórios do GitHub:", res.statusText);
      return [];
    }

    const repos: any[] = await res.json();

    // Filtra repositórios que não são o próprio repositório de perfil ou o portfólio
    const ignored = ["gadiegon", "gadiegon-portifolio", "new-portifolio"];
    const validRepos = repos.filter(
      (r) => !r.fork && !r.archived && !ignored.includes(r.name.toLowerCase()),
    );

    // Se houver repositórios marcados com o tópico 'portfolio' ou 'featured', exibe preferencialmente eles
    const taggedRepos = validRepos.filter(
      (r) =>
        r.topics?.includes("portfolio") ||
        r.topics?.includes("featured") ||
        r.topics?.includes("destaque"),
    );

    const sourceRepos =
      taggedRepos.length > 0 ? taggedRepos : validRepos.slice(0, 6);

    return sourceRepos.map((r) => ({
      id: r.id,
      name: r.name,
      formattedTitle: formatRepoTitle(r.name),
      description: r.description,
      html_url: r.html_url,
      homepage: r.homepage && r.homepage.trim().length > 0 ? r.homepage : null,
      language: r.language,
      topics: r.topics || [],
      stargazers_count: r.stargazers_count || 0,
      updated_at: r.updated_at,
    }));
  } catch (error) {
    console.error("Falha ao carregar repositórios do GitHub:", error);
    return [];
  }
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export async function getGitHubContributions(): Promise<GitHubContribution[]> {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setUTCFullYear(startDate.getUTCFullYear() - 1);

  try {
    const response = await fetch(
      `https://github.com/users/GadiegoN/contributions?from=${formatDate(startDate)}&to=${formatDate(endDate)}`,
      {
        headers: {
          Accept: "text/html",
          "User-Agent": "gadiegon-portfolio",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      console.error(
        "Erro ao buscar contribuições do GitHub:",
        response.statusText,
      );
      return [];
    }

    const html = await response.text();
    const contributions: GitHubContribution[] = [];
    const cellPattern =
      /data-date="([^"]+)"[^>]*data-level="(\d+)"[^>]*>[\s\S]*?<tool-tip[^>]*>([\s\S]*?)<\/tool-tip>/g;

    for (const match of html.matchAll(cellPattern)) {
      const tooltip = match[3].replace(/\s+/g, " ").trim();
      const countMatch = tooltip.match(/([\d,]+) contributions?/i);

      contributions.push({
        date: match[1],
        count: countMatch ? Number(countMatch[1].replace(/,/g, "")) : 0,
        level: Number(match[2]),
      });
    }

    return contributions;
  } catch (error) {
    console.error("Falha ao carregar contribuições do GitHub:", error);
    return [];
  }
}
