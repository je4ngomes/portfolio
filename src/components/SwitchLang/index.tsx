import { useLocale } from "next-intl";
import Link from "next/link";

export default function SwitchLang() {
  const locale = useLocale();
  const languages = [
    {
      name: "English (US)",
      code: "en",
    },
    {
      name: "Português (BR)",
      code: "pt",
    },
  ];

  return (
    <div className="flex flex-row pl-4 space-x-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}`}
          className={
            locale === lang.code ? "text-[#DA68AB]" : "hover:text-slate-200"
          }
        >
          {lang.name}
        </Link>
      ))}
    </div>
  );
}
