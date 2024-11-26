/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Article";

-- CreateTable
CREATE TABLE "Product" (
    "uuid" TEXT NOT NULL,
    "title" TEXT,
    "price" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "productUuid" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("productUuid","url")
);

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productUuid_fkey" FOREIGN KEY ("productUuid") REFERENCES "Product"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
