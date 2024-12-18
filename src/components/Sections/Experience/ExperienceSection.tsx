import Timeline from "@/components/Layout/Timeline";
import { ITimelineItemData } from "@/components/Layout/Timeline/types/ITimelineItem";

export default function ExperienceSection() {
  const timelineData: ITimelineItemData[] = [
    {
      date: "2024 - Present",
      title: "Senior Developer Analyst, Ecglobal for Business",
      description:
        "Design and develop scalable features and services while providing technical guidance and support to the team. Collaborate with cross-functional teams to ensure high-quality solutions, conduct code reviews, and advocate for best practices in software development and system architecture.",
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
      link: "https://business.ecglobal.com/en/",
    },
    {
      date: "2022 - 2023",
      title: "Mid-Level Developer Analyst, Ecglobal for Business",
      description:
        "Contributed to the design and maintenance of backend services, supported application migrations to monorepo architectures, and automated workflows to enhance efficiency. Implementing security improvements, and collaborating across teams to deliver effective solutions.",
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
      link: "https://business.ecglobal.com/en/",
    },
    {
      date: "2020 - 2022",
      title: "Junior Developer Analyst, Ecglobal for Business",
      description:
        "Focused on frontend development with React and React Native, creating reusable components and integrating APIs. Supported backend feature development and maintenance while contributing to the delivery of reliable and user-focused applications.",
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
      link: "https://business.ecglobal.com/en/",
    },
  ];

  return <Timeline items={timelineData} />;
}
