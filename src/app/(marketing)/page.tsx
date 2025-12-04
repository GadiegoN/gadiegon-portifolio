import { Hero } from "@/components/core/hero";
import { FinalCTA } from "@/components/marketing/final-cta";
import { PricingSection } from "@/components/marketing/pricing";
import { ProcessSection } from "@/components/marketing/process";
import { ProjectsSection } from "@/components/marketing/projects";
import { Services } from "@/components/marketing/services";
import { Testimonials } from "@/components/marketing/testimonials";
import { Footer } from "react-day-picker";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />

      <ProjectsSection />

      <Testimonials />

      <ProcessSection />

      <PricingSection />

      <FinalCTA />
    </>
  );
}
