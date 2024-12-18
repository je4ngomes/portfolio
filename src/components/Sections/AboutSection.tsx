import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="flex flex-col mt-8 space-y-8 w-full">
      <p className="leading-normal text-gray-400">{t("first_paragraph")}</p>
      <p className="leading-normal text-gray-400">{t("second_paragraph")}</p>
    </section>
  );
}
