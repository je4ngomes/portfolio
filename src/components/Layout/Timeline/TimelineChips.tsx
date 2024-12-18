"use client";

import Chip from "../Chip";
import { Tooltip } from "react-tooltip";

interface TimelineChipsProps {
  id?: string;
  tags: string[];
  maxChips?: number;
}

export default function TimelineChips({
  id,
  tags = [],
  maxChips,
}: TimelineChipsProps) {
  const chipsToDisplay = maxChips ? tags.slice(0, maxChips) : tags;
  const moreChips = maxChips ? tags.slice(maxChips) : [];
  const tooltipId = `tooltip-more-tags-${id}`;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {chipsToDisplay &&
        chipsToDisplay.map((tag, index) => <Chip key={index} label={tag} />)}
      {moreChips.length > 0 && (
        <>
          <div className="cursor-default" data-tooltip-id={tooltipId}>
            <Chip
              label={`+${moreChips.length}`}
              className="bg-[#352032] font-medium"
            />
          </div>
          <Tooltip id={tooltipId}>
            <div className="grid gap-2">
              {moreChips.map((tag, index) => (
                <p key={index} className="text-slate-200">
                  {tag}
                </p>
              ))}
            </div>
          </Tooltip>
        </>
      )}
    </div>
  );
}
