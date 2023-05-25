import { prisma } from "@/app/lib/prisma";
export async function saveContactFormToDb(formData: {
  fullName: string;
  email: string;
  phone: string;
  question: string;
}): Promise<boolean> {
  try {
    const contactForm = await prisma.contactForm.create({
      data: {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.question,
      },
    });
    console.log(contactForm);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to save contact form to database");
  }
  return true;
}
