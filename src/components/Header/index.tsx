import Nav from "../Layout/Nav";

import HeaderProfile from "./HeaderProfile";

export default function Header() {
  const headerNavItems = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
  ];

  return (
    <header className="flex flex-col justify-start mt-24 pl-12 fixed top-0">
      <HeaderProfile
        name="Jean De Jesus"
        role="Software Developer"
        description="I enjoy building things that live on the internet, creating scalable web solutions that drive impact and innovation."
      />
      <Nav items={headerNavItems} />
    </header>
  );
}
