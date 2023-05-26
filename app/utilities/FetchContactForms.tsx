"use server";
import prisma from "../lib/prisma";

export async function fetchContactForms() {
  return await prisma.contactForm.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
}
