import { useTranslations } from "next-intl";
import { use } from "react";
// import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Header from "../components/header";
import FetchCards from "./components/fetch-cards";
export default function HomePage({
  params,
}: {
  params: Promise<{ locale: any }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <>
      <Header />
      <h4 className="pl-7 mt-14 mb-8 text-main_gray">{t("feature-prods")}</h4>
      <div className="max-[620px]:px-0 flex gap-20 justify-center flex-wrap w-full px-12 max-[620px]:flex-col max-[620px]:items-center">
        <FetchCards />
      </div>
    </>
  );
}
