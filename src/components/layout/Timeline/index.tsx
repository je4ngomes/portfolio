import TimelineItem from "./TimelineItem";
import { ITimelineItemData } from "./types/ITimelineItem";

interface TimelineProps {
  items: ITimelineItemData[];
}

export default function Timeline({ items = [] }: TimelineProps) {
  return (
    <ol className="relative border-s border-[#472A43] dark:border-gray-700">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </ol>
  );
}
