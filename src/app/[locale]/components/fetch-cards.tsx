"use server";
import prisma from "@/config/database";
import Card from "./card";
export default async function FetchCards() {
  const products = await prisma.product.findMany();
  const images = await prisma.productImage.findMany();

  const productComplete = products.map((product) => {
    const img = images.filter((image) => image.productUuid == product.uuid);
    return {
      ...product,
      img,
    };
  });
  prisma.$disconnect();
  return (
    productComplete &&
    productComplete.map((product) => {
      return (
        <Card
          price={product.price}
          url={product?.img[0]?.url}
          uuid={product?.uuid}
          title={product?.title}
          key={product?.uuid}
        />
      );
    })
  );
}
