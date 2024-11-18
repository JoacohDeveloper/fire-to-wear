import { PersonIcon } from "@radix-ui/react-icons";

export default function Account({ className }: { className: string }) {
  return (
    <>
      <PersonIcon
        className={`${className} w-[24px] h-[24px] min-h-[24px] min-w-[24px]`}
      />
    </>
  );
}
