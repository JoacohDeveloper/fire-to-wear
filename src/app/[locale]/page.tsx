import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({ params: { locale } }: any) {
  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("test")}</h1>
    </div>
  );
}
