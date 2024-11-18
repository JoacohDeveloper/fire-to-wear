"use client";
import { Link } from "@/i18n/routing";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import DropDown from "./dropdown";
import { useState } from "react";

export default function Nav({ classname }: { classname: string }) {
  const t = useTranslations("Nav");
  const t2 = useTranslations("NavAccesories");
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
          <Link
            className={pathnameLocation == "/" ? "selectedPage" : ""}
            href={"/"}
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link href={"/"}>{t("all-products")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("t-shirts")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("shirts")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("jumpers")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("pants")}</Link>
        </li>
        <li>
          <Link href={"/"}>{t("jackets")}</Link>
        </li>
        <li className="flex items-center gap-2">
          <DropDown
            title={t("accesories")}
            handleDropDown={handleDropDown}
            toggleDropDown={toggleDropDown}
            className="sm:flex-row max-sm:mt-2 max-sm:pl-3"
          >
            <li>
              <Link href={"/"}>{t2("belts")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t2("ties")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t2("jewellery")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t2("hats")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t2("gloves")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t2("scarves")}</Link>
            </li>
          </DropDown>
        </li>
      </ul>
    </nav>
  );
}
