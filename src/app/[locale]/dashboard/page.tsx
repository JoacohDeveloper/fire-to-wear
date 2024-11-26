import { useTranslations } from "next-intl";

export default function Dashboard() {
  const t = useTranslations("Dashboard");
  return <h4 className="pl-7 mt-14 text-main_gray">{t("title")}</h4>;
}
