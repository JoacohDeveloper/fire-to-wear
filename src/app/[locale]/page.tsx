import { useTranslations } from "next-intl";
import { use } from "react";
// import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
export default function HomePage({
  params,
}: {
  params: Promise<{ locale: any }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <div>
      <h4 className="pl-7 mt-14 text-main_gray">{t("feature-prods")}</h4>
    </div>
  );
}
