"use server";
// server actions - removing use server will throw an error
import prisma from "../lib/prisma";
export async function fetchContactForms() {
  return await prisma.contactForm.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
}

export async function fetchApplicationForms() {
  return await prisma.applicationForm.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
}
