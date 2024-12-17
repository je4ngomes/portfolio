import Nav from "../layout/Nav";

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
  ];

  return (
    <header className="flex flex-col justify-start pt-24 pl-12 sticky top-0">
      <HeaderProfile
        name="Jean Gomes"
        role="Software Developer"
        description="I enjoy building things that live on the internet."
      />
      <Nav items={headerNavItems} />
    </header>
  );
}
