import { Hero } from "@/components/core/hero";
import { FinalCTA } from "@/components/marketing/final-cta";
import { PricingSection } from "@/components/marketing/pricing";
import { ProcessSection } from "@/components/marketing/process";
import { ProjectsSection } from "@/components/marketing/projects";
import { Services } from "@/components/marketing/services";
import { Testimonials } from "@/components/marketing/testimonials";
import { BlogSection } from "@/components/marketing/blog";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />

      <ProjectsSection />

      <BlogSection />

      <Testimonials />

      <ProcessSection />

      <PricingSection />

      <FinalCTA />
    </>
  );
}
