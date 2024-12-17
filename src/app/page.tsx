import AboutSection from "@/components/Sections/AboutSection";
import SkillsSection from "@/components/Sections/SkillSection/SkillSection";
import SectionDivider from "@/components/layout/SectionDivider";

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-6 items-center sm:items-start">
      <AboutSection />
      <SectionDivider title="Skills" />
      <SkillsSection />
      <SectionDivider title="Experience" />
    </main>
  );
}
