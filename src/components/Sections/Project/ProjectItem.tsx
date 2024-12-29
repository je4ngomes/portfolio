import Chips from "@/components/Layout/Chip/Chips";
import { Project } from "./types/Project";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  item: Project;
}

export default function ProjectItem({
  item: { id, title, description, tags, thumbnail, link },
}: ProjectItemProps) {
  return (
    <Link
      className="flex flex-row gap-2 rounded-md hover:md:bg-gray-900 hover:md:shadow-md transition duration-150 ease-out hover:ease-in p-4"
      href={link}
      target="_blank"
    >
      <Image
        src={thumbnail}
        alt={title}
        width={100}
        height={100}
        className="w-[20%] h-20 rounded-md border-2 border-slate-400"
      />
      <div className="w-[80%]">
        <h3 className="text-lg font-semibold text-[#DA68AB]">{title}</h3>
        <p className="text-base font-normal text-slate-200">{description}</p>

        <Chips id={`project-${id}`} key="index" tags={tags} maxChips={4} />
      </div>
    </Link>
  );
}
