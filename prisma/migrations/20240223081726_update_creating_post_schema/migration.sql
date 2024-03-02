-- AlterTable
ALTER TABLE "FoundItemPost" ADD COLUMN     "answered" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "LostItemPost" ADD COLUMN     "answered" BOOLEAN NOT NULL DEFAULT false;
