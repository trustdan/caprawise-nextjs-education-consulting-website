import { prisma } from "@/app/lib/prisma";
import { ApplicationFormData, ContactFormData } from "../lib/zod";

export async function saveFormToDb(
  formData: ApplicationFormData | ContactFormData,
  formType: "application" | "contact"
): Promise<boolean> {
  try {
    let data;
    if (formType === "application" && "package" in formData) {
      // TypeScript knows that formData is ApplicationFormData here
      data = {
        package: formData.package as string,
        programType: formData.programType,
        whyUSA: formData.whyUSA,
        academicInterests: formData.academicInterests,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        citizenship: formData.citizenship,
        university: formData.university,
        major: formData.major,
        gpa: formData.gpa,
        extracurricular: formData.extracurricular,
        englishProficiency: formData.englishProficiency,
        toeflIelts: formData.toeflIelts,
        gre: formData.gre,
      };
      const form = await prisma.applicationForm.create({
        data,
      });
      console.log(form);
    } else if (formType === "contact" && "question" in formData) {
      data = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        question: formData.question,
      };
      const form = await prisma.contactForm.create({
        data,
      });
      console.log(form);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error saving form to database");
  }
  return true;
}
