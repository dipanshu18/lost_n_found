-- CreateEnum
CREATE TYPE "ResponseStatus" AS ENUM ('PENDING', 'REJECTED', 'APPROVED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LostItemPost" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lostLocation" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "verificationQuestion" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "LostItemPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinderResponse" (
    "id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "status" "ResponseStatus" NOT NULL DEFAULT 'PENDING',
    "finderId" TEXT NOT NULL,
    "lostItemPostId" TEXT NOT NULL,

    CONSTRAINT "FinderResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoundItemPost" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lostLocation" TEXT NOT NULL,
    "verificationQuestion" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "finderId" TEXT NOT NULL,

    CONSTRAINT "FoundItemPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerResponse" (
    "id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "status" "ResponseStatus" NOT NULL DEFAULT 'PENDING',
    "ownerId" TEXT NOT NULL,
    "foundItemPostId" TEXT NOT NULL,

    CONSTRAINT "OwnerResponse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "LostItemPost" ADD CONSTRAINT "LostItemPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinderResponse" ADD CONSTRAINT "FinderResponse_finderId_fkey" FOREIGN KEY ("finderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinderResponse" ADD CONSTRAINT "FinderResponse_lostItemPostId_fkey" FOREIGN KEY ("lostItemPostId") REFERENCES "LostItemPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoundItemPost" ADD CONSTRAINT "FoundItemPost_finderId_fkey" FOREIGN KEY ("finderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerResponse" ADD CONSTRAINT "OwnerResponse_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerResponse" ADD CONSTRAINT "OwnerResponse_foundItemPostId_fkey" FOREIGN KEY ("foundItemPostId") REFERENCES "FoundItemPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
