import { verifyRecaptcha } from "@/app/utilities/VerifyCaptcha";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    // Get the form data and the token from the request body
    const { formData, token } = await request.json();
    if (formData && token) {
      const recaptchaVerificationResponse = await verifyRecaptcha(token);
      if (!recaptchaVerificationResponse.ok) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to verify recaptcha token",
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        const recaptchaVerificationResponseJSON = await recaptchaVerificationResponse.json();
        if (recaptchaVerificationResponseJSON.success) {
          // get the score field
          const score = recaptchaVerificationResponseJSON.score;
          // use the score to take action on the site
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
            return new NextResponse(
              JSON.stringify({ message: "Form submitted successfully" }),
              {
                status: 200,
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          }
        } else {
          // handle error codes
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
      }
    }
  }
}
