import {HamburgerMenuIcon} from "@radix-ui/react-icons"
import Nav from "./nav"
import BrgMenu from "./mobile-menu"
import {Geostar_Fill} from "next/font/google"
import Browser from "./browser"
import Cart from "./cart"

const gf = Geostar_Fill({
    weight: ["400"],
    subsets: ["latin"]
})
export default function Header() {
    return <header className="flex h-14 justify-between items-center">
            <div className="px-7 h-full w-full flex items-center justify-between">
                <div className="menu flex basis-full gap-6">
                    <div className="sm:hidden">
                        <BrgMenu/>
                    </div>
                    <div className="max-[640px]:hidden">
                        <Nav classname=""/>                    
                    </div>

                    {/* <div className="flex invisible w-[24px] h-[24px]"></div> */}
                </div>
                <h3 className={`${gf.className} uppercase font-bold text-[1.3rem] text-black text-center`}>firetowear</h3>
                <div className="flex gap-6 basis-full justify-end">
                        <Browser classname="cursor-pointer max-[450px]:hidden"/>
                        <Cart classname="cursor-pointer"/>
                </div>
            </div>
    </header>
}