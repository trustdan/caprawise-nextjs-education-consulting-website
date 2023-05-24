import { NextRequest, NextResponse } from "next/server";
import { sendEmailToHelios, sendEmailToUser } from "@/app/utilities/SendEmail";
export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    const data = await request.json();
    const { fullName, email, phone, question } = data.formData;
    if (!data) {
      return new NextResponse(
        JSON.stringify({ message: "No data provided!" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else if (!fullName || !email || !phone || !question) {
      return new NextResponse(
        JSON.stringify({ message: "Missing name, email, phone, or question!" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        return new NextResponse(JSON.stringify({ message: "Invalid email!" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    }

    //create an abort controller to cancel the user confirmation email if needed
    const controller = new AbortController();
    const signal = controller.signal;

    //call the sendEmailToHelios and sendEmailToUser functions and pass the signal to the latter
    const heliosEmailPromise = await sendEmailToHelios(
      fullName,
      email,
      phone,
      question
    );
    const userConfirmationEmailPromise = await sendEmailToUser(
      fullName,
      email,
      signal
    );

    //use try-catch block to handle errors
    try {
      //use Promise.allSettled to wait for both promises to resolve or reject
      const results = await Promise.allSettled([
        heliosEmailPromise,
        userConfirmationEmailPromise,
      ]);

      //check the status of each promise
      const heliosEmailStatus = results[0].status;
      const userConfirmationEmailStatus = results[1].status;

      //if both promises are fulfilled, return 200 status code and success message
      if (
        heliosEmailStatus === "fulfilled" &&
        userConfirmationEmailStatus === "fulfilled"
      ) {
        return new NextResponse(
          JSON.stringify({ message: "Email(s) sent successfully!" }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      //if one or both promises are rejected, return 500 status code and error message
      let errorMessage = "";
      if (heliosEmailStatus === "rejected") {
        //cancel the user confirmation email if it is still pending
        controller.abort();
        errorMessage += `Failed to send email to helios! Reason: ${results[0].reason}\n`;
      }
      if (userConfirmationEmailStatus === "rejected") {
        errorMessage += `Failed to send email to user! Reason: ${results[1].reason}\n`;
      }
      return new NextResponse(JSON.stringify({ message: errorMessage }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      //handle any other unexpected errors
      console.error(error);
      return new NextResponse(JSON.stringify({ message: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
