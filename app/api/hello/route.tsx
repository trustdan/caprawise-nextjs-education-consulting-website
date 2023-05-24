import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(request: Request) {
  const allContactForms = await prisma.contactForm.findMany();

  return new NextResponse(
    JSON.stringify({
      message: "Form submitted successfully",
      result: allContactForms,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
