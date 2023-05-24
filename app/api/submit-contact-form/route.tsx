import { verifyRecaptcha } from "@/app/utilities/VerifyCaptcha";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    // Get the form data and the token from the request body
    const { formData, token } = await request.json();
    if (formData && token) {
      try {
        const recaptchaVerificationResponse = await verifyRecaptcha(token);
        const recaptchaVerificationResponseJSON = await recaptchaVerificationResponse.json();

        if (recaptchaVerificationResponseJSON.success) {
          // Get the score field
          const score = recaptchaVerificationResponseJSON.score;

          if (score < 0.7) {
            return new NextResponse(
              JSON.stringify({
                message: "Low reCAPTCHA score, please try again",
              }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          } else {
            try {
              const newContactFormSubmission = await prisma.contactForm.create({
                data: {
                  full_name: formData.fullName,
                  email: formData.email,
                  phone: formData.phone,
                  message: formData.question,
                },
              });
              console.log(newContactFormSubmission);
              return new NextResponse(
                JSON.stringify({ message: "Form submitted successfully" }),
                {
                  status: 200,
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            } catch (error) {
              console.error(error);
              return new NextResponse(
                JSON.stringify({
                  message: "Error while saving the form to the database",
                }),
                {
                  status: 500,
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            }
          }
        } else {
          // Handle failed reCAPTCHA verification
          return new NextResponse(
            JSON.stringify({
              message: "reCAPTCHA verification failed",
              errorCodes: recaptchaVerificationResponseJSON["error-codes"],
            }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      } catch (error) {
        console.error(error);
        return new NextResponse(
          JSON.stringify({
            message: "Failed to verify reCAPTCHA token",
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    }
  }
}
