import { useTranslations } from "next-intl";

export default function Hi() {
  const t = useTranslations("Dashboard");
  return (
    <p className="text-main_gray">
      {t("hi")} <span className="text-main_dark">Joacohj</span>
    </p>
  );
}
