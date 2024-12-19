import { useTranslations } from "next-intl";
import SwitchLang from "../SwitchLang";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="flex self-start mt-24 mb-8 text-gray-400 text-sm">
      <p>
        {t("footer.copyright", {
          year: new Date().getFullYear(),
        })}
      </p>
      <SwitchLang />
    </footer>
  );
}
