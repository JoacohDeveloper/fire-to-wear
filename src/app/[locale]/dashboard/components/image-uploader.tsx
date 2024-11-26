import { cn } from "@/lib/utils";
import { UploadIcon } from "lucide-react";

export default function ImageUploader() {
  return (
    <div className="relative flex flex-col gap-6 overflow-hidden">
      <div>
        <div
          className={cn(
            "group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          <div />

          <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div className="rounded-full border border-dashed p-3">
              <UploadIcon
                className="size-7 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col gap-px">
              <p className="font-medium text-muted-foreground">
                Drag & drop files here, or click to select files
              </p>
              <p className="text-sm text-muted-foreground/70">
                You can upload files 4 files {`(up to 4 MB each)`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
