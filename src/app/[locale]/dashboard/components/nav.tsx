"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav({ classname }: { classname: string }) {
  const t = useTranslations("DashboardNav");
  const pathname = usePathname()?.split("/");
  let pathnameLocation;
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const handleDropDown = () => {
    setToggleDropDown((toggleDropDown) => !toggleDropDown);
  };
  pathnameLocation = pathname.length == 2 ? "/" : "";

  return (
    <nav>
      <ul
        className={`list-none flex gap-4 text-main_gray ${classname} header-nav `}
      >
        <li>
          <Link href={"/dashboard/products/create"}>{t("publish")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("manage")}</Link>
        </li>
      </ul>
    </nav>
  );
}
