"use server"
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import {createUser} from actions;
export default async function HomePage({ params: { locale } }: any) {
  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="text-3xl font-bold mt-14">{t("test")}</h1>
      <form action={createUser}></form>
    </div>
  );
}
