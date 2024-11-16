import ShopBag from "@/images/shop-bag.svg";
import Image from "next/image";

export default function Cart({ classname }: { classname: string }) {
  return (
    <>
      <Image
        className={`${classname} min-w-[24px] min-h-[24px]`}
        src={ShopBag.src}
        width={24}
        height={24}
        alt="Shopping Bag"
      />
    </>
  );
}
