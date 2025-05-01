import AboutMeSection from "@/components/home/AboutMeSection";
import ContactSection from "@/components/home/ContactSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
