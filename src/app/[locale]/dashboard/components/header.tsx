import { Geostar_Fill } from "next/font/google";
import Nav from "./nav";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Hi from "./hi";
import BrgMenu from "@/app/components/mobile-menu";

export default function Header() {
  const t = useTranslations("Dashboard");
  return (
    <header className="flex max-sm:h-14 justify-between items-center flex-col py-3 gap-5 border-b ">
      <div className="px-7 h-full w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href={"/en/dashboard"}
            className={`uppercase  text-[1.3rem] text-main_gray text-center underline`}
          >
            {t("title")}
          </Link>
          |
          <Hi />
        </div>
        <div className="max-sm:hidden">
          <Nav classname="" />
        </div>
        <div className="sm:hidden">
          <BrgMenu
            Nav={<Nav classname="pl-12 flex-col mt-10" />}
            productSearch={false}
          />
        </div>
      </div>
    </header>
  );
}
