import { useTranslations } from "next-intl";
import ProjectItem from "./ProjectItem";
import { Project } from "./types/Project";

export default function ProjectSection() {
  const t = useTranslations("project");

  const projects: Project[] = [
    {
      id: "1",
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      thumbnail: "/assets/knowledge-base-api.png",
      tags: ["TypeScript", "n8n", "PostgreSQL", "MinIO", "OpenAI"],
      link: "https://github.com/je4ngomes/knowledge-base-api",
    },
  ];

  return (
    <section className="flex flex-col justify-start">
      {projects.map((project) => (
        <ProjectItem key={project.title} item={project} />
      ))}
    </section>
  );
}
