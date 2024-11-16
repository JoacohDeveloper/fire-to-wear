import {MagnifyingGlassIcon} from "@radix-ui/react-icons"

export default function Browser({ classname } : { classname: string }) {
    return <>
        <MagnifyingGlassIcon className={`w-[24px] h-[24px] min-w-[24px] min-h-[24px] ${classname}`} />
    </>
}