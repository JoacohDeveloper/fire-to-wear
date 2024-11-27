import { cn } from "@/lib/utils";
import { UploadIcon } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import ImageLoaded from "./image-loaded";

export default function ImageUploader({
  handleFormChange,
  formData,
  setFormData,
}: {
  handleFormChange: any;
  formData: any;
  setFormData: any;
}) {
  const [isDrag, setIsDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dataTransfer, setDataTransfer] = useState<DataTransfer>(
    new DataTransfer()
  );

  const [imagesLoaded, setImageLoaded] = useState(showFiles() || []);

  const handleDataTransfer = (fileList: FileList) => {
    const files = [...fileList];
    files.forEach((file) => dataTransfer.items.add(file));
    setImageLoaded(showFiles());
    if (inputRef.current) {
      inputRef.current.files = dataTransfer.files;
      setFormData({ ...formData, "images[]": inputRef.current.files });
    }
  };

  function handleDelete(index: number) {
    dataTransfer.items.remove(index);
    setImageLoaded(showFiles());
    if (inputRef.current) {
      inputRef.current.files = dataTransfer.files;
      setFormData({ ...formData, "images[]": inputRef.current.files });
    }
  }
  const handleDrop = (e: any) => {
    e.preventDefault();
    handleDataTransfer(e?.dataTransfer?.files);

    setIsDrag(false);
  };

  function showFiles() {
    const files = [...dataTransfer.files];

    const components = files.map((file) => {
      const size = Math.floor(file.size / 1000);
      const fileName = file.name;
      const url = URL.createObjectURL(file);
      const index = files.findIndex((file) => file.name == fileName);

      return (
        <ImageLoaded
          key={Math.random() * new Date().getTime()}
          url={url}
          title={fileName}
          size={size.toString()}
          handleDelete={handleDelete}
          index={index}
        />
      );
    });

    return components;
  }

  return (
    <div className="relative flex flex-col gap-6 overflow-hidden">
      <div>
        <div
          onClick={() => {
            inputRef.current?.click();
          }}
          onDrag={(e) => {
            e.preventDefault();
          }}
          onDrop={handleDrop}
          onDragLeave={() => {
            setIsDrag(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDrag(true);
          }}
          onDragEnd={() => {
            setIsDrag(false);
          }}
          className={`
             ${isDrag ? "border-main_gray" : "border-muted-foreground/25"}
            group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed  px-5 py-2.5 text-center transition hover:bg-muted/25",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         `}
        >
          <input
            onChange={(e) => {
              if (e.target.files) handleDataTransfer(e.target.files);
            }}
            type="file"
            name="images[]"
            multiple
            accept="jpg, jpeg, png, webp"
            className="absolute inset-0 invisible cursor-pointer -z-10"
            ref={inputRef}
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div className="rounded-full border border-dashed p-3">
              <UploadIcon
                className="size-7 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col gap-px">
              {isDrag ? (
                <p className="font-medium text-muted-foreground">
                  Drop the files here
                </p>
              ) : (
                <p className="font-medium text-muted-foreground">
                  Drag & drop files here, or click to select files
                </p>
              )}
              {isDrag || (
                <p className="text-sm text-muted-foreground/70">
                  You can upload files 4 files {`(up to 4 MB each)`}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">{imagesLoaded}</div>
    </div>
  );
}
