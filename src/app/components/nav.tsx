import { Link } from "@/i18n/routing"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { useTranslations } from "next-intl"
export default function Nav({classname} : {classname: string}) {
    const t = useTranslations("Nav")
    return <nav>
        <ul className={`list-none flex gap-6 text-main_gray ${classname}`}>
            <li>
                <Link href={"/"}>{t("home")}</Link>
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
                <ChevronDownIcon/>
            </li>
        </ul>
    </nav>
}