"use client";

import Link from "next/link";
import { useState } from "react";

interface NavProps {
  items: {
    name: string;
    href: string;
  }[];
}

export default function Nav({ items }: NavProps) {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <nav className="flex flex-col mt-16 space-y-2 text-txt-secundary">
      {items.map((item, index) => (
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
