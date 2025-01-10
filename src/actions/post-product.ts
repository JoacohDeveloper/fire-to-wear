"use server";
import { v2 } from "cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/config/database";

interface PostProductFormState {
  errors: {
    _form?: string[];
  };
}

v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function PostProduct(
  formState: PostProductFormState,
  formData: FormData
): Promise<PostProductFormState> {
  const product = {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    price: formData.get("price") as string,
    description: formData.get("description") as string,
    images: formData.get("images[]"),
  };

  const newProduct = await prisma.product.create({
    data: {
      title: product.title,
      price: product.price,
    },
  });

  if (newProduct.uuid) {
    const files = formData.getAll("images[]");

    const imageUploadPromises = files.map(async (file) => {
      const data = await uploadFile(file as File);

      return prisma.productImage.create({
        data: {
          productUuid: newProduct.uuid,
          url: data.url,
          alt: product.description,
        },
      });
    });

    const productImages = await Promise.all(imageUploadPromises);
    if (productImages.length == 0)
      return {
        errors: {
          _form: ["Error al subir datos"],
        },
      };
  }

  revalidatePath("/");
  redirect("/dashboard");
}

async function uploadFile(file: File) {
  try {
    // Convierte el archivo en un stream o buffer si es necesario
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "firetowear_preset");
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al subir el archivo:", error);
    throw error;
  }
}
