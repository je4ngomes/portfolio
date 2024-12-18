import Timeline from "@/components/Layout/Timeline";
import { ITimelineItemData } from "@/components/Layout/Timeline/types/ITimelineItem";

export default function ExperienceSection() {
  const timelineData: ITimelineItemData[] = [
    {
      id: "1",
      date: "experience.jobs.1.date",
      title: "experience.jobs.1.title",
      company: "experience.jobs.1.company",
      description: "experience.jobs.1.description",
      tags: [
        "TypeScript",
        "AWS Lambda",
        "Node.js",
        "Python",
        "PostgreSQL",
        "n8n",
        "NestJS",
        "JavaScript",
        "Amazon SQS",
        "Amazon SNS",
        "React.js",
        "React Native",
      ],
      link: "experience.jobs.1.link",
    },
    {
      id: "2",
      date: "experience.jobs.2.date",
      title: "experience.jobs.2.title",
      company: "experience.jobs.2.company",
      description: "experience.jobs.2.description",
      tags: [
        "React.js",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "GraphQL",
        "n8n",
        "TypeScript",
        "Hasura",
      ],
      link: "experience.jobs.2.link",
    },
    {
      id: "3",
      date: "experience.jobs.3.date",
      title: "experience.jobs.3.title",
      company: "experience.jobs.3.company",
      description: "experience.jobs.3.description",
      tags: [
        "React.js",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "GraphQL",
        "TypeScript",
        "Hasura",
        "Neo4j",
      ],
      link: "experience.jobs.3.link",
    },
  ];

  return <Timeline items={timelineData} />;
}
