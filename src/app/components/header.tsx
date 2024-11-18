import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Nav from "./nav";
import BrgMenu from "./mobile-menu";
import { Geostar_Fill } from "next/font/google";
import Browser from "./browser";
import Cart from "./cart";
import Account from "./account";

const gf = Geostar_Fill({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Header() {
  return (
    <header className="flex max-sm:h-14 justify-between items-center flex-col py-3 gap-5">
      <div className="px-7 h-full w-full flex items-center justify-between">
        <div className="max-sm:hidden">
          <Browser classname="cursor-pointer" />
        </div>
        <div className="menu flex basis-full gap-6">
          <div className="sm:hidden">
            <BrgMenu />
          </div>
        </div>
        <h3
          className={`${gf.className} uppercase font-bold text-[1.3rem] text-black text-center`}
        >
          firetowear
        </h3>
        <div className="flex gap-6 basis-full justify-end">
          <div className="max-[450px]:hidden">
            <div className="sm:hidden">
              <Browser classname="cursor-pointer " />
            </div>
            <div className="max-sm:hidden">
              <Account className="cursor-pointer" />
            </div>
          </div>
          <Cart classname="cursor-pointer" />
        </div>
      </div>
      <div className="max-[640px]:hidden">
        <Nav classname="px-8 flex-wrap justify-center" />
      </div>
    </header>
  );
}
