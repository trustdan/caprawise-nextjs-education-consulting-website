-- CreateTable
CREATE TABLE "ApplicationForm" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "package" TEXT NOT NULL,
    "programType" TEXT NOT NULL,
    "whyUSA" TEXT NOT NULL,
    "academicInterests" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "citizenship" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "gpa" TEXT NOT NULL,
    "extracurricular" TEXT NOT NULL,
    "englishProficiency" TEXT NOT NULL,
    "toeflIelts" TEXT NOT NULL,
    "gre" TEXT NOT NULL,

    CONSTRAINT "ApplicationForm_pkey" PRIMARY KEY ("id")
);
