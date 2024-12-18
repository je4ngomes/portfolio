"use client";

import Icon from "@/components/layout/Icon";
import { Skill } from "./types/Skill";
import { Tooltip } from "react-tooltip";

interface SkillItemProps {
  isEven: boolean;
  skill: Skill;
}

export default function SkillItem({ isEven, skill }: SkillItemProps) {
  return (
    <>
      <div
        className={`
        flex 
        items-center 
        justify-center 
        rounded-lg 
        w-12 h-12 
        bg-slate-200
        ${isEven ? "mt-16" : "mt-0"}
      `}
        data-tooltip-id={`tooltip-${skill.label}`}
      >
        <Icon
          iconName={skill.iconName}
          style={{
            color: skill.color,
          }}
          className={`text-4xl`}
        />
      </div>
      <Tooltip id={`tooltip-${skill.label}`}>{skill.label}</Tooltip>
    </>
  );
}
