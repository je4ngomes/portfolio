import AboutSection from "@/components/Sections/AboutSection";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection";
import ProjectSection from "@/components/Sections/ProjectSection";
import SkillSection from "@/components/Sections/Skill/SkillSection";
import SectionDivider from "@/components/layout/SectionDivider";

export default function Home() {
  return (
    <main className="flex w-[90%] flex-col gap-6 items-center sm:items-start">
      <AboutSection />

      <SectionDivider id="skills" title="Skills" />
      <SkillSection />

      <SectionDivider id="experience" title="Experience" />
      <ExperienceSection />

      <SectionDivider id="projects" title="Projects" />
      <ProjectSection />
    </main>
  );
}
