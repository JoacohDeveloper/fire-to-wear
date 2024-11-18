"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function DropDown({
  children,
  title,
  handleDropDown,
  toggleDropDown,
  className,
}: {
  children: React.ReactNode;
  title: string;
  handleDropDown: any;
  toggleDropDown: boolean;
  className: string;
}) {
  return (
    <div onClick={handleDropDown} className="cursor-pointer relative">
      <div className="flex items-center justify-center gap-1 hover:text-main_dark">
        <p className="pl-2">{title}</p>
        <ChevronDownIcon
          className={`${
            toggleDropDown ? "rotate-180" : ""
          } transition-transform`}
        />
      </div>

      <ul
        className={`${
          toggleDropDown ? "opacity-100" : "invisible opacity-0"
        } ${className} transition-opacity flex flex-col gap-2 md:absolute right-0`}
      >
        {children}
      </ul>
    </div>
  );
}
