import { Button } from "@/components/ui/button";
import { Image } from "@nextui-org/react";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function ImageLoaded({
  url,
  title,
  size,
  handleDelete,
  index,
}: {
  url: string;
  title: string;
  size: string;
  handleDelete: any;
  index: number;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <div className="w-[48px] rounded-sm h-full flex items-center">
          <Image
            className="rounded-sm object-contain w-full h-full"
            src={url}
            width="640"
            height="480"
            alt="loaded product image"
          />
        </div>
        <div className="flex flex-col mt-2">
          <p className="font-bold text-main_gray">{title}</p>
          <p className="text-main_gray text-sm">{size} KB</p>
        </div>
      </div>

      <div className="flex h-full self-center">
        <Button
          className=""
          variant={"ghost"}
          onClick={() => handleDelete(index)}
        >
          <Cross1Icon />
        </Button>
      </div>
    </div>
  );
}
