import { Hero } from "@/components/core/hero";
import { AboutSection } from "@/components/resume/about-section";
import { ExperienceSection } from "@/components/resume/experience-section";
import { ProjectsSection } from "@/components/resume/projects-section";
import { SkillsSection } from "@/components/resume/skills-section";
import { EducationSection } from "@/components/resume/education-section";
import { ContactSection } from "@/components/resume/contact-section";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
