import AboutSection from "@/components/Sections/AboutSection";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection";
import ProjectSection from "@/components/Sections/ProjectSection";
import SkillSection from "@/components/Sections/Skill/SkillSection";
import SectionDivider from "@/components/Layout/SectionDivider";
import { useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations();

  return (
    <main className="flex w-[90%] flex-col gap-6 items-center sm:items-start">
      <AboutSection />

      <SectionDivider id="skills" title={t("skills.title")} />
      <SkillSection />

      <SectionDivider id="experience" title={t("experience.title")} />
      <ExperienceSection />

      <SectionDivider id="projects" title={t("projects.title")} />
      <ProjectSection />
    </main>
  );
}
