import Marquee from "react-fast-marquee";
import SkillItem from "./SkillItem";
import { skills } from "./Skill-utils";

export default function SkillSection() {
  return (
    <section className="flex flex-col w-[96%] self-center">
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
