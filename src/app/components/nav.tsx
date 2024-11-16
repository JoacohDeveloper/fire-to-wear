"use client";
import { Link } from "@/i18n/routing";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Nav({ classname }: { classname: string }) {
  const t = useTranslations("Nav");
  const pathname = usePathname()?.split("/");
  let pathnameLocation;

  pathnameLocation = pathname.length == 2 ? "/" : "";

  return (
    <nav>
      <ul
        className={`list-none flex gap-6 text-main_gray ${classname} header-nav `}
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
          <p>{t("accesories")}</p>
          <ChevronDownIcon />
        </li>
      </ul>
    </nav>
  );
}
