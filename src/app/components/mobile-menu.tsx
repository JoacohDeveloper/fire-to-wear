"use client"
import Nav from "@/app/components/nav";
import { ChevronLeftIcon, HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function BrgMenu() {

    const [enabled, setEnabled] = useState(true)

    const t = useTranslations("BurgerMenu")
    const t2 = useTranslations("Legal")
    const t3 = useTranslations("Account")
    
    const handleMenu = () => {
        setEnabled(enabled => !enabled)        
    }

    return <>
         <HamburgerMenuIcon onClick={handleMenu} className="cursor-pointer w-[24px] h-[24px]"/>
         
         <div className={`fixed inset-0 bg-white ${enabled ? "hidden" : ""}`}>
            <div className="flex pl-7 my-8">
                <ChevronLeftIcon onClick={handleMenu} className="w-[24px] h-[24px]"/>
            </div>
            <div className="flex flex-col">
                <p className=" pl-10 font-bold text-2xl max-w-fit text-main_dark">{t("title")}</p>
                <Nav classname="pl-12 flex-col mt-10"/>
                <div className="flex w-full border-t border-secondary_gray mt-16">
                        <ul className="flex flex-col text-main_gray mt-10 gap-6 pl-10">
                                <li>
                                    <Link href="/">{t2("privacy")}</Link>
                                </li>
                                <li>
                                    <Link href="/">{t2("terms")}</Link>
                                </li>
                                <li>
                                    <Link href="/" className="flex items-center gap-2"><PersonIcon/> {t3("account")}</Link>
                                </li>
                        </ul>
                </div>
            </div>
         </div>
    </>
}   