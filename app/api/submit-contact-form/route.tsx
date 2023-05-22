import { verifyRecaptcha } from "@/app/utilities/VerifyCaptcha";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// this is a workaround to avoid request.json() error with NextApiRequest
type OmittedRequest = Omit<Request, "body" | "headers" | "method" | "url">;
type PickedRequest = Pick<Request, "json">;
interface CustomNextApiRequest
  extends NextApiRequest,
    OmittedRequest,
    PickedRequest {}

export async function POST(request: CustomNextApiRequest) {
  if (request.method === "POST") {
    // Get the form data and the token from the request body
    const { formData, token } = await request.json();
    if (formData && token) {
      const recaptcha_verification_response = await verifyRecaptcha(token);
      if (!recaptcha_verification_response.ok) {
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
        const recaptcha_verification_response_json =
          await recaptcha_verification_response.json();
        console.log(
          "recaptcha_verification_response_json is ",
          recaptcha_verification_response_json
        );
        if (recaptcha_verification_response_json.success) {
          // get the score field
          const score = recaptcha_verification_response_json.score;
          // use the score to take action on your site
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
              errorCodes: recaptcha_verification_response_json["error-codes"],
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
