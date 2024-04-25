import { LandingSection } from "@/components/landing/LandingSection";
import { Navbar } from "@/components/Navbar";

import { IntroSection } from "@/components/landing/sections/Intro";
import { AboutMeSection } from "@/components/landing/sections/AboutMe";
import { WorksSection } from "@/components/landing/sections/Works";
import { WorkflowSection } from "@/components/landing/sections/Workflow";
import { WorkingTogetherSection } from "@/components/landing/sections/WorkingTogether";
import { Footer } from "@/components/landing/sections/Footer";

export default function Home() {
  return (
    <div className="grainy text-white p-10">
      <LandingSection>
        <Navbar />
      </LandingSection>

      <IntroSection />

      <AboutMeSection />

      <WorksSection />

      <WorkflowSection />

      <WorkingTogetherSection />

      <Footer />
    </div>
  );
}
