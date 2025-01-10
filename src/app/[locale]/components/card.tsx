import { Decimal } from "@prisma/client/runtime/library";
import Image from "next/image";

export default function Card({
  url,
  uuid,
  price,
  title,
}: {
  url: string | null;
  uuid: string | null;
  price: Decimal | null;
  title: string | null;
}) {
  return (
    <div className="w-52 max-[620px]:w-[70%] max-[375px]:w-[80%] flex flex-col h-[20rem] cursor-pointer hover:scale-[1.014] transition-all">
      <div className="rounded-xl bg-gray-300 w-full max-h-[20rem] min-h-full object-cover">
        {url ? (
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={url ?? ""}
            width={640}
            height={480}
            alt={title ?? ""}
          />
        ) : (
          ""
        )}
      </div>
      <p className="text-gray-400 text-lg">{title ?? ""}</p>
      <p className="text-lg">
        {price?.toNumber().toLocaleString("en-US", {
          currency: "USD",
          style: "currency",
        })}
      </p>
    </div>
  );
}
