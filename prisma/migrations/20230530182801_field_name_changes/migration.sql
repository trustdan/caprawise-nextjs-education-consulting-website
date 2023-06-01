-- AlterTable
ALTER TABLE "ApplicationForm" ADD COLUMN     "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "ContactForm" RENAME COLUMN "full_name" TO "fullName";
ALTER TABLE "ContactForm" RENAME COLUMN "message" TO "question";

