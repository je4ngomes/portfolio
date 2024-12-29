import Link from "next/link";
import { ITimelineItemData } from "./types/ITimelineItem";
import Chips from "../Chip/Chips";
import { useTranslations } from "next-intl";

interface TimelineItemProps {
  item: ITimelineItemData;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  const t = useTranslations();

  return (
    <li className="mb-10 ms-4">
      <div className="p-4 rounded-md hover:md:bg-gray-900 hover:md:shadow-md transition duration-150 ease-out hover:ease-in">
        <div className="absolute w-3 h-3 bg-[#DA68AB] rounded-full mt-1.5 -start-1.5"></div>
        <time className="mb-1 text-sm font-normal leading-none text-slate-200">
          {t(item.date)}
        </time>
        <h3 className="text-lg font-semibold text-[#DA68AB]">
          {t(item.title)}
          {item?.company && ", "}
          {item?.company && (
            <Link
              href={t(item?.link)}
              target="_blank"
              className="hover:text-slate-400 cursor-pointer transition duration-150 ease-out hover:ease-in"
            >{`${t(item?.company)}`}</Link>
          )}
        </h3>
        <p className="text-base font-normal text-slate-200">
          {t(item.description)}
        </p>
        <Chips id={item.id} tags={item.tags} maxChips={4} />
      </div>
    </li>
  );
}
