-- CreateTable
CREATE TABLE "Article" (
    "uuid" TEXT NOT NULL,
    "title" TEXT,
    "price" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("uuid")
);
