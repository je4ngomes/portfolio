import Marquee from "react-fast-marquee";
import SkillItem from "./SkillSectionItem";
import { skills } from "./SkillSection-utils";

export default function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col w-[96%] self-center">
      <Marquee gradient={false} speed={40} play={true}>
        <div className="flex flex-row">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} isEven={index % 2 === 0} />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
