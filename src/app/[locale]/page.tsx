import AboutSection from "@/components/Sections/AboutSection";
import ExperienceSection from "@/components/Sections/Experience/ExperienceSection";
// import ProjectSection from "@/components/Sections/ProjectSection";
import SkillSection from "@/components/Sections/Skill/SkillSection";
import SectionDivider from "@/components/Layout/SectionDivider";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";

export default function App() {
  const t = useTranslations();

  return (
    <main className="flex xl:w-[90%] flex-col gap-6 items-center px-8 md:px-0">
      <AboutSection />

      <SectionDivider id="skills" title={t("skills.title")} />
      <SkillSection />

      <SectionDivider id="experience" title={t("experience.title")} />
      <ExperienceSection />

      {/* <SectionDivider id="projects" title={t("projects.title")} />
      <ProjectSection /> */}
      <Footer />
    </main>
  );
}
