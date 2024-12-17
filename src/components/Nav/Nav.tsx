"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
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

export default function Nav() {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <nav className="flex flex-col mt-16 space-y-2 text-txt-secundary">
      {navItems.map((item, index) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${
            activeItem === index
              ? "text-txt-primary font-medium"
              : "text-txt-secundary hover:text-txt-primary"
          }`}
          onClick={() => setActiveItem(index)}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
