"use client";
import Nav from "@/app/components/nav";
import {
  ChevronLeftIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Browser from "./browser";
export default function BrgMenu() {
  const [enabled, setEnabled] = useState(true);
  const handleMenu = () => {
    setEnabled((enabled) => !enabled);
  };

  const t = useTranslations("BurgerMenu");
  const t2 = useTranslations("Legal");
  const t3 = useTranslations("Account");

  return (
    <>
      <HamburgerMenuIcon
        onClick={handleMenu}
        className="cursor-pointer w-[24px] h-[24px]"
      />

      <div
        className={`fixed min-sm:hidden burger-menu overflow-y-auto pb-10 inset-0 bg-white ${
          enabled
            ? "burger-menu-disabled"
            : "burger-menu-enabled w-full min-[500px]:w-[70%]"
        }`}
      >
        <div className="flex pl-7 my-8">
          <ChevronLeftIcon
            onClick={handleMenu}
            className=" w-[24px] cursor-pointer h-[24px]"
          />
        </div>
        <div className="flex flex-col ">
          <div className="px-10 flex gap-8 justify-between flex-wrap">
            <p className="font-bold text-2xl max-w-fit text-main_dark">
              {t("title")}
            </p>
            <div className="cursor-pointer min-[500px]:hidden flex items-center justify-between ">
              <Browser classname="" />
              <p className="text-main_gray">Search a product</p>
            </div>
          </div>

          <Nav classname="pl-12 flex-col mt-10" />
          <div className="flex w-full border-t border-secondary_gray mt-16">
            <ul className="flex flex-col text-main_gray mt-10 gap-6 pl-10">
              <li>
                <Link href="/">{t2("privacy")}</Link>
              </li>
              <li>
                <Link href="/">{t2("terms")}</Link>
              </li>
              <li>
                <Link href="/" className="flex items-center gap-2">
                  <PersonIcon /> {t3("account")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
