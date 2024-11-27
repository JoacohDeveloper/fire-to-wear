"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CategorySearch from "./category-search";
import { Textarea } from "@nextui-org/input";
import ProductPreview from "./product-preview";
import ImageUploader from "./image-uploader";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    "images[]": [],
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
        />
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
        />
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
        />
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
      </div>
    </form>
  );
}
