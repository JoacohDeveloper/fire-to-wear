import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image } from "@nextui-org/react";

import * as helpers from "@/helpers";

export default function ProductPreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="fixed right-4 bottom-6 z-10">
          Open Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-main_gray">Product Preview</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-center flex-col items-center gap-3">
            <div className="w-1/2 h-auto cursor-pointer">
              <Image
                src="https://res.cloudinary.com/dpecnnwh8/image/upload/v1732487738/bf9weyzxmrzgjkmu7ewa.webp"
                width="500"
                height="500"
                alt="Black T-shirt"
              />
            </div>
            <div className="w-1/2 cursor-pointer">
              <p className="text-main_gray">Plain Classic Fit T-Shirt</p>
              <p>
                {helpers.formatCurrency(
                  { currency: "da-US", format: "USD" },
                  10.99
                )}
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
