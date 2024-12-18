import Link from "next/link";
import { ITimelineItemData } from "./types/ITimelineItem";

interface TimelineItemProps {
  item: ITimelineItemData;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  return (
    <li className="mb-10 ms-4">
      <Link href={item.link ?? "#"} target="_blank">
        <div className="p-4 rounded-md hover:md:bg-gray-900 hover:md:shadow-md cursor-pointer transition duration-150 ease-out hover:ease-in">
          <div className="absolute w-3 h-3 bg-[#DA68AB] rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-txt-primary">
            {item.date}
          </time>
          <h3 className="text-lg font-semibold text-[#DA68AB]">{item.title}</h3>
          <p className="text-base font-normal text-txt-primary">
            {item.description}
          </p>
        </div>
      </Link>
    </li>
  );
}
