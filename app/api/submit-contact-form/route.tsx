import { verifyRecaptcha } from "@/app/utilities/VerifyCaptcha";
import { NextRequest, NextResponse } from "next/server";
import { saveContactFormToDb } from "@/app/utilities/SaveContactFormToDb";
import { sendEmailToHelios, sendEmailToUser } from "@/app/utilities/SendEmail";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    // Get the form data and the token from the request body
    const { formData, token } = await request.json();
    if (formData && token) {
      // 1.verify captcha
      const isCaptchaValid = await verifyRecaptcha(token);
      console.log("captcha is ", isCaptchaValid);
      if (!isCaptchaValid) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to verify captcha",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      // 2. save form data to db
      const isFormSaved = await saveContactFormToDb(formData);
      console.log("Form saved?: ", isFormSaved);
      if (!isFormSaved) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to save form data to database",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      // 3.a. send form data email to admin b. send "form received email" to the user
      // 3a
      const isEmailSentToAdmin = await sendEmailToHelios(
        formData.fullName,
        formData.email,
        formData.phone,
        formData.question
      );
      if (!isEmailSentToAdmin) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to send email to admin",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      //3b

      const isEmailSentToUser = await sendEmailToUser(
        formData.fullName,
        formData.email
      );
      if (!isEmailSentToUser) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to send email to user",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      return new NextResponse(
        JSON.stringify({
          message: "Form submitted successfully",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }
}
