import { Hero } from "@/components/core/hero";
import { AboutSection } from "@/components/resume/about-section";
import { ExperienceSection } from "@/components/resume/experience-section";
import { ProjectsSection } from "@/components/resume/projects-section";
import { SkillsSection } from "@/components/resume/skills-section";
import { EducationSection } from "@/components/resume/education-section";
import { BlogSection } from "@/components/marketing/blog";
import { ContactSection } from "@/components/resume/contact-section";
import { ContributionCalendar } from "@/components/resume/contribution-calendar";
import { getGitHubContributions, getGitHubProjects } from "@/lib/github";

export default async function HomePage() {
  const [githubProjects, githubContributions] = await Promise.all([
    getGitHubProjects(),
    getGitHubContributions(),
  ]);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection githubProjects={githubProjects} />
      <ContributionCalendar contributions={githubContributions} />
      <SkillsSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
