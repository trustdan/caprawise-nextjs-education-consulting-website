import { TrendingUpIcon } from "@heroicons/react/solid";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function sendEmailToUser(fullName: string, email: string) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  let emailWithoutSpaces;
  let capitalizedFirstName;
  try {
    const firstName = fullName.trim().split(" ")[0]; // Extract the first name
    capitalizedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    emailWithoutSpaces = email.replace(/\s/g, "");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to handle user's name and email");
  }

  const msg_to_user = {
    to: emailWithoutSpaces, // Change to your recipient
    from: "no-reply@heliosadmissions.com", // Change to your verified sender
    subject: "Contact Form Submission",
    text: `Merhaba ${capitalizedFirstName},\n\nMesajınızı aldık. En kısa sürede size geri dönüş yapacağız!\n\nSevgiler,\nHelios Admissions\n\nEnglish Translation:Hello ${capitalizedFirstName},\n\nWe have received your message/inquiry. We will get back to you as soon as possible!\n\nBest,\nHelios Admissions\n\n`,
    html: `<div style="border border-bottom:2px solid #FF0000; padding-bottom: 10px;">
      <p>Merhaba ${capitalizedFirstName},</p>
      <p style="margin-bottom: 10px;">Mesajınızı/talebinizi aldık. En kısa sürede size geri dönüş yapacağız!</p>
      <p style="margin-bottom: 10px;">Sevgiler,<br>Helios Admissions</p>
    </div>
    <div style="padding-top: 5px;">
      <p>Hello,</p>
      <p>We have received your message/inquiry. We will get back to you as soon as possible!</p>
      <p>Best,<br>Helios Admissions</p>
    </div>
    <br>`,
  };

  return sendEmail(msg_to_user, "user");
}

export async function sendEmailToHelios(
  fullName: string,
  email: string,
  phone: string,
  question: string
): Promise<boolean> {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  //send the user's form details to Helios Admissions team.

  const msg_to_helios_team = {
    to: "info@heliosadmissions.com",
    from: "no-reply@heliosadmissions.com",
    subject: `${fullName} - Helios Admissions İletişim Formu`,
    text: `Selamlar Helios Admissions Ekibi,\n\nYeni bir öğrenci iletişim formunu doldurdu. Kullanicinin form bilgileri aşagidaki gibidir;\n\nAdi: ${fullName}\n\nEmaili: ${email}\n\nTelefonu: ${phone}\n\nMesaji: ${question}\n\nBu formun doldurulmasiyla birlikte kullaniciya otomatik olarak bir email gönderildi ve aynı zamanda form veri tabanına da kaydedildi`,
    html:
      `<div>Selamlar Helios Admissions Ekibi, <br><br> Yeni bir öğrenci iletişim formunu doldurdu. Kullanicinin form bilgileri aşagidaki gibidir;<br><br> </div>` +
      `Adi: ${fullName} <br><br>` +
      `Emaili: ${email} <br><br>` +
      `Telefonu: ${phone} <br><br>` +
      `Mesaji: ${question} <br><br>` +
      `Bu formun doldurulmasiyla birlikte kullaniciya otomatik olarak bir email gönderildi ve aynı zamanda form veri tabanına da kaydedildi.</div>`,
  };

  return sendEmail(msg_to_helios_team, "helios");
}
async function sendEmail(
  msg: {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
  },
  to: "user" | "helios"
): Promise<boolean> {
  try {
    await sgMail.send(msg);
  } catch (error: any) {
    console.error(error);
    throw new Error(
      `Error sending email to ${to}! Error message: ${error.message}`
    );
  }
  return true;
}
