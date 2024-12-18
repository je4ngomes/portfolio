import { useTranslations } from "next-intl";
import Nav from "../Layout/Nav";

import HeaderProfile from "./HeaderProfile";

export default function Header() {
  const t = useTranslations("profile");

  const headerNavItems = [
    {
      name: "menu.about",
      href: "#about",
    },
    {
      name: "menu.skills",
      href: "#skills",
    },
    {
      name: "menu.experience",
      href: "#experience",
    },
    // {
    //   name: "menu.projects",
    //   href: "#projects",
    // },
  ];

  return (
    <header className="flex flex-col justify-start mt-24 xl:pl-12 xl:fixed xl:top-0 px-8 md:px-0">
      <HeaderProfile
        name={t("name")}
        role={t("role")}
        description={t("description")}
      />
      <Nav items={headerNavItems} />
    </header>
  );
}
