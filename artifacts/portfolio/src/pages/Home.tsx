import { Navbar } from "@/components/Navbar";
import { Dock } from "@/components/Dock";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { ContactSection } from "./sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      {/* Page Content */}
      <div className="pb-24"> {/* Padding bottom to account for the Dock */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      <Footer />
      <Dock />
    </main>
  );
}
