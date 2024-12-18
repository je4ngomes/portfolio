import Link from "next/link";
import Icon, { IconName } from "../Layout/Icon";

export default function DirectMedia() {
  const socialMedia = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jean-de-jesus-640304133/",
      iconName: "linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/je4ngomes",
      iconName: "github",
    },
  ];

  return (
    <div className="flex flex-row justify-start pl-12 space-x-4 fixed bottom-[10%]">
      {socialMedia.map((media, index) => (
        <Link key={index} href={media.href} target="_blank">
          <Icon
            iconName={media.iconName as IconName}
            className="text-2xl text-slate-500 hover:text-slate-200 transition duration-200 ease-in-out"
          />
        </Link>
      ))}
    </div>
  );
}
