import { LandingSection } from "@/components/landing/LandingSection";
import { Navbar } from "@/components/Navbar";

import { IntroSection } from "@/components/landing/sections/Intro";
import { AboutMeSection } from "@/components/landing/sections/AboutMe";
import { WorksSection } from "@/components/landing/sections/Works/Works";
import { WorkflowSection } from "@/components/landing/sections/Workflow";
import { WorkingTogetherSection } from "@/components/landing/sections/WorkingTogether";
import { Footer } from "@/components/landing/sections/Footer";
import { ProjectTypesSection } from "@/components/landing/sections/ProjectTypes";
import { TestimonialsSection } from "@/components/landing/sections/Testimonials";

export default function Home() {
  return (
    <div className="text-white pt-10">
      <LandingSection>
        <Navbar />
      </LandingSection>

      <IntroSection />

      <ProjectTypesSection />

      <AboutMeSection />

      <WorksSection />

      <WorkflowSection />

      <TestimonialsSection />

      <WorkingTogetherSection />

      <Footer />
    </div>
  );
}
