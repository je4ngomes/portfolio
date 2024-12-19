"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

interface NavProps {
  items: {
    name: string;
    href: string;
  }[];
}

export default function Nav({ items }: NavProps) {
  const t = useTranslations();

  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <nav className="hidden xl:flex flex-col mt-24 space-y-2 text-gray-400 w-fit">
      {items.map((item, index) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-md ${
            activeItem === index
              ? "text-slate-200 font-medium"
              : "text-gray-400 hover:text-slate-200"
          } transition duration-150 ease-out hover:ease-in`}
          onClick={() => setActiveItem(index)}
        >
          {t(item.name)}
        </Link>
      ))}
    </nav>
  );
}
