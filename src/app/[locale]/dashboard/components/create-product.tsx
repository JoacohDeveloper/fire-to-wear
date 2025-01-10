"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CategorySearch from "./category-search";
import { Textarea } from "@nextui-org/input";
import ProductPreview from "./product-preview";
import ImageUploader from "./image-uploader";
import { Button } from "@/components/ui/button";
import { useActionState, useState } from "react";
import { useTranslations } from "next-intl";
import * as actions from "@/actions";
import { z } from "zod";

export const createProductSchema = (t: any) => {
  return z.object({
    title: z.string().min(5, { message: t("title") }),
    category: z.string().min(1, { message: t("category") }),
    price: z
      .number({ message: t("price") })
      .positive({ message: t("price") })
      .safe({ message: t("price") }),
    description: z.string().min(8, { message: t("description") }),
  });
};

export default function CreateProductForm() {
  const t = useTranslations("Product-Validation");
  const [formState, action] = useActionState(actions.PostProduct, {
    errors: {},
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    "images[]": [],
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    if (name == "price") {
      setFormData({
        ...formData,
        [name]: value,
        price: Number(value),
      });
    } else
      setFormData({
        ...formData,
        [name]: value,
      });
  };
  const handleSubmit = (e: any) => {
    const ProductSchema = createProductSchema(t);
    const result = ProductSchema.safeParse(formData);

    if (result.error) {
      e.preventDefault();
      const errors = result.error?.flatten();
      setFormErrors({
        title: errors.fieldErrors.title?.[0] || "",
        price: errors.fieldErrors.price?.[0] || "",
        description: errors.fieldErrors.description?.[0] || "",
        category: errors.fieldErrors.category?.[0] || "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action={action}
      className="flex flex-col gap-5 w-fit items-center max-sm:bg-transparent bg-gray-100 max-sm:px-5 px-12 py-8 rounded-md max-sm:border-none border-1 border-gray-300"
    >
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-main_gray" htmlFor="title">
          Title
        </Label>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          name="title"
          onChange={handleFormChange}
          className={`${formErrors.title ? "border-red-500" : ""}`}
        />
        {formErrors.title && (
          <p className="text-sm text-red-500 mt-1">{formErrors.title}</p>
        )}
        <p className="pl-2 text-main_gray text-sm">
          This is the title of the product.
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-main_gray" htmlFor="category">
          Category
        </Label>
        <CategorySearch
          htmlFor={"category"}
          handleFormChange={handleFormChange}
          setFormData={setFormData}
          formData={formData}
        />
        {formErrors.category && (
          <p className="text-sm text-red-500 mt-1">{formErrors.category}</p>
        )}
        <p className="pl-2 text-main_gray text-sm">
          This is the category of the product.
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-main_gray" htmlFor="price">
          Price
        </Label>
        <Input
          onChange={handleFormChange}
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          id="price"
          name="price"
          placeholder="Price"
          className={`${formErrors.price ? "border-red-500" : ""}`}
        />
        {formErrors.price && (
          <p className="text-sm text-red-500 mt-1">{formErrors.price}</p>
        )}
        <p className="pl-2 text-main_gray text-sm">
          This is the price of the product.
        </p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-main_gray" htmlFor="description">
          Description
        </Label>
        <Textarea
          onChange={handleFormChange}
          name="description"
          id="description"
          placeholder="Description"
          maxLength={255}
          className={`${
            formErrors.description ? "border-red-500 border-1 rounded-xl" : ""
          }`}
        />
        {formErrors.description && (
          <p className="text-sm text-red-500 mt-1">{formErrors.description}</p>
        )}
        <p className="pl-2 text-main_gray text-sm">
          This is the description of the product.
        </p>
      </div>
      <ProductPreview formData={formData} />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className="text-main_gray" htmlFor="description">
          Upload images
        </Label>
        <ImageUploader
          handleFormChange={handleFormChange}
          formData={formData}
          setFormData={setFormData}
        />
        {/* <p className="pl-2 text-main_gray text-sm">
          Upload the images that will describe the product.
        </p> */}
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
        <Button variant="default">
          <p className="text-white">Upload Product</p>
        </Button>
        {formState.errors._form ?? (
          <p className="text-sm text-red-500 mt-1">{formState.errors._form}</p>
        )}
      </div>
    </form>
  );
}
