export async function verifyRecaptcha(token: string): Promise<Response> {
  const secret = process.env.RECAPTCHA_SECRET as string;
  const recaptcha_verification_response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    }
  );
  return recaptcha_verification_response;
}
